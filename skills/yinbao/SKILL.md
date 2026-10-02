---
name: yinbao
description: 查询、分析和操作银豹美业后台；复用已验证的门店、单据、会员次卡与员工业绩路径，执行隔离测试或获批修改。
---

# 银豹操作

复用已登录后台浏览器。ERIN001 正式店只读；ERIN002 店内测试需核实页面和表单门店。正式店修改、总部、共享、跨店及外部影响先按 [permissions.md](references/permissions.md) 核实授权。凭据从当前授权会话或安全存储取得，不写入包或日志。

## 最短路径

1. 已知网址直接进入；否则执行 `node scripts/pospal-find.mjs "功能关键词" --account ERIN002`，默认仅返回前 5 项。支持“日报”“剩余项目”“美容师业绩”。索引是历史功能证据，不是当前业务数据或授权证明。
2. 需要控件才执行 `node scripts/pospal-find.mjs --controls 完整网址 --account ERIN002 --match 控件关键词`。不要先读整份控件 TSV、全部模块文档或遍历菜单。
3. 已登录门店的有效销售单查询，执行下列命令；金额含义见 [ticket-query.md](references/ticket-query.md)。其他查询从单据按会员、次卡、库存、员工问题定向下钻，参考 [operation-sop.md](references/operation-sop.md)。

```text
node scripts/pospal-run.mjs --session pospal-test002 --store 4402560 --begin 2026-09-06 --end 2026-09-08
```

命令需在 skill 目录执行，日期和门店换成任务要求。脚本复用同页、跳过已匹配日期，常规只查一次；首次适配、金额不一致或核对任务加 `--verify`。它核验日期、门店、筛选及页行数，不返回会员原始资料。其他平台设置 `POSPAL_CLI_PATH` 或按同一 SOP 使用其浏览器工具。

## 按需阅读

- 金额/卡耗、会员剩余项目、员工口径：[data-definitions.md](references/data-definitions.md)。
- 打开表单：[erin002-forms.md](references/erin002-forms.md)（测试店）或 [forms.md](references/forms.md)（总部）；实际保存/恢复证据：[test-results.md](references/test-results.md)。部分开关点击即保存，不能当作空表单试点。
- 连接、批量巡检、导出失败：[automation.md](references/automation.md)。同类错误两次停止重复；写入超时先回读，不重复提交。
- 验证范围：[coverage.md](references/coverage.md)；最近测试：[skill-test.md](references/skill-test.md)；跨平台：[portability.md](references/portability.md)。仅状态检查才读覆盖文档，不每次查询全量巡检。

一次提取筛选、目标记录和合计；大数据导出后本地计算。只读查询不使用旧结果缓存冒充当前数据。写入提交一次并回读，记录测试标识与遗留状态。输出门店、时间范围、口径、获取时间及验证程度；DOM 可见、打开表单、提交和回读各自区分。
