import React, { useState } from 'react';
import { Mail, Menu, X, Globe, Sparkles, Download } from 'lucide-react';
import { PageTab } from '../types';

interface NavbarProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenContact: () => void;
  onOpenDownload: () => void;
  lang: 'zh' | 'en';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenContact,
  onOpenDownload,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { tab: PageTab; labelEn: string; labelZh: string }[] = [
    { tab: 'home', labelEn: 'Home', labelZh: '首页' },
    { tab: 'about', labelEn: 'About', labelZh: '关于我' },
    { tab: 'portfolio', labelEn: 'Portfolio', labelZh: '我的作品' },
    { tab: 'articles', labelEn: 'Articles', labelZh: '我的文章' },
  ];

  const handleTabClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6 w-full max-w-5xl mx-auto">
      {/* Floating Capsule Nav Container */}
      <div className="bg-white neo-border-thick rounded-full neo-shadow px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-200">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          {/* Distinctive Paperfolio X Mark */}
          <div className="w-8 h-8 rounded-full neo-border bg-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
            <div className="w-4 h-4 rounded-full bg-black group-hover:bg-[#FF5364] transition-colors" />
          </div>
          <span className="font-extrabold text-base tracking-tight text-black hidden min-[400px]:inline">
            Paperfolio<span className="text-[#FF5364]">.</span>
          </span>
        </button>

        {/* Desktop Nav Tabs */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleTabClick(item.tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white neo-shadow-sm'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {lang === 'zh' ? item.labelZh : item.labelEn}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-full neo-border bg-[#F8F9FA] hover:bg-neutral-200 transition-colors cursor-pointer"
            title={lang === 'zh' ? 'Switch to English' : '切换为简体中文'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Download Website Button */}
          <button
            onClick={onOpenDownload}
            className="text-xs font-bold py-1.5 px-3 rounded-full neo-border bg-[#FFC224] text-black hover:bg-yellow-400 transition-all flex items-center gap-1.5 cursor-pointer neo-shadow-sm hover:scale-105 active:scale-95"
            title={lang === 'zh' ? '下载本站网页与完整源码' : 'Download website source code'}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'zh' ? '下载' : 'Export'}</span>
          </button>

          {/* Contact Pill CTA Button */}
          <button
            onClick={onOpenContact}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white neo-border flex items-center justify-center hover:bg-neutral-800 transition-all neo-shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            title={lang === 'zh' ? '联系我 / Get in touch' : 'Get in touch'}
            aria-label="Contact modal"
          >
            <Mail className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full neo-border bg-white flex items-center justify-center hover:bg-neutral-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white neo-border-thick rounded-3xl neo-shadow animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleTabClick(item.tab)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold neo-border transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-black text-white neo-shadow-sm'
                      : 'bg-white text-black hover:bg-neutral-100'
                  }`}
                >
                  <span>{lang === 'zh' ? item.labelZh : item.labelEn}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF5364]" />}
                </button>
              );
            })}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full mt-2 text-center py-3 bg-[#FFC224] text-black font-extrabold text-sm rounded-2xl neo-border neo-shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'zh' ? '下载本站完整源码 (ZIP)' : 'Download Source (ZIP)'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-3 bg-black text-white font-extrabold text-sm rounded-2xl neo-border neo-shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'zh' ? '立即开启咨询' : 'Get in touch'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
