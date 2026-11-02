import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, Heart, Bookmark, Share2, Clock, Calendar, Check } from 'lucide-react';
import { ArticleItem } from '../types';
import { ArticlePaletteIllu, ArticleTypographyIllu, ArticleExerciseIllu } from './Illustrations';

interface ArticleModalProps {
  article: ArticleItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  lang,
}) => {
  const [claps, setClaps] = useState(142);
  const [hasClapped, setHasClapped] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      const pct = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
      setScrollProgress(Math.round(pct));
    } else {
      setScrollProgress(0);
    }
  }, []);

  // Reset scroll and progress when modal opens or article changes
  useEffect(() => {
    if (isOpen) {
      setScrollProgress(0);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [isOpen, article]);

  if (!isOpen || !article) return null;

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setHasClapped(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white neo-border-thick rounded-3xl neo-shadow-lg max-h-[92vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Reading Progress Bar at the top of the modal */}
        <div 
          className="w-full h-1.5 bg-neutral-100 relative z-30 shrink-0 border-b border-black/10 overflow-hidden"
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
        >
          <div
            className="h-full bg-gradient-to-r from-[#FF5364] via-[#FFB800] to-[#2B7FFF] transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full neo-border bg-white hover:bg-neutral-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-20 neo-shadow-sm cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Article Content Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="p-6 sm:p-10 overflow-y-auto flex-1 overscroll-contain"
        >
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pr-12">
            <span className="text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full neo-border">
              {lang === 'zh' ? article.categoryZh : article.category}
            </span>
            <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            {scrollProgress > 0 && (
              <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md tabular-nums transition-opacity">
                {scrollProgress}% {lang === 'zh' ? '已读' : 'read'}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight mb-5">
            {lang === 'zh' ? article.titleZh : article.title}
          </h1>

          {/* Author pill */}
          <div className="flex items-center gap-3 p-3 rounded-2xl neo-border bg-[#F8F9FA] mb-6 inline-flex">
            <div className="w-9 h-9 rounded-full bg-[#FFC224] neo-border flex items-center justify-center font-bold text-xs">
              JC
            </div>
            <div className="text-xs">
              <div className="font-bold text-black">{article.author.name}</div>
              <div className="text-neutral-500">Principal Designer & Author</div>
            </div>
          </div>

          {/* Article Graphic illustration */}
          <div className="rounded-2xl neo-border overflow-hidden mb-8 neo-shadow-sm">
            {article.illustrationType === 'palette' ? (
              <ArticlePaletteIllu className="w-full h-auto max-h-[280px]" />
            ) : article.illustrationType === 'typography' ? (
              <ArticleTypographyIllu className="w-full h-auto max-h-[280px]" />
            ) : (
              <ArticleExerciseIllu className="w-full h-auto max-h-[280px]" />
            )}
          </div>

          {/* Article Body Content */}
          <div className="prose prose-neutral max-w-none space-y-6 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
            <p className="font-medium text-neutral-900 text-base sm:text-lg border-l-4 border-[#2B7FFF] pl-4 py-1 italic bg-[#F8F9FA] rounded-r-xl">
              {lang === 'zh' ? article.summaryZh : article.summary}
            </p>

            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-black">
                  {sec.heading}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}

            {/* Tags */}
            <div className="pt-4 flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span key={t} className="text-xs font-bold px-3 py-1 bg-white rounded-lg neo-border text-neutral-700">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Reader Footer Bar */}
          <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t-2 border-black">
            <div className="flex items-center gap-2">
              <button
                onClick={handleClap}
                className={`text-xs font-bold py-2.5 px-4 rounded-xl neo-border flex items-center gap-2 transition-all ${
                  hasClapped ? 'bg-[#FF5364] text-white neo-shadow-sm' : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasClapped ? 'fill-white' : ''}`} />
                <span>{claps} {lang === 'zh' ? '赞同' : 'Claps'}</span>
              </button>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2.5 rounded-xl neo-border transition-all ${
                  bookmarked ? 'bg-[#FFC224] text-black neo-shadow-sm' : 'bg-white text-black hover:bg-neutral-100'
                }`}
                title="Bookmark article"
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-black' : ''}`} />
              </button>
            </div>

            <button
              onClick={handleCopyLink}
              className="text-xs font-bold py-2.5 px-4 rounded-xl neo-border bg-[#F8F9FA] hover:bg-neutral-200 flex items-center gap-2 transition-all cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? (lang === 'zh' ? '链接已复制' : 'Copied!') : (lang === 'zh' ? '分享文章' : 'Share Link')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
