import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>پاسخ به سوالات پرتکرار</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            پرسش‌های متداول خریداران
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            اطلاعات لازم برای انتخاب مطمئن و راه‌اندازی سریع فلیپانو در سایت وردپرسی شما
          </p>
        </div>

        {/* 5 Accordion Items */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.08] border-[#FF7A00]/50 shadow-lg shadow-black/20'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4.5 px-5 text-right flex items-center justify-between gap-4 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/10 text-white transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#FF7A00]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/10 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
