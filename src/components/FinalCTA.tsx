import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00144f] to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#003cb8]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#001d6d]/90 to-[#001242]/90 border border-white/20 p-8 sm:p-12 text-center shadow-2xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>آماده خلق تجربه‌ای متمایز برای مخاطبان شما</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            محتوای شما آماده ورق خوردن است.
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            با Flipano، PDF و تصاویر خود را به یک تجربه سه‌بعدی، تعاملی و حرفه‌ای تبدیل کنید.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>نصب و پیکربندی آسان</span>
            </span>
            <span className="flex items-center gap-1.5 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>سازگار با انواع قالب‌های وردپرس</span>
            </span>
            <span className="flex items-center gap-1.5 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>پشتیبانی از صفحات لمسی موبایل</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
