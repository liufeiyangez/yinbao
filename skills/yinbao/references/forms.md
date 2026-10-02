# 已打开的表单与入口

范围：ERIN000 会话；产品/服务/次卡/会员新增入口在门店筛选 ERIN002 后打开；其余为只读打开空白表单，不等于 ERIN002 写入验证。没有点击保存/提交。密码字段及输入值不采集。

## 商品资料/新增表单

入口：https://beta18.pospal.cn/Product/Manage

获取：2026-10-02T06:34:38.809Z；新增可见控件已读取；未提交。

已执行只读路径：#ddl_subUsers → #ddl_subUsers li[optionvalue="4402560"] → .btnAddProduct。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnShowEditArea|a||
|是否启用||label||
|所属门店:||label||
|002 - erin002|edit_ddl_store|custom-select|ERIN埃琳(总部) / 001 - Mrs.HuaShi花诗肤人 / 002 - erin002[选中]|
|条码:||label||
|条码:|edit_barcode|text||
|生成|btn_createBarcode|div||
|品名:||label||
|品名:|edit_productName|text||
|分类:|edit_ddl_productCategory_label|label||
|- 请选择商品分类 -|edit_ddl_productCategory|custom-select|- 请选择商品分类 -[选中] / CODEXTEST产品分类 / 无（网店不显示）|
|售价:||label||
|售价:|edit_sellPrice|text||
|进价:||label||
|进价:|edit_buyPrice|text||
|库存:||label||
|库存: / 服务时长:|edit_stock|text||
|会员折扣:|edit_sb_isCustomerDiscount_label|label||
|批发价:||label||
|批发价:|edit_sellPrice2|text||
|主单位:||label||
|请选择|edit_ddl_unit|custom-select|请选择[选中] / 支 / 盒 / 套 / 瓶 / 片 / 桶|
|商品规格:||label||
|商品规格:|edit_attribute6|text||
|是否有其它规格||label||
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
|自定义1:|custom|label||
|自定义1:|edit_attribute1|text||
|自定义2:|custom|label||
|自定义2:|edit_attribute2|text||
|自定义3:|custom|label||
|自定义3:|edit_attribute3|text||
|商品标签||label||
|+ 选择标签|edit_btnSelectTags|div||
|商品描述:||label||
|(无标签)|edit_remarks|textarea||
|取消|btn cancel|div||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|启用|sLeft|div||
|禁用|sRight|div||
|编辑图片|btnShowEditImages|div||
|打开 关闭|edit_sb_minor|custom-switch|关闭/未勾选|
|打开|sLeft|div||
|○ -|edit_sb_isCustomerDiscount|custom-switch|开启/勾选|
|○|sLeft|div||
|-|sRight|div||
|是 否|edit_sb_moreSpec|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|供货商: 0|btnSupplierRanges|div||
|供货商:|open|div||

## 次卡资料/新增表单

入口：https://beta18.pospal.cn/PassProduct/ManageForBeauty

获取：2026-10-02T06:36:44.421Z；新增可见控件已读取；未提交。

已执行只读路径：#ddl_subUsers → #ddl_subUsers li[optionvalue="4402560"] → #btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnEditPassProduct|a||
|是否计次||label||
|所属门店:||label||
|ERIN埃琳(总部)|ddl_store|custom-select|ERIN埃琳(总部)[选中] / 001 - Mrs.HuaShi花诗肤人 / 002 - erin002|
|次卡名称:||label||
|次卡名称:|edit_description|text||
|次卡分类:||label||
|-请选择次卡分类-|ddl_passproductCategory|custom-select|-请选择次卡分类-[选中] / 历史卡项 / CODEXTEST卡项分类|
|销售价格:||label||
|销售价格:|edit_price|text||
|支持自定义购买次数||label||
|有效时间:||label||
|不限制|ddl_timeLimitType|custom-select|不限制[选中] / 限制使用天数 / 固定使用日期|
|售卖时允许设置有效时间||label||
|使用限制:||label||
|不限制|ddl_usageLimitType|custom-select|不限制[选中] / 每日限制次数 / 每周限制次数 / 每月限制次数|
|限制次数:||label||
|限制次数:|edit_usageLimitTimes|text||
|售卡范围||label||
|前往设置|operation2|a||
|会员折扣:||label||
|拼音码:||label||
|拼音码:|edit_pinyin|text||
|次卡标签||label||
|+ 选择标签|edit_btnSelectTags|div||
|备注:||label||
|(无标签)|edit_remarks|textarea||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|是 否|sb_timeLimitable|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|编辑图片|btnShowEditImages|div||
|普通次卡 支持消费单个服务的次卡|passproductType-setItem on|li||
|普通次卡 支持消费单个服务的次卡|passproductType-setContent|div||
|支持消费单个服务的次卡||div||
|套餐次卡 可限定每次消费一个或多个服务|passproductType-setItem|li||
|套餐次卡 可限定每次消费一个或多个服务|passproductType-setContent|div||
|可限定每次消费一个或多个服务||div||
|是 否|sb_timeCustomizable|custom-switch|开启/勾选|
|是 否|edit_sb_setTimeBySell|custom-switch|关闭/未勾选|
|实体店|sb_showInRshop|custom-check|关闭/未勾选|
|网店|sb_showInEshop|custom-check|关闭/未勾选|
|打开 关闭|edit_sb_minor|custom-switch|关闭/未勾选|
|打开|sLeft|div||
|○ -|edit_sb_isCustomerDiscount|custom-switch|开启/勾选|
|○|sLeft|div||
|-|sRight|div||

## 服务资料/新增表单

入口：https://beta18.pospal.cn/Product/Services

获取：2026-10-02T06:35:04.037Z；新增可见控件已读取；未提交。

已执行只读路径：#ddl_subUsers → #ddl_subUsers li[optionvalue="4402560"] → .btnAddProduct。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnShowEditArea|a||
|是否启用||label||
|是否计时||label||
|是否可预约||label||
|所属门店:||label||
|002 - erin002|edit_ddl_store|custom-select|ERIN埃琳(总部) / 001 - Mrs.HuaShi花诗肤人 / 002 - erin002[选中]|
|条码:||label||
|条码:|edit_barcode|text||
|生成|btn_createBarcode|div||
|服务名称:||label||
|服务名称:|edit_productName|text||
|分类:||label||
|- 请选择服务分类 -|edit_ddl_productCategory|custom-select|- 请选择服务分类 -[选中] / other / CODEXTEST服务分类|
|售价:||label||
|售价:|edit_sellPrice|text||
|成本:||label||
|成本:|edit_buyPrice|text||
|服务时长:||label||
|(无标签)|edit_serviceAtLeastMinutes|text||
|商品规格:||label||
|商品规格:|edit_attribute6|text||
|是否有其它规格||label||
|会员折扣:||label||
|拼音码:||label||
|拼音码:|edit_pinyin|text||
|商品标签||label||
|+ 选择标签|edit_btnSelectTags|div||
|备注:||label||
|(无标签)|edit_remarks|textarea||
|保存并生成次卡|saveWithPassProduct|div||
|取消|btn cancel|div||
|是 否|edit_sb_enable|custom-switch|开启/勾选|
|是|sLeft|div||
|否|sRight|div||
|是 否|edit_sb_isTiming|custom-switch|关闭/未勾选|
|是 否|edit_sb_canAppointed|custom-switch|开启/勾选|
|编辑图片|btnShowEditImages|div||
|是 否|edit_sb_moreSpec|custom-switch|关闭/未勾选|
|打开 关闭|edit_sb_minor|custom-switch|关闭/未勾选|
|打开|sLeft|div||
|○ -|edit_sb_isCustomerDiscount|custom-switch|开启/勾选|
|○|sLeft|div||
|-|sRight|div||

## 会员资料/新增表单

入口：https://beta18.pospal.cn/Customer/Manage

获取：2026-10-02T06:35:07.883Z；新增可见控件已读取；未提交。

已执行只读路径：#ddl_subUsers → #ddl_subUsers li[optionvalue="4402560"] → #btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|- 全部导购员 -|ddl_guiders|custom-select|- 全部导购员 -[选中] / [业务对象选项 2] / [业务对象选项 3] / [业务对象选项 4] / [业务对象选项 5] / [业务对象选项 6] / [业务对象选项 7]|
|编辑|operation2 btnShowDetail edit |span||
|详细||a||
|0|operation2 btnShowPassProduct|span||
|50|operation2 btnShowCouponCode|span||
|1|operation2 btnShowPassProduct|span||
|3|operation2 btnShowPassProduct|span||
|6|operation2 btnShowPassProduct|span||
|5|operation2 btnShowPassProduct|span||
|2|operation2 btnShowPassProduct|span||
|4|operation2 btnShowPassProduct|span||
|8|operation2 btnShowPassProduct|span||
|是否启用||label||
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
|取消|btn cancel|div||
|详细|operation2|span||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|启用|sLeft|div||
|禁用|sRight|div||
|是 否|edit_sb_credit|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|编辑更多会员档案>>|link_moreCustomerInfo|span||

## 耗材管理/新增表单

入口：https://beta18.pospal.cn/Product/Tastes

