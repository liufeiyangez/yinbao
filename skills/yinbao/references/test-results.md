# ERIN002 实际提交及回读

获取：2026-10-02 15:08—15:13，Asia/Shanghai。账号 ERIN002，门店 ID 4402560。ERIN001、总部和共享设置未修改。

## 新增分类

页面 `/Category/Manage`。每次验证 `#hf_storeId=4402560`，`#ddl_subUsers > font` 为 erin002；先选择 `#categoryTab li` 的产品/服务/卡项，再新增。输入框异步生成，必须等待 `.txt_name:visible`，不能看到按钮后立即假定表单已加载。

|类型|名称|UID|提交与刷新回读|遗留|
|---|---|---|---|---|
|产品|CODEXTEST20261002产品分类|1790924915228452432|成功，名称一致|保留测试分类|
|服务|CODEXTEST20261002服务分类|1790924917079327828|成功，名称一致|保留测试分类|
|卡项|CODEXTEST20261002卡项分类|1790924919025889860|成功，名称一致|保留测试分类|

新增按钮先请求 `/Category/CreateCategoryUid` 生成标识；保存才调用 `/Category/AddNewCategory`。三次返回 successed=true、syncStores 数量 0；未点击任何连锁复制确认。父分类为根层级。

## 系统设置

页面 `/Setting/BaseSystemSetting`；控件 `#sb_editProductStock`，业务说明“商品库存允许编辑”。原值是；点击切换为否，刷新回读为否；再次点击恢复为是，刷新回读为是。两次 `/Setting/UpdateStoreOption` 返回成功，attribute=editProductStock，value 分别为 0、1。最终无配置遗留。

此开关点击回调直接保存，不需要独立保存按钮。不能把系统设置页当成可随意点击后取消的空表单，也不能推定其他所有开关保存方式相同。
