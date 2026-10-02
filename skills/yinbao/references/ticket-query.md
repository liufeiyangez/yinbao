# 销售单据查询契约的验证范围

获取：2026-10-02 15:10—15:11，Asia/Shanghai。ERIN002，门店 ID 4402560。范围 2026-09-06 00:00:00 至 2026-09-08 23:59:59，有效单据，未限定会员。

## UI 路径

`/Report/Tickets`：只读日期输入框不能 fill；点击 `input[id^=ui-timePicker-begin]` / `...end`，在 `#ui-datepicker-div` 选择年份、月份、日期，再点关闭。月份值 8 对应九月。当前默认开始时间 00:00、结束时间 23:59；设置后回读实际输入值。动态生成的数字 ID 不能硬编码。

查询 `.submitBtn`，监听实际请求。门店参数是 `userIds[]`，不是单独的 `userIds`。多门店必需重复键，不能转换为会丢失数组键的普通对象。

## 已验证的只读请求

|路径|方法|响应|
|---|---|---|
|/Report/LoadTicketSummary|POST|successed、totalRecord、summaryView、contentView|
|/Report/LoadTicketsByPage|POST|successed、contentView；页号 1、页大小 50|

页面实际参数包含 orderSource、verificationSource、userIds[]、sn、reversed、onlyCustomer、onlyWholesale、onlyReturn、beginTime、endTime、cashierUid、guiderUid、tableUids、paymethod、paymethodNames、cashCouponCode、webOrderNo、appointmentNo。新增权限/行业功能可能增加参数，执行时重新捕获当前筛选，禁止猜默认值。

保持同一已授权会话，将 UI 实际发出的汇总请求体以相同 Content-Type 复取一次，响应成功，totalRecord 和 summaryView 均完全一致。未复制 cookie、认证头或登录 profile；未把该内部查询当成开放 API。需要请求及文件权限的平台可以用此方式减少 UI 往返。

## 核对结果

4 笔有效单，总应收 8.00、总交易额 9.00、总实收 6.00、耗卡 3.00、卡耗 0、折让 -1、总利润 6.00。金额来自页面返回的汇总，原文“总实收”说明与营业概况商品销售销售额口径相同；不能把交易额 9.00 当现金收入。本次未对每行交易重新核对，不能用汇总替代详情证据。

这里只验证了上述范围、有效单据和汇总复取。会员单、退货、作废、渠道、高级筛选、分页边界和导出仍需各自验证。数据属于测试店，不可用于正式店报告。

## 可执行模板

包内 `scripts/pospal-query-tickets.js` 是 Playwright CLI run-code 函数模板。先以 JSON 替换唯一的 `__QUERY__` 占位符，例如 `{"storeId":"4402560","begin":"2026-09-06","end":"2026-09-08"}`，将生成文件写到外部工作目录，再用已登录会话 `run-code --filename=生成文件 --raw` 执行。替换只包含查询范围和门店 ID，不放凭据。

模板核实账号、日期回显、实际请求的门店数组、有效单据及其他筛选口径，返回汇总、当前页行数和耗时；不返回会员信息。常规不额外复取；核对任务、首次适配或发现差异时设 `replay:true`。同页复用时仍核实员工、支付、渠道等筛选，发现残留筛选即停止，不能默默报告一个子集为全店。

直接使用包内 `pospal-run.mjs`，无需每次手工生成模板：

```text
node scripts/pospal-run.mjs --session pospal-test002 --store 4402560 --begin 2026-09-06 --end 2026-09-08
```

要复取加 `--verify`；要保存脱敏结果加 `--output 已存在目录中的文件路径`。脚本复用已有页面，回显一致则跳过日期选择；没有登录或账号不符时退出，不自动登录或等待用户桌面。

2026-10-02 实测发现，每张单有一条汇总行和 `.ticketItemRow` 商品明细行，后者不能再计为一笔单据。模板排除明细行，再按页号、页大小和总单数核对当前页数量。仅输出当前页数量，不宣称已经取得所有分页交易明细。
