# ERIN002 表单与促销分支

获取：2026-10-02，账号 ERIN002（4402560）。仅打开表单并读取控件，不保存活动、不向会员发券或发消息。生成临时对象标识不代表业务对象保存。

等级管理页面明确说明“会员等级由总店账号统一设置”，测试店没有新增按钮；这是总部共享配置，不属于门店测试授权。促销入口由七种“应用”类型导航打开编辑表单，旧 #btnAdd 在当前页面隐藏；应用按钮只打开表单。

## 商品资料/新增表单

入口 https://beta18.pospal.cn/Product/Manage；表单打开并读取，未提交；新增可见控件 62；获取 2026-10-02T07:16:28.677Z。

路径：.btnAddProduct。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnShowEditArea|a||
|是否启用||label||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|条码:||label||
|条码:|edit_barcode|text||
|生成|btn_createBarcode|div||
|品名:||label||
|品名:|edit_productName|text||
|分类:|edit_ddl_productCategory_label|label||
|- 请选择商品分类 -|edit_ddl_productCategory|custom-select|- 请选择商品分类 -[选中] / CODEXTEST产品分类 / CODEXTEST20261002产品分类 / 无（网店不显示）|
|售价:||label||
|售价:|edit_sellPrice|text||
|进价:||label||
|进价:|edit_buyPrice|text||
|库存:||label||
|库存: / 服务时长:|edit_stock|text||
|打开 关闭|edit_sb_minor|custom-switch|关闭/未勾选|
|会员折扣:|edit_sb_isCustomerDiscount_label|label||
|○ -|edit_sb_isCustomerDiscount|custom-switch|开启/勾选|
|批发价:||label||
|批发价:|edit_sellPrice2|text||
|主单位:||label||
|请选择|edit_ddl_unit|custom-select|请选择[选中] / 支 / 盒 / 套 / 瓶 / 片 / 桶|
|商品规格:||label||
|商品规格:|edit_attribute6|text||
|是否有其它规格||label||
|是 否|edit_sb_moreSpec|custom-switch|关闭/未勾选|
|拼音码:|edit_pinyin_label|label||
|拼音码:|edit_pinyin|text||
|商品品牌:|edit_ddl_brand_label|label||
|请选择|edit_ddl_brand|custom-select|请选择[选中] / 倍扶因子 / 黛昂丝 / 珀斐莉|
|生产日期:||label||
|生产日期:|edit_productionDate|text||
|保质期:||label||
|保质期:|edit_shelfLife|text||
|库存上限:||label||
|库存上限:|edit_maxStock|text||
|库存下限:||label||
|库存下限:|edit_minStock|text||
|货号:||label||
|货号:|edit_attribute4|text||
|自定义1:||label||
|自定义1:|edit_attribute1|text||
|自定义2:||label||
|自定义2:|edit_attribute2|text||
|自定义3:||label||
|自定义3:|edit_attribute3|text||
|商品标签||label||
|+ 选择标签|edit_btnSelectTags|div||
|商品描述:||label||
|(无标签)|edit_remarks|textarea||
|取消|btn cancel|div||
|启用|sLeft|div||
|禁用|sRight|div||
|编辑图片|btnShowEditImages|div||
|打开|sLeft|div||
|○|sLeft|div||
|-|sRight|div||
|是|sLeft|div||
|否|sRight|div||
|供货商: 0|btnSupplierRanges|div||
|供货商:|open|div||

## 次卡资料/新增表单

入口 https://beta18.pospal.cn/PassProduct/ManageForBeauty；表单打开并读取，未提交；新增可见控件 47；获取 2026-10-02T07:16:30.989Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnEditPassProduct|a||
|是否计次||label||
|是 否|sb_timeLimitable|custom-switch|关闭/未勾选|
|次卡名称:||label||
|次卡名称:|edit_description|text||
|次卡分类:||label||
|-请选择次卡分类-|ddl_passproductCategory|custom-select|-请选择次卡分类-[选中] / 历史卡项 / CODEXTEST卡项分类 / CODEXTEST20261002卡项分类|
|销售价格:||label||
|销售价格:|edit_price|text||
|支持自定义购买次数||label||
|是 否|sb_timeCustomizable|custom-switch|开启/勾选|
|有效时间:||label||
|不限制|ddl_timeLimitType|custom-select|不限制[选中] / 限制使用天数 / 固定使用日期|
|售卖时允许设置有效时间||label||
|是 否|edit_sb_setTimeBySell|custom-switch|关闭/未勾选|
|使用限制:||label||
|不限制|ddl_usageLimitType|custom-select|不限制[选中] / 每日限制次数 / 每周限制次数 / 每月限制次数|
|限制次数:||label||
|限制次数:|edit_usageLimitTimes|text||
|售卡范围||label||
|实体店|sb_showInRshop|custom-check|关闭/未勾选|
|网店|sb_showInEshop|custom-check|关闭/未勾选|
|前往设置|operation2|a||
|打开 关闭|edit_sb_minor|custom-switch|关闭/未勾选|
|会员折扣:||label||
|○ -|edit_sb_isCustomerDiscount|custom-switch|开启/勾选|
|拼音码:||label||
|拼音码:|edit_pinyin|text||
|次卡标签||label||
|+ 选择标签|edit_btnSelectTags|div||
|备注:||label||
|(无标签)|edit_remarks|textarea||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|是|sLeft|div||
|否|sRight|div||
|编辑图片|btnShowEditImages|div||
|普通次卡 支持消费单个服务的次卡|passproductType-setItem on|li||
|普通次卡 支持消费单个服务的次卡|passproductType-setContent|div||
|支持消费单个服务的次卡||div||
|套餐次卡 可限定每次消费一个或多个服务|passproductType-setItem|li||
|套餐次卡 可限定每次消费一个或多个服务|passproductType-setContent|div||
|可限定每次消费一个或多个服务||div||
|打开|sLeft|div||
|○|sLeft|div||
|-|sRight|div||

## 服务资料/新增表单

入口 https://beta18.pospal.cn/Product/Services；表单打开并读取，未提交；新增可见控件 41；获取 2026-10-02T07:16:33.868Z。

