# Forma · GitHub Pages 发布版

希望你玩耍过程愉快！

作者是 joooooos&Claude

在线地址：https://joooooos.github.io/
源码仓库：https://github.com/joooooos/Web_PaperStyle （本仓库只放构建产物，请勿手改）

## 目录结构

| 路径 | 是什么 |
|---|---|
| `index.html` · `bundle.js` · `assets/` | 首页：3D 工作室（字体子集在 assets/） |
| `site/` | 纸张风格滚动版：`site/index.html` + `site/bundle.js` + `site/assets/` + `site/media/` |
| `site/works/` | 作品详情页：ad-case / ad-workflow（广告工作台）/ course-case / memo-wiki / forked-cut / cinematic / lab |
| `site/island/` | 页尾联系区（React island 构建产物） |
| `404.html` | 404 页（配图取 site/assets/gen/web/D404.webp） |
| `robots.txt` · `sitemap.xml` · `favicon.ico` | 站点元信息 |

## 说明

- 运行模式：纯前端静态站；广告工作台为前端模拟，不连接任何后端
- 构建方式：在源码仓库执行 `npm ci && npm run build`，把 `首屏原型_句号下楼梯/dist/` 的内容覆盖到本仓库根目录
- 构建版本：2026.10
- 构建时间：2026-10-25T07:02:05.620Z
