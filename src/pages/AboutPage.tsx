import React from 'react';
import { Mail, FileText, CheckCircle2, Award, Sparkles, MapPin, Coffee, Code2, Palette, Terminal } from 'lucide-react';
import { JohnCarterWorking, LilyWoodsAvatar } from '../components/Illustrations';
import { aboutData, experienceData } from '../data/siteData';

interface AboutPageProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  lang: 'zh' | 'en';
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenContact,
  onOpenResume,
  lang,
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
      
      {/* 1. About Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neo-border bg-[#FFC224] text-black font-extrabold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '设计档案 · 资深体验设计师' : 'Designer Bio · 15+ Yrs Industry Craft'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.15]">
            {lang === 'zh' ? (
              <>以热爱与专注，打造 <span className="bg-[#FF5364] text-white px-3 py-1 rounded-2xl inline-block">触手可及</span> 的数字化体验</>
            ) : (
              <>I craft digital products with <span className="bg-[#FF5364] text-white px-3 sm:px-4 py-0.5 rounded-2xl inline-block">heart & purpose</span></>
            )}
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-xl">
            {lang === 'zh' ? aboutData.bioHeadlineZh : aboutData.bioHeadline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenContact}
              className="bg-black text-white font-bold rounded-2xl px-7 py-3.5 neo-border neo-shadow neo-btn flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'zh' ? '预约咨询沟通' : 'Get in touch'}</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="个人简历-童怡茜.pdf"
              className="bg-white text-black font-bold rounded-2xl px-7 py-3.5 neo-border neo-shadow-sm hover:bg-neutral-100 neo-btn flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'zh' ? '查阅完整简历' : 'See full resume'}</span>
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            <JohnCarterWorking className="w-full h-auto drop-shadow-[6px_6px_0px_#000]" />
          </div>
        </div>
      </section>

      {/* 2. Personal Story & Background */}
      <section className="bg-white neo-border-thick rounded-3xl neo-shadow p-6 sm:p-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-black uppercase tracking-wider bg-[#2B7FFF] text-white px-3 py-1 rounded-md inline-block">
            {lang === 'zh' ? '设计旅程' : 'My Journey'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            {lang === 'zh' ? '从传统排印纸张，到万物互联的数字化体验' : 'From print typography to multi-screen digital experiences'}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            {(lang === 'zh' ? aboutData.storyZh : aboutData.story).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t-2 border-black">
            <div className="p-3 bg-[#F8F9FA] rounded-2xl neo-border text-center">
              <div className="text-2xl sm:text-3xl font-black text-black">15+</div>
              <div className="text-xs font-bold text-neutral-500 mt-1">{lang === 'zh' ? '年从业历练' : 'Years Experience'}</div>
            </div>
            <div className="p-3 bg-[#F8F9FA] rounded-2xl neo-border text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#FF5364]">100+</div>
              <div className="text-xs font-bold text-neutral-500 mt-1">{lang === 'zh' ? '个交付项目' : 'Projects Done'}</div>
            </div>
            <div className="p-3 bg-[#F8F9FA] rounded-2xl neo-border text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#2B7FFF]">24</div>
              <div className="text-xs font-bold text-neutral-500 mt-1">{lang === 'zh' ? '座设计奖项' : 'Design Awards'}</div>
            </div>
            <div className="p-3 bg-[#F8F9FA] rounded-2xl neo-border text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#59D13E]">99%</div>
              <div className="text-xs font-bold text-neutral-500 mt-1">{lang === 'zh' ? '客户好评率' : 'Client Rating'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Competencies & Skills */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
            {lang === 'zh' ? (
              <>核心专业能力与 <span className="bg-[#FFB800] text-black px-3 py-1 rounded-2xl inline-block">技术积淀</span></>
            ) : (
              <>Core competencies & <span className="bg-[#FFB800] text-black px-3 py-1 rounded-2xl inline-block">expertise</span></>
            )}
          </h2>
          <p className="text-sm text-neutral-600">
            {lang === 'zh' ? '兼具全局宏观视野与微观代码交付同理心。' : 'Balancing high-level system thinking with micro-level execution.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.coreSkills.map((sk) => (
            <div key={sk.name} className="p-6 bg-white neo-border-thick rounded-3xl neo-shadow space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-base text-black">{lang === 'zh' ? sk.nameZh : sk.name}</span>
                <span className="font-mono font-black text-sm text-black tabular-nums">{sk.level}%</span>
              </div>
              <div className="w-full h-4 rounded-full neo-border bg-[#F4F5F7] overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${sk.level}%`, backgroundColor: sk.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Design Philosophy & Principles */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
            {lang === 'zh' ? (
              <>设计哲学与 <span className="bg-[#6355F6] text-white px-3 py-1 rounded-2xl inline-block">价值准则</span></>
            ) : (
              <>Design philosophy & <span className="bg-[#6355F6] text-white px-3 py-1 rounded-2xl inline-block">principles</span></>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {aboutData.principles.map((p, idx) => (
            <div
              key={p.title}
              className="bg-white neo-border-thick rounded-3xl neo-shadow p-6 sm:p-8 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl neo-border flex items-center justify-center font-black text-white mb-6 neo-shadow-sm"
                  style={{ backgroundColor: p.color }}
                >
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-black text-black mb-3">
                  {lang === 'zh' ? p.titleZh : p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {lang === 'zh' ? p.descZh : p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Tools & Stack */}
      <section className="bg-[#F8F9FA] neo-border-thick rounded-3xl neo-shadow p-6 sm:p-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-[#59D13E] neo-border flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-black">
                {lang === 'zh' ? '设计军械库与日常工具栈' : 'Creative Arsenal & Tooling'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                {lang === 'zh' ? '工欲善其事，必先利其器。我日常用于设计、原型与系统落地的工具组合。' : 'The exact software stack I use to craft living, robust applications.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {aboutData.tools.map((t) => (
              <div key={t.name} className="p-4 bg-white rounded-2xl neo-border flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-full inline-block mb-1.5">
                    {t.tag}
                  </span>
                  <h4 className="font-extrabold text-sm sm:text-base text-black">{t.name}</h4>
                </div>
                <p className="text-xs text-neutral-500 mt-2 font-medium">{t.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Career Timeline Breakdown */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
            {lang === 'zh' ? '职业生涯关键里程碑' : 'Career Timeline'}
          </h2>
        </div>

        <div className="space-y-5 max-w-3xl mx-auto">
          {experienceData.map((exp) => (
            <div key={exp.id} className="p-6 bg-white neo-border-thick rounded-3xl neo-shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                <h3 className="text-lg font-black text-black">{lang === 'zh' ? exp.roleZh : exp.role}</h3>
                <span className="text-xs font-bold bg-[#FFC224] text-black px-3 py-1 rounded-full neo-border">
                  {lang === 'zh' ? exp.periodZh : exp.period}
                </span>
              </div>
              <p className="text-xs font-bold text-[#6355F6] mb-3">{exp.company}</p>
              <p className="text-xs sm:text-sm text-neutral-700 mb-3">{lang === 'zh' ? exp.descriptionZh : exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-[#F8F9FA] rounded-lg neo-border text-neutral-800">
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="bg-[#FFC224] neo-border-thick rounded-3xl neo-shadow p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-4">
          {lang === 'zh' ? '准备好开启一段全新的设计合作了吗？' : 'Ready to craft something extraordinary together?'}
        </h2>
        <p className="text-sm sm:text-base text-neutral-800 max-w-lg mx-auto mb-8 font-medium">
          {lang === 'zh'
            ? '无论是全新产品的从 0 到 1 架构，还是既有系统的体验升级，欢迎与我取得联系。'
            : 'Whether starting from ground zero or leveling up your existing system, let’s talk.'}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={onOpenContact}
            className="bg-black text-white font-bold rounded-2xl px-8 py-4 neo-border neo-shadow neo-btn flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{lang === 'zh' ? '发起项目咨询' : 'Get in touch with John'}</span>
          </button>
        </div>
      </section>

    </div>
  );
};