获取：2026-10-02T06:39:44.343Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|耗材组名称:||label||
|耗材组名称:|edit_packageName|text||
|耗材组排序:||label||
|耗材组排序:|edit_packageSortValue|text||
|耗材选择方式||label||
|是否必选||label||
|是否参与打折||label||
|保存|btn save|div||
|取消|btn cancel|div||
|(无标签)|html5_1k3tle5fk1lulckh1j6nbvorou3|file||
|添加耗材选项|btnAddItem|div||
|多选 单选|sb_packageType|custom-switch|开启/勾选|
|多选|sLeft|div||
|单选|sRight|div||
|是 否|sb_isRequired|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|是 否|sb_enjoyDiscount|custom-switch|关闭/未勾选|
|适用商品范围 0|item openPopup js_product_range|div||
|适用商品范围|open|div||

## 供货商资料/新增表单

入口：https://beta18.pospal.cn/Supplier/Manage

获取：2026-10-02T06:39:46.202Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAddSupplier。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
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
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|启用|sLeft|div||
|禁用|sRight|div||
|0|specialProductCount|span||
|是 否|edit_sb_supplierStoreEnable|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|关联商品功能已更新，进入新版设置|btnEditGoSupplierProduct|div||
|关联商品功能已更新，进入新版设置|open|div||

## 充值规则/新增表单

入口：https://beta18.pospal.cn/Recharge/Rule

