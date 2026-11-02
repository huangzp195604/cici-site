/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTab, ProjectItem, ArticleItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const toggleLang = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const handleSelectTab = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col justify-between selection:bg-[#FF5364] selection:text-white">
      {/* Top Floating Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenDownload={() => setIsDownloadOpen(true)}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* Main Page Content */}
      <main className="flex-1 pb-16">
        {currentTab === 'home' && (
          <HomePage
            onSelectTab={handleSelectTab}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenArticle={(art) => setSelectedArticle(art)}
            lang={lang}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onOpenContact={() => setIsContactOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
            lang={lang}
          />
        )}

        {currentTab === 'portfolio' && (
          <PortfolioPage
            onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
            onOpenContact={() => setIsContactOpen(true)}
            lang={lang}
          />
        )}

        {currentTab === 'articles' && (
          <ArticlesPage
            onOpenArticle={(art) => setSelectedArticle(art)}
            lang={lang}
          />
        )}
      </main>

      {/* Neo-Brutalist Footer with Newsletter & Links */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenDownload={() => setIsDownloadOpen(true)}
        lang={lang}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={() => setIsContactOpen(true)}
        lang={lang}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
      />

      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        lang={lang}
      />
    </div>
  );
}
