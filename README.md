# yinbao

银豹美业后台操作 skill。包含已验证 SOP、功能与控件索引、门店范围检查及后台查询脚本。账号凭据和浏览器会话不包含在仓库中。

这是工作版：页面可见、表单打开、提交和回读分别标注；尚未完成所有按钮与动态选项的实测。

## 安装到其他 agent

仓库已公开。目标电脑安装 Git 和 Node.js/npm 即可，无需登录 GitHub，直接执行下方安装命令。

使用支持多种 agent 的 [Vercel Skills CLI](https://github.com/vercel-labs/skills)：

```sh
# 交互选择目标 agent，全局安装
npx --yes skills add liufeiyangez/yinbao --skill yinbao --global

# Codex
npx --yes skills add liufeiyangez/yinbao --skill yinbao --agent codex --global --copy --yes

# Claude Code
npx --yes skills add liufeiyangez/yinbao --skill yinbao --agent claude-code --global --copy --yes

# Cursor
npx --yes skills add liufeiyangez/yinbao --skill yinbao --agent cursor --global --copy --yes
```

去掉 `--global` 即安装到当前项目。`--copy` 避免依赖符号链接。安装后重新打开或刷新目标 agent 的技能发现；Codex 调用 `$yinbao`，Claude Code 调用 `/yinbao`，也可以直接要求“使用 yinbao skill 查询银豹数据”。

2026-10-02 已用安装器在隔离项目实测：识别到一个名为 yinbao 的 skill，复制安装到 `.agents/skills/yinbao`，安装后路径查询脚本可运行。直接远程克隆曾遇到本机 GitHub 网络失败；不将本地安装通过宣称为所有平台远程安装通过。

如果网络无法克隆，登录 GitHub 后在仓库页面选择 Code → Download ZIP，解压，再从该文件夹的父目录执行（路径改成实际解压目录）：

```sh
npx --yes skills add ./yinbao-main --skill yinbao --agent codex --global --copy --yes
```

Claude Code 改为 `--agent claude-code`，Cursor 改为 `--agent cursor`。本地目录安装不需要再次访问这个私有 GitHub 仓库；首次运行安装器仍可能需要 npm 下载。

更新：

```sh
npx --yes skills update yinbao
```

### 不使用安装器

```sh
git clone https://github.com/liufeiyangez/yinbao.git
```

将仓库中的整个 `skills/yinbao` 文件夹复制到目标平台的技能目录，保留全部相对结构。

- Codex 内置安装器：告诉 Codex“使用 skill-installer 安装 https://github.com/liufeiyangez/yinbao/tree/main/skills/yinbao”。
- Claude Code 个人技能：复制到 `~/.claude/skills/yinbao`；项目技能复制到 `.claude/skills/yinbao`。[官方说明](https://code.claude.com/docs/en/skills)。
- 其他支持 SKILL.md 的 agent：使用其官方技能目录；不能识别该格式时，将 SKILL.md 作为操作入口，并按需读取 references。

## 网页操作运行条件

安装文档并不自动连接银豹。网页操作还需平台提供后台浏览器、文件访问和用户授权凭据。可复用该平台浏览器工具；包内脚本需要 Node.js 和官方 Playwright CLI：

```sh
npm install --global @playwright/cli
```

配置 `POSPAL_CLI_PATH` 为安装后的 CLI JavaScript 入口。Windows 也能自动发现已有 npm 缓存入口。具体连接、查询和授权边界从 [SKILL.md](skills/yinbao/SKILL.md) 按需阅读。

禁止把用户名密码、appKey、cookie、登录 profile、原始会员表或完整工作目录添加到仓库。当前客户 ERIN001 正式店默认只读；ERIN002 店内测试也需核实作用范围，不能修改总部共享配置。安装到其他客户环境时重新确定账号和授权。
