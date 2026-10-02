import fs from 'node:fs';
const args=process.argv.slice(2);
const value=(key,fallback)=>{const i=args.indexOf(key);return i<0?fallback:args[i+1];};
const account=value('--account','ERIN000').toUpperCase();
if(!['ERIN000','ERIN001','ERIN002'].includes(account))throw new Error('Unknown account');
const read=name=>{const text=fs.readFileSync(new URL('../references/'+name,import.meta.url),'utf8').trim().split(/\r?\n/);const keys=text.shift().split('\t');return text.map(line=>Object.fromEntries(line.split('\t').map((v,i)=>[keys[i],v])));};
const limit=Math.min(30,Math.max(1,Number(value('--limit','5'))));
const controls=value('--controls');
if(controls){
 const files=account==='ERIN002'?['erin002-controls.tsv']:['controls.tsv','linked-controls.tsv'];
 const filter=value('--match','');
 const rows=files.flatMap(read).filter(r=>r['网址']===controls&&r['可见']==='true'&&(!filter||Object.values(r).some(v=>v.includes(filter))));
 console.log(JSON.stringify({account,page:controls,total:rows.length,results:rows.slice(0,limit).map(r=>Object.fromEntries(Object.entries({label:r['名称']||r['标签'],id:r.id,name:r.name,type:r['类型'],class:r.class,checked:r['勾选'],disabled:r['禁用']==='true'?true:undefined,options:JSON.parse(r['下拉选项']||r['选项']||'[]')}).filter(([k,v])=>v!==undefined&&v!==''&&(k!=='options'||v.length))))}));
}else{
 const query=args.find((x,i)=>!x.startsWith('--')&&(i===0||!args[i-1].startsWith('--')))||'';
 if(!query)throw new Error('Supply a search term, or --controls URL');
 const synonyms={'日报':['门店支付汇总','营业概况','实收与消耗绩效'],'会员剩余项目':['会员次卡持'],'剩余项目':['会员次卡持'],'美容师业绩':['技师导购绩效','绩效明细','实收与消耗绩效'],'分类':['商品分类']};
 const terms=synonyms[query]||[query];
 const files=account==='ERIN002'?['catalog.tsv','linked-pages.tsv','erin002-catalog.tsv']:['catalog.tsv','linked-pages.tsv'];
 const rows=[...new Map(files.flatMap(file=>read(file).map(r=>({...r,sourceAccount:file==='erin002-catalog.tsv'?'ERIN002':'ERIN000'}))).map(r=>[r['直接网址'],r])).values()];
 const scored=rows.map(r=>({r,score:Math.max(...terms.map(q=>r['功能']===q?100:r['功能'].includes(q)?70:[r['模块'],r['分组']].some(v=>v.includes(q))?20:0))})).filter(x=>x.score).sort((a,b)=>b.score-a.score);
 console.log(JSON.stringify({account,total:scored.length,results:scored.slice(0,limit).map(({r})=>({name:r['功能'],module:r['模块'],url:r['直接网址'],verification:r['当前验证'],observedAccount:r.sourceAccount,reference:'references/pages/'+r['模块']+'.md',scopeNote:account!==r.sourceAccount?'入口继承总部索引，目标门店权限尚需现场核实':undefined}))}));
}