获取：2026-10-02T06:39:48.751Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|编辑|operation2 btnEditRule|a||
|复用|operation2 btnReuseRule|a||
|删除|operation2 btnDelRule|a||
|优惠券（3000元DMDC产品礼包）X 1张|operation2 openPromotionCoupon|a||
|优惠券（润月雅水货高保湿礼盒提货券）X 1张|operation2 openPromotionCoupon|a||
|优惠券（500元珀斐丽产品礼包）X 1张|operation2 openPromotionCoupon|a||
|是否启用||label||
|创建门店:||label||
|ERIN埃琳(总部)|ddl_store|custom-select|ERIN埃琳(总部)[选中] / 001 - Mrs.HuaShi花诗肤人 / 002 - erin002|
|适用会员:||label||
|请选择适用等级|ddl_customerCategory|custom-select|无 / 花诗会员 / 紫花会员 / 银花会员 / 金花会员 / 玉花会员|
|适用范围:||label||
|充值项目:||label||
|通用余额|ddl_chargeType|custom-select|通用余额[选中] / 折扣卡 - 会员卡|
|充值金额:||label||
|充值金额:|edit_requireAmount|text||
|赠送项目:||label||
|通用余额|ddl_giftType singleSelector|custom-select|通用余额[选中] / 会员积分 / 折扣卡 - 会员卡 / 优惠券 - 项目体验价 / 优惠券 - 新会员200元现金券 / 优惠券 - 新会员100元现金券 / 优惠券 - 新会员50元现金券 / 优惠券 - 新会员211元项目升级券 / 次卡 - 纳米小气泡全脸清洁疗程卡 / 次卡 - 纳米小气泡T区清洁疗程卡 / 次卡 - 水娃娃补水套餐疗程卡 / 次卡 - 瓷娃娃美白套餐疗程卡 / 次卡 - 多效修护抗敏套餐疗程卡 / 次卡 - 类人胶原抗皱套餐疗程卡 / 次卡 - 问题皮肤修复套餐疗程卡 / 次卡 - 水光导入疗程卡 / 次卡 - 面部经络刮痧疗程卡 / 次卡 - 眼部精油拨筋疗程卡 / 次卡 - 黄金电眼射频疗程卡 / 次卡 - 脉动能量操盘手疗程卡 / 次卡 - LED光疗疗程卡 / 次卡 - 磁石润颜护理疗程卡 / 次卡 - 冷喷疗程卡 / 次卡 - 寡肽逆龄管理疗程卡 / 次卡 - 中胚层疗法-肌底修护小疗程 / 次卡 - 中胚层疗法-肌底修护大疗程 / 次卡 - 中胚层疗法-美白淡斑小疗程 / 次卡 - 中胚层疗法-美白淡斑大疗程 / 次卡 - 中胚层疗法-紧致抗衰小疗程 / 次卡 - 中胚层疗法-紧致抗衰大疗程 / 次卡 - EBOX背部舒缓肩颈保养疗程卡 / 次卡 - SF背部舒缓肩颈保养疗程卡 / 次卡 - SF养源修护卵巢保养疗程卡 / 次卡 - EBOX养源修护卵巢保养疗程卡 / 次卡 - SF花色滋养乳腺保养疗程卡 / 次卡 - EBOX花色滋养乳腺保养疗程卡 / 次卡 - SF魅力舒畅固腰强肾疗程卡 / 次卡 - EBOX魅力舒畅固腰强肾疗程卡 / 次卡 - 头疗（惠碧康）疗程卡 / 次卡 - EBOX射频疗法疗程卡 / 次卡 - 惠碧康肩颈润舒疗程卡 / 次卡 - 新款幻彩眼膜疗程卡 / 次卡 - 姜暖舒润保养（乐享）疗程卡 / 次卡 - 姜缓舒润保养（悦享）疗程卡 / 次卡 - 草本藏膏泥鲜药灸疗程卡 / 次卡 - 草本暖养泥膏疗程卡 / 次卡 - 软膜疗程卡 / 次卡 - 水分缘精华按摩霜疗程卡 / 次卡 - 毛巾次卡 / 次卡 - 艾灸疗法疗程卡 / 次卡 - 面部检测疗程卡 / 次卡 - 千年草本瑶浴疗程卡 / 次卡 - 私密养护疗程卡 / 次卡 - 任选部位身体卡 / 次卡 - （倍扶因子）玻尿酸面膜（存店） / 次卡 - 玉养天颜怡润滋养套组 / 次卡 - 69.8周年庆面护卡 / 次卡 - 69.8周年庆肩颈卡 / 次卡 - （黛昂丝）润丰颜-舒颜疗程卡 / 次卡 - （黛昂丝）润丰颜-瓷肌疗程卡 / 次卡 - （黛昂丝）润丰颜-水润疗程卡 / 次卡 - （黛昂丝）氧乐多疗程卡 / 次卡 - （黛昂丝）润丰颜体验卡 / 次卡 - （黛昂丝）睛彩眼部疗程卡 / 次卡 - （倍扶因子）类人胶原修护面膜 / 次卡 - （黛昂丝）氧乐多体验 / 次卡 - 680类人季卡 / 次卡 - 980身体季卡 / 次卡 - 198身体体验卡 / 次卡 - 惠碧康活力滋养保养疗程卡 / 次卡 - 惠碧康玲珑臻美保养疗程卡 / 次卡 - 惠碧康粉红佳人保养疗程卡 / 次卡 - 惠碧康肩颈舒缓保养疗程卡 / 次卡 - 惠碧康腰部蕴美保养疗程卡 / 次卡 - 惠碧康蛇蝎通络保养疗程卡 / 次卡 - 惠碧康魅力娇润保养疗程卡 / 次卡 - 闺蜜卡 / 次卡 - 980肩颈疗程卡12次 / 次卡 - 99包月卡 / 次卡 - 99包月卡升级（瓷娃娃） / 次卡 - 99包月卡升级（多效修护） / 次卡 - 99包月卡升级（类人胶原） / 次卡 - 水光导入秒杀 / 次卡 - 腿部赠送 / 次卡 - 68元新客卡（彩页专享） / 次卡 - 黛昂丝（益肤套）疗程卡 / 次卡 - （D-cool）牛奶肌疗程卡 / 次卡 - （D-cool）牛奶肌单次 / 次卡 - 任选部位身体单次 / 次卡 - （进店）68新客卡 / 次卡 - 埃琳女神卡（脱毛） / 次卡 - 埃琳女神卡（身体） / 次卡 - 身体特价198月卡 / 次卡 - 颈部护理疗程卡 / 次卡 - 中药熏蒸太空舱疗程卡 / 次卡 - 纯阳雷火艾灸疗程卡 / 次卡 - OPT冰点脱毛（小手臂） / 次卡 - 激光脱毛（小手臂） / 次卡 - OPT冰点脱毛（唇毛） / 次卡 - 激光脱毛（唇毛） / 次卡 - OPT冰点脱毛（小腿） / 次卡 - 激光脱毛（小腿） / 次卡 - OPT冰点脱毛（全手） / 次卡 - 激光脱毛（全手） / 次卡 - OPT冰点脱毛（发际线） / 次卡 - 激光脱毛（发际线） / 次卡 - OPT冰点脱毛（腋下） / 次卡 - 激光脱毛（腋下） / 次卡 - OPT冰点脱毛（全脸） / 次卡 - 激光脱毛（全脸） / 次卡 - OPT冰点脱毛（全腿） / 次卡 - 激光脱毛（全腿） / 次卡 - 全身 / 次卡 - 激光脱毛（全身） / 次卡 - （倍扶因子）多效修护冰膜存店 / 次卡 - 纳米小气泡全脸清洁疗程卡6次 / 次卡 - 千年草本瑶浴单次 / 次卡 - 雷火扶阳透灸单次 / 次卡 - 惠碧康玲珑臻美塑形疗程 / 次卡 - 磁石润颜护理单次 / 次卡 - 脱毛体验单次 / 次卡 - 手护疗程卡 / 次卡 - 毛巾次卡 / 次卡 - 水疗单次 / 次卡 - 水光焕肤疗程 / 次卡 - 斯莉米尔塑形疗程卡 / 次卡 - 斯莉米尔脾胃疗程卡 / 次卡 - 1斯莉米尔瘦身疗程卡 / 次卡 - 商家体验卡（水娃娃） / 次卡 - 埃琳女神卡（新身体） / 次卡 - 埃琳女神卡（新脱毛） / 次卡 - EBOX胶原再生眼部抗衰疗程 / 次卡 - 医用冷敷贴（存店） / 次卡 - 祛湿排寒泥灸（二送一） / 次卡 - 发汗排毒瑶浴（一送一） / 次卡 - 千年草本瑶浴活动（送腹部） / 次卡 - 祛湿排寒草本药灸 / 次卡 - 祛湿排寒草本泥灸 / 次卡 - 花诗原萃精油超声波水愈疗程卡 / 次卡 - 花诗特色中医面部穴位按摩6次卡 / 次卡 - 云朵活氧泡泡清洁6次卡 / 次卡 - 面部养肤刮痧理疗6次卡 / 次卡 - 眼部养肤拨筋理疗6次卡 / 次卡 - 瀑布浸润水光导入6次卡 / 次卡 - 花诗特色中医面部穴位按摩6次卡 / 次卡 - 韩国纳米小气泡深层净颜6次卡 / 次卡 - D-cool深层养护6次卡 / 次卡 - Ebox射频紧肤6次卡 / 次卡 - 中胚层深层导入6次卡 / 次卡 - 黄金电眼射频眼部抗衰6次卡 / 次卡 - 美胸护胸乳腺保养6次卡 / 次卡 - 淋巴净排疏通保养6次卡 / 次卡 - 纤体塑形体型管理6次卡 / 次卡 - 暖宫温经宫巢保养6次卡 / 次卡 - 花诗古法中式精油按摩6次卡 / 次卡 - 出水芙蓉百草汤瑶浴6次卡 / 次卡 - 超声波香氛精油水疗6次卡 / 次卡 - 王牌项目五选一 / 次卡 - 康养项目五选一 / 次卡 - 苗依天使体验套 / 次卡 - 黑金超光子极致嫩肤季卡 / 次卡 - 黑金超光子极致嫩肤半年卡 / 次卡 - 黑金超光子极致嫩肤年卡 / 次卡 - 520爱的礼遇限定套餐 / 次卡 - 苗依天使3次体验卡 / 次卡 - 乳酸菌微生态平衡调理疗程 / 次卡 - 危肌抗炎管理疗程 / 次卡 - 敏肌镇定舒缓管理疗程 / 次卡 - sos急救镇定管理疗程 / 次卡 - 超分子净炎管理疗程 / 次卡 - 韩国PH平衡痘肌调理疗程 / 次卡 - 毛囊清洁术痘肌闭口调理初阶疗程 / 次卡 - 水漾高保湿管理疗程 / 次卡 - 出水芙蓉百草汤瑶浴次卡 / 次卡 - 纤体单部位塑形管理疗程卡 / 次卡 - 身体多部位任选年卡疗程卡 / 次卡 - 身体单部位经络管理疗程卡 / 次卡 - 浓密大部位（背部/全腿/比基尼）疗程卡 / 次卡 - 正常大部位（背部/全腿/比基尼）疗程卡 / 次卡 - 稀疏大部位（背部/全腿/比基尼）疗程卡 / 次卡 - 浓密中部位（腋毛/手臂/络腮胡）疗程卡 / 次卡 - 正常中部位（腋毛/手臂/络腮胡）疗程卡 / 次卡 - 稀疏中部位（腋毛/手臂/络腮胡）疗程卡 / 次卡 - 浓密小部位（唇毛/发际线/手）疗程卡 / 次卡 - 正常小部位（唇毛/发际线/手）疗程卡 / 次卡 - 稀疏小部位（唇毛/发际线/手）疗程卡 / 次卡 - 脉冲光祛红血丝治疗疗程卡 / 次卡 - 光能色素淡化疗程卡 / 次卡 - 痘肌控油杀菌疗程卡 / 次卡 - 超光子极致嫩肤疗程卡 / 次卡 - 紧致抗衰淡纹（眼部）2st/c疗程卡 / 次卡 - 紧致抗衰淡纹 3st/c疗程卡 / 次卡 - 脂肪代谢紧致 3st/c疗程卡 / 次卡 - 敏肌修复重建 3st/c疗程卡 / 次卡 - 美白色素淡化 3st/c疗程卡 / 次卡 - 痘肌控油杀菌 3st/c疗程卡 / 次卡 - 明眸晶彩眼部抗衰（黄金电眼）疗程卡 / 次卡 - 凝时抗皱无创水光（皱纹小熨斗/平滑肌理）疗程卡 / 次卡 - 青春塑颜无创水光（胶原重启/紧塑轮廓）疗程卡 / 次卡 - EBOX射频紧肤疗法疗程卡 / 次卡 - 焕彩鲜活无创水光（三重阻黑/暗沉肌定制）疗程卡 / 次卡 - 极光焕白焕肤疗程卡 / 次卡 - 焕彩光能疗法疗程卡 / 次卡 - 积雪草舒缓无创水光（水油平衡/炎敏调节）疗程卡 / 次卡 - 依克多因无创水光（重建屏障/光电修复/细胞再生）疗程卡 / 次卡 - 乳酸菌微生态平衡管理疗程卡 / 次卡 - 危机优化抗炎管理疗程卡 / 次卡 - SOS皮肤屏障修复疗程卡 / 次卡 - 敏肌镇定舒缓管理疗程卡 / 次卡 - 净化调理无创水光（毛孔/痘肌精细化管理）疗程卡 / 次卡 - 菌群平衡无创水光（华熙/妈生好皮）疗程卡 / 次卡 - 联合焕肤疗程卡 / 次卡 - 壬二酸焕肤疗程卡 / 次卡 - 超分子净颜管理疗程卡 / 次卡 - 油痘肌PH平衡管理疗程卡 / 次卡 - 古法油愈眼部拨筋疗程卡 / 次卡 - 古法油愈面部排毒疗程卡 / 次卡 - 古法面部按摩维养疗程卡 / 次卡 - 水活高保湿无创水光（全层补水/润泽肌底）疗程卡 / 次卡 - 中胚层深层导入疗程卡 / 次卡 - 水氧玻玻牛奶肌疗程卡 / 次卡 - 韩国纳米小气泡深层净颜疗程卡 / 次卡 - 局部黑头粉刺/脂质微丝/小棘毛疗程卡 / 次卡 - 毛囊清洁术/痘肌闭口初阶疗程卡 / 次卡 - 超声柔化管理超声铲疗程卡 / 次卡 - 1314焕肤卡 / 次卡 - 388 / 次卡 - 360颈脑理疗疗程卡 / 次卡 - T淋巴疗程卡 / 次卡 - 黄金排毒疗程卡 / 次卡 - 天鹅美颈疗程卡 / 次卡 - 轻头疗 / 次卡 - 凝时紧致美眸疗程 / 次卡 - 蜜桃臀 / 次卡 - 健步飞疗程 / 次卡 - 水润净透护理年卡 / 次卡 - 玻尿酸无创水光年卡 / 次卡 - 均衡养护水氧护理年卡 / 次卡 - 胶原紧致锁龄护理年卡 / 次卡 - 肩颈舒缓年卡 / 次卡 - 气血通年卡 / 次卡 - 360颈脑理疗年卡 / 次卡 - 黄金排毒年卡 / 次卡 - 水润净透护理半年卡 / 次卡 - 玻尿酸无创水光半年卡 / 次卡 - 均衡养护水氧护理半年卡 / 次卡 - 胶原紧致锁龄护理半年卡 / 次卡 - 肩颈舒缓半年卡 / 次卡 - 气血通半年卡 / 次卡 - 360颈脑理疗半年卡 / 次卡 - 黄金排毒半年卡 / 次卡 - 七夕限定女神卡 / 次卡 - 超光子极致嫩肤单次体验 / 次卡 - 1111双十一活动（基础护理） / 次卡 - DMDC单次体验 / 次卡 - 1111双十一活动（DMDC） / 次卡 - 111卡 / 次卡 - 水疗灌注SPA次卡 / 次卡 - 毛囊清洁术丨新客体验次卡 / 次卡 - DMDC危机优化急护管理3次卡 / 次卡 - 4999皮肤综合管理卡 / 次卡 - 超值面部三项次卡 / 次卡 - 眼周舒养拨筋次卡 / 次卡 - 润色养颜排毒次卡 / 次卡 - 净颜清洁护理次卡 / 次卡 - 轻肤面按护理次卡 / 次卡 - 三暖一通肩背养护10次卡 / 次卡 - OMEGA深层清洁 综合养护次卡 / 次卡 - 修护无创水光次卡 / 次卡 - 胶原无创水光次卡 / 次卡 - 亮颜无创水光次卡 / 次卡 - 润泽无创水光次卡 / 次卡 - 修护全面养护套餐10次卡 / 次卡 - 胶原全面养护套餐10次卡 / 次卡 - 亮颜全面养护套餐10次卡 / 次卡 - 润泽全面养护套餐10次卡 / 次卡 - 危机优化抗炎管理次卡 / 次卡 - SOS皮肤屏障修复次卡 / 次卡 - 油痘肌PH平衡管理10次卡 / 次卡 - 华熙依克多因10次卡 / 次卡 - 水氧玻玻牛奶肌10次卡 / 次卡 - 华熙全层水光10次卡 / 次卡 - 华熙胶原炮10次卡 / 次卡 - 明眸晶彩眼部抗衰10次卡 / 次卡 - 敏肌镇定舒缓管理10次卡 / 次卡 - 毛囊清洁术10次卡 / 次卡 - 华熙追光者10次卡 / 次卡 - EBOX射频紧肤10次卡 / 次卡 - 油痘肌PH平衡管理5次卡 / 次卡 - 华熙依克多因5次卡 / 次卡 - 水氧玻玻牛奶肌5次卡 / 次卡 - 华熙全层水光5次卡 / 次卡 - 华熙胶原炮5次卡 / 次卡 - 明眸晶彩眼部抗衰5次卡 / 次卡 - 敏肌镇定舒缓管理5次卡 / 次卡 - 毛囊清洁术5次卡 / 次卡 - 华熙追光者5次卡 / 次卡 - EBOX射频紧肤5次卡 / 次卡 - 乳酸菌微生态平衡管理6次卡 / 次卡 - 乳酸菌微生态平衡管理3次卡 / 次卡 - 祛湿排寒草本药灸次卡 / 次卡 - 38拓客卡 / 次卡 - 古法中式精油SPA10次卡 / 次卡 - 三暖一通肩背养护5次卡 / 次卡 - 古法中式精油SPA5次卡 / 次卡 - 修护全面养护套餐5次卡 / 次卡 - 胶原全面养护套餐5次卡 / 次卡 - 亮颜全面养护套餐5次卡 / 次卡 - 润泽全面养护套餐5次卡|
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
|每个会员仅限使用一次||label||
|仅首次充值可用||label||
|排序序号:||label||
|排序序号:|edit_sortOrder|text||
|取消|btn cancel|div||
|最近7天使用次数|tableHeadText|div||
|启用 禁用|edit_sb_enable|custom-switch|开启/勾选|
|启用|sLeft|div||
|禁用|sRight|div||
|使用门店: 0|assignStores|div||
|使用门店:|open|div||
|实体店|edit_cb_showInRShop|custom-check|关闭/未勾选|
|网店|edit_cb_showInEShop|custom-check|关闭/未勾选|
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
|是 否|edit_sb_allowCustomGiftValue|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|是 否|edit_sb_ruleUseTimesForOneCustomer|custom-switch|关闭/未勾选|
|是 否|edit_sb_ruleUseForFirstRecharge|custom-switch|关闭/未勾选|