路径：.btnAddProduct。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnShowEditArea|a||
|是否启用||label||
|是 否|edit_sb_enable|custom-switch|开启/勾选|
|是否计时||label||
|是 否|edit_sb_isTiming|custom-switch|关闭/未勾选|
|是否可预约||label||
|是 否|edit_sb_canAppointed|custom-switch|开启/勾选|
|条码:||label||
|条码:|edit_barcode|text||
|生成|btn_createBarcode|div||
|服务名称:||label||
|服务名称:|edit_productName|text||
|分类:||label||
|- 请选择服务分类 -|edit_ddl_productCategory|custom-select|- 请选择服务分类 -[选中] / other / CODEXTEST服务分类 / CODEXTEST20261002服务分类|
|售价:||label||
|售价:|edit_sellPrice|text||
|成本:||label||
|成本:|edit_buyPrice|text||
|服务时长:||label||
|(无标签)|edit_serviceAtLeastMinutes|text||
|商品规格:||label||
|商品规格:|edit_attribute6|text||
|是否有其它规格||label||
|是 否|edit_sb_moreSpec|custom-switch|关闭/未勾选|
|打开 关闭|edit_sb_minor|custom-switch|关闭/未勾选|
|会员折扣:||label||
|○ -|edit_sb_isCustomerDiscount|custom-switch|开启/勾选|
|拼音码:||label||
|拼音码:|edit_pinyin|text||
|商品标签||label||
|+ 选择标签|edit_btnSelectTags|div||
|备注:||label||
|(无标签)|edit_remarks|textarea||
|保存并生成次卡|saveWithPassProduct|div||
|取消|btn cancel|div||
|是|sLeft|div||
|否|sRight|div||
|编辑图片|btnShowEditImages|div||
|打开|sLeft|div||
|○|sLeft|div||
|-|sRight|div||

## 会员资料/新增表单

入口 https://beta18.pospal.cn/Customer/Manage；表单打开并读取，未提交；新增可见控件 33；获取 2026-10-02T07:16:36.542Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnShowDetail edit |span||
|详细||a||
|0|operation2 btnShowPassProduct|span||
|1|operation2 btnShowShoppingCard|span||
|2|operation2 btnShowPassProduct|span||
|是否启用||label||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|会员编号:||label||
|会员编号:|edit_number|text||
|会员姓名:||label||
|会员姓名: / 会员部门:|edit_name|text||
|会员等级:||label||
|- 会员等级 -|edit_ddl_category|custom-select|- 会员等级 -[选中] / 花诗会员 / 紫花会员 / 银花会员 / 金花会员 / 玉花会员 / 无|
|会员折扣:||label||
|会员折扣:|edit_discount|text||
|会员余额:||label||
|会员余额:|edit_money|text||
|会员积分:||label||
|会员积分:|edit_point|text||
|联系电话:||label||
|联系电话:|edit_tel|text||
|会员密码:|edit_password_label|label||
|到期日期:||label||
|到期日期:|edit_expiryDate|text||
|允许赊账||label||
|是 否|edit_sb_credit|custom-switch|关闭/未勾选|
|取消|btn cancel|div||
|详细|operation2|span||
|启用|sLeft|div||
|禁用|sRight|div||
|是|sLeft|div||
|否|sRight|div||
|编辑更多会员档案>>|link_moreCustomerInfo|span||

## 耗材管理/新增表单

入口 https://beta18.pospal.cn/Product/Tastes；表单打开并读取，未提交；新增可见控件 20；获取 2026-10-02T07:15:22.979Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|耗材组名称:||label||
|耗材组名称:|edit_packageName|text||
|耗材组排序:||label||
|耗材组排序:|edit_packageSortValue|text||
|耗材选择方式||label||
|多选 单选|sb_packageType|custom-switch|开启/勾选|
|是否必选||label||
|是 否|sb_isRequired|custom-switch|关闭/未勾选|
|是否参与打折||label||
|是 否|sb_enjoyDiscount|custom-switch|关闭/未勾选|
|保存|btn save|div||
|取消|btn cancel|div||
|(无标签)|html5_1k3tnfe9u1v0aju5847l3mmcr3|file||
|添加耗材选项|btnAddItem|div||
|多选|sLeft|div||
|单选|sRight|div||
|是|sLeft|div||
|否|sRight|div||
|适用商品范围 0|item openPopup js_product_range|div||
|适用商品范围|open|div||

## 供货商资料/新增表单

入口 https://beta18.pospal.cn/Supplier/Manage；表单打开并读取，未提交；新增可见控件 34；获取 2026-10-02T07:15:24.398Z。

路径：#btnAddSupplier。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|供货商编号:|edit_number|text||
|随机生成|btnNumber|div||
|供货商名称:|edit_name|text||
|搜索拼音码:|edit_pinyin|text||
|联系人:|edit_linkman|text||
|联系电话:|edit_tel|text||
|联系邮箱:|edit_email|text||
|开户行:|edit_bankName|text||
|开户名:|edit_bankAccountName|text||
|银行账户:|edit_bankAccount|text||
|纳税人识别号:|edit_taxpayerRegisterNumber|text||
|发票抬头:|edit_invoiceTitle|text||
|购销|dll_businessMode|custom-select|购销[选中] / 租赁|
|按月结算|dll_settlementType|custom-select|按月结算[选中] / 固定周期 / 按单结算|
|每月:|settlementValueLabel|label||
|每月:|edit_settlementValue|text||
|配送费返点:|edit_deliveryFee|text||
|固定返利点:|edit_fixedRebate|text||
|设置特殊商品 (已设置0个)|saleSetProduct|a||
|设置特殊商品 (已设置0个)|saleBuySetProduct|a||
|地址:|edit_address|textarea||
|备注:|edit_remarks|textarea||
|是 否|edit_sb_supplierStoreEnable|custom-switch|关闭/未勾选|
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|启用|sLeft|div||
|禁用|sRight|div||
|0|specialProductCount|span||
|是|sLeft|div||
|否|sRight|div||
|关联商品功能已更新，进入新版设置|btnEditGoSupplierProduct|div||
|关联商品功能已更新，进入新版设置|open|div||

## 充值规则/新增表单

