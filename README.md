# 周方璟 Felixzhou · Personal Website

个人主页：https://peppaoinks.github.io/

纯 HTML、CSS 和 JavaScript，包含中英文切换、手机适配、深浅主题、公开项目链接、随笔集和社交媒体入口。

当前展示：周方璟 / Felixzhou，哈尔滨工业大学（深圳）计算机科学与技术专业大二。

小红书、知乎、LinkedIn 和 GitHub 已连接；bilibili 链接和赞助二维码尚待本人提供。随笔集目前为空，不含示例文章。

## 修改内容

- `index.html`：姓名、自我介绍、项目、联系入口。
- `style.css`：颜色、字体和排版。
- `script.js`：中英文文案、语言和主题切换、年份。
- `assets/favicon.svg`：网站图标。

## 发布

仓库 Settings → Pages → Source 选择 **GitHub Actions**。推送至 `main` 后，工作流会自动发布。

公开文件由工作流单独整理，README 与配置文件不会进入网站。

## 本地查看

直接打开 `index.html`，或在此目录运行 `python3 -m http.server 8080` 后访问 `http://localhost:8080`。

## 图标来源

除自行绘制的 LinkedIn 字母图标外，社交平台图标来自 [Simple Icons](https://github.com/simple-icons/simple-icons)，采用 CC0 授权。品牌名称及标识归各自权利人所有。

## 字体

标题与阅读正文使用 Lora / Noto Serif SC 衬线字体；中文标题采用 600 半粗字重、正文采用 500 中等字重，保留衬线感并增加笔画厚度；导航等界面文字保留无衬线字体。字体通过 Google Fonts 加载，无法连接时回退到系统宋体或 Georgia。原有 fz 标识字体保持不变。
