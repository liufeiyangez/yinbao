import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {spawn} from 'node:child_process';

export function resolveCli(){
 if(process.env.POSPAL_CLI_PATH)return process.env.POSPAL_CLI_PATH;
 const cache=path.join(os.homedir(),'AppData','Local','npm-cache','_npx');
 if(fs.existsSync(cache))for(const entry of fs.readdirSync(cache)){
  const file=path.join(cache,entry,'node_modules','playwright-core','lib','tools','cli-client','cli.js');
  if(fs.existsSync(file))return file;
 }
 throw new Error('Set POSPAL_CLI_PATH to the installed playwright-cli JS entrypoint.');
}
export function runJson(session,code){return new Promise(resolve=>{
 const child=spawn(process.execPath,[resolveCli(),`-s=${session}`,'run-code',code,'--raw'],{windowsHide:true,stdio:['ignore','pipe','pipe']});
 let stdout='',stderr='';child.stdout.on('data',b=>stdout+=b);child.stderr.on('data',b=>stderr+=b);
 const timer=setTimeout(()=>{child.kill();resolve({status:'transport-timeout',error:'CLI did not respond within 30 seconds'});},30000);
 child.on('error',error=>{clearTimeout(timer);resolve({status:'transport-error',error:error.message});});
 child.on('close',code=>{clearTimeout(timer);try{resolve(JSON.parse(stdout.trim()));}catch{resolve({status:code!==0&&stdout.includes('### Error')?'execution-error':'transport-error',error:(stderr||stdout).replace(/\u001b\[[0-9;]*m/g,'').slice(0,700)});}});
});}