入口 https://beta18.pospal.cn/Recharge/Rule；表单打开并读取，未提交；新增可见控件 82；获取 2026-10-02T07:15:26.212Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|是否启用||label||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|适用会员:||label||
|请选择适用等级|ddl_customerCategory|custom-select|无 / 花诗会员 / 紫花会员 / 银花会员 / 金花会员 / 玉花会员|
|适用范围:||label||
|实体店|edit_cb_showInRShop|custom-check|关闭/未勾选|
|网店|edit_cb_showInEShop|custom-check|关闭/未勾选|
|充值项目:||label||
|通用余额|ddl_chargeType|custom-select|通用余额[选中] / 折扣卡 - 会员卡|
|充值金额:||label||
|充值金额:|edit_requireAmount|text||
|赠送项目:||label||
|通用余额|ddl_giftType singleSelector|custom-select|通用余额[选中] / 会员积分 / 折扣卡 - 会员卡 / 次卡 - 斯莉米尔塑形疗程卡 / 次卡 - 1斯莉米尔瘦身疗程卡 / 次卡 - 【测试勿售】CODEXTEST卡项|
|赠送金额:||label||
|前往设置|operation2|a||
|充值规则名称:||label||
|充值规则名称:|edit_ruleName|text||
|充值会员自动升级为:||label||
|不升级会员|ddl_upgradeCategory|custom-select|不升级会员[选中] / 无 / 花诗会员 / 紫花会员 / 银花会员 / 金花会员 / 玉花会员|
|自动升级:||label||
|生效日期:||label||
|生效日期:|edit_startDate|text||
|截止日期:||label||
|截止日期:|edit_expiredDate|text||
|可充值周期:||label||
|每天都可充值|ddl_cycleType|custom-select|每天都可充值[选中] / 每周充值日期 / 每月充值日期|
|每个会员每周可用次数：||label||
|每个会员每周可用次数：|edit_chargeLimitInPeriod|text||
|允许自定义赠送金额||label||
|是 否|edit_sb_allowCustomGiftValue|custom-switch|关闭/未勾选|
|每个会员仅限使用一次||label||
|是 否|edit_sb_ruleUseTimesForOneCustomer|custom-switch|关闭/未勾选|
|仅首次充值可用||label||
|是 否|edit_sb_ruleUseForFirstRecharge|custom-switch|关闭/未勾选|
|排序序号:||label||
|排序序号:|edit_sortOrder|text||
|取消|btn cancel|div||
|启用|sLeft|div||
|禁用|sRight|div||
|添加赠送|btnAddGift|div||
|不替换折扣高的等级|itemCheckBox|div||
|替换会员当前等级|itemCheckBox|div||
|周一||li||
|周二|plus|li||
|周三||li||
|周四|plus|li||
|周五||li||
|周六|plus|li||
|周日||li||
|1||li||
|2||li||
|3||li||
|4||li||
|5||li||
|6||li||
|7||li||
|8||li||
|9||li||
|10||li||
|11|small|li||
|12||li||
|13||li||
|14||li||
|15||li||
|16||li||
|17||li||
|18||li||
|19||li||
|20||li||
|21||li||
|22|small|li||
|23||li||
|24||li||
|25||li||
|26||li||
|27||li||
|28||li||
|29||li||
|30||li||
|31||li||
|是|sLeft|div||
|否|sRight|div||

## 优惠券/新增表单

入口 https://beta18.pospal.cn/Promotion/Coupon；表单打开并读取，未提交；新增可见控件 53；获取 2026-10-02T07:15:28.669Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|优惠类型:||label||
|- 请选择优惠券类型 -|ddl_promotionCouponType|custom-select|- 请选择优惠券类型 -[选中] / 全场抵现券 / 品类抵现券 / 单品抵现券 / 全场打折券 / 品类打折券 / 单品打折券 / 赠品提货券 / 运费抵扣券|
|优惠券名:|edit_txtPromotionTitle|label||
|优惠券名:|txt_promotionCouponName|text||
|适用范围:||label||
|指定促销模式:||label||
|领券开始日期:||label||
|领券开始日期:|txt_makeStartDate|text||
|领券结束日期:||label||
|领券结束日期:|txt_makeEndDate|text||
|结束日期:||label||
|结束日期:|txt_endDate|text||
|开始日期:||label||
|开始日期:|txt_startDate|text||
|(无标签)|edit_nowAvaliableDays|text||
|(无标签)|edit_beginDays|text||
|(无标签)|edit_avaliableDays|text||
|更多优惠券可用日期和时间设置||label||
|是 否|edit_sb_moreTimeSetting|custom-switch|关闭/未勾选|
|支付设置:||label||
|收银小票推送出券||label||
|是 否|edit_sb_couponPrintable|custom-switch|关闭/未勾选|
|是否允许销售||label||
|是 否|edit_sb_salable|custom-switch|关闭/未勾选|
|是否允许领取||label||
|是 否|edit_sb_getable|custom-switch|关闭/未勾选|
|是否允许转赠||label||
|是 否|edit_sb_giftAble|custom-switch|关闭/未勾选|
|是否开启通用券码||label||
|是 否|edit_sb_enableCustomCode|custom-switch|关闭/未勾选|
|是否核销时计入实收||label||
|是 否|edit_sb_countAmountInUse|custom-switch|关闭/未勾选|
|说明:||label||
|(无标签)|edit_promotionCouponDescription|textarea||
|(无标签)|html5_1k3tnfisp1e2ftqhc6o1h1q8lp3|file||
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|会员专享|forCustomer|div||
|线上|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|是|sLeft|div||
|否|sRight|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|优惠券图片 选择|btnCouponImagePicker|div||
|优惠券图片|open|div||
|+|selectedCouponImage|div||
|+|jiapic|span||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 折扣卡/新增表单

入口 https://beta18.pospal.cn/ShoppingCard/Rule；表单打开并读取，未提交；新增可见控件 31；获取 2026-10-02T07:15:30.239Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|允许售卖||label||
|允许 禁售|edit_sb_allowSell|custom-switch|开启/勾选|
|折扣卡名:||label||
|折扣卡名:|edit_name|text||
|使用期限:||label||
|永久有效 限制天数|edit_sb_isForever|custom-switch|开启/勾选|
|有效天数:||label||
|有效天数:|edit_durationInDays|text||
|单笔最高可用比例:||label||
|单笔最高可用比例:|edit_payLimit|text||
|全选|checkBoxDivN checkall checkBoxDiv|custom-check|关闭/未勾选|
|历史卡项|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|other|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|CODEXTEST产品分类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|CODEXTEST卡项分类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|CODEXTEST服务分类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|CODEXTEST20261002产品分类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|CODEXTEST20261002服务分类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|CODEXTEST20261002卡项分类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|允许|sLeft|div||
|禁售|sRight|div||
|永久有效|sLeft|div||
|限制天数|sRight|div||
|购买商品分类范围|open|div||
|设置分类折扣: 0|categoryDiscountSetting|div||
|设置分类折扣:|open|div||
|设置特殊商品折扣: 0|productDiscountSetting|div||
|设置特殊商品折扣:|open|div||

