# 跨平台使用

将整个 `yinbao` 文件夹复制到目标 agent 平台的技能目录。保留 SKILL.md、references/、scripts/、agents/ 的相对结构。支持标准 SKILL.md 的平台可自动路由；其他平台把 SKILL.md 作为任务入口按需读对应 references，不一次加载全部 TSV。

脚本需要 Node.js 和 Playwright CLI；其他浏览器工具按 SOP 实现相同动作、范围核验和回读。Windows 可自动查找已安装 npm 缓存入口；macOS/Linux 或不同安装方式设 POSPAL_CLI_PATH。不要照搬本机绝对路径。

后台静默操作需要平台提供 headless 浏览器、访问目标网站及读写文件的能力。此包不提供密码、cookie、登录 profile、客户端控制或付费功能权限，登录从用户当前授权会话或安全存储取得。客户账号范围在 permissions.md 中列明，迁移给其他客户时重新确定授权。

版本：2026-10-02 工作版。它是已观察功能和已验证 SOP 的可用集合，尚非每个按钮/选项均实测完成的最终全覆盖版。复用脚本不会自动测试保存、删除、付款、通知、跨店复制等动作。

GitHub 私有仓库：`liufeiyangez/yinbao`，skill 路径 `skills/yinbao`。其他电脑先 `gh auth login` 登录有仓库权限的账号，再使用仓库 README 中的安装命令。安装 skill 不会带走银豹登录状态；新环境仍需用户授权登录。
