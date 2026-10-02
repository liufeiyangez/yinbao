# 高效通道与批量探查

优先复用稳定的已登录浏览器。2026-10-01 本机 Playwright MCP 连接超时，CUA 绑定旧标签页超时；独立 headless Playwright CLI 成功打开、登录及页面提取。此结论仅是该次环境测试，换平台应重新测一次，不机械使用某个绝对路径。

检查 Node/npm，准备官方 `@playwright/cli`（或平台原生浏览器）。Windows 隐藏启动，不使用 headed 模式占用桌面。首次使用 CLI 按该平台 Playwright 技能/文档初始化；已安装后直接运行入口，不每页执行 npm 下载。浏览器 profile/session 只保留在安全临时环境，不纳入 skill。

典型命令：
```text
playwright-cli -s=pospal-audit open https://beta18.pospal.cn/Account/Signin --browser chrome
playwright-cli -s=pospal-audit snapshot
playwright-cli -s=pospal-audit goto https://beta18.pospal.cn/Report/Tickets
```

已登录状态读取后直达功能；未登录才走登录。凭据从当前安全会话注入，禁止把凭据写进命令样例、脚本或 trace。定位使用新快照的元素引用、稳定 id 或业务标签；禁止猜坐标和隐藏调用提交函数。

`scripts/pospal-audit.mjs` 使用 `scripts/pospal-probe-page.js` 批量只读页面，记录控件/选项/表头/脱敏请求路径，输出 JSONL 并断点续跑。默认同一标签页串行请求，每次导航超时 12 秒，额外 load 等待最多 4 秒，CLI 最多 30 秒。默认无点击；manifest 可配置经逐项审核的 `read-only-open` 表单/导航动作，不填表或提交。该标记不自动保证安全，必须事先核实按钮回调；有的“新增”会生成临时 UID，有的开关点击即保存。隐藏控件只列作 DOM 候选，不证明按钮、权限、导出或业务流程已验证。

```text
node scripts/pospal-audit.mjs --manifest manifest.json --output pages.jsonl --session pospal-audit --limit 10
```

manifest 为数组：`[{"module":"销售","group":"订单中心","name":"销售单据","url":"https://beta18.pospal.cn/Report/Tickets"}]`。Windows 自动查找已安装的 npm-cache CLI；其他平台设置 `POSPAL_CLI_PATH` 为已安装的 CLI js 文件路径。先运行 3 页检查，成功后继续；登录失效或通道超时立即停。输出不含认证头/响应体，但仍属于客户本地操作证据，不上传公开。

批量控件清单后逐页补：标签页/菜单 → 只读弹窗 → 表单 → ERIN002 提交/回读 → 数据核对 → 遗留处置。先检查按钮含义及影响，不盲点所有按钮；“删除/发券/保存/结算/开通”不属于只读巡检。点击新弹窗后重新提取控件，分支另设状态 ID。分页和重复业务记录不是独立功能分支。

下载优先监听下载事件，按实际返回的保存路径读取，不假定在系统 Downloads。下载响应长时检查系统导出任务/文件状态，不能无限等待。单次读取与导出失败两次后记录原因再改路径。

门店测试 manifest 加 `expectedStoreId`，会在动作前验证登录账号的门店 ID；表单目标仍须另核实。同网址不同分支使用唯一 `key`，否则断点去重会遗漏后续分支。当前脚本连续两项动作错误停止批次，先读现状再调整，不能自动强点。

## 常规任务省时路径

功能定位用 `pospal-find.mjs`，默认仅输出前 5 项；`--controls 完整网址 --match 关键词` 只提取相关可见控件，不将全部 TSV 放进模型上下文。返回 observedAccount；总部索引继承到其他门店时不能视作该门店已验证。

单据查询用 `pospal-run.mjs`，统一 CLI 运行入口，省去每次改模板/找 npm 缓存。已有同页和相同日期直接复用，仍检查实际筛选；正常不额外复取，复核任务加 `--verify`。不缓存销售结果替代实时查询。

巡检断点以网址或分支 key、expectedStoreId 和 actions 组成指纹；批次内相同项立即去重。门店或动作不同不会沿用旧成功记录。断点只是学习巡检的复用，不能用于生成当前业务报告。运行时 `pospal-runtime.mjs` 区分业务执行错误与连接错误，不将筛选不符误当成登录超时。
