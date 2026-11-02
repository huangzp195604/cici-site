import React, { useState, useMemo } from 'react';
import { Search, Clock, Calendar, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { ArticleItem } from '../types';
import { articlesData } from '../data/siteData';
import { ArticlePaletteIllu, ArticleTypographyIllu, ArticleExerciseIllu } from '../components/Illustrations';

interface ArticlesPageProps {
  onOpenArticle: (article: ArticleItem) => void;
  lang: 'zh' | 'en';
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ onOpenArticle, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', en: 'All Articles', zh: '全部文章' },
    { id: 'Resources', en: 'Resources', zh: '设计资源' },
    { id: 'Articles', en: 'In-Depth Articles', zh: '深度思考' },
    { id: 'News', en: 'Industry News', zh: '行业动态' },
    { id: 'Tutorial', en: 'Tutorials', zh: '工程教程' },
  ];

  const filteredArticles = useMemo(() => {
    return articlesData.filter((art) => {
      const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCat;
      const matchesSearch =
        art.title.toLowerCase().includes(query) ||
        art.titleZh.toLowerCase().includes(query) ||
        art.summary.toLowerCase().includes(query) ||
        art.summaryZh.toLowerCase().includes(query) ||
        art.tags.some((t) => t.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-16 sm:space-y-24 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
      
      {/* 1. Header & Search / Filter Controls */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neo-border bg-[#FFC224] text-black font-extrabold text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '设计与技术专栏' : 'Design & Engineering Insights'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight mb-4">
            {lang === 'zh' ? (
              <>设计思考与 <span className="bg-[#FFB800] text-black px-3 py-1 rounded-2xl inline-block">行业前沿洞察</span></>
            ) : (
              <>Insights, thoughts & <span className="bg-[#FFB800] text-black px-3 sm:px-4 py-0.5 rounded-2xl inline-block">design stories</span></>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600">
            {lang === 'zh'
              ? '分享关于现代产品设计系统、排印几何学、微交互动效及前端工程落地的深度思考。'
              : 'Actionable perspectives on typography, design systems, and frontend craftsmanship.'}
          </p>
        </div>

        {/* Search Bar & Categories Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white neo-border-thick rounded-3xl neo-shadow">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                    active
                      ? 'bg-black text-white neo-border neo-shadow-sm'
                      : 'bg-[#F8F9FA] text-neutral-700 hover:bg-neutral-200 hover:text-black neo-border'
                  }`}
                >
                  {lang === 'zh' ? cat.zh : cat.en}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'zh' ? '搜索文章、关键词或标签...' : 'Search articles...'}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl neo-border bg-[#F8F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
      </section>

      {/* 2. Featured Spotlight Article (if no active filter) */}
      {selectedCategory === 'all' && !searchQuery && articlesData[0] && (
        <section>
          <div className="mb-4">
            <span className="text-xs font-black uppercase tracking-wider bg-[#FF5364] text-white px-3 py-1 rounded-md inline-block">
              {lang === 'zh' ? '本期重磅精选' : 'Featured Spotlight'}
            </span>
          </div>

          <div
            onClick={() => onOpenArticle(articlesData[0])}
            className="bg-white neo-border-thick rounded-3xl neo-shadow overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer group transition-transform hover:-translate-y-1 duration-200"
          >
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 bg-[#F4F5F7] p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex items-center justify-center">
              <ArticlePaletteIllu className="w-full max-w-md h-auto" />
            </div>

            {/* Right Meta & Content */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full neo-border">
                    {lang === 'zh' ? articlesData[0].categoryZh : articlesData[0].category}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {articlesData[0].readTime}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {articlesData[0].date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight group-hover:text-[#2B7FFF] transition-colors">
                  {lang === 'zh' ? articlesData[0].titleZh : articlesData[0].title}
                </h2>

                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {lang === 'zh' ? articlesData[0].summaryZh : articlesData[0].summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {articlesData[0].tags.map((t) => (
                    <span key={t} className="text-xs font-bold px-2.5 py-1 bg-[#F8F9FA] rounded-lg neo-border text-neutral-700">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t-2 border-black mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#FFC224] neo-border flex items-center justify-center font-bold text-xs">
                    JC
                  </div>
                  <span className="text-xs font-bold text-black">{articlesData[0].author.name}</span>
                </div>

                <div className="font-black text-sm text-black flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  <span>{lang === 'zh' ? '阅读全文' : 'Read Article'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Article Grid List */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-black text-black">
            {lang === 'zh' ? '所有已发布文章' : 'All Published Articles'}
            <span className="text-sm text-neutral-500 font-bold ml-2">({filteredArticles.length})</span>
          </h3>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center bg-white neo-border-thick rounded-3xl neo-shadow">
            <p className="text-neutral-600 text-sm mb-4">
              {lang === 'zh' ? '未找到符合条件的文章。' : 'No articles matched your criteria.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-black text-white rounded-xl text-xs font-bold neo-border cursor-pointer"
            >
              {lang === 'zh' ? '重置筛选条件' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => onOpenArticle(art)}
                className="bg-white neo-border-thick rounded-3xl neo-shadow overflow-hidden flex flex-col justify-between cursor-pointer group transition-transform hover:-translate-y-1 duration-200"
              >
                {/* Illustration container */}
                <div className="relative bg-[#F4F5F7] p-6 border-b-2 border-black flex items-center justify-center min-h-[190px]">
                  <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full neo-border z-10">
                    {lang === 'zh' ? art.categoryZh : art.category}
                  </span>
                  {art.illustrationType === 'palette' && (
                    <ArticlePaletteIllu className="w-full max-w-[200px] h-auto" />
                  )}
                  {art.illustrationType === 'typography' && (
                    <ArticleTypographyIllu className="w-full max-w-[170px] h-auto" />
                  )}
                  {art.illustrationType === 'exercises' && (
                    <ArticleExerciseIllu className="w-full max-w-[170px] h-auto" />
                  )}
                  {(art.illustrationType === 'system' || art.illustrationType === 'prototyping') && (
                    <ArticlePaletteIllu className="w-full max-w-[200px] h-auto" />
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-semibold">
                      <span>{art.date}</span>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="text-lg font-black text-black group-hover:text-[#2B7FFF] transition-colors leading-snug">
                      {lang === 'zh' ? art.titleZh : art.title}
                    </h4>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {lang === 'zh' ? art.summaryZh : art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-800">John Carter</span>
                    <span className="text-xs font-black text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {lang === 'zh' ? '阅读' : 'Read'} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
