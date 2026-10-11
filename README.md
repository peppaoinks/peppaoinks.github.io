# Fangjing Zhou · Personal Website

个人主页：https://peppaoinks.github.io/

纯 HTML、CSS 和 JavaScript，包含手机适配、深浅主题和公开项目链接。

## 修改内容

- `index.html`：姓名、自我介绍、项目、联系入口。
- `style.css`：颜色、字体和排版。
- `script.js`：主题切换和年份。
- `assets/favicon.svg`：网站图标。

## 发布

仓库 Settings → Pages → Source 选择 **GitHub Actions**。推送至 `main` 后，工作流会自动发布。

公开文件由工作流单独整理，README 与配置文件不会进入网站。

## 本地查看

直接打开 `index.html`，或在此目录运行 `python3 -m http.server 8080` 后访问 `http://localhost:8080`。