## 预付卡/新增表单

入口 https://beta18.pospal.cn/PrepaidCard/Rule；表单打开并读取，未提交；新增可见控件 28；获取 2026-10-02T07:15:32.413Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|预付卡名:||label||
|预付卡名:|edit_name|text||
|卡面金额:||label||
|(无标签)|edit_cardAmount|text||
|销售价格:||label||
|(无标签)|edit_sellPrice|text||
|是否限制使用商品范围||label||
|是 否|sb_prepaidCardType|custom-switch|关闭/未勾选|
|折扣卡:||label||
|- 选择预付卡 -|ddl_shoppingCardRule|custom-select|- 选择预付卡 -[选中] / 会员卡|
|开始日期:||label||
|开始日期:|edit_beginDateTime|text||
|结束日期:||label||
|结束日期:|edit_endDateTime|text||
|售卡范围||label||
|实体店|sb_sellInRshop|custom-check|关闭/未勾选|
|网店|sb_sellInEshop|custom-check|关闭/未勾选|
|会员折上折||label||
|是 否|edit_sb_enjoyCustomerDiscount|custom-switch|开启/勾选|
|上传图片|btnEditLogo|div||
|(无标签)|html5_1k3tnfmmq1h4g1hbq1u3p58b1isq3|file||
|说明:||label||
|(无标签)|edit_remarks|textarea||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|是|sLeft|div||
|否|sRight|div||

## 礼品包/新增表单

入口 https://beta18.pospal.cn/GiftPackage/Manage；表单打开并读取，未提交；新增可见控件 37；获取 2026-10-02T07:15:34.447Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|礼品包名称:|edit_txtgiftPackageTitle|label||
|礼品包名称:|txt_giftPackageName|text||
|通用余额:||label||
|通用余额:|edit_rewardMoney|text||
|赠送积分:||label||
|赠送积分:|edit_rewardPoint|text||
|优惠券:||label||
|已选中 0 种，0 张优惠券|ddl_fresherPromotionCoupon|custom-select||
|折扣卡:||label||
|已选中 0 种，折扣卡共 0 元|ddl_fresherShoppingCard|custom-select|会员卡元|
|次卡:||label||
|已选中 0 种，0 张次卡|ddl_fresherPassProduct|custom-select|斯莉米尔塑形疗程卡X / 1斯莉米尔瘦身疗程卡X / 【测试勿售】CODEXTEST卡项X|
|权益卡:||label||
|请选择权益卡|ddl_privilegeCard|custom-select|请选择权益卡[选中]|
|礼品优惠券:||label||
|已选中 0 种，0 张礼品优惠券|ddl_giftPromotionCoupon|custom-select||
|礼品次卡:||label||
|已选中 0 种，0 张礼品次卡|ddl_giftPassProduct|custom-select|斯莉米尔塑形疗程卡X / 1斯莉米尔瘦身疗程卡X / 【测试勿售】CODEXTEST卡项X|
|开始日期:||label||
|开始日期:|edit_startDateTime|text||
|结束日期:||label||
|结束日期:|edit_endDateTime|text||
|是否允许销售||label||
|是 否|edit_sb_salable|custom-switch|关闭/未勾选|
|是否允许网店免费领取||label||
|是 否|edit_sb_freeInEshop|custom-switch|关闭/未勾选|
|前往设置|operation2|a||
|(无标签)|html5_1k3tnfopiu7e1oojusrdi61oad3|file||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|礼品包图片 选择|btnImagePicker|div||
|礼品包图片|open|div||
|+|selectedImage|div||
|+|jiapic|span||
|是|sLeft|div||
|否|sRight|div||

## 员工资料/新增表单

入口 https://beta18.pospal.cn/Employee/Manage；表单打开并读取，未提交；新增可见控件 44；获取 2026-10-02T07:15:35.988Z。

路径：#btnAddGuider。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|点击前往|operation2|a||
|工号:||label||
|工号:|edit_jobNumber|text||
|姓名:||label||
|姓名:|edit_name|text||
|手机:||label||
|手机:|edit_tel|text||
|密码:||label||
|密码:|edit_password|text||
|(无标签)|html5_1k3tnfqro1j3u1ote186e1jqq1u5d3|file||
|角色:||label||
|无|ddl_employeeRole|custom-select|无|
|在前台展示||label||
|是 否|edit_sb_showInClient|custom-switch|开启/勾选|
|员工标签||label||
|+ 员工标签|edit_btnSelectTags|div||
|（?）|help_allowCashier|a||
|（?）|help_marketingTicket|a||
|(无标签)|auth_employeeMng|checkbox|关闭/未勾选|
|开启后，可设置商品分类数据权限||label||
|开启 关闭|edit_sb_limitProductAuth|custom-switch|开启/勾选|
|已授权 0 个分类 去设置||label||
|我的店铺APP登录权限||label||
|开启 关闭|edit_sb_allowMyShopLoginAuth|custom-switch|开启/勾选|
|是否允许领取公海会员||label||
|是 否|edit_sb_sharePublicCustomer|custom-switch|开启/勾选|
|备注:||label||
|(无标签)|edit_remarks|textarea||
|保存|btn save|div||
|保存并设置提成|btn saveAndGoToCommissionPlan |div||
|取消|btn cancel|div||
|删除|btn del|div||
|编辑照片|btnUploadPhoto|div||
|是|sLeft|div||
|否|sRight|div||
|商户端权限|open|div||
|收银端权限|open|div||
|+ 展开|tip_cashierAuth|div||
|商品数据权限|open|div||
|开启|sLeft|div||
|去设置|go_setProductAuth|span||
|云端权限|open|div||
|+ 展开|tip_cashierWebAuth|div||
|我的店铺|open|div||

## 提成方案/新增表单

入口 https://beta18.pospal.cn/CommissionPlan/Manage；表单打开并读取，未提交；新增可见控件 3；获取 2026-10-02T07:15:37.311Z。

路径：#addNew。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|(无标签)|planNameInput|input||
|保存|popupBtn popupBtnSure|div||
|取消|popupBtn popupBtnCancel|div||

## 牌号管理/新增表单

