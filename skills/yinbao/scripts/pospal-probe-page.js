async (page) => {
  const target = __TARGET__;
  const started = Date.now();
  const traffic = [];
  const cleanUrl = value => { try { const u = new URL(value); return u.origin + u.pathname; } catch { return ''; } };
  const listener = response => {
    const request = response.request();
    if (['document','xhr','fetch'].includes(request.resourceType()))
      traffic.push({url:cleanUrl(response.url()),method:request.method(),status:response.status()});
  };
  page.on('response', listener);
  try {
    await page.goto(target.url, {waitUntil:'domcontentloaded', timeout:12000});
    await page.waitForLoadState('load', {timeout:4000}).catch(()=>{});
    if(target.expectedStoreId && await page.locator('#hf_storeId').inputValue()!==String(target.expectedStoreId))throw new Error('Current account store does not match reviewed scope');
    const interactions=[];
    for(const action of target.actions||[]) {
      if(action.kind!=='read-only-open') throw new Error('Only explicitly reviewed read-only-open actions are allowed.');
      const locator=page.locator(action.selector);
      const before=await locator.innerText({timeout:2500});
      if(action.expectedText && before.trim().replace(/\s+/g,' ')!==action.expectedText)throw new Error('Action label differs from reviewed target.');
      await locator.click({timeout:3500});
      if(action.waitFor)await page.locator(action.waitFor).waitFor({state:'visible',timeout:5000});
      interactions.push({selector:action.selector,label:before.trim(),kind:action.kind,url:cleanUrl(page.url())});
    }
    const frames = [];
    for (const frame of page.frames()) {
      if (!/^https:\/\/[^/]*pospal\.cn\//.test(frame.url())) continue;
      const data = await frame.evaluate(() => {
        const norm = value => (value || '').replace(/\s+/g,' ').trim();
        const safeHref = value => {
          if (!value || /^(javascript|data):/i.test(value)) return value ? '[script-action]' : '';
          try { const u = new URL(value, location.href); const route=u.searchParams.get('pageUrl'); const query=route && /^https:\/\/[^/]*pospal\.cn\//.test(route) && !/token|appkey|password|session/i.test(route) ? '?pageUrl='+encodeURIComponent(route) : ''; return u.origin + u.pathname + query + (u.hash && !/token|key|password/i.test(u.hash) ? u.hash : ''); } catch { return ''; }
        };
        const visible = e => !!(e.getClientRects().length) && getComputedStyle(e).visibility !== 'hidden';
        const explicit = [...document.querySelectorAll('a,button,input,select,textarea,label,summary,[tabindex],[role="button"],[role="switch"],[role="tab"],[role="checkbox"],[onclick],[class*="btn"],[class*="Btn"],.radioBox,.checkBox,.checkBoxDiv,.singleSelector,.multiSelector,.switch,.swicth,.tab,.tabs li')];
        const pointers = [...document.querySelectorAll('div,span,li,em,font')].filter(e=>visible(e)&&getComputedStyle(e).cursor==='pointer'&&norm(e.innerText).length<180&&norm(e.innerText).length>0);
        const nodes = [...new Set([...explicit,...pointers])];
        const seen = new Set();
        const controls = [];
        for (const e of nodes) {
          if (e.matches('input[type="hidden"],input[type="password"]')) continue;
          const labels = e.labels ? [...e.labels].map(l=>norm(l.innerText)).join(' / ') : '';
          let text = norm(e.innerText || e.getAttribute('aria-label') || labels || e.getAttribute('title') || e.getAttribute('placeholder') || (e.matches('input[type="button"],input[type="submit"]') ? e.value : ''));
          if(e.matches('.singleSelector,.multiSelector'))text=norm(e.querySelector(':scope > font.on')?.innerText||text);
          const href = e.tagName === 'A' ? safeHref(e.getAttribute('href')) : '';
          const key = [e.tagName,e.id,e.getAttribute('name'),text,href].join('|');
          if(seen.has(key)) continue;
          seen.add(key);
          const control = {tag:e.tagName.toLowerCase(),id:e.id || '',name:e.getAttribute('name')||'',className:typeof e.className==='string'?e.className:'',type:e.getAttribute('type')||e.getAttribute('role')||'',label:text.slice(0,180),href,visible:visible(e),disabled:!!e.disabled,required:!!e.required};
          if(e.matches('div') && !e.matches('.singleSelector,.multiSelector,.radioBox,.checkBox') && e.querySelectorAll('input,select,textarea,[class*="btn"],[class*="Btn"]').length>2)control.type='container';
          if(e.matches('select')) control.options = [...e.options].map(o=>({label:norm(o.text),value:o.value,selected:o.selected,disabled:o.disabled}));
          if(e.matches('input[type="checkbox"],input[type="radio"]')) control.checked=e.checked;
          if(e.matches('.singleSelector,.multiSelector')) {
            control.type='custom-select';
            control.options=[...e.querySelectorAll('li,dd,[data-value]')].map(o=>({label:norm(o.innerText||o.textContent),value:o.getAttribute('optionvalue')||o.getAttribute('data-value')||o.getAttribute('value')||'',selected:o.classList.contains('on')||o.classList.contains('selected')})).filter(o=>o.label);
          }
          if(e.matches('.radioBox,.checkBox')) {control.type='custom-check';control.checked=e.classList.contains('on')||e.classList.contains('checked');}
          if(e.matches('.checkBoxDiv')) {control.type='custom-check';control.checked=e.classList.contains('on');}
          if(e.matches('.swicth')) {control.type='custom-switch';control.checked=!e.classList.contains('off');}
          controls.push(control);
        }
        const headings = [...document.querySelectorAll('h1,h2,h3,.page-title,.pageTitle')].map(e=>norm(e.innerText)).filter(Boolean);
        const columns = [...document.querySelectorAll('th')].map(e=>norm(e.innerText)).filter(Boolean);
        const body = norm(document.body?.innerText);
        const markers = ['ERIN000','ERIN001','ERIN002','ERIN埃琳','花诗肤人','erin002','未开通','无权限','没有权限','您没有访问权限','无菜单权限','立即开通','暂无数据','验证码','欢迎登录'].filter(s=>body.includes(s));
        const scripts=[...document.scripts].map(e=>safeHref(e.src)).filter(Boolean);
        return {title:document.title,headings,columns:[...new Set(columns)],markers,controls,scripts};
      });
      frames.push({url:cleanUrl(frame.url()),...data});
    }
    return {target,acquiredAt:new Date().toISOString(),url:cleanUrl(page.url()),elapsedMs:Date.now()-started,frames,traffic,interactions,status:/\/account\/signin(?:\/|$)/i.test(new URL(page.url()).pathname)?'login-required':'page-read',verification:interactions.length?'reviewed read-only entry opened; no action submitted':'rendered-controls-only; no action submitted',probeVersion:3};
  } catch(error) {
    return {target,acquiredAt:new Date().toISOString(),url:cleanUrl(page.url()),elapsedMs:Date.now()-started,status:'error',error:String(error.message).slice(0,250),traffic};
  } finally { page.off('response',listener); }
}
