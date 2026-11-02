import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [selectedService, setSelectedService] = useState('Web design');
  const [budget, setBudget] = useState('$10k - $25k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds or keep confirmed state
    }, 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const services = [
    { en: 'Web design', zh: '网页设计' },
    { en: 'UI/UX design', zh: 'UI/UX 体验' },
    { en: 'Product design', zh: '全案产品设计' },
    { en: 'Design system', zh: '设计系统搭建' },
  ];

  const budgets = ['$5k - $10k', '$10k - $25k', '$25k+'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white neo-border-thick rounded-3xl neo-shadow-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full neo-border bg-white hover:bg-neutral-100 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#59D13E] neo-border flex items-center justify-center mb-6 neo-shadow">
              <CheckCircle2 className="w-10 h-10 text-black stroke-[2.5]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-3">
              {lang === 'zh' ? '消息已成功送达！' : 'Message Sent Successfully!'}
            </h3>
            <p className="text-neutral-600 max-w-md mx-auto mb-8">
              {lang === 'zh'
                ? '感谢你的来信。我会在 24 小时内仔细阅读并回复你的项目构想，期待与你的合作！'
                : 'Thank you for reaching out! I will review your project brief and get back to you within 24 hours.'}
            </p>
            <button
              onClick={handleReset}
              className="bg-black text-white font-bold rounded-xl px-8 py-3.5 neo-border neo-shadow neo-btn"
            >
              {lang === 'zh' ? '返回页面' : 'Done & Return'}
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#FFC224] text-black px-3 py-1 rounded-full neo-border inline-block mb-3">
                {lang === 'zh' ? '开启合作' : 'Get in Touch'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                {lang === 'zh' ? (
                  <>让我们一起打造 <span className="bg-[#FF5364] text-white px-2 py-0.5 rounded-lg inline-block">非凡产品</span></>
                ) : (
                  <>Let's build something <span className="bg-[#FF5364] text-white px-2 py-0.5 rounded-lg inline-block">exceptional</span></>
                )}
              </h2>
              <p className="text-sm text-neutral-600 mt-2">
                {lang === 'zh'
                  ? '填写以下信息，告诉我你的项目想法或设计诉求。'
                  : "Fill out the form below or reach out directly. I'm ready to collaborate."}
              </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 bg-[#F8F9FA] rounded-2xl neo-border">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-black">
                <div className="w-8 h-8 rounded-lg bg-[#2B7FFF] text-white flex items-center justify-center neo-border shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>john@paperfolio.design</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-black">
                <div className="w-8 h-8 rounded-lg bg-[#59D13E] text-black flex items-center justify-center neo-border shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>New York City, NY, USA</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                  {lang === 'zh' ? '1. 意向合作类型' : '1. What service do you need?'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {services.map((svc) => (
                    <button
                      type="button"
                      key={svc.en}
                      onClick={() => setSelectedService(svc.en)}
                      className={`text-xs font-bold py-2.5 px-3 rounded-xl neo-border transition-all text-center ${
                        selectedService === svc.en
                          ? 'bg-black text-white neo-shadow-sm'
                          : 'bg-white text-black hover:bg-neutral-100'
                      }`}
                    >
                      {lang === 'zh' ? svc.zh : svc.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                  {lang === 'zh' ? '2. 预期预算范围' : '2. Expected project budget'}
                </label>
                <div className="flex gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`text-xs font-bold py-2 px-4 rounded-xl neo-border transition-all ${
                        budget === b
                          ? 'bg-[#FFC224] text-black neo-shadow-sm'
                          : 'bg-white text-black hover:bg-neutral-100'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    {lang === 'zh' ? '你的称呼 *' : 'Your name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'zh' ? '例如：Alex Zhang' : 'e.g. Alex Zhang'}
                    className="w-full px-4 py-2.5 rounded-xl neo-border text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    {lang === 'zh' ? '你的邮箱 *' : 'Email address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl neo-border text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  {lang === 'zh' ? '项目简述与期望目标' : 'Tell me about your project'}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'zh'
                      ? '请简要描述产品现状、预期交付周期或核心诉求...'
                      : 'Briefly describe your product goals, timeline, and deliverables...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl neo-border text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-bold rounded-xl py-3.5 neo-border neo-shadow neo-btn flex items-center justify-center gap-2 hover:bg-neutral-800"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'zh' ? '立即提交项目咨询' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