入口 https://beta18.pospal.cn/Setting/AreaAndTable；表单打开并读取，未提交；新增可见控件 15；获取 2026-10-02T07:15:38.657Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|区域名称:||label||
|区域名称:|edit_areaMame|text||
|台号前缀:||label||
|台号前缀:|edit_tableAbbr|text||
|台数:|middle|label||
|台数:|edit_tableNum|text||
|生成|btnBatchCreateTables|div||
|不包含||label||
|数字4|excludeNo4|custom-check|关闭/未勾选|
|数字7|excludeNo7|custom-check|关闭/未勾选|
|数字13|excludeNo13|custom-check|关闭/未勾选|
|桌号列表（可拖拉桌号进行排序）||label||
|座位数|rg_seatManage|custom-check|关闭/未勾选|
|保存|btn save|div||
|取消|btn cancel|div||

## 门店广告/新增表单

入口 https://beta18.pospal.cn/Setting/SecondScreenAD；表单打开并读取，未提交；新增可见控件 17；获取 2026-10-02T07:15:40.086Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|广告状态:||label||
|启用 禁用|sb_enabled|custom-switch|开启/勾选|
|广告标题:||label||
|广告标题:|edit_title|text||
|文件类型:||label||
|图片|ddl_adType|custom-select|图片[选中] / 视频|
|开始日期:||label||
|开始日期:|txt_startDateTime|text||
|结束日期:||label||
|结束日期:|txt_endDateTime|text||
|适用范围:||label||
|(无标签)|html5_1k3tnfvbak0regk17g81qbr1lkn3|file||
|保存|btn save|div||
|取消|btn cancel|div||
|启用|sLeft|div||
|禁用|sRight|div||
|添加图片|btnShowEditImages|div||

## 收银端公告/新增表单

入口 https://beta18.pospal.cn/Setting/Notification；表单打开并读取，未提交；新增可见控件 13；获取 2026-10-02T07:15:41.595Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|有效期至:||label||
|有效期至:|edit_endDatetime|text||
|通知标题:||label||
|通知标题:|edit_title|text||
|内容:||label||
|内容:|edit_message|textarea||
|客户端打印通知小票||label||
|是 否|edit_sb_isClientPrintNotify|custom-switch|关闭/未勾选|
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|是|sLeft|div||
|否|sRight|div||

## 等级管理/新增入口

入口 https://beta18.pospal.cn/Customer/CategoryV2；该旧入口未成功；以上差异说明适用；新增可见控件 0；获取 2026-10-02T07:15:45.215Z。

## 促销活动/新增入口

入口 https://beta18.pospal.cn/Promotion/Manage；该旧入口未成功；以上差异说明适用；新增可见控件 0；获取 2026-10-02T07:15:50.222Z。

## 护理定期维护/新增入口

入口 https://beta18.pospal.cn/Reminder/ProductReminderV2；表单打开并读取，未提交；新增可见控件 20；获取 2026-10-02T07:15:52.294Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnEditReminder|a||
|是否在crm中生成回访任务:||label||
|是 否|edit_sb_crmFollowUp|custom-switch|关闭/未勾选|
|提醒方式:||label||
|按消费数量翻倍||label||
|是 否|edit_sb_doubleCycleWithQuantity|custom-switch|关闭/未勾选|
|提醒周期:||label||
|提醒周期:|txt_cycleDays|text||
|短信通知||label||
|开启 关闭|edit_sb_smsNotice|custom-switch|关闭/未勾选|
|微信通知||label||
|开启 关闭|edit_sb_wxNotice|custom-switch|关闭/未勾选|
|查看原因||a||
|保存|btn save|div||
|取消|btn cancel|div||
|是|sLeft|div||
|否|sRight|div||
|消费商品: 0|products|div||
|消费商品:|open|div||
|开启|sLeft|div||

## 拼团/新增入口

入口 https://beta18.pospal.cn/EshopMarketing/PeerPurchase；表单打开并读取，未提交；新增可见控件 1；获取 2026-10-02T07:15:54.402Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|应用|operation-btn|div||

## 团购/新增入口

入口 https://beta18.pospal.cn/EshopMarketing/GroupPurchase；表单打开并读取，未提交；新增可见控件 50；获取 2026-10-02T07:15:55.781Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|开始时间:||label||
|开始时间:|edit_startDateTime|text||
|结束时间:||label||
|结束时间:|edit_endDateTime|text||
|跨店核销||label||
|是 否|edit_sb_crossStoreWriteOff|custom-switch|开启/勾选|
|团购名称:||label||
|选择商品类型:||label||
|普通商品|ddl_targetType|custom-select|普通商品[选中] / 礼品包 / 多规格商品 / 次卡|
|选择商品:||label||
|选择商品:|edit_product|text||
|选择礼品包:||label||
|无相关选项|ddl_giftpackage|custom-select|无相关选项[选中]|
|选择次卡:||label||
|加载中...|ddl_passProduct|custom-select|加载中...[选中]|
|配送模式:||label||
|核销期限:||label||
|团购价格:||label||
|活动商品总数:||label||
|(无标签)|edit_maxStock|text||
|成团人数:||label||
|限购每人购买量||label||
|是 否|edit_sb_maxBuyNumber|custom-switch|开启/勾选|
|每人限购:||label||
|仅限新客参与||label||
|是 否|edit_sb_newCustomerLimitable|custom-switch|开启/勾选|
|支付设置:||label||
|支付方式:||label||
|请选择支付方式|ddl_limitPaymentMethod|custom-select|储值卡 / 微信支付|
|取消规则:||label||
|未成团自动退款:||label||
|打开 关闭|edit_sb_autoRefund|custom-switch|开启/勾选|
|超过核销期限自动退款:||label||
|打开 关闭|edit_sb_overTimeAutoRefund|custom-switch|开启/勾选|
|模拟成团||label||
|打开 关闭|edit_sb_autoSuccessed|custom-switch|开启/勾选|
|活动状态||label||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|是|sLeft|div||
|否|sRight|div||
|配送|itemCheckBox|div||
|自提|itemCheckBox|div||
|全部支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|打开|sLeft|div||
|启用|sLeft|div||
|禁用|sRight|div||

## 砍价/新增入口