## 优惠券/新增表单

入口：https://beta18.pospal.cn/Promotion/Coupon

获取：2026-10-02T06:39:51.584Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|ERIN埃琳(总部)|ddl_store|custom-select|ERIN埃琳(总部)[选中] / 001 - Mrs.HuaShi花诗肤人 / 002 - erin002|
|- 请选择优惠券类型 -|ddl_promotionCouponType|custom-select|- 请选择优惠券类型 -[选中] / 全场抵现券 / 品类抵现券 / 单品抵现券 / 全场打折券 / 品类打折券 / 单品打折券 / 赠品提货券 / 运费抵扣券|
|优惠券名:|edit_txtPromotionTitle|label||
|优惠券名:|txt_promotionCouponName|text||
|领券开始日期:|txt_makeStartDate|text||
|领券结束日期:|txt_makeEndDate|text||
|结束日期:|txt_endDate|text||
|开始日期:|txt_startDate|text||
|(无标签)|edit_nowAvaliableDays|text||
|(无标签)|edit_beginDays|text||
|(无标签)|edit_avaliableDays|text||
|(无标签)|edit_promotionCouponDescription|textarea||
|(无标签)|html5_1k3tlebop1k8p1di12rd169uuc63|file||
|(无标签)|txt_internalRemark|textarea||
|取消|btn cancel|div||
|使用门店: 0|assignStores|div||
|使用门店:|open|div||
|会员专享|forCustomer|div||
|线上|forEShop|div||
|实体店|forRShop|div||
|自取|promotionModes_selfTaking|div||
|外卖|promotionModes_takeOut|div||
|是 否|edit_sb_moreTimeSetting|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|各门店所有支付方式|itemCheckBox|div||
|部分支付方式|itemCheckBox|div||
|是 否|edit_sb_assignedUserCanCreateCode|custom-switch|开启/勾选|
|是 否|edit_sb_ruleAssignedUserCanUse|custom-switch|开启/勾选|
|是 否|edit_sb_couponPrintable|custom-switch|关闭/未勾选|
|是 否|edit_sb_salable|custom-switch|关闭/未勾选|
|是 否|edit_sb_getable|custom-switch|关闭/未勾选|
|是 否|edit_sb_giftAble|custom-switch|关闭/未勾选|
|是 否|edit_sb_enableCustomCode|custom-switch|关闭/未勾选|
|是 否|edit_sb_countAmountInUse|custom-switch|关闭/未勾选|
|优惠券图片 选择|btnCouponImagePicker|div||
|优惠券图片|open|div||
|+|selectedCouponImage|div||
|+|jiapic|span||
|营销活动标签: 选择|marketingActivityTagSelectorBtn|div||
|营销活动标签:|open|div||

## 折扣卡/新增表单

入口：https://beta18.pospal.cn/ShoppingCard/Rule

获取：2026-10-02T06:39:53.817Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|允许售卖||label||
|允许跨店消费||label||
|制卡门店:||label||
|ERIN埃琳(总部)|ddl_store|custom-select|ERIN埃琳(总部)[选中] / 001 - Mrs.HuaShi花诗肤人 / 002 - erin002|
|折扣卡名:||label||
|折扣卡名:|edit_name|text||
|使用期限:||label||
|有效天数:||label||
|有效天数:|edit_durationInDays|text||
|单笔最高可用比例:||label||
|单笔最高可用比例:|edit_payLimit|text||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|允许 禁售|edit_sb_allowSell|custom-switch|开启/勾选|
|允许|sLeft|div||
|禁售|sRight|div||
|允许 禁止|edit_allowDiffStoreUse|custom-switch|开启/勾选|
|禁止|sRight|div||
|使用门店: 0|assignStores|div||
|使用门店:|open|div||
|永久有效 限制天数|edit_sb_isForever|custom-switch|开启/勾选|
|永久有效|sLeft|div||
|限制天数|sRight|div||
|购买商品分类范围|open|div||
|全选|checkBoxDivN checkall checkBoxDiv|custom-check|关闭/未勾选|
|卸妆洁面|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|养护套餐次卡|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|水类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|基础养护次卡|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|乳液类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|深层养护次卡|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|精华液|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|肤质调理次卡|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|纯液原液|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|苗方调理次卡|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|面霜|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|身体养护次卡|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|面膜类|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|DPL脱毛疗程|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|其他|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|深层疗肤次卡|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|面部套盒|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|历史卡项|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|身体套盒|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|院用消耗|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|礼品|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|苗方调理|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|DPL冰点无痛脱毛|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|历史项目|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|历史产品|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|基础养护|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|深层养护|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|肤质调理|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|深层疗肤|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|身体养护|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|养护套餐|checkBoxDivN option checkBoxDiv|custom-check|关闭/未勾选|
|设置分类折扣: 0|categoryDiscountSetting|div||
|设置分类折扣:|open|div||
|设置特殊商品折扣: 0|productDiscountSetting|div||
|设置特殊商品折扣:|open|div||

## 预付卡/新增表单

入口：https://beta18.pospal.cn/PrepaidCard/Rule

获取：2026-10-02T06:39:55.658Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|制卡门店:||label||
|ERIN埃琳(总部)|ddl_store|custom-select|ERIN埃琳(总部)[选中] / 001 - Mrs.HuaShi花诗肤人 / 002 - erin002|
|预付卡名:||label||
|预付卡名:|edit_name|text||
|卡面金额:||label||
|(无标签)|edit_cardAmount|text||
|销售价格:||label||
|(无标签)|edit_sellPrice|text||
|是否限制使用商品范围||label||
|折扣卡:||label||
|- 选择预付卡 -|ddl_shoppingCardRule|custom-select|- 选择预付卡 -[选中] / 会员卡|
|开始日期:||label||
|开始日期:|edit_beginDateTime|text||
|结束日期:||label||
|结束日期:|edit_endDateTime|text||
|售卡范围||label||
|会员折上折||label||
|上传图片|btnEditLogo|div||
|(无标签)|html5_1k3tlegi11avi1hohpf3vq46gk3|file||
|说明:||label||
|(无标签)|edit_remarks|textarea||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|使用门店: 0|assignStores|div||
|使用门店:|open|div||
|是 否|sb_prepaidCardType|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|实体店|sb_sellInRshop|custom-check|关闭/未勾选|
|网店|sb_sellInEshop|custom-check|关闭/未勾选|
|是 否|edit_sb_enjoyCustomerDiscount|custom-switch|开启/勾选|

## 礼品包/新增表单

入口：https://beta18.pospal.cn/GiftPackage/Manage

