import React from 'react';
import { Monitor, Tablet, Smartphone, CheckCircle } from 'lucide-react';

export const ResponsiveDevices: React.FC = () => {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-[#00175b]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Fixed & Clear Persian Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            سازگاری با انواع نمایشگرها
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            سازگاری کامل با رایانه، تبلت و تلفن همراه
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            کتابخوان سه‌بعدی به صورت خودکار ابعاد خود را با صفحه نمایش کاربر هماهنگ کرده و تجربه‌ای روان و بدون تغییر در ساختار ارائه می‌دهد.
          </p>
        </div>

        {/* 3 Device Mockups Row - With SQUARE (مربعی) Book Aspect Ratio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-10 max-w-6xl mx-auto">
          
          {/* 1. Desktop Mockup (5 cols) */}
          <div className="md:col-span-5 rounded-2xl bg-black/40 border border-white/15 p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-white/70">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Monitor className="w-4 h-4 text-cyan-400" />
                رایانه و لپ‌تاپ (نمای دوصفحه‌ای)
              </span>
              <span className="text-[10px] text-white/50">نمایشگر عریض</span>
            </div>

            {/* Square Book Canvas in Desktop */}
            <div className="w-full aspect-square rounded-xl bg-[#001347] border border-white/10 p-4 flex flex-col justify-between items-center">
              <div className="w-full flex items-center justify-between text-[10px] text-white/60 pb-1 border-b border-white/5">
                <span>نمای دوبرگی بازشو</span>
                <span className="text-emerald-400">۶۰ فریم بر ثانیه</span>
              </div>

              {/* Square Book Shape */}
              <div className="w-4/5 aspect-square max-w-[220px] rounded-lg bg-slate-900 border-2 border-amber-800/40 shadow-2xl flex relative overflow-hidden my-auto">
                {/* Right Page */}
                <div className="w-1/2 h-full bg-[#fcf8f0] p-2.5 border-l border-amber-900/20 flex flex-col justify-between text-slate-800">
                  <div className="space-y-1">
                    <div className="w-full aspect-[16/9] rounded bg-amber-900/20 mb-1"></div>
                    <div className="w-full h-1 bg-slate-400 rounded"></div>
                    <div className="w-3/4 h-1 bg-slate-400 rounded"></div>
                  </div>
                  <div className="text-[8px] text-amber-900/60 text-right">صفحه ۱</div>
                </div>
                {/* Center Spine Crease */}
                <div className="absolute inset-y-0 left-1/2 -ml-1 w-2 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none"></div>
                {/* Left Page */}
                <div className="w-1/2 h-full bg-[#fcf8f0] p-2.5 flex flex-col justify-between text-slate-800">
                  <div className="space-y-1">
                    <div className="w-full aspect-[16/9] rounded bg-amber-900/20 mb-1"></div>
                    <div className="w-full h-1 bg-slate-400 rounded"></div>
                    <div className="w-3/4 h-1 bg-slate-400 rounded"></div>
                  </div>
                  <div className="text-[8px] text-amber-900/60 text-left">صفحه ۲</div>
                </div>
              </div>

              <div className="text-[10px] text-white/50 text-center">
                پیمایش با چرخ موس و کلیک دوطرفه
              </div>
            </div>
          </div>

          {/* 2. Tablet Mockup (4 cols) */}
          <div className="md:col-span-4 rounded-2xl bg-black/40 border border-white/15 p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-white/70">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Tablet className="w-4 h-4 text-amber-400" />
                تبلت‌های لمسی
              </span>
              <span className="text-[10px] text-white/50">ژست لمسی</span>
            </div>

            {/* Square Book Canvas in Tablet */}
            <div className="w-full aspect-square rounded-xl bg-[#001347] border border-white/10 p-4 flex flex-col justify-between items-center">
              <div className="w-full flex items-center justify-between text-[10px] text-white/60 pb-1 border-b border-white/5">
                <span>پشتیبانی از لمس چندانگشتی</span>
              </div>

              {/* Square Book Shape */}
              <div className="w-4/5 aspect-square max-w-[200px] rounded-lg bg-slate-900 border-2 border-amber-800/40 shadow-xl flex relative overflow-hidden my-auto">
                <div className="w-1/2 h-full bg-[#fcf8f0] p-2 border-l border-amber-900/20 flex flex-col justify-between">
                  <div className="w-full aspect-[16/9] rounded bg-amber-900/20 mb-1"></div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-400 rounded"></div>
                    <div className="w-2/3 h-1 bg-slate-400 rounded"></div>
                  </div>
                  <div className="text-[7px] text-amber-900/60 text-right">ص ۳</div>
                </div>
                <div className="absolute inset-y-0 left-1/2 -ml-1 w-2 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none"></div>
                <div className="w-1/2 h-full bg-[#fcf8f0] p-2 flex flex-col justify-between">
                  <div className="w-full aspect-[16/9] rounded bg-amber-900/20 mb-1"></div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-400 rounded"></div>
                    <div className="w-2/3 h-1 bg-slate-400 rounded"></div>
                  </div>
                  <div className="text-[7px] text-amber-900/60 text-left">ص ۴</div>
                </div>
              </div>

              <div className="text-[10px] text-white/50 text-center">
                ورق‌زدن روان با لمس انگشت (سوایپ)
              </div>
            </div>
          </div>

          {/* 3. Mobile Mockup (3 cols) */}
          <div className="md:col-span-3 rounded-2xl bg-black/40 border border-white/15 p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-white/70">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                تلفن همراه
              </span>
              <span className="text-[10px] text-white/50">تک‌صفحه</span>
            </div>

            {/* Square Book Canvas in Mobile */}
            <div className="w-full aspect-square rounded-xl bg-[#001347] border border-white/10 p-3 flex flex-col justify-between items-center">
              <div className="w-8 h-1 bg-slate-600 rounded-full"></div>

              {/* Square Book Shape for Mobile */}
              <div className="w-3/4 aspect-square max-w-[150px] rounded-lg bg-[#fcf8f0] border-2 border-amber-800/40 p-2 text-center flex flex-col justify-between shadow-lg my-auto">
                <div className="w-full aspect-[16/9] rounded bg-amber-900/20 mb-1"></div>
                <div className="space-y-1">
                  <div className="w-3/4 h-1 bg-slate-400 rounded mx-auto"></div>
                  <div className="w-1/2 h-1 bg-slate-400 rounded mx-auto"></div>
                </div>
                <div className="text-[7px] text-emerald-600 font-bold">ورق‌زدن با سوایپ افقی</div>
              </div>

              <div className="w-6 h-1 bg-slate-600 rounded-full"></div>
            </div>
          </div>

        </div>

        {/* 4 Feature Highlights Strip - Pure Persian */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>طراحی کاملاً واکنش‌گرا</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>ناوبری لمسی و اشاره‌گر موس</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>پشتیبانی خودکار از راست‌چین</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>حالت تمام‌صفحه بدون حاشیه</span>
          </div>
        </div>

      </div>
    </section>
  );
};
