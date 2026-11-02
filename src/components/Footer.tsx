import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Twitter, Github, Linkedin, Instagram, Dribbble, Heart } from 'lucide-react';
import { PageTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenContact: () => void;
  onOpenDownload?: () => void;
  lang: 'zh' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenContact, onOpenDownload, lang }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="w-full bg-black text-white pt-16 pb-12 px-4 sm:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Newsletter Card matching screenshot */}
        <div className="bg-white text-black neo-border-thick rounded-3xl neo-shadow p-6 sm:p-8 -mt-24 sm:-mt-28 mb-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Header */}
            <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2B7FFF] neo-border flex items-center justify-center shrink-0 neo-shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#FFC224] neo-border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-black stroke-[2.5]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                  {lang === 'zh' ? '订阅我的设计周刊' : 'Subscribe to my newsletter'}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  {lang === 'zh'
                    ? '每月获取精选设计系统演进、前沿工具评测与行业深度思考。'
                    : 'Get monthly curation on design systems, tool reviews, and digital craft.'}
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-auto flex-1 max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-[#59D13E]/20 text-black font-bold rounded-2xl neo-border text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                  <span>{lang === 'zh' ? '感谢订阅！首期精选周刊已发送至你的邮箱。' : 'Subscribed! Check your inbox for the welcome issue.'}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <div className="relative w-full">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lang === 'zh' ? '输入你的工作邮箱地址...' : 'Enter your email address'}
                      className="w-full py-3.5 pl-4 pr-32 rounded-2xl neo-border text-xs sm:text-sm text-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-black text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-neutral-800 transition-all neo-btn flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{lang === 'zh' ? '订阅' : 'Subscribe'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Bio Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFC224] neo-border flex items-center justify-center font-black text-black text-sm">
                JC
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                Paperfolio X
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {lang === 'zh'
                ? '专注于创造兼具鲜明个性与商业转化力的数字化产品体验。以严谨系统支撑自由创意，让软件充满人文触感。'
                : 'Crafting expressive, tactile digital products and design systems that bridge creativity with ruthless business clarity.'}
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#2B7FFF] text-white flex items-center justify-center hover:scale-110 transition-transform neo-border"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#github"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#333] text-white flex items-center justify-center hover:scale-110 transition-transform neo-border"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#dribbble"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#FF5364] text-white flex items-center justify-center hover:scale-110 transition-transform neo-border"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:scale-110 transition-transform neo-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#FFC224] text-black flex items-center justify-center hover:scale-110 transition-transform neo-border"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              {lang === 'zh' ? '页面导航' : 'Pages'}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '首页' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '关于我' : 'About'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '我的作品' : 'Portfolio'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('articles')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '我的文章' : 'Articles & News'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'zh' ? '联系合作' : 'Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Utility Pages */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              {lang === 'zh' ? '设计规范' : 'Utility Pages'}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => onSelectTab('about')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'zh' ? '设计风格指南' : 'Style Guide'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('portfolio')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'zh' ? '组件系统' : 'Design Tokens'}
                </button>
              </li>
              <li>
                <span className="text-neutral-500">
                  {lang === 'zh' ? '无障碍标准 (WCAG)' : 'Accessibility (AA)'}
                </span>
              </li>
              <li>
                <button
                  onClick={onOpenDownload}
                  className="text-[#FFC224] hover:underline transition-colors cursor-pointer font-bold flex items-center gap-1"
                >
                  <span>{lang === 'zh' ? '⚡ 下载本站工程源码 (ZIP)' : '⚡ Download Project (.zip)'}</span>
                </button>
              </li>
              <li>
                <span className="text-neutral-500">
                  {lang === 'zh' ? '开源协议 (MIT)' : 'Licenses'}
                </span>
              </li>
              <li>
                <span className="text-neutral-500">
                  {lang === 'zh' ? '更新日志 (v2.4)' : 'Changelog'}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              {lang === 'zh' ? '联系方式' : 'Contact us'}
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
                <a href="mailto:john@paperfolio.design" className="hover:text-white transition-colors">
                  john@paperfolio.design
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-500">Phone:</span>
                <span>+1 (212) 555-0198</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-3.5 py-2 rounded-xl bg-white text-black font-bold text-xs neo-border hover:bg-neutral-100 transition-all neo-btn cursor-pointer"
                >
                  {lang === 'zh' ? '预约咨询会议' : 'Book a Call'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Paperfolio X. Designed by John Carter. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Built with precision &</span>
            <Heart className="w-3.5 h-3.5 text-[#FF5364] fill-[#FF5364]" />
            <span>in New York City</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