入口 https://beta18.pospal.cn/EshopMarketing/BargainRule；表单打开并读取，未提交；新增可见控件 48；获取 2026-10-02T07:15:57.293Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|开始时间:||label||
|开始时间:|edit_startDateTime|text||
|(无标签)|edit_startDateTimeView|text||
|结束时间:||label||
|结束时间:|edit_endDateTime|text||
|(无标签)|edit_endDateTimeView|text||
|跨店核销||label||
|是 否|edit_sb_crossStoreWriteOff|custom-switch|开启/勾选|
|选择商品类型:||label||
|普通商品|ddl_targetType|custom-select|普通商品[选中] / 多规格商品 / 次卡|
|选择商品:||label||
|选择商品:|edit_product|text||
|选择次卡:||label||
|加载中...|ddl_passProduct|custom-select|加载中...[选中]|
|活动名称:||label||
|快使出你的洪荒之力，价值【原价】元【产品名】只要【底价】元就能带回家|edit_ddl_title|custom-select|快使出你的洪荒之力，价值【原价】元【产品名】只要【底价】元就能带回家[选中] / 手要快，姿势要帅！【底价】元【产品名】由你砍！ / 疯抢！【产品名】最低【底价】元，百人狂欢！|
|活动底价:||label||
|砍价次数:||label||
|砍价限时:||label||
|限购次数||label||
|帮砍次数:||label||
|砍价规则:||label||
|砍到任意金额可购买|ddl_EffectiveType|custom-select|砍到任意金额可购买[选中] / 砍到底价可购买|
|到期未核销自动退:||label||
|是 否|edit_sb_expireAutoRefund|custom-switch|开启/勾选|
|核销期限:||label||
|活动商品总数:||label||
|配送模式:||label||
|仅限新客参与||label||
|是 否|edit_sb_newCustomerLimitable|custom-switch|开启/勾选|
|仅限新客帮砍||label||
|是 否|edit_sb_newCustomerBargainOnly|custom-switch|开启/勾选|
|支付设置:||label||
|支付方式:||label||
|请选择支付方式|ddl_limitPaymentMethod|custom-select|储值卡 / 微信支付|
|活动状态||label||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|是|sLeft|div||
|否|sRight|div||
|配送|itemCheckBox|div||
|自提|itemCheckBox|div||
|全部支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|启用|sLeft|div||
|禁用|sRight|div||

## 社区团购/新增入口

入口 https://beta18.pospal.cn/EshopMarketing/CommunityGroupPurchase；表单打开并读取，未提交；新增可见控件 18；获取 2026-10-02T07:15:58.731Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|团购名称:||label||
|团购公告:||label||
|(无标签)|edit_txt|textarea||
|生效日期:||label||
|(无标签)|edit_startDateTime|text||
|(无标签)|edit_endDateTime|text||
|最低成团||label||
|开启 关闭|edit_sb_groupLimit|custom-switch|关闭/未勾选|
|团长利润计算模式||label||
|上传图片|btnEditLogo|div||
|(无标签)|html5_1k3tngh4n127fs3f1lvehavcq93|file||
|保存|btn save|div||
|取消|btn cancel|div||
|开启|sLeft|div||
|选择商品: 0|edit_products|div||
|选择商品:|open|div||
|可参与活动团长标签: 0|edit_tags|div||
|可参与活动团长标签:|open|div||

## 网店公告/新增入口

入口 https://beta18.pospal.cn/EShop/Remind；表单打开并读取，未提交；新增可见控件 13；获取 2026-10-02T07:16:00.095Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|是否启用||label||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|开始时间:||label||
|开始时间:|edit_beginTime|text||
|结束时间:||label||
|结束时间:|edit_endTime|text||
|内容:||label||
|内容:|edit_message|textarea||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|启用|sLeft|div||
|禁用|sRight|div||

## 网店广告/新增入口

入口 https://beta18.pospal.cn/EShop/Banner；表单打开并读取，未提交；新增可见控件 22；获取 2026-10-02T07:16:01.420Z。

路径：#btnAdd。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|显示位置||label||
|微信店铺|edit_ddl_location|custom-select|微信店铺[选中] / 自助点单机|
|(无标签)|html5_1k3tngk64i8kafigj710hv1hfb3|file||
|名称:||label||
|名称:|edit_name|text||
|开始:||label||
|开始:|edit_startDateTime|text||
|结束:||label||
|结束:|edit_endDateTime|text||
|适用范围||label||
|首页广告|checkBoxDiv|custom-check|关闭/未勾选|
|首页弹窗|checkBoxDiv|custom-check|关闭/未勾选|
|点单广告|checkBoxDiv|custom-check|关闭/未勾选|
|排序号||label||
|排序号|edit_sortNumber|text||
|跳转页面URL||label||
|跳转页面URL|edit_redirectUrl|text||
|保存|btn save|div||
|取消|btn cancel|div||
|选择广告图片|btnSelectImage|div||
|绑定商品 0|open_bindproduct|div||
|绑定商品|open|div||

## 促销/打折或特价

入口 https://beta18.pospal.cn/Promotion/Manage；表单打开并读取，未提交；新增可见控件 45；获取 2026-10-02T07:19:38.635Z。

路径：.operation-btn[data-url=PromotionProductDiscount]:visible。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|促销类型:||label||
|打折/特价|ddl_promotionRuleType|custom-select|- 请选择促销类型 - / 打折/特价[选中] / 梯度优惠 / 套餐促销 / 满额立减 / 换购促销 / 搭赠促销 / 第二件打折|
|促销名称:|edit_txtPromotionTitle|label||
|促销名称:|txt_promotionRuleName|text||
|适用范围:||label||
|会员专享|forCustomer|custom-check|关闭/未勾选|
|指定促销模式:||label||
|(无标签)|html5_1k3tnn88214q21r4k18c11fab1f54i|file||
|会员折上折||label||
|是 否|sb_enjoyCustomerDiscount|custom-switch|关闭/未勾选|
|开始日期:||label||
|开始日期:|txt_startDatetime|text||
|结束日期:||label||
|结束日期:|txt_endDatetime|text||
|更多促销日期与时间的设置请使用>>|moreset operation2|a||
|仅限新客参与||label||
|是 否|edit_sb_newCustomerLimitable|custom-switch|关闭/未勾选|
|促销方式||label||
|折扣促销|singleSelector|custom-select|折扣促销[选中] / 特价促销|
|优惠折扣:||label||
|优惠折扣:|txt_couponValue|text||
|限制优惠商品最大数量||label||
|是 否|edit_sb_limitMaxDiscountableQuantity|custom-switch|关闭/未勾选|
|展开设置|btnGrey|div||
|支付设置:||label||
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|网店|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|活动图片 选择|btnPromotionImagePicker|div||
|活动图片|open|div||
|是|sLeft|div||
|否|sRight|div||
|全场 全店所有商品参与促销|itemCheckBox selectionType|div||
|标签 包含选中标签的商品参与促销|itemCheckBox selectionType|div||
|分类 选中分类下的商品参与促销|itemCheckBox selectionType|div||
|品牌 选中品牌下的商品参与促销|itemCheckBox selectionType|div||
|商品 选择参与促销的商品|itemCheckBox selectionType|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 促销/梯度优惠

