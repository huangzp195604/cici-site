import React, { useState } from 'react';
import { Mail, Folder, ArrowRight, User, FileText, ChevronLeft, ChevronRight, Edit3, Sparkles } from 'lucide-react';
import portraitImg from '../assets/portrait.png';
import testimonialAvatarImg from '../assets/testimonial-avatar.png';
import { PageTab, ArticleItem } from '../types';
import { servicesData, experienceData, testimonialsData, articlesData } from '../data/siteData';
import {
  JohnCarterWorking,
  MultiCurrencyFXIllu,
  CostAccountingIllu,
  ReconciliationIllu,
  TaxComplianceIllu,
  TreasurySchedulingIllu,
  ArticlePaletteIllu,
  ArticleTypographyIllu,
  ArticleExerciseIllu,
} from '../components/Illustrations';

interface HomePageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenArticle: (article: ArticleItem) => void;
  lang: 'zh' | 'en';
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectTab,
  onOpenContact,
  onOpenResume,
  onOpenArticle,
  lang,
}) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const currentTestimonial = testimonialsData[activeTestimonialIdx];

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. Hero Section matching screenshot 1 */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.15]"
              style={{ fontFamily: "SimSun, 'Songti SC', STSong, serif" }}
            >
              {lang === 'zh' ? (
                <>
                  我是 <span className="bg-[#FF5364] text-white px-3 py-1 rounded-2xl inline-block mr-1">Cici</span>，
                  <br />
                  一名来自 <span className="bg-[#2B7FFF] text-white px-3 py-1 rounded-2xl inline-block">深圳</span>
                  <br />
                  的财务会计
                </>
              ) : (
                <>
                  I'm <span className="bg-[#FF5364] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block mr-1">John Carter</span>,
                  <br />
                  a Web Designer
                  <br />
                  from <span className="bg-[#2B7FFF] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block">New York</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-lg leading-relaxed font-normal">
              {lang === 'zh' ? (
                <>
                  我的日常，是在美元、欧元、英镑和人民币之前找出那 0.03 元的差额去了哪儿。
                  <br />
                  客户说我们运费贵，货代说我们付款慢，老板说利润薄，三方都很有道理，而我是那个必须把三个“有道理”拼成一张平账表、还得让它通过审计的人。
                  <br />
                  顺带负责给汇率波动写解释，给滞港费写悼词。
                </>
              ) : (
                'Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed doler.'
              )}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="bg-black text-white font-bold rounded-2xl px-7 py-3.5 neo-border neo-shadow neo-btn flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'zh' ? '开启合作咨询' : 'Get in touch'}</span>
              </button>

              <button
                onClick={() => onSelectTab('portfolio')}
                className="bg-white text-black font-bold rounded-2xl px-7 py-3.5 neo-border neo-shadow-sm hover:bg-neutral-100 neo-btn flex items-center gap-2 cursor-pointer"
              >
                <Folder className="w-4 h-4" />
                <span>{lang === 'zh' ? '查看作品集' : 'View portfolio'}</span>
              </button>
            </div>
          </div>

          {/* Right Yellow Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[360px] sm:max-w-[400px] transition-transform hover:-translate-y-1 duration-200">
              <div className="neo-shadow-lg rounded-3xl overflow-hidden bg-[#FFC224] neo-border-thick">
                <img
                  src={portraitImg}
                  alt="Cici"
                  className="w-full h-auto object-cover will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section matching screenshot 2 & 3 */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mb-4">
            {lang === 'zh' ? (
              <>我的专业 <span className="bg-[#FF5364] text-white px-3 py-1 rounded-2xl inline-block">核心服务领域</span></>
            ) : (
              <>My broad <span className="bg-[#FF5364] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block">set of services</span></>
            )}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {lang === 'zh'
              ? '从一张提单的成本归集，到多币种对账与出口退税合规，提供一站式跨境物流财务服务。'
              : 'From cost aggregation per bill of lading, through multi-currency reconciliation and export-tax compliance — a one-stop cross-border logistics finance service.'}
          </p>
        </div>

        {/* 6 Services Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((svc) => {
            if (svc.type === 'cta') {
              // Special Yellow "Get in touch" Card matching screenshot 3
              return (
                <div
                  key={svc.id}
                  className="bg-[#FFC224] neo-border-thick rounded-3xl neo-shadow p-6 sm:p-8 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-white neo-border flex items-center justify-center neo-shadow-sm mb-6">
                      <Mail className="w-8 h-8 text-black stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-black text-black">
                      {lang === 'zh' ? svc.titleZh : svc.title}
                    </h3>
                    <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                      {lang === 'zh' ? svc.descriptionZh : svc.description}
                    </p>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={onOpenContact}
                      className="w-full bg-black text-white font-bold rounded-2xl py-3.5 px-6 neo-border neo-shadow-sm neo-btn flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{lang === 'zh' ? '立即咨询' : 'Get in touch'}</span>
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={svc.id}
                className="bg-white neo-border-thick rounded-3xl neo-shadow overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-200"
              >
                {/* Illustration Frame */}
                <div className="bg-[#F4F5F7] p-6 border-b-2 border-black flex items-center justify-center min-h-[200px]">
                  {svc.type === 'fx' && <MultiCurrencyFXIllu className="w-full max-w-[240px] h-auto" />}
                  {svc.type === 'cost' && <CostAccountingIllu className="w-full max-w-[240px] h-auto" />}
                  {svc.type === 'recon' && <ReconciliationIllu className="w-full max-w-[240px] h-auto" />}
                  {svc.type === 'tax' && <TaxComplianceIllu className="w-full max-w-[240px] h-auto" />}
                  {svc.type === 'treasury' && <TreasurySchedulingIllu className="w-full max-w-[240px] h-auto" />}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-black">
                      {lang === 'zh' ? svc.titleZh : svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {lang === 'zh' ? svc.descriptionZh : svc.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Who's Behind All This Great Work matching screenshot 4 */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Coral Circle Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <JohnCarterWorking className="w-full h-auto drop-shadow-[5px_5px_0px_#000]" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
              {lang === 'zh' ? (
                <>是谁在背后创造这些 <span className="bg-[#2B7FFF] text-white px-3 py-1 rounded-2xl inline-block">卓越作品？</span></>
              ) : (
                <>Who's behind all this <span className="bg-[#2B7FFF] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block">great work?</span></>
              )}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed">
              {lang === 'zh'
                ? '3 年制造业与跨境财务工作经验，热衷于将繁琐的票据往来与多币种结算，转化为清晰无误的账目与报表。'
                : '3 years of manufacturing & cross-border finance experience — turning messy invoicing trails and multi-currency settlements into crisp, error-free books and reports.'}
            </p>

            {/* Metrics Checklist matching screenshot */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#6355F6] neo-border shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base sm:text-lg font-black text-black">
                    {lang === 'zh' ? '50+ 家供应商月度对账' : '50+ suppliers reconciled monthly'}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    {lang === 'zh'
                      ? '覆盖原材料供应商与外发加工商，审核采购合同、送货单与对账单，保障往来账目真实清晰。'
                      : 'From raw-material vendors to subcontractors — validating purchase contracts, delivery notes and statements so every payable is real and clear.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-[#FF5364] neo-border shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base sm:text-lg font-black text-black">
                    {lang === 'zh' ? '300+ 员工薪资核算' : '300+ payroll calculations'}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    {lang === 'zh'
                      ? '涵盖计件工资、社保办理与纳税申报，从实习期的零误差记录保持至今。'
                      : 'Including piece-rate wages, social-security filings and tax declarations — zero-error streak since my internship.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectTab('about')}
                className="bg-black text-white font-bold rounded-2xl px-7 py-3.5 neo-border neo-shadow neo-btn flex items-center gap-2 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>{lang === 'zh' ? '了解更多关于我' : 'More about me'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Past Experience (Dark Section matching screenshot 7) */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 -mx-4 sm:-mx-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Header & Resume Button */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {lang === 'zh' ? (
                  <>查阅我的 <span className="bg-[#6355F6] text-white px-3 py-1 rounded-2xl inline-block">过往职业履历</span></>
                ) : (
                  <>Take a look at my <span className="bg-[#6355F6] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block">past experience</span></>
                )}
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                {lang === 'zh'
                  ? '拥有 3 年制造业与跨境财务实战经验，从往来对账、薪资核算到出口报关与纳税申报，每一环都亲手处理，只为让每一笔账都清晰、合规、经得起查。'
                  : '3 years of hands-on finance experience in manufacturing and cross-border business — from reconciliations and payroll to customs clearance and tax filings, every link handled personally so every account is clear, compliant and auditable.'}
              </p>

              <div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="个人简历-童怡茜.pdf"
                  className="bg-white text-black font-bold rounded-2xl px-7 py-3.5 neo-border neo-shadow neo-btn flex items-center gap-2 cursor-pointer hover:bg-neutral-100 w-max"
                >
                  <FileText className="w-4 h-4 text-black" />
                  <span>{lang === 'zh' ? '查看完整简历 (CV)' : 'See full resume'}</span>
                </a>
              </div>
            </div>

            {/* Right White Cards for Experience Timeline */}
            <div className="lg:col-span-7 space-y-5">
              {experienceData.slice(0, 3).map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white text-black neo-border-thick rounded-3xl neo-shadow overflow-hidden transition-transform hover:-translate-y-1 duration-200"
                >
                  {/* Top Bar with Period and Icon */}
                  <div className="flex items-center justify-between px-6 py-4 border-b-2 border-black bg-white">
                    <span className="font-extrabold text-sm sm:text-base text-black">
                      {lang === 'zh' ? exp.periodZh : exp.period}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#2B7FFF] text-white neo-border flex items-center justify-center neo-shadow-sm">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-black">
                      {lang === 'zh' ? exp.roleZh : exp.role}
                    </h3>
                    <p className="text-xs font-bold text-[#6355F6]">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                      {lang === 'zh' ? exp.descriptionZh : exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section matching screenshot 8 */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mb-4">
            {lang === 'zh' ? (
              <>客户与合作伙伴对 <span className="bg-[#2B7FFF] text-white px-3 py-1 rounded-2xl inline-block">我的评价</span></>
            ) : (
              <>What my clients say about <span className="bg-[#2B7FFF] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block">my work</span></>
            )}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {lang === 'zh'
              ? '来自直属主管与协作团队的真实工作反馈。'
              : 'Real feedback from my direct manager and cross-functional teammates.'}
          </p>
        </div>

        {/* Testimonial Quote Card matching screenshot 8 */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white neo-border-thick rounded-3xl neo-shadow p-6 sm:p-12 relative">
            
            {/* Top Left Quote Badge */}
            <div className="absolute -top-6 left-8 sm:left-12 w-12 h-12 rounded-2xl bg-black text-white neo-border flex items-center justify-center neo-shadow-sm">
              <span className="text-2xl font-serif">“</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
              {/* Quote Text & Author */}
              <div className="md:col-span-8 space-y-6">
                <blockquote className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium">
                  {lang === 'zh' ? currentTestimonial.quoteZh : currentTestimonial.quote}
                </blockquote>

                <div>
                  <h4 className="text-lg font-black text-black">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 font-bold">
                    {currentTestimonial.role}
                    {currentTestimonial.company && currentTestimonial.company !== '——' && (
                      <> · {currentTestimonial.company}</>
                    )}
                  </p>
                </div>
              </div>

              {/* Right Avatar */}
              <div className="md:col-span-4 flex justify-center">
                <div className="group w-48 sm:w-56 h-auto cursor-pointer">
                  <img
                    src={testimonialAvatarImg}
                    alt="客户头像"
                    className="w-full h-auto drop-shadow-[4px_4px_0px_#000] will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:-rotate-[3deg]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={handlePrevTestimonial}
              className="w-10 h-10 rounded-full neo-border bg-white hover:bg-neutral-100 flex items-center justify-center neo-shadow-sm transition-transform active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonialIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all neo-border ${
                    activeTestimonialIdx === i ? 'bg-black w-6' : 'bg-neutral-200'
                  }`}
                  aria-label={`Testimonial slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNextTestimonial}
              className="w-10 h-10 rounded-full neo-border bg-white hover:bg-neutral-100 flex items-center justify-center neo-shadow-sm transition-transform active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Articles & News Section matching screenshot 9 */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              {lang === 'zh' ? '设计文章与行业动态' : 'Articles & News'}
            </h2>
          </div>
          <div>
            <button
              onClick={() => onSelectTab('articles')}
              className="bg-white text-black font-bold rounded-2xl px-6 py-3 neo-border neo-shadow-sm hover:bg-neutral-100 neo-btn inline-flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Edit3 className="w-4 h-4" />
              <span>{lang === 'zh' ? '浏览全部文章' : 'Browse all articles'}</span>
            </button>
          </div>
        </div>

        {/* Bento Grid matching screenshot 9 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Large Card (Article 1) */}
          <div
            onClick={() => onOpenArticle(articlesData[0])}
            className="lg:col-span-6 bg-white neo-border-thick rounded-3xl neo-shadow overflow-hidden flex flex-col justify-between cursor-pointer group transition-transform hover:-translate-y-1 duration-200"
          >
            {/* Top Illustration with category pill */}
            <div className="relative bg-[#F4F5F7] p-6 border-b-2 border-black flex items-center justify-center min-h-[220px]">
              <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full neo-border z-10">
                {lang === 'zh' ? articlesData[0].categoryZh : articlesData[0].category}
              </span>
              <ArticlePaletteIllu className="w-full max-w-[280px] h-auto" />
            </div>

            {/* Bottom Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-black group-hover:text-[#2B7FFF] transition-colors">
                {lang === 'zh' ? articlesData[0].titleZh : articlesData[0].title}
              </h3>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-[#FFC224] neo-border flex items-center justify-center font-bold text-xs">
                  JC
                </div>
                <span className="font-bold text-xs sm:text-sm text-black">John Carter</span>
              </div>
            </div>
          </div>

          {/* Right Stacked Cards (Article 2 & 3) */}
          <div className="lg:col-span-6 space-y-6">
            {articlesData.slice(1, 3).map((art, idx) => (
              <div
                key={art.id}
                onClick={() => onOpenArticle(art)}
                className="bg-white neo-border-thick rounded-3xl neo-shadow p-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center cursor-pointer group transition-transform hover:-translate-y-1 duration-200"
              >
                {/* Left Illustration */}
                <div className="sm:col-span-5 relative bg-[#F4F5F7] rounded-2xl neo-border p-3 flex items-center justify-center">
                  <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-full z-10">
                    {lang === 'zh' ? art.categoryZh : art.category}
                  </span>
                  {idx === 0 ? (
                    <ArticleTypographyIllu className="w-full max-w-[150px] h-auto" />
                  ) : (
                    <ArticleExerciseIllu className="w-full max-w-[150px] h-auto" />
                  )}
                </div>

                {/* Right Content */}
                <div className="sm:col-span-7 space-y-2">
                  <h3 className="text-base sm:text-lg font-black text-black group-hover:text-[#2B7FFF] transition-colors leading-snug">
                    {lang === 'zh' ? art.titleZh : art.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {lang === 'zh' ? art.summaryZh : art.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
