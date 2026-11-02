# Paperfolio X - 个人作品集与博客网站

本项目参考 Paperfolio X 经典黑白描边波普插画风格（Neo-Brutalism）打造，包含首页、关于我、我的文章和我的作品四个完整标签页及交互动效。

## 🛠️ 技术栈
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Lucide React 图标库
- JSZip 打包支持

## 🚀 本地快速启动
1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动本地开发服务器：
   ```bash
   npm run dev
   ```
   浏览器访问：http://localhost:3000

3. 构建生产包：
   ```bash
   npm run build
   ```
   构建产物位于 `dist/` 目录，可一键免费部署至 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages。

## 📁 页面结构
- **首页 (Home)**: Hero、服务领域、人物介绍、精选案例、过往经历、客户评价、博客文章、订阅与页脚
- **关于我 (About)**: 经历介绍、专业技能掌握度、设计哲学、常用工具栈与时间线
- **我的作品 (Portfolio)**: 案例详情展示，多分类筛选与完整 Case Study 弹窗
- **我的文章 (Articles)**: 博客文章阅读器，支持实时搜索、分类筛选与阅读进度条
