import React, { useState } from 'react';
import { X, Download, Archive, FileCode, CheckCircle2, Copy, Check, Terminal, ExternalLink, Sparkles, FolderDown } from 'lucide-react';
import { generateProjectZip, downloadBlob } from '../utils/sourceBundle';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, lang }) => {
  const [isPackaging, setIsPackaging] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    try {
      setIsPackaging(true);
      const zipBlob = await generateProjectZip();
      downloadBlob(zipBlob, 'paperfolio-x-website.zip');
      setIsPackaging(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Failed to package zip', err);
      setIsPackaging(false);
    }
  };

  const handleDownloadSingleHtml = () => {
    // Export offline self-contained HTML page
    const htmlContent = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Paperfolio X - 离线网页快照</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; text-align: center; background: #fff; color: #111; }
    .box { max-width: 600px; margin: 40px auto; border: 2.5px solid #000; border-radius: 24px; padding: 32px; box-shadow: 6px 6px 0px #000; background: #FFC224; }
    h1 { font-size: 28px; font-weight: 900; margin-bottom: 12px; }
    p { font-size: 15px; line-height: 1.6; color: #222; }
    .btn { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #000; color: #fff; font-weight: bold; border-radius: 12px; text-decoration: none; border: 2px solid #000; box-shadow: 3px 3px 0px rgba(0,0,0,0.3); }
    .btn:hover { background: #222; }
  </style>
</head>
<body>
  <div class="box">
    <h1>Paperfolio X 离线网页就绪</h1>
    <p>完整的 React 19 + TypeScript 生产源码及全部 4 个标签页代码已就绪。建议直接下载工程 ZIP 包并在本地执行 <code>npm run dev</code> 体验完整交互动效！</p>
    <a href="https://github.com" class="btn">查看构建指南</a>
  </div>
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    downloadBlob(blob, 'paperfolio-offline-preview.html');
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white neo-border-thick rounded-3xl neo-shadow-lg p-6 sm:p-10 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full neo-border bg-white hover:bg-neutral-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neo-border bg-[#FFC224] text-black font-extrabold text-xs mb-3">
            <FolderDown className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '一键导出与离线下载' : 'Export & Offline Download'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            {lang === 'zh' ? (
              <>将本网站 <span className="bg-[#FF5364] text-white px-3 py-0.5 rounded-xl inline-block">完整下载</span> 到本地</>
            ) : (
              <>Download this <span className="bg-[#FF5364] text-white px-3 sm:px-4 py-0.5 rounded-xl inline-block">entire website</span></>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            {lang === 'zh'
              ? '你可以直接将本站的完整前端源码打包为 ZIP 下载，在本地直接运行、修改并二次部署。'
              : 'Download the complete React + TypeScript source code as a ZIP archive to run or deploy anywhere.'}
          </p>
        </div>

        {downloadSuccess && (
          <div className="mb-6 p-4 rounded-2xl neo-border bg-[#59D13E]/20 text-black flex items-center gap-3 animate-in fade-in">
            <CheckCircle2 className="w-6 h-6 text-green-700 shrink-0" />
            <div className="text-xs sm:text-sm font-bold">
              {lang === 'zh' ? 'ZIP 源码压缩包已生成并开始下载！请检查你的浏览器下载目录。' : 'ZIP package generated and downloaded! Check your downloads folder.'}
            </div>
          </div>
        )}

        <div className="space-y-5">
          {/* Main Action Card: ZIP package */}
          <div className="p-6 rounded-3xl neo-border bg-[#F8F9FA] neo-shadow-sm space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF5364] text-white neo-border flex items-center justify-center neo-shadow-sm shrink-0">
                  <Archive className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-black">
                    {lang === 'zh' ? '完整工程源码包 (ZIP)' : 'Full Project Source Code (.zip)'}
                  </h3>
                  <p className="text-xs text-neutral-600">
                    {lang === 'zh' ? '包含全部 React 19 + TypeScript + Tailwind v4 源代码及配置文件' : 'Includes all React 19, TypeScript, Tailwind CSS, components, and configs'}
                  </p>
                </div>
              </div>
            </div>

            <ul className="text-xs text-neutral-700 space-y-1.5 list-disc pl-5">
              <li>{lang === 'zh' ? '包含首页、关于我、我的作品、我的文章 4 大完整页面' : 'All 4 pages: Home, About, Portfolio, and Articles'}</li>
              <li>{lang === 'zh' ? '包含全部波普插画矢量组件、弹窗交互与中英双语切换系统' : 'Vector illustrations, interactive modals, and bilingual engine'}</li>
              <li>{lang === 'zh' ? '包含 package.json 与 README.md，解压即可运行' : 'Zero-config ready with Vite dev server setup'}</li>
            </ul>

            <div className="pt-2">
              <button
                onClick={handleDownloadZip}
                disabled={isPackaging}
                className="w-full bg-black text-white font-extrabold rounded-2xl py-4 px-6 neo-border neo-shadow neo-btn flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-800 disabled:opacity-60"
              >
                {isPackaging ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{lang === 'zh' ? '正在打包压缩源码...' : 'Packaging Project Files...'}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>{lang === 'zh' ? '一键生成并下载 ZIP 源码包' : 'Download Full Source ZIP'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick CLI Run Guide */}
          <div className="p-6 rounded-3xl neo-border bg-white neo-shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black">
              <Terminal className="w-4 h-4 text-[#2B7FFF]" />
              <span>{lang === 'zh' ? '本地运行只需 3 步' : 'Run Locally in 3 Steps'}</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-[#F8F9FA] rounded-xl neo-border font-mono">
                <code>1. npm install</code>
                <button
                  onClick={() => handleCopy('npm install', 'cmd1')}
                  className="text-neutral-500 hover:text-black cursor-pointer p-1"
                  title="Copy command"
                >
                  {copiedCmd === 'cmd1' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#F8F9FA] rounded-xl neo-border font-mono">
                <code>2. npm run dev</code>
                <button
                  onClick={() => handleCopy('npm run dev', 'cmd2')}
                  className="text-neutral-500 hover:text-black cursor-pointer p-1"
                  title="Copy command"
                >
                  {copiedCmd === 'cmd2' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#F8F9FA] rounded-xl neo-border font-mono">
                <code>3. npm run build</code>
                <button
                  onClick={() => handleCopy('npm run build', 'cmd3')}
                  className="text-neutral-500 hover:text-black cursor-pointer p-1"
                  title="Copy command"
                >
                  {copiedCmd === 'cmd3' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 pt-1">
              {lang === 'zh'
                ? '提示：执行 npm run build 后生成的 dist 目录可直接免费托管于 Vercel、Cloudflare Pages、Netlify 或 GitHub Pages。'
                : 'Pro tip: The output in dist/ can be deployed freely to Vercel, Cloudflare, Netlify, or GitHub Pages.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
