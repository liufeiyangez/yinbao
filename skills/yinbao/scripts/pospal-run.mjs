import fs from 'node:fs';
import {runJson} from './pospal-runtime.mjs';

const args=process.argv.slice(2);
const value=(key,fallback)=>{const i=args.indexOf(key);return i<0?fallback:args[i+1];};
if(args.includes('--help')){
 console.log('node pospal-run.mjs --session NAME --store ID --begin YYYY-MM-DD --end YYYY-MM-DD [--verify] [--output FILE]');
 process.exit(0);
}
const query={storeId:value('--store'),begin:value('--begin'),end:value('--end'),replay:args.includes('--verify')};
const session=value('--session');
if(!session||!query.storeId||!query.begin||!query.end)throw new Error('Require --session, --store, --begin and --end; no implicit account/date defaults.');
const template=fs.readFileSync(new URL('./pospal-query-tickets.js',import.meta.url),'utf8');
if(template.split('__QUERY__').length!==2)throw new Error('Expected exactly one query placeholder');
const result=await runJson(session,template.replace('__QUERY__',JSON.stringify(query)));
if(result.error){console.error(JSON.stringify(result));process.exitCode=1;}
else {
 const output=value('--output');if(output)fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');
 console.log(JSON.stringify(result));
}
