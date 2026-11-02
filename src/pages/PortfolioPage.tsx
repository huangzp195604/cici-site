import React, { useState, useMemo } from 'react';
import { Folder, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';
import { portfolioProjects } from '../data/siteData';
import { StudioCaseStudyIllu, VentureCaseStudyIllu, WebDesignIllu, UIUXDesignIllu, ProductDesignIllu } from '../components/Illustrations';

interface PortfolioPageProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenContact: () => void;
  lang: 'zh' | 'en';
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenCaseStudy,
  onOpenContact,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', en: 'All Works', zh: '全部作品' },
    { id: 'uiux', en: 'UI/UX Design', zh: 'UI/UX 体验' },
    { id: 'web', en: 'Web Apps', zh: 'Web 应用' },
    { id: 'system', en: 'Design Systems', zh: '设计系统' },
    { id: 'mobile', en: 'Mobile Apps', zh: '移动端' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-16 sm:space-y-24 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
      
      {/* 1. Header & Filters */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neo-border bg-[#FFC224] text-black font-extrabold text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '设计案例集 · 100+ 交付沉淀' : 'Selected Works · 100+ Commercial Projects'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight mb-4">
            {lang === 'zh' ? (
              <>精选商业案例与 <span className="bg-[#6355F6] text-white px-3 py-1 rounded-2xl inline-block">数字化产品</span></>
            ) : (
              <>Selected works & <span className="bg-[#6355F6] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block">case studies</span></>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600">
            {lang === 'zh'
              ? '每一个项目都是对用户同理心、商业转化与极致工程落地标准的深度探索。'
              : 'Every project is a deep dive into user empathy, business metrics, and craft execution.'}
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => {
            const active = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-2xl neo-border transition-all cursor-pointer ${
                  active
                    ? 'bg-black text-white neo-shadow-sm'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 hover:text-black'
                }`}
              >
                {lang === 'zh' ? c.zh : c.en}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Projects List matching screenshot 5 & 6 */}
      <section className="space-y-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white neo-border-thick rounded-3xl neo-shadow overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-transform hover:-translate-y-1 duration-200"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Brand / Logo */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg neo-border flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: proj.accentColor, color: proj.accentColor === '#FFB800' ? '#000' : '#fff' }}
                  >
                    ✦
                  </div>
                  <span className="font-extrabold text-xl text-black">{proj.client}</span>
                  <span className="text-xs text-neutral-400 font-bold ml-auto">{proj.year}</span>
                </div>

                {/* Category Pill Tag */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full neo-border inline-block">
                    {lang === 'zh' ? proj.categoryLabelZh : proj.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-snug">
                  {lang === 'zh' ? proj.titleZh : proj.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {lang === 'zh' ? proj.summaryZh : proj.summary}
                </p>

                {/* Deliverables Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.deliverables.slice(0, 3).map((d) => (
                    <span key={d} className="text-[11px] font-semibold px-2 py-0.5 bg-[#F8F9FA] rounded-md neo-border text-neutral-700">
                      {d}
                    </span>
                  ))}
                </div>

                {/* Metrics Highlight Strip */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl neo-border bg-[#F8F9FA] text-center">
                      <div className="text-sm sm:text-base font-black text-black">{m.value}</div>
                      <div className="text-[10px] text-neutral-500 font-bold truncate">
                        {lang === 'zh' ? m.labelZh : m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Case Study CTA Link */}
              <div className="pt-6 border-t-2 border-black mt-6">
                <button
                  onClick={() => onOpenCaseStudy(proj)}
                  className="font-black text-sm text-black flex items-center gap-2 group hover:underline cursor-pointer"
                >
                  <span>{lang === 'zh' ? '查看案例深度解析' : 'View case study'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Illustration Container */}
            <div className="lg:col-span-6 border-t-2 lg:border-t-0 lg:border-l-2 border-black flex items-center justify-center overflow-hidden min-h-[300px]">
              {proj.illustrationType === 'studio' && (
                <StudioCaseStudyIllu className="w-full h-full object-cover" />
              )}
              {proj.illustrationType === 'venture' && (
                <VentureCaseStudyIllu className="w-full h-full object-cover" />
              )}
              {proj.illustrationType === 'fintech' && (
                <div className="w-full h-full bg-[#FFB800] p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl neo-border neo-shadow w-full max-w-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-extrabold text-xs uppercase bg-black text-white px-2 py-0.5 rounded">FinFlow Hub</span>
                      <span className="text-xs font-bold text-green-600">+24.8% Today</span>
                    </div>
                    <div className="text-2xl font-black mb-2">$850,290.00</div>
                    <div className="h-16 flex items-end gap-1.5 pt-2">
                      {[40, 65, 30, 80, 55, 95, 75, 100].map((h, idx) => (
                        <div key={idx} className="flex-1 bg-black rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {proj.illustrationType === 'health' && (
                <div className="w-full h-full bg-[#59D13E] p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl neo-border neo-shadow w-full max-w-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <span className="font-bold text-xs text-black">Vitals Monitoring Active</span>
                    </div>
                    <div className="text-2xl font-black mb-1">72 BPM · Normal</div>
                    <p className="text-xs text-neutral-600">Recovery progress: 92% on schedule</p>
                  </div>
                </div>
              )}
              {proj.illustrationType === 'ecommerce' && (
                <div className="w-full h-full bg-[#FF5364] p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl neo-border neo-shadow w-full max-w-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Sustainable Collection</div>
                    <div className="text-xl font-black mb-2">Aura Minimalist Studio Jacket</div>
                    <div className="text-sm font-bold text-black mb-3">$380.00 · Carbon Neutral</div>
                    <div className="w-full py-2 bg-black text-white rounded-xl text-xs font-bold text-center">Add to Cart</div>
                  </div>
                </div>
              )}
              {proj.illustrationType === 'craft' && (
                <div className="w-full h-full bg-[#6355F6] p-8 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl neo-border neo-shadow w-full max-w-sm">
                    <div className="text-xs font-mono font-bold text-[#6355F6] mb-1">tokens.config.json</div>
                    <div className="text-sm font-mono text-black bg-[#F8F9FA] p-3 rounded-lg neo-border mb-3 text-[11px]">
                      {`{ "color": { "primary": "#6355F6", "surface": "#FFFFFF" } }`}
                    </div>
                    <div className="text-xs font-bold text-neutral-600">120+ Components Synchronized</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="bg-black text-white neo-border-thick rounded-3xl neo-shadow p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
          {lang === 'zh' ? '有想要探讨的数字化项目或商业构想？' : 'Have a digital challenge you want to solve?'}
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-8 font-normal">
          {lang === 'zh'
            ? '从设计系统构建、复杂的交互架构重塑，到高转化电商，随时与我沟通。'
            : 'Whether enterprise software architecture or high-converting web apps, let’s talk.'}
        </p>
        <button
          onClick={onOpenContact}
          className="bg-white text-black font-bold rounded-2xl px-8 py-4 neo-border neo-shadow neo-btn inline-flex items-center gap-2 cursor-pointer hover:bg-neutral-100"
        >
          <span>{lang === 'zh' ? '立即预约沟通' : 'Book a project consultation'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