获取：2026-10-02T06:39:58.373Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|礼品包名称:|edit_txtgiftPackageTitle|label||
|礼品包名称:|txt_giftPackageName|text||
|通用余额:||label||
|通用余额:|edit_rewardMoney|text||
|赠送积分:||label||
|赠送积分:|edit_rewardPoint|text||
|优惠券:||label||
|已选中 0 种，0 张优惠券|ddl_fresherPromotionCoupon|custom-select|新会员211元项目升级券X / 新会员50元现金券X / 新会员100元现金券X / 新会员200元现金券X / 项目体验价X|
|折扣卡:||label||
|已选中 0 种，折扣卡共 0 元|ddl_fresherShoppingCard|custom-select|会员卡元|
|次卡:||label||
|已选中 0 种，0 张次卡|ddl_fresherPassProduct|custom-select|纳米小气泡全脸清洁疗程卡X / 纳米小气泡T区清洁疗程卡X / 水娃娃补水套餐疗程卡X / 瓷娃娃美白套餐疗程卡X / 多效修护抗敏套餐疗程卡X / 类人胶原抗皱套餐疗程卡X / 问题皮肤修复套餐疗程卡X / 水光导入疗程卡X / 面部经络刮痧疗程卡X / 眼部精油拨筋疗程卡X / 黄金电眼射频疗程卡X / 脉动能量操盘手疗程卡X / LED光疗疗程卡X / 磁石润颜护理疗程卡X / 冷喷疗程卡X / 寡肽逆龄管理疗程卡X / 中胚层疗法-肌底修护小疗程X / 中胚层疗法-肌底修护大疗程X / 中胚层疗法-美白淡斑小疗程X / 中胚层疗法-美白淡斑大疗程X / 中胚层疗法-紧致抗衰小疗程X / 中胚层疗法-紧致抗衰大疗程X / EBOX背部舒缓肩颈保养疗程卡X / SF背部舒缓肩颈保养疗程卡X / SF养源修护卵巢保养疗程卡X / EBOX养源修护卵巢保养疗程卡X / SF花色滋养乳腺保养疗程卡X / EBOX花色滋养乳腺保养疗程卡X / SF魅力舒畅固腰强肾疗程卡X / EBOX魅力舒畅固腰强肾疗程卡X / 头疗（惠碧康）疗程卡X / EBOX射频疗法疗程卡X / 惠碧康肩颈润舒疗程卡X / 新款幻彩眼膜疗程卡X / 姜暖舒润保养（乐享）疗程卡X / 姜缓舒润保养（悦享）疗程卡X / 草本藏膏泥鲜药灸疗程卡X / 草本暖养泥膏疗程卡X / 软膜疗程卡X / 水分缘精华按摩霜疗程卡X / 毛巾次卡X / 艾灸疗法疗程卡X / 面部检测疗程卡X / 千年草本瑶浴疗程卡X / 私密养护疗程卡X / 任选部位身体卡X / （倍扶因子）玻尿酸面膜（存店）X / 玉养天颜怡润滋养套组X / 69.8周年庆面护卡X / 69.8周年庆肩颈卡X / （黛昂丝）润丰颜-舒颜疗程卡X / （黛昂丝）润丰颜-瓷肌疗程卡X / （黛昂丝）润丰颜-水润疗程卡X / （黛昂丝）氧乐多疗程卡X / （黛昂丝）润丰颜体验卡X / （黛昂丝）睛彩眼部疗程卡X / （倍扶因子）类人胶原修护面膜X / （黛昂丝）氧乐多体验X / 680类人季卡X / 980身体季卡X / 198身体体验卡X / 惠碧康活力滋养保养疗程卡X / 惠碧康玲珑臻美保养疗程卡X / 惠碧康粉红佳人保养疗程卡X / 惠碧康肩颈舒缓保养疗程卡X / 惠碧康腰部蕴美保养疗程卡X / 惠碧康蛇蝎通络保养疗程卡X / 惠碧康魅力娇润保养疗程卡X / 闺蜜卡X / 980肩颈疗程卡12次X / 99包月卡X / 99包月卡升级（瓷娃娃）X / 99包月卡升级（多效修护）X / 99包月卡升级（类人胶原）X / 水光导入秒杀X / 腿部赠送X / 68元新客卡（彩页专享）X / 黛昂丝（益肤套）疗程卡X / （D-cool）牛奶肌疗程卡X / （D-cool）牛奶肌单次X / 任选部位身体单次X / （进店）68新客卡X / 埃琳女神卡（脱毛）X / 埃琳女神卡（身体）X / 身体特价198月卡X / 颈部护理疗程卡X / 中药熏蒸太空舱疗程卡X / 纯阳雷火艾灸疗程卡X / OPT冰点脱毛（小手臂）X / 激光脱毛（小手臂）X / OPT冰点脱毛（唇毛）X / 激光脱毛（唇毛）X / OPT冰点脱毛（小腿）X / 激光脱毛（小腿）X / OPT冰点脱毛（全手）X / 激光脱毛（全手）X / OPT冰点脱毛（发际线）X / 激光脱毛（发际线）X / OPT冰点脱毛（腋下）X / 激光脱毛（腋下）X / OPT冰点脱毛（全脸）X / 激光脱毛（全脸）X / OPT冰点脱毛（全腿）X / 激光脱毛（全腿）X / 全身X / 激光脱毛（全身）X / （倍扶因子）多效修护冰膜存店X / 纳米小气泡全脸清洁疗程卡6次X / 千年草本瑶浴单次X / 雷火扶阳透灸单次X / 惠碧康玲珑臻美塑形疗程X / 磁石润颜护理单次X / 脱毛体验单次X / 手护疗程卡X / 毛巾次卡X / 水疗单次X / 水光焕肤疗程X / 斯莉米尔塑形疗程卡X / 斯莉米尔脾胃疗程卡X / 1斯莉米尔瘦身疗程卡X / 商家体验卡（水娃娃）X / 埃琳女神卡（新身体）X / 埃琳女神卡（新脱毛）X / EBOX胶原再生眼部抗衰疗程X / 医用冷敷贴（存店）X / 祛湿排寒泥灸（二送一）X / 发汗排毒瑶浴（一送一）X / 千年草本瑶浴活动（送腹部）X / 祛湿排寒草本药灸X / 祛湿排寒草本泥灸X / 花诗原萃精油超声波水愈疗程卡X / 花诗特色中医面部穴位按摩6次卡X / 云朵活氧泡泡清洁6次卡X / 面部养肤刮痧理疗6次卡X / 眼部养肤拨筋理疗6次卡X / 瀑布浸润水光导入6次卡X / 花诗特色中医面部穴位按摩6次卡X / 韩国纳米小气泡深层净颜6次卡X / D-cool深层养护6次卡X / Ebox射频紧肤6次卡X / 中胚层深层导入6次卡X / 黄金电眼射频眼部抗衰6次卡X / 美胸护胸乳腺保养6次卡X / 淋巴净排疏通保养6次卡X / 纤体塑形体型管理6次卡X / 暖宫温经宫巢保养6次卡X / 花诗古法中式精油按摩6次卡X / 出水芙蓉百草汤瑶浴6次卡X / 超声波香氛精油水疗6次卡X / 王牌项目五选一X / 康养项目五选一X / 苗依天使体验套X / 黑金超光子极致嫩肤季卡X / 黑金超光子极致嫩肤半年卡X / 黑金超光子极致嫩肤年卡X / 520爱的礼遇限定套餐X / 苗依天使3次体验卡X / 乳酸菌微生态平衡调理疗程X / 危肌抗炎管理疗程X / 敏肌镇定舒缓管理疗程X / sos急救镇定管理疗程X / 超分子净炎管理疗程X / 韩国PH平衡痘肌调理疗程X / 毛囊清洁术痘肌闭口调理初阶疗程X / 水漾高保湿管理疗程X / 出水芙蓉百草汤瑶浴次卡X / 纤体单部位塑形管理疗程卡X / 身体多部位任选年卡疗程卡X / 身体单部位经络管理疗程卡X / 浓密大部位（背部/全腿/比基尼）疗程卡X / 正常大部位（背部/全腿/比基尼）疗程卡X / 稀疏大部位（背部/全腿/比基尼）疗程卡X / 浓密中部位（腋毛/手臂/络腮胡）疗程卡X / 正常中部位（腋毛/手臂/络腮胡）疗程卡X / 稀疏中部位（腋毛/手臂/络腮胡）疗程卡X / 浓密小部位（唇毛/发际线/手）疗程卡X / 正常小部位（唇毛/发际线/手）疗程卡X / 稀疏小部位（唇毛/发际线/手）疗程卡X / 脉冲光祛红血丝治疗疗程卡X / 光能色素淡化疗程卡X / 痘肌控油杀菌疗程卡X / 超光子极致嫩肤疗程卡X / 紧致抗衰淡纹（眼部）2st/c疗程卡X / 紧致抗衰淡纹 3st/c疗程卡X / 脂肪代谢紧致 3st/c疗程卡X / 敏肌修复重建 3st/c疗程卡X / 美白色素淡化 3st/c疗程卡X / 痘肌控油杀菌 3st/c疗程卡X / 明眸晶彩眼部抗衰（黄金电眼）疗程卡X / 凝时抗皱无创水光（皱纹小熨斗/平滑肌理）疗程卡X / 青春塑颜无创水光（胶原重启/紧塑轮廓）疗程卡X / EBOX射频紧肤疗法疗程卡X / 焕彩鲜活无创水光（三重阻黑/暗沉肌定制）疗程卡X / 极光焕白焕肤疗程卡X / 焕彩光能疗法疗程卡X / 积雪草舒缓无创水光（水油平衡/炎敏调节）疗程卡X / 依克多因无创水光（重建屏障/光电修复/细胞再生）疗程卡X / 乳酸菌微生态平衡管理疗程卡X / 危机优化抗炎管理疗程卡X / SOS皮肤屏障修复疗程卡X / 敏肌镇定舒缓管理疗程卡X / 净化调理无创水光（毛孔/痘肌精细化管理）疗程卡X / 菌群平衡无创水光（华熙/妈生好皮）疗程卡X / 联合焕肤疗程卡X / 壬二酸焕肤疗程卡X / 超分子净颜管理疗程卡X / 油痘肌PH平衡管理疗程卡X / 古法油愈眼部拨筋疗程卡X / 古法油愈面部排毒疗程卡X / 古法面部按摩维养疗程卡X / 水活高保湿无创水光（全层补水/润泽肌底）疗程卡X / 中胚层深层导入疗程卡X / 水氧玻玻牛奶肌疗程卡X / 韩国纳米小气泡深层净颜疗程卡X / 局部黑头粉刺/脂质微丝/小棘毛疗程卡X / 毛囊清洁术/痘肌闭口初阶疗程卡X / 超声柔化管理超声铲疗程卡X / 1314焕肤卡X / 388X / 360颈脑理疗疗程卡X / T淋巴疗程卡X / 黄金排毒疗程卡X / 天鹅美颈疗程卡X / 轻头疗X / 凝时紧致美眸疗程X / 蜜桃臀X / 健步飞疗程X / 水润净透护理年卡X / 玻尿酸无创水光年卡X / 均衡养护水氧护理年卡X / 胶原紧致锁龄护理年卡X / 肩颈舒缓年卡X / 气血通年卡X / 360颈脑理疗年卡X / 黄金排毒年卡X / 水润净透护理半年卡X / 玻尿酸无创水光半年卡X / 均衡养护水氧护理半年卡X / 胶原紧致锁龄护理半年卡X / 肩颈舒缓半年卡X / 气血通半年卡X / 360颈脑理疗半年卡X / 黄金排毒半年卡X / 七夕限定女神卡X / 超光子极致嫩肤单次体验X / 1111双十一活动（基础护理）X / DMDC单次体验X / 1111双十一活动（DMDC）X / 111卡X / 水疗灌注SPA次卡X / 毛囊清洁术丨新客体验次卡X / DMDC危机优化急护管理3次卡X / 4999皮肤综合管理卡X / 超值面部三项次卡X / 眼周舒养拨筋次卡X / 润色养颜排毒次卡X / 净颜清洁护理次卡X / 轻肤面按护理次卡X / 三暖一通肩背养护10次卡X / OMEGA深层清洁综合养护次卡X / 修护无创水光次卡X / 胶原无创水光次卡X / 亮颜无创水光次卡X / 润泽无创水光次卡X / 修护全面养护套餐10次卡X / 胶原全面养护套餐10次卡X / 亮颜全面养护套餐10次卡X / 润泽全面养护套餐10次卡X / 危机优化抗炎管理次卡X / SOS皮肤屏障修复次卡X / 油痘肌PH平衡管理10次卡X / 华熙依克多因10次卡X / 水氧玻玻牛奶肌10次卡X / 华熙全层水光10次卡X / 华熙胶原炮10次卡X / 明眸晶彩眼部抗衰10次卡X / 敏肌镇定舒缓管理10次卡X / 毛囊清洁术10次卡X / 华熙追光者10次卡X / EBOX射频紧肤10次卡X / 油痘肌PH平衡管理5次卡X / 华熙依克多因5次卡X / 水氧玻玻牛奶肌5次卡X / 华熙全层水光5次卡X / 华熙胶原炮5次卡X / 明眸晶彩眼部抗衰5次卡X / 敏肌镇定舒缓管理5次卡X / 毛囊清洁术5次卡X / 华熙追光者5次卡X / EBOX射频紧肤5次卡X / 乳酸菌微生态平衡管理6次卡X / 乳酸菌微生态平衡管理3次卡X / 祛湿排寒草本药灸次卡X / 38拓客卡X / 古法中式精油SPA10次卡X / 三暖一通肩背养护5次卡X / 古法中式精油SPA5次卡X / 修护全面养护套餐5次卡X / 胶原全面养护套餐5次卡X / 亮颜全面养护套餐5次卡X / 润泽全面养护套餐5次卡X|
|权益卡:||label||
|请选择权益卡|ddl_privilegeCard|custom-select|请选择权益卡[选中]|
|礼品优惠券:||label||
|已选中 0 种，0 张礼品优惠券|ddl_giftPromotionCoupon|custom-select|新会员211元项目升级券X / 新会员50元现金券X / 新会员100元现金券X / 新会员200元现金券X / 项目体验价X|
|礼品次卡:||label||
|已选中 0 种，0 张礼品次卡|ddl_giftPassProduct|custom-select|纳米小气泡全脸清洁疗程卡X / 纳米小气泡T区清洁疗程卡X / 水娃娃补水套餐疗程卡X / 瓷娃娃美白套餐疗程卡X / 多效修护抗敏套餐疗程卡X / 类人胶原抗皱套餐疗程卡X / 问题皮肤修复套餐疗程卡X / 水光导入疗程卡X / 面部经络刮痧疗程卡X / 眼部精油拨筋疗程卡X / 黄金电眼射频疗程卡X / 脉动能量操盘手疗程卡X / LED光疗疗程卡X / 磁石润颜护理疗程卡X / 冷喷疗程卡X / 寡肽逆龄管理疗程卡X / 中胚层疗法-肌底修护小疗程X / 中胚层疗法-肌底修护大疗程X / 中胚层疗法-美白淡斑小疗程X / 中胚层疗法-美白淡斑大疗程X / 中胚层疗法-紧致抗衰小疗程X / 中胚层疗法-紧致抗衰大疗程X / EBOX背部舒缓肩颈保养疗程卡X / SF背部舒缓肩颈保养疗程卡X / SF养源修护卵巢保养疗程卡X / EBOX养源修护卵巢保养疗程卡X / SF花色滋养乳腺保养疗程卡X / EBOX花色滋养乳腺保养疗程卡X / SF魅力舒畅固腰强肾疗程卡X / EBOX魅力舒畅固腰强肾疗程卡X / 头疗（惠碧康）疗程卡X / EBOX射频疗法疗程卡X / 惠碧康肩颈润舒疗程卡X / 新款幻彩眼膜疗程卡X / 姜暖舒润保养（乐享）疗程卡X / 姜缓舒润保养（悦享）疗程卡X / 草本藏膏泥鲜药灸疗程卡X / 草本暖养泥膏疗程卡X / 软膜疗程卡X / 水分缘精华按摩霜疗程卡X / 毛巾次卡X / 艾灸疗法疗程卡X / 面部检测疗程卡X / 千年草本瑶浴疗程卡X / 私密养护疗程卡X / 任选部位身体卡X / （倍扶因子）玻尿酸面膜（存店）X / 玉养天颜怡润滋养套组X / 69.8周年庆面护卡X / 69.8周年庆肩颈卡X / （黛昂丝）润丰颜-舒颜疗程卡X / （黛昂丝）润丰颜-瓷肌疗程卡X / （黛昂丝）润丰颜-水润疗程卡X / （黛昂丝）氧乐多疗程卡X / （黛昂丝）润丰颜体验卡X / （黛昂丝）睛彩眼部疗程卡X / （倍扶因子）类人胶原修护面膜X / （黛昂丝）氧乐多体验X / 680类人季卡X / 980身体季卡X / 198身体体验卡X / 惠碧康活力滋养保养疗程卡X / 惠碧康玲珑臻美保养疗程卡X / 惠碧康粉红佳人保养疗程卡X / 惠碧康肩颈舒缓保养疗程卡X / 惠碧康腰部蕴美保养疗程卡X / 惠碧康蛇蝎通络保养疗程卡X / 惠碧康魅力娇润保养疗程卡X / 闺蜜卡X / 980肩颈疗程卡12次X / 99包月卡X / 99包月卡升级（瓷娃娃）X / 99包月卡升级（多效修护）X / 99包月卡升级（类人胶原）X / 水光导入秒杀X / 腿部赠送X / 68元新客卡（彩页专享）X / 黛昂丝（益肤套）疗程卡X / （D-cool）牛奶肌疗程卡X / （D-cool）牛奶肌单次X / 任选部位身体单次X / （进店）68新客卡X / 埃琳女神卡（脱毛）X / 埃琳女神卡（身体）X / 身体特价198月卡X / 颈部护理疗程卡X / 中药熏蒸太空舱疗程卡X / 纯阳雷火艾灸疗程卡X / OPT冰点脱毛（小手臂）X / 激光脱毛（小手臂）X / OPT冰点脱毛（唇毛）X / 激光脱毛（唇毛）X / OPT冰点脱毛（小腿）X / 激光脱毛（小腿）X / OPT冰点脱毛（全手）X / 激光脱毛（全手）X / OPT冰点脱毛（发际线）X / 激光脱毛（发际线）X / OPT冰点脱毛（腋下）X / 激光脱毛（腋下）X / OPT冰点脱毛（全脸）X / 激光脱毛（全脸）X / OPT冰点脱毛（全腿）X / 激光脱毛（全腿）X / 全身X / 激光脱毛（全身）X / （倍扶因子）多效修护冰膜存店X / 纳米小气泡全脸清洁疗程卡6次X / 千年草本瑶浴单次X / 雷火扶阳透灸单次X / 惠碧康玲珑臻美塑形疗程X / 磁石润颜护理单次X / 脱毛体验单次X / 手护疗程卡X / 毛巾次卡X / 水疗单次X / 水光焕肤疗程X / 斯莉米尔塑形疗程卡X / 斯莉米尔脾胃疗程卡X / 1斯莉米尔瘦身疗程卡X / 商家体验卡（水娃娃）X / 埃琳女神卡（新身体）X / 埃琳女神卡（新脱毛）X / EBOX胶原再生眼部抗衰疗程X / 医用冷敷贴（存店）X / 祛湿排寒泥灸（二送一）X / 发汗排毒瑶浴（一送一）X / 千年草本瑶浴活动（送腹部）X / 祛湿排寒草本药灸X / 祛湿排寒草本泥灸X / 花诗原萃精油超声波水愈疗程卡X / 花诗特色中医面部穴位按摩6次卡X / 云朵活氧泡泡清洁6次卡X / 面部养肤刮痧理疗6次卡X / 眼部养肤拨筋理疗6次卡X / 瀑布浸润水光导入6次卡X / 花诗特色中医面部穴位按摩6次卡X / 韩国纳米小气泡深层净颜6次卡X / D-cool深层养护6次卡X / Ebox射频紧肤6次卡X / 中胚层深层导入6次卡X / 黄金电眼射频眼部抗衰6次卡X / 美胸护胸乳腺保养6次卡X / 淋巴净排疏通保养6次卡X / 纤体塑形体型管理6次卡X / 暖宫温经宫巢保养6次卡X / 花诗古法中式精油按摩6次卡X / 出水芙蓉百草汤瑶浴6次卡X / 超声波香氛精油水疗6次卡X / 王牌项目五选一X / 康养项目五选一X / 苗依天使体验套X / 黑金超光子极致嫩肤季卡X / 黑金超光子极致嫩肤半年卡X / 黑金超光子极致嫩肤年卡X / 520爱的礼遇限定套餐X / 苗依天使3次体验卡X / 乳酸菌微生态平衡调理疗程X / 危肌抗炎管理疗程X / 敏肌镇定舒缓管理疗程X / sos急救镇定管理疗程X / 超分子净炎管理疗程X / 韩国PH平衡痘肌调理疗程X / 毛囊清洁术痘肌闭口调理初阶疗程X / 水漾高保湿管理疗程X / 出水芙蓉百草汤瑶浴次卡X / 纤体单部位塑形管理疗程卡X / 身体多部位任选年卡疗程卡X / 身体单部位经络管理疗程卡X / 浓密大部位（背部/全腿/比基尼）疗程卡X / 正常大部位（背部/全腿/比基尼）疗程卡X / 稀疏大部位（背部/全腿/比基尼）疗程卡X / 浓密中部位（腋毛/手臂/络腮胡）疗程卡X / 正常中部位（腋毛/手臂/络腮胡）疗程卡X / 稀疏中部位（腋毛/手臂/络腮胡）疗程卡X / 浓密小部位（唇毛/发际线/手）疗程卡X / 正常小部位（唇毛/发际线/手）疗程卡X / 稀疏小部位（唇毛/发际线/手）疗程卡X / 脉冲光祛红血丝治疗疗程卡X / 光能色素淡化疗程卡X / 痘肌控油杀菌疗程卡X / 超光子极致嫩肤疗程卡X / 紧致抗衰淡纹（眼部）2st/c疗程卡X / 紧致抗衰淡纹 3st/c疗程卡X / 脂肪代谢紧致 3st/c疗程卡X / 敏肌修复重建 3st/c疗程卡X / 美白色素淡化 3st/c疗程卡X / 痘肌控油杀菌 3st/c疗程卡X / 明眸晶彩眼部抗衰（黄金电眼）疗程卡X / 凝时抗皱无创水光（皱纹小熨斗/平滑肌理）疗程卡X / 青春塑颜无创水光（胶原重启/紧塑轮廓）疗程卡X / EBOX射频紧肤疗法疗程卡X / 焕彩鲜活无创水光（三重阻黑/暗沉肌定制）疗程卡X / 极光焕白焕肤疗程卡X / 焕彩光能疗法疗程卡X / 积雪草舒缓无创水光（水油平衡/炎敏调节）疗程卡X / 依克多因无创水光（重建屏障/光电修复/细胞再生）疗程卡X / 乳酸菌微生态平衡管理疗程卡X / 危机优化抗炎管理疗程卡X / SOS皮肤屏障修复疗程卡X / 敏肌镇定舒缓管理疗程卡X / 净化调理无创水光（毛孔/痘肌精细化管理）疗程卡X / 菌群平衡无创水光（华熙/妈生好皮）疗程卡X / 联合焕肤疗程卡X / 壬二酸焕肤疗程卡X / 超分子净颜管理疗程卡X / 油痘肌PH平衡管理疗程卡X / 古法油愈眼部拨筋疗程卡X / 古法油愈面部排毒疗程卡X / 古法面部按摩维养疗程卡X / 水活高保湿无创水光（全层补水/润泽肌底）疗程卡X / 中胚层深层导入疗程卡X / 水氧玻玻牛奶肌疗程卡X / 韩国纳米小气泡深层净颜疗程卡X / 局部黑头粉刺/脂质微丝/小棘毛疗程卡X / 毛囊清洁术/痘肌闭口初阶疗程卡X / 超声柔化管理超声铲疗程卡X / 1314焕肤卡X / 388X / 360颈脑理疗疗程卡X / T淋巴疗程卡X / 黄金排毒疗程卡X / 天鹅美颈疗程卡X / 轻头疗X / 凝时紧致美眸疗程X / 蜜桃臀X / 健步飞疗程X / 水润净透护理年卡X / 玻尿酸无创水光年卡X / 均衡养护水氧护理年卡X / 胶原紧致锁龄护理年卡X / 肩颈舒缓年卡X / 气血通年卡X / 360颈脑理疗年卡X / 黄金排毒年卡X / 水润净透护理半年卡X / 玻尿酸无创水光半年卡X / 均衡养护水氧护理半年卡X / 胶原紧致锁龄护理半年卡X / 肩颈舒缓半年卡X / 气血通半年卡X / 360颈脑理疗半年卡X / 黄金排毒半年卡X / 七夕限定女神卡X / 超光子极致嫩肤单次体验X / 1111双十一活动（基础护理）X / DMDC单次体验X / 1111双十一活动（DMDC）X / 111卡X / 水疗灌注SPA次卡X / 毛囊清洁术丨新客体验次卡X / DMDC危机优化急护管理3次卡X / 4999皮肤综合管理卡X / 超值面部三项次卡X / 眼周舒养拨筋次卡X / 润色养颜排毒次卡X / 净颜清洁护理次卡X / 轻肤面按护理次卡X / 三暖一通肩背养护10次卡X / OMEGA深层清洁综合养护次卡X / 修护无创水光次卡X / 胶原无创水光次卡X / 亮颜无创水光次卡X / 润泽无创水光次卡X / 修护全面养护套餐10次卡X / 胶原全面养护套餐10次卡X / 亮颜全面养护套餐10次卡X / 润泽全面养护套餐10次卡X / 危机优化抗炎管理次卡X / SOS皮肤屏障修复次卡X / 油痘肌PH平衡管理10次卡X / 华熙依克多因10次卡X / 水氧玻玻牛奶肌10次卡X / 华熙全层水光10次卡X / 华熙胶原炮10次卡X / 明眸晶彩眼部抗衰10次卡X / 敏肌镇定舒缓管理10次卡X / 毛囊清洁术10次卡X / 华熙追光者10次卡X / EBOX射频紧肤10次卡X / 油痘肌PH平衡管理5次卡X / 华熙依克多因5次卡X / 水氧玻玻牛奶肌5次卡X / 华熙全层水光5次卡X / 华熙胶原炮5次卡X / 明眸晶彩眼部抗衰5次卡X / 敏肌镇定舒缓管理5次卡X / 毛囊清洁术5次卡X / 华熙追光者5次卡X / EBOX射频紧肤5次卡X / 乳酸菌微生态平衡管理6次卡X / 乳酸菌微生态平衡管理3次卡X / 祛湿排寒草本药灸次卡X / 38拓客卡X / 古法中式精油SPA10次卡X / 三暖一通肩背养护5次卡X / 古法中式精油SPA5次卡X / 修护全面养护套餐5次卡X / 胶原全面养护套餐5次卡X / 亮颜全面养护套餐5次卡X / 润泽全面养护套餐5次卡X|
|开始日期:||label||
|开始日期:|edit_startDateTime|text||
|结束日期:||label||
|结束日期:|edit_endDateTime|text||
|是否允许销售||label||
|是否允许网店免费领取||label||
|前往设置|operation2|a||
|(无标签)|html5_1k3tlei7l1bkmv0r1va2jcek13|file||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|使用门店: 0|assignStores|div||
|使用门店:|open|div||
|礼品包图片 选择|btnImagePicker|div||
|礼品包图片|open|div||
|+|selectedImage|div||
|+|jiapic|span||
|是 否|edit_sb_salable|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||
|是 否|edit_sb_freeInEshop|custom-switch|关闭/未勾选|

