import fs from 'node:fs';
import path from 'node:path';
import {runJson} from './pospal-runtime.mjs';

// Invoke an installed CLI directly; never download a package once per page.
const args=process.argv.slice(2);
const option=(name,fallback)=>{const i=args.indexOf(name);return i<0?fallback:args[i+1];};
const manifest=option('--manifest','outputs/pospal-audit/manifest.json');
const output=option('--output','outputs/pospal-audit/pages.jsonl');
const session=option('--session','pospal-audit');
const limit=Number(option('--limit','10000'));
const version=Number(option('--probe-version','0'));
const template=fs.readFileSync(new URL('./pospal-probe-page.js',import.meta.url),'utf8');
const targets=JSON.parse(fs.readFileSync(manifest,'utf8').replace(/^\uFEFF/,''));
fs.mkdirSync(path.dirname(output),{recursive:true});
const fingerprint=t=>JSON.stringify([t.key||t.url,t.expectedStoreId||null,t.actions||[]]);
const done=new Set(fs.existsSync(output)?fs.readFileSync(output,'utf8').split(/\r?\n/).filter(Boolean).map(s=>JSON.parse(s)).filter(x=>x.status==='page-read'&&(x.probeVersion||0)>=version).map(x=>fingerprint(x.target)):[]);
let completed=0;
let consecutiveErrors=0;
for(const target of targets){
 if(done.has(fingerprint(target)))continue;
 if(completed>=limit)break;
 // A literal routing placeholder observed in a real menu may be resolved by the server.
 // Navigate to that observed link; never invent a replacement host or token.
 const record=await runJson(session,template.replace('__TARGET__',JSON.stringify(target)));
 if(!record.target)record.target=target;
 fs.appendFileSync(output,JSON.stringify(record)+'\n');
 completed++;
 if(record.status==='page-read')done.add(fingerprint(target));
 console.log(`${completed} ${record.status} ${target.module}/${target.name} ${record.elapsedMs??''}ms ${record.frames?.reduce((n,f)=>n+f.controls.length,0)??0} controls`);
 consecutiveErrors=/(?:^|-)error$/.test(record.status)?consecutiveErrors+1:0;
 if(consecutiveErrors>=2){console.log('Stopped after two consecutive action errors; inspect current UI before continuing.');break;}
 if(record.status==='login-required'||record.status.startsWith('transport-'))break;
}