入口 https://beta18.pospal.cn/Promotion/Manage；表单打开并读取，未提交；新增可见控件 45；获取 2026-10-02T07:19:40.285Z。

路径：.operation-btn[data-url=PromotionGradientDiscount]:visible。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|促销类型:||label||
|梯度优惠|ddl_promotionRuleType|custom-select|- 请选择促销类型 - / 打折/特价 / 梯度优惠[选中] / 套餐促销 / 满额立减 / 换购促销 / 搭赠促销 / 第二件打折|
|促销名称:|edit_txtPromotionTitle|label||
|促销名称:|txt_promotionRuleName|text||
|适用范围:||label||
|会员专享|forCustomer|custom-check|关闭/未勾选|
|指定促销模式:||label||
|会员折上折||label||
|是 否|sb_enjoyCustomerDiscount|custom-switch|关闭/未勾选|
|开始日期:||label||
|开始日期:|txt_startDatetime|text||
|结束日期:||label||
|结束日期:|txt_endDatetime|text||
|更多促销日期与时间的设置请使用>>|moreset operation2|a||
|促销方式:||label||
|按购买商品件数设置梯度优惠|ddl_gradientDiscountType|custom-select|按购买商品件数设置梯度优惠[选中] / 按消费金额设置梯度优惠|
|优惠方式:||label||
|打折|ddl_gradientPreferentialType|custom-select|打折[选中] / 立减 / 特价|
|件数|gradientUnitLabel|label||
|件数|gradientQuantity0|text||
|折扣|PreferentialTypeLabel|label||
|折扣|gradientDiscount0|text||
|限制购买同一商品才可享折扣||label||
|是 否|swicth off|custom-switch|关闭/未勾选|
|展开设置|btnGrey|div||
|支付设置:||label||
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|网店|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|是|sLeft|div||
|否|sRight|div||
|梯度优惠|btnAddpromotionGradientDiscountItem|div||
|全场 全店所有商品参与促销|itemCheckBox selectionType|div||
|标签 包含选中标签的商品参与促销|itemCheckBox selectionType|div||
|分类 选中分类下的商品参与促销|itemCheckBox selectionType|div||
|品牌 选中品牌下的商品参与促销|itemCheckBox selectionType|div||
|商品 选择参与促销的商品|itemCheckBox selectionType|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 促销/满额立减

入口 https://beta18.pospal.cn/Promotion/Manage；表单打开并读取，未提交；新增可见控件 40；获取 2026-10-02T07:19:41.943Z。

路径：.operation-btn[data-url=PromotionCashBack]:visible。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|促销类型:||label||
|满额立减|ddl_promotionRuleType|custom-select|- 请选择促销类型 - / 打折/特价 / 梯度优惠 / 套餐促销 / 满额立减[选中] / 换购促销 / 搭赠促销 / 第二件打折|
|促销名称:|edit_txtPromotionTitle|label||
|促销名称:|txt_promotionRuleName|text||
|适用范围:||label||
|会员专享|forCustomer|custom-check|关闭/未勾选|
|指定促销模式:||label||
|会员折上折||label||
|是 否|sb_enjoyCustomerDiscount|custom-switch|关闭/未勾选|
|开始日期:||label||
|开始日期:|txt_startDatetime|text||
|结束日期:||label||
|结束日期:|txt_endDatetime|text||
|更多促销日期与时间的设置请使用>>|moreset operation2|a||
|消费金额:||label||
|消费金额:|txt_requireAmount|text||
|立减金额:||label||
|立减金额:|txt_backAmount|text||
|按倍数叠加:||label||
|是 否|sb_stackable|custom-switch|关闭/未勾选|
|展开设置|btnGrey|div||
|支付设置:||label||
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|网店|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|是|sLeft|div||
|否|sRight|div||
|全场 全店所有商品参与促销|itemCheckBox selectionType|div||
|标签 包含选中标签的商品参与促销|itemCheckBox selectionType|div||
|分类 选中分类下的商品参与促销|itemCheckBox selectionType|div||
|品牌 选中品牌下的商品参与促销|itemCheckBox selectionType|div||
|商品 选择参与促销的商品|itemCheckBox selectionType|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 促销/换购促销

入口 https://beta18.pospal.cn/Promotion/Manage；表单打开并读取，未提交；新增可见控件 49；获取 2026-10-02T07:19:43.592Z。

路径：.operation-btn[data-url=PromotionProductRedemption]:visible。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|促销类型:||label||
|换购促销|ddl_promotionRuleType|custom-select|- 请选择促销类型 - / 打折/特价 / 梯度优惠 / 套餐促销 / 满额立减 / 换购促销[选中] / 搭赠促销 / 第二件打折|
|促销名称:|edit_txtPromotionTitle|label||
|促销名称:|txt_promotionRuleName|text||
|适用范围:||label||
|会员专享|forCustomer|custom-check|关闭/未勾选|
|指定促销模式:||label||
|会员折上折||label||
|是 否|sb_enjoyCustomerDiscount|custom-switch|关闭/未勾选|
|开始日期:||label||
|开始日期:|txt_startDatetime|text||
|结束日期:||label||
|结束日期:|txt_endDatetime|text||
|更多促销日期与时间的设置请使用>>|moreset operation2|a||
|消费满:||label||
|消费满:|txt_requireTotalAmount|text||
|元|ddl_requireType|custom-select|元[选中] / 件|
|补差价:||label||
|补差价:|txt_redemptionPrice|text||
|单笔订单活动最多使用:||label||
|单笔订单活动最多使用:|txt_limitTimes|text||
|换购条件整体加倍||label||
|是 否|swicth off|custom-switch|关闭/未勾选|
|限制购买同一商品才可享折扣||label||
|展开设置|btnGrey|div||
|换购商品:||label||
|换购商品:|txt_optionQuantity|text||
|支付设置:||label||
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|网店|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|是|sLeft|div||
|否|sRight|div||
|全场 全店所有商品参与消费|itemCheckBox selectionType|div||
|标签 包含选中标签的商品参与消费|itemCheckBox selectionType|div||
|分类 选中分类下的商品参与消费|itemCheckBox selectionType|div||
|品牌 选中品牌下的商品参与消费|itemCheckBox selectionType|div||
|商品 选择参与消费的商品|itemCheckBox selectionType|div||
|选择可换购的商品范围 0|item openPopup|div||
|选择可换购的商品范围|open|div||
|0|productNum|span||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 促销/搭赠促销