## 员工资料/新增表单

入口：https://beta18.pospal.cn/Employee/Manage

获取：2026-10-02T06:40:00.796Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAddGuider。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|所属门店:||label||
|[业务对象选择器]|ddl_guiderStore|custom-select|[业务对象选项 1][选中] / [业务对象选项 2] / [业务对象选项 3]|
|点击前往|operation2|a||
|工号:||label||
|工号:|edit_jobNumber|text||
|姓名:||label||
|姓名:|edit_name|text||
|手机:||label||
|手机:|edit_tel|text||
|密码:||label||
|密码:|edit_password|text||
|(无标签)|html5_1k3tlel2l44um2a1alel1l1hbd3|file||
|角色:||label||
|无|ddl_employeeRole|custom-select|无|
|在前台展示||label||
|员工标签||label||
|+ 员工标签|edit_btnSelectTags|div||
|（?）|help_allowCashier|a||
|（?）|help_marketingTicket|a||
|(无标签)|auth_employeeMng|checkbox|关闭/未勾选|
|开启后，可设置商品分类数据权限||label||
|已授权 0 个分类 去设置||label||
|我的店铺APP登录权限||label||
|是否允许领取公海会员||label||
|备注:||label||
|(无标签)|edit_remarks|textarea||
|保存|btn save|div||
|保存并设置提成|btn saveAndGoToCommissionPlan |div||
|取消|btn cancel|div||
|删除|btn del|div||
|编辑照片|btnUploadPhoto|div||
|工作门店: 0|assignStores|div||
|工作门店:|open|div||
|是 否|edit_sb_showInClient|custom-switch|开启/勾选|
|是|sLeft|div||
|否|sRight|div||
|商户端权限|open|div||
|收银端权限|open|div||
|+ 展开|tip_cashierAuth|div||
|商品数据权限|open|div||
|开启 关闭|edit_sb_limitProductAuth|custom-switch|开启/勾选|
|开启|sLeft|div||
|去设置|go_setProductAuth|span||
|云端权限|open|div||
|+ 展开|tip_cashierWebAuth|div||
|我的店铺|open|div||
|开启 关闭|edit_sb_allowMyShopLoginAuth|custom-switch|开启/勾选|
|是 否|edit_sb_sharePublicCustomer|custom-switch|开启/勾选|

