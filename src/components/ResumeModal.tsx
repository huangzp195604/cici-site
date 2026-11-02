import React, { useState } from 'react';
import { X, Download, Printer, Check, Copy, ExternalLink, Briefcase, GraduationCap, Award, Star } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('john@paperfolio.design');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white neo-border-thick rounded-3xl neo-shadow-lg p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Action Bar */}
        <div className="flex items-center justify-between border-b-2 border-black pb-5 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5364] border border-black" />
            <span className="w-3 h-3 rounded-full bg-[#FFC224] border border-black" />
            <span className="w-3 h-3 rounded-full bg-[#59D13E] border border-black" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 ml-2">
              curriculum_vitae_2026.pdf
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="text-xs font-bold py-2 px-3 rounded-xl neo-border bg-white hover:bg-neutral-100 flex items-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'zh' ? '已复制' : 'Copied!') : (lang === 'zh' ? '复制邮箱' : 'Copy Email')}</span>
            </button>
            <button
              onClick={handlePrint}
              className="text-xs font-bold py-2 px-3 rounded-xl neo-border bg-[#FFC224] text-black hover:bg-yellow-400 flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '打印 / 导出 PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full neo-border bg-white hover:bg-neutral-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-black pb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-black">John Carter</h1>
              <p className="text-base sm:text-lg font-bold text-[#6355F6] mt-1">
                {lang === 'zh' ? '资深全栈设计专家 / 设计系统架构师' : 'Principal Product Designer & Systems Architect'}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                New York City, NY · Remote / Hybrid · 15+ Years Industry Experience
              </p>
            </div>
            <div className="bg-[#F8F9FA] p-3 rounded-2xl neo-border text-xs space-y-1">
              <div><strong className="text-black">Portfolio:</strong> paperfolio.design</div>
              <div><strong className="text-black">Email:</strong> john@paperfolio.design</div>
              <div><strong className="text-black">Status:</strong> Open for Senior/Advisory roles</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-black bg-[#FF5364] text-white px-3 py-1 rounded-md inline-block mb-3">
              {lang === 'zh' ? '职业综述' : 'Professional Summary'}
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {lang === 'zh'
                ? '拥有 15 年以上高成长科技企业与知名创意机构的领导经验。专精于复杂 SaaS 平台交互架构、跨端响应式设计系统（Design Tokens）以及微动效工程化落地。曾主导累计获得 Webby & Red Dot 奖项的产品重构，帮助多家明星独角兽完成从 0 到 1 及规模化商业增长。'
                : 'Over 15 years designing enterprise web applications, mobile platforms, and high-conversion digital experiences. Adept at translating ambiguous business opportunities into pixel-precise design systems that drive customer delight and measurable conversion.'}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-black bg-[#2B7FFF] text-white px-3 py-1 rounded-md inline-block mb-4">
              {lang === 'zh' ? '工作经历' : 'Work Experience'}
            </h2>
            <div className="space-y-5">
              <div className="p-4 rounded-2xl neo-border bg-[#F8F9FA]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="font-bold text-base text-black">Horizon Labs · Principal Mobile Product Designer</h3>
                  <span className="text-xs font-bold bg-white neo-border px-2.5 py-0.5 rounded-full">
                    Jan 2023 - Present
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#6355F6] mb-2">New York, NY · Distributed Team</p>
                <ul className="text-xs text-neutral-700 space-y-1.5 list-disc pl-4">
                  <li>{lang === 'zh' ? '主导旗舰移动应用从架构至视觉的全面重塑，次月留存提升 18%' : 'Led the end-to-end UX/UI architecture overhaul for flagship mobile product, boosting D30 retention by 18%'}</li>
                  <li>{lang === 'zh' ? '搭建支持 4 个子品牌的跨端 Design Tokens 架构，降低工程师交付损耗 40%' : 'Engineered multi-brand design tokens schema supporting 4 distinct mobile applications'}</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl neo-border bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="font-bold text-base text-black">CraftWave Studio Inc. · VP of Design</h3>
                  <span className="text-xs font-bold bg-[#F8F9FA] neo-border px-2.5 py-0.5 rounded-full">
                    Jan 2021 - Dec 2022
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#2B7FFF] mb-2">New York, NY</p>
                <ul className="text-xs text-neutral-700 space-y-1.5 list-disc pl-4">
                  <li>{lang === 'zh' ? '管理跨国 14 人设计与研究团队，主导 3 款 SaaS 旗舰产品商业化落地' : 'Managed global team of 14 product designers, user researchers, and design technologists'}</li>
                  <li>{lang === 'zh' ? '重构核心支付转化流程，全平台结算转化率提升 42%' : 'Spearheaded checkout & subscription experience revamp, elevating conversion by 42%'}</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl neo-border bg-[#F8F9FA]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="font-bold text-base text-black">Monolith Digital · Senior UX Architect</h3>
                  <span className="text-xs font-bold bg-white neo-border px-2.5 py-0.5 rounded-full">
                    Mar 2018 - Dec 2020
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-600 mb-2">Brooklyn, NY</p>
                <ul className="text-xs text-neutral-700 space-y-1.5 list-disc pl-4">
                  <li>{lang === 'zh' ? '主导高频交易与数据可视化控制台重构，单屏任务处理耗时缩短 35%' : 'Spearheaded multi-tenant data telemetry dashboard and user interaction guidelines'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Honours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl neo-border bg-[#FFC224]/15">
              <div className="flex items-center gap-2 mb-2 font-bold text-sm text-black">
                <GraduationCap className="w-4 h-4 text-black" />
                <span>{lang === 'zh' ? '教育背景' : 'Education'}</span>
              </div>
              <p className="text-xs font-bold text-black">Rhode Island School of Design (RISD)</p>
              <p className="text-xs text-neutral-600">BFA in Graphic & Interaction Design</p>
              <p className="text-xs text-neutral-500 mt-1">Honors Graduate with Distinction</p>
            </div>

            <div className="p-4 rounded-2xl neo-border bg-[#59D13E]/15">
              <div className="flex items-center gap-2 mb-2 font-bold text-sm text-black">
                <Award className="w-4 h-4 text-black" />
                <span>{lang === 'zh' ? '荣誉与奖项' : 'Awards & Recognition'}</span>
              </div>
              <ul className="text-xs text-neutral-700 space-y-1">
                <li>• Webby Awards Best Visual Design Winner (2023)</li>
                <li>• Red Dot Best of the Best: Interface Design</li>
                <li>• Awwwards Site of the Month (x3)</li>
              </ul>
            </div>
          </div>

          {/* Core Tools */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-black bg-[#59D13E] text-black px-3 py-1 rounded-md inline-block mb-3">
              {lang === 'zh' ? '技术与工具' : 'Core Tools & Stack'}
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {['Figma', 'Design Tokens', 'Framer', 'React', 'Tailwind CSS', 'TypeScript', 'After Effects', 'Design Systems', 'WCAG 2.1 AA Accessibility', 'Rapid Prototyping'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-[#F8F9FA] rounded-xl neo-border text-black">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