入口 https://beta18.pospal.cn/Promotion/Manage；表单打开并读取，未提交；新增可见控件 37；获取 2026-10-02T07:19:45.240Z。

路径：.operation-btn[data-url=PromotionGift]:visible。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|促销类型:||label||
|搭赠促销|ddl_promotionRuleType|custom-select|- 请选择促销类型 - / 打折/特价 / 梯度优惠 / 套餐促销 / 满额立减 / 换购促销 / 搭赠促销[选中] / 第二件打折|
|促销名称:|edit_txtPromotionTitle|label||
|促销名称:|txt_promotionRuleName|text||
|适用范围:||label||
|会员专享|forCustomer|custom-check|关闭/未勾选|
|指定促销模式:||label||
|会员折上折||label||
|是 否|sb_enjoyCustomerDiscount|custom-switch|关闭/未勾选|
|开始日期:||label||
|开始日期:|txt_startDatetime|text||
|结束日期:||label||
|结束日期:|txt_endDatetime|text||
|更多促销日期与时间的设置请使用>>|moreset operation2|a||
|促销方式||label||
|固定搭赠|singleSelector|custom-select|固定搭赠[选中] / 赠送最低价 / 任选搭赠|
|赠品选择策略:||label||
|支付设置:||label||
|优惠次数:|edit_txtPromotionlimitTimesTitle|label||
|优惠次数:|txt_promotionlimitTimes|text||
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|网店|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|是|sLeft|div||
|否|sRight|div||
|搭赠设置 未设置|item openPopup|div||
|搭赠设置|open|div||
|商家最优|itemCheckBox|div||
|顾客最优|itemCheckBox|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 促销/第二件打折

入口 https://beta18.pospal.cn/Promotion/Manage；表单打开并读取，未提交；新增可见控件 40；获取 2026-10-02T07:19:47.004Z。

路径：.operation-btn[data-url=PromotionSecondProductHalfPrice]:visible。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|促销类型:||label||
|第二件打折|ddl_promotionRuleType|custom-select|- 请选择促销类型 - / 打折/特价 / 梯度优惠 / 套餐促销 / 满额立减 / 换购促销 / 搭赠促销 / 第二件打折[选中]|
|促销名称:|edit_txtPromotionTitle|label||
|促销名称:|txt_promotionRuleName|text||
|适用范围:||label||
|会员专享|forCustomer|custom-check|关闭/未勾选|
|指定促销模式:||label||
|会员折上折||label||
|是 否|sb_enjoyCustomerDiscount|custom-switch|关闭/未勾选|
|开始日期:||label||
|开始日期:|txt_startDatetime|text||
|结束日期:||label||
|结束日期:|txt_endDatetime|text||
|更多促销日期与时间的设置请使用>>|moreset operation2|a||
|第二件折扣:||label||
|第二件折扣:|txt_secondProductDiscount|text||
|限制购买同一商品才可享折扣||label||
|是 否|swicth off|custom-switch|关闭/未勾选|
|限制优惠商品最大数量||label||
|是 否|edit_sb_limitMaxDiscountableQuantity|custom-switch|关闭/未勾选|
|展开设置|btnGrey|div||
|支付设置:||label||
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|网店|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|是|sLeft|div||
|否|sRight|div||
|全场 全店所有商品参与促销|itemCheckBox selectionType|div||
|标签 包含选中标签的商品参与促销|itemCheckBox selectionType|div||
|分类 选中分类下的商品参与促销|itemCheckBox selectionType|div||
|品牌 选中品牌下的商品参与促销|itemCheckBox selectionType|div||
|商品 选择参与促销的商品|itemCheckBox selectionType|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 促销/套餐促销

入口 https://beta18.pospal.cn/Promotion/Manage；表单打开并读取，未提交；新增可见控件 43；获取 2026-10-02T07:19:48.670Z。

路径：.operation-btn[data-url=PromotionCombo]:visible。

|控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|促销类型:||label||
|套餐促销|ddl_promotionRuleType|custom-select|- 请选择促销类型 - / 打折/特价 / 梯度优惠 / 套餐促销[选中] / 满额立减 / 换购促销 / 搭赠促销 / 第二件打折|
|套餐名称:|edit_txtPromotionTitle|label||
|套餐名称:|txt_promotionRuleName|text||
|适用范围:||label||
|会员专享|forCustomer|custom-check|关闭/未勾选|
|指定促销模式:||label||
|开始日期:||label||
|开始日期:|txt_startDatetime|text||
|结束日期:||label||
|结束日期:|txt_endDatetime|text||
|更多促销日期与时间的设置请使用>>|moreset operation2|a||
|在分类显示||label||
|是 否|swicth|custom-switch|开启/勾选|
|套餐标签||label||
|+选择标签|edit_btnSelectTags|div||
|套餐分类||label||
|请选择套餐分类|singleSelector|custom-select|请选择套餐分类[选中]|
|套餐说明:||label||
|(无标签)|edit_promotionComboDescription|textarea||
|(无标签)|html5_1k3tnni1n1ck4ebnr1l1jfijbi|file||
|支付设置:||label||
|优惠券验证（是否需要优惠券才可享受此优惠）||label||
|是 否|edit_sb_enablePromotionCoupon|custom-switch|关闭/未勾选|
|单点子商品自动组成套餐||label||
|是 否|edit_sb_notAutoMatchCombo|custom-switch|开启/勾选|
|内部备注:||label||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|网店|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|设置套餐明细 未设置|btnShowComboDetail|div||
|设置套餐明细|open|div||
|是|sLeft|div||
|否|sRight|div||
|默认图片 选择|btnDefaultImagePicker|div||
|默认图片|open|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

