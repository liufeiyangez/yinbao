async page => {
  // Replace the query placeholder below with a JSON object before run-code.
  const query=__QUERY__;
  const started=Date.now();
  const parseDate=value=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(value))throw new Error('Date must be YYYY-MM-DD');const [year,month,day]=value.split('-').map(Number);const d=new Date(Date.UTC(year,month-1,day));if(d.toISOString().slice(0,10)!==value)throw new Error('Invalid calendar date');return {year:String(year),month:String(month-1),day:String(day)};};
  const begin=parseDate(query.begin),end=parseDate(query.end);
  if(query.begin>query.end||!query.storeId)throw new Error('Missing store scope or reversed date range');
  const url=query.url||'https://beta18.pospal.cn/Report/Tickets';
  if(new URL(url).pathname!=='/Report/Tickets'||!/^https:\/\/[^/]*pospal\.cn\//.test(url))throw new Error('Unexpected query page');
  const reusePage=page.url()===url;
  if(!reusePage){
    await page.goto(url,{waitUntil:'domcontentloaded',timeout:12000});
    await page.waitForLoadState('load',{timeout:4000}).catch(()=>{});
  }
  if(await page.locator('#hf_storeId').inputValue()!==String(query.storeId))throw new Error('Wrong account store; no query performed');
  for(const [prefix,date] of [['begin',begin],['end',end]]) {
    const input=page.locator('input[id^=ui-timePicker-'+prefix+']');
    const expectedDate=(prefix==='begin'?query.begin:query.end).replaceAll('-','.')+' '+(prefix==='begin'?'00:00':'23:59');
    if(await input.inputValue()===expectedDate)continue;
    await input.click();
    await page.locator('#ui-datepicker-div .ui-datepicker-year').selectOption(date.year);
    await page.locator('#ui-datepicker-div .ui-datepicker-month').selectOption(date.month);
    await page.locator('#ui-datepicker-div td a').filter({hasText:new RegExp('^'+date.day+'$')}).click();
    await page.locator('#ui-datepicker-div .ui-datepicker-close').click();
  }
  const displayedRange=await page.locator('input[id^=ui-timePicker]').evaluateAll(es=>es.map(e=>e.value));
  const expected=[query.begin.replaceAll('-','.')+' 00:00',query.end.replaceAll('-','.')+' 23:59'];
  if(JSON.stringify(displayedRange)!==JSON.stringify(expected))throw new Error('Displayed time bounds differ; inspect time-picker before querying');
  await page.locator('#txt_keyword').fill('');
  const pending=Promise.all(['/Report/LoadTicketSummary','/Report/LoadTicketsByPage'].map(path=>page.waitForResponse(r=>new URL(r.url()).pathname===path,{timeout:10000})));
  await page.locator('.submitBtn').click();
  const [summaryResponse,rowsResponse]=await pending;
  const request=summaryResponse.request(),raw=request.postData();
  const params=new URLSearchParams(raw||'');
  const assertCriteria=p=>{
    if(JSON.stringify(p.getAll('userIds[]'))!==JSON.stringify([String(query.storeId)]))throw new Error('Query includes unexpected stores; results withheld');
    const expectedFilters={reversed:'0',onlyCustomer:'false',onlyWholesale:'false',onlyReturn:'false',sn:'',cashierUid:'',guiderUid:'',tableUids:'[]',paymethod:'',paymethodNames:'null',orderSource:'',verificationSource:'',cashCouponCode:'',webOrderNo:'',appointmentNo:'',beginTime:expected[0]+':00',endTime:expected[1]+':59'};
    for(const [name,want] of Object.entries(expectedFilters))if(p.get(name)!==want)throw new Error('Unexpected '+name+' filter; inspect/reset UI before retrying');
  };
  assertCriteria(params);
  assertCriteria(new URLSearchParams(rowsResponse.request().postData()||''));
  const [summary,rows]=await Promise.all([summaryResponse.json(),rowsResponse.json()]);
  if(!summary.successed||!rows.successed)throw new Error('Query response not successful');
  const view=await page.evaluate(({summaryHtml,rowsHtml})=>{
    const d=document.createElement('div');d.innerHTML=summaryHtml;
    const t=document.createElement('table');t.innerHTML=rowsHtml;
    // Each ticket also has a ticketItemRow; these are detail rows, not extra tickets.
    return {summaryText:d.textContent.replace(/\s+/g,' ').trim(),returnedRows:[...t.querySelectorAll('tr')].filter(r=>!r.classList.contains('ticketItemRow')&&[...r.children].filter(c=>c.tagName==='TD').length>=10&&r.textContent.trim()).length};
  },{summaryHtml:summary.summaryView,rowsHtml:rows.contentView});
  const result={storeId:String(query.storeId),obtainedAt:new Date().toISOString(),range:displayedRange,ticketType:'有效单据，全部会员与非会员',totalRecord:summary.totalRecord,...view,requestScopeVerified:true};
  const rowParams=new URLSearchParams(rowsResponse.request().postData()||'');
  result.pageIndex=Number(rowParams.get('pageIndex'));
  result.pageSize=Number(rowParams.get('pageSize'));
  result.pageRowCountMatches=view.returnedRows===Math.min(Math.max(summary.totalRecord-(result.pageIndex-1)*result.pageSize,0),result.pageSize);
  if(!result.pageRowCountMatches)throw new Error('Ticket row count differs from summary/page bounds');
  if(query.replay===true){
    const response=await page.request.post(summaryResponse.url(),{data:raw,headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}});
    const replay=await response.json();
    result.replayIdentical=replay.successed&&replay.totalRecord===summary.totalRecord&&replay.summaryView===summary.summaryView;
    if(!result.replayIdentical)throw new Error('Replay differs; stop and reconcile');
  }
  result.elapsedMs=Date.now()-started;
  result.reusedPage=reusePage;
  result.verificationRequests=query.replay===true?1:0;
  return result;
}