## 提成方案/新增表单

入口：https://beta18.pospal.cn/CommissionPlan/Manage

获取：2026-10-02T06:40:02.349Z；新增可见控件已读取；未提交。

已执行只读路径：#addNew。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|(无标签)|planNameInput|input||
|保存|popupBtn popupBtnSure|div||
|取消|popupBtn popupBtnCancel|div||

## 牌号管理/新增表单

入口：https://beta18.pospal.cn/Setting/AreaAndTable

获取：2026-10-02T06:40:03.883Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|区域名称:||label||
|区域名称:|edit_areaMame|text||
|台号前缀:||label||
|台号前缀:|edit_tableAbbr|text||
|台数:|middle|label||
|台数:|edit_tableNum|text||
|生成|btnBatchCreateTables|div||
|不包含||label||
|桌号列表（可拖拉桌号进行排序）||label||
|座位数|rg_seatManage|custom-check|关闭/未勾选|
|保存|btn save|div||
|取消|btn cancel|div||
|数字4|excludeNo4|custom-check|关闭/未勾选|
|数字7|excludeNo7|custom-check|关闭/未勾选|
|数字13|excludeNo13|custom-check|关闭/未勾选|

## 门店广告/新增表单

入口：https://beta18.pospal.cn/Setting/SecondScreenAD

