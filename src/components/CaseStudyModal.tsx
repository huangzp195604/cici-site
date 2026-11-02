import React from 'react';
import { X, ArrowRight, CheckCircle2, TrendingUp, Calendar, User, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';
import { StudioCaseStudyIllu, VentureCaseStudyIllu } from './Illustrations';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  lang: 'zh' | 'en';
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenContact,
  lang,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white neo-border-thick rounded-3xl neo-shadow-lg p-6 sm:p-10 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full neo-border bg-white hover:bg-neutral-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-10"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Meta Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full neo-border">
            {lang === 'zh' ? project.categoryLabelZh : project.categoryLabel}
          </span>
          <span className="text-xs font-bold bg-[#FFC224] text-black px-3 py-1 rounded-full neo-border flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
          <span className="text-xs font-bold bg-[#F8F9FA] text-black px-3 py-1 rounded-full neo-border flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {project.role}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-4">
          {lang === 'zh' ? project.titleZh : project.title}
        </h2>

        {/* Big Illustration Showcase */}
        <div className="rounded-3xl neo-border overflow-hidden mb-8 neo-shadow">
          {project.illustrationType === 'studio' ? (
            <StudioCaseStudyIllu className="w-full h-auto max-h-[380px] object-cover" />
          ) : project.illustrationType === 'venture' ? (
            <VentureCaseStudyIllu className="w-full h-auto max-h-[380px] object-cover" />
          ) : (
            <div 
              className="w-full h-64 sm:h-80 flex flex-col items-center justify-center p-8 text-center"
              style={{ backgroundColor: project.accentColor }}
            >
              <div className="bg-white p-6 rounded-3xl neo-border neo-shadow max-w-md">
                <Sparkles className="w-8 h-8 text-black mb-2 mx-auto" />
                <h3 className="text-xl font-black text-black">
                  {lang === 'zh' ? project.titleZh : project.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-2 font-medium">
                  {lang === 'zh' ? project.summaryZh : project.summary}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-2xl neo-border bg-[#F8F9FA] text-center neo-shadow-sm">
              <div className="text-3xl font-black text-black tracking-tight mb-1">{m.value}</div>
              <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider">
                {lang === 'zh' ? m.labelZh : m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-3xl neo-border bg-white neo-shadow-sm">
            <span className="text-xs font-black uppercase tracking-wider bg-[#FF5364] text-white px-2.5 py-1 rounded-md inline-block mb-3">
              {lang === 'zh' ? '面临挑战' : 'The Challenge'}
            </span>
            <p className="text-sm text-neutral-700 leading-relaxed font-medium">
              {lang === 'zh' ? project.challengeZh : project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-3xl neo-border bg-white neo-shadow-sm">
            <span className="text-xs font-black uppercase tracking-wider bg-[#59D13E] text-black px-2.5 py-1 rounded-md inline-block mb-3">
              {lang === 'zh' ? '设计方案' : 'The Solution'}
            </span>
            <p className="text-sm text-neutral-700 leading-relaxed font-medium">
              {lang === 'zh' ? project.solutionZh : project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables & Deliverable Highlights */}
        <div className="p-6 rounded-3xl neo-border bg-[#F8F9FA] mb-8">
          <h3 className="text-sm font-black uppercase tracking-wider text-black mb-4">
            {lang === 'zh' ? '核心交付成果与亮点' : 'Key Deliverables & Execution'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {project.deliverables.map((d, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-bold text-black bg-white p-2.5 rounded-xl neo-border">
                <CheckCircle2 className="w-4 h-4 text-[#2B7FFF] shrink-0" />
                <span>{d}</span>
              </div>
            ))}
          </div>
          <ul className="text-xs text-neutral-700 space-y-2 list-disc pl-4 font-medium">
            {project.content.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-black">
          <p className="text-xs text-neutral-500 font-medium">
            {lang === 'zh' ? '想了解更多此项目的原型演示或架构细节？' : 'Interested in seeing wireframes or prototype flows?'}
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto bg-black text-white font-bold rounded-xl px-6 py-3 neo-border neo-shadow neo-btn text-xs flex items-center justify-center gap-2"
            >
              <span>{lang === 'zh' ? '联系 John 探讨类似需求' : 'Inquire Similar Project'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
