# 周方璟 Felixzhou · Personal Website

个人主页：https://peppaoinks.github.io/

纯 HTML、CSS 和 JavaScript，包含中英文切换、手机适配、深浅主题、公开项目链接、随笔集、摄影集和社交媒体入口。

当前展示：周方璟 / Felixzhou，哈尔滨工业大学（深圳）计算机科学与技术专业大二。

小红书、知乎、LinkedIn 和 GitHub 已连接；公众号 NeonDynamics 以名称展示；微信赞赏码直接显示在页面底部，无需点击或跳转。随笔集目前为空，不含示例文章。

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

标题与阅读正文使用 Lora / Noto Serif SC 衬线字体；中文标题采用 600 半粗字重、正文采用 500 中等字重，保留衬线感并增加笔画厚度；导航等界面文字保留无衬线字体。字体通过 Google Fonts 加载，无法连接时回退到系统宋体或 Georgia。felixzhou 标识使用斜体衬线字；整体采用斯莱特林深绿和银色配色。

## 相册、简历与更新日期

- 在 `script.js` 的 `personalPhotos` 中管理生活照片与视频，填写 `src`、`altZh`、`altEn`、`captionZh`、`captionEn`、可选的 `date`（YYYY-MM-DD），视频另填 `type: "video"` 和 `poster`。保留 logo 为第一张，照片由童年到近年，视频在最后；切换支持方向键及左右滑动。视频手动播放，切换后暂停。
- 已提供的 HEIC/JPEG 统一转为 WebP，最长边 1200 像素，所有照片按网页尺寸优化并移除元数据；MOV 转为可在线播放的 MP4。原始文件不修改。
- 摄影作品单独管理于 `photographyWorks`，使用 `src`、`altZh`、`altEn`、`captionZh`、`captionEn`。目前为空，添加真实作品后自动显示作品网格。
- 简历 PDF 放入 `assets` 后，在 `resumePdf` 中填写路径；未提供 PDF 时不显示入口。
- 更新公开内容时，同步修改 `index.html` 页脚的最后更新日期，使用北京时间。

轮播日期只使用原始媒体可读取的拍摄日期或本人确认的日期，未保留日期的照片不猜测。

已确认日期：深圳童年照 2010-07-17、Bloxham 2018-08-26、深圳中学泥岗校区 2024-07-10（本人提供）、三亚湾 2026-02-01、QS 峰会 2026-04-09、英语教学 2026-04-15、香港中港城视频 2026-10-01。上海外滩与湖北赤壁照片未保留拍摄日期。

轮播可见说明仅保留地点和已确认的日期；logo 不显示额外说明文字。

赞赏码使用本人提供的 `assets/sponsor-wechat.jpg`，页面直接显示二维码及收款人区域，不设链接或弹窗。

轮播提前加载当前照片及相邻照片，视频继续按需手动播放。赞赏码单独保留清晰图像，不套用生活照压缩设置。