获取：2026-10-02T06:40:05.469Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|广告状态:||label||
|广告标题:||label||
|广告标题:|edit_title|text||
|文件类型:||label||
|图片|ddl_adType|custom-select|图片[选中] / 视频|
|开始日期:||label||
|开始日期:|txt_startDateTime|text||
|结束日期:||label||
|结束日期:|txt_endDateTime|text||
|适用范围:||label||
|(无标签)|html5_1k3tleqn7gp08bfuv147l1uhu3|file||
|保存|btn save|div||
|取消|btn cancel|div||
|适用门店: 0|assignStores|div||
|适用门店:|open|div||
|启用 禁用|sb_enabled|custom-switch|开启/勾选|
|启用|sLeft|div||
|禁用|sRight|div||
|添加图片|btnShowEditImages|div||

## 收银端公告/新增表单

入口：https://beta18.pospal.cn/Setting/Notification

获取：2026-10-02T06:40:07.212Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|有效期至:||label||
|有效期至:|edit_endDatetime|text||
|通知标题:||label||
|通知标题:|edit_title|text||
|内容:||label||
|内容:|edit_message|textarea||
|客户端打印通知小票||label||
|保存|btn save|div||
|取消|btn cancel|div||
|删除|btn del|div||
|通知门店: 0|assignStores|div||
|通知门店:|open|div||
|是 否|edit_sb_isClientPrintNotify|custom-switch|关闭/未勾选|
|是|sLeft|div||
|否|sRight|div||

## 等级管理/新增入口

入口：https://beta18.pospal.cn/Customer/CategoryV2

获取：2026-10-02T06:43:59.481Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|等级名称:||label||
|等级名称:|edit_name|text||
|折扣类型:||label||
|全场折扣|edit_ddl_discountType|custom-select|全场折扣[选中] / 分类折扣|
|优惠折扣:||label||
|优惠折扣:|edit_discount|text||
|(无标签)|html5_1k3tlluir1bv86551bea128816j53|file||
|收银终端注册默认等级||label||
|是 否|edit_sb_isDefault|custom-switch|关闭/未勾选|
|是否积分||label||
|是 否|edit_sb_isPoint|custom-switch|开启/勾选|
|等级排序||label||
|等级排序|edit_sortValue|text||
|单会员只享受一次升级奖励||label||
|是 否|edit_sb_rewardOnceForOneCustomer|custom-switch|关闭/未勾选|
|权益说明:||label||
|将展示在网店会员中权益说明|edit_remark|textarea||
|保存|btn save|div||
|取消|btn cancel|div||
|会员卡图片|btnUploadPhoto|div||
|是|sLeft|div||
|否|sRight|div||
|网店注册默认等级 去设置|item openPopup openEditSpread|div||
|网店注册默认等级|open|div||
|升级奖励 已选择 0 个礼品 选择|item openPopup opengift|div||
|升级奖励|open|div||
|已选择 0 个礼品||div||
|已选择 0 个礼品|gifttext|span||
|更多等级权益|moreEquity|div||
|更多等级权益|item openPopup|div||

## 促销活动/新增入口

入口：https://beta18.pospal.cn/Promotion/Manage

获取：2026-10-02T06:44:04.777Z；入口已点击，需继续核实新增内容；未提交。

已执行只读路径：#btnAdd。

## 护理定期维护/新增入口

入口：https://beta18.pospal.cn/Reminder/ProductReminderV2

获取：2026-10-02T06:44:07.052Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
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
|门店范围 0|assignStores|div||
|门店范围|open|div||
|开启|sLeft|div||

## 推荐商品策略/新增入口

入口：https://beta18.pospal.cn/Recommendation/Rule

获取：2026-10-02T06:44:12.349Z；动作未成功；未提交。

错误：locator.click: Timeout 3500ms exceeded. Call log: [2m  - waiting for locator('#btnAdd')[22m [2m    - locator resolved to <div id="btnAdd" class="btnBlue">创建推荐规则</div>[22m [2m  - attempting click action[22m [2m    2 × waiting for element to be 

## 拼团/新增入口

入口：https://beta18.pospal.cn/EshopMarketing/PeerPurchase

获取：2026-10-02T06:44:14.735Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|应用|operation-btn|div||

## 团购/新增入口

入口：https://beta18.pospal.cn/EshopMarketing/GroupPurchase

获取：2026-10-02T06:44:16.821Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
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
|祛湿排毒泥灸（送现金券）|ddl_giftpackage|custom-select|祛湿排毒泥灸（送现金券）[选中] / 520爱的礼遇限定套餐 / 1314会员焕肤尊享礼包|
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

入口：https://beta18.pospal.cn/EshopMarketing/BargainRule

获取：2026-10-02T06:44:18.925Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
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

入口：https://beta18.pospal.cn/EshopMarketing/CommunityGroupPurchase

获取：2026-10-02T06:44:20.629Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
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
|(无标签)|html5_1k3tlmjijsd91uvp2d18ef5fk3|file||
|保存|btn save|div||
|取消|btn cancel|div||
|开启|sLeft|div||
|选择商品: 0|edit_products|div||
|选择商品:|open|div||
|可参与活动团长标签: 0|edit_tags|div||
|可参与活动团长标签:|open|div||

## 网店公告/新增入口

入口：https://beta18.pospal.cn/EShop/Remind

获取：2026-10-02T06:44:22.069Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
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

入口：https://beta18.pospal.cn/EShop/Banner

获取：2026-10-02T06:44:23.614Z；新增可见控件已读取；未提交。

已执行只读路径：#btnAdd。

|新增可见控件|id/name/class|类型|选项/状态|
|---|---|---|---|
|显示位置||label||
|微信店铺|edit_ddl_location|custom-select|微信店铺[选中] / 自助点单机|
|(无标签)|html5_1k3tlmmqa9maiudb171l4ps0q3|file||
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
|使用门店: 0|assignStores|div||
|使用门店:|open|div||
|绑定商品 0|open_bindproduct|div||
|绑定商品|open|div||

