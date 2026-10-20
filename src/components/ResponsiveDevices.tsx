import React from 'react';
import { Monitor, Tablet, Smartphone, CheckCircle } from 'lucide-react';

export const ResponsiveDevices: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#00175b]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            سازگاری بی‌نقص با انواع ابزارها
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            تجربه‌ای که روی صفحه‌های مختلف، حرفه‌ای می‌ماند
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            Flipano برای تجربه تعاملی در دسکتاپ، تبلت و موبایل طراحی شده است.
          </p>
        </div>

        {/* 3 Device Mockups Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12">
          
          {/* 1. Desktop Mockup (6 cols) */}
          <div className="md:col-span-6 rounded-2xl bg-black/40 border border-white/15 p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-white/60">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Monitor className="w-4 h-4 text-cyan-400" />
                Desktop (نمایش دوصفحه‌ای عریض)
              </span>
              <span className="font-mono">1920 × 1080</span>
            </div>

            {/* Desktop Screen Frame */}
            <div className="w-full aspect-[16/9] rounded-lg bg-[#00144f] border border-white/10 p-3 flex flex-col justify-between">
              <div className="h-4 rounded bg-white/10 flex items-center justify-between px-2 text-[9px] text-white/50">
                <span>نمای دوبرگی کامل</span>
                <span className="text-emerald-400">WebGL 60FPS</span>
              </div>

              {/* Open double page in desktop */}
              <div className="my-auto flex justify-center">
                <div className="w-5/6 h-28 rounded bg-slate-900 border border-white/15 flex shadow-lg">
                  <div className="w-1/2 p-2 border-l border-white/10 space-y-1">
                    <div className="w-10 h-1.5 bg-[#FF7A00] rounded"></div>
                    <div className="w-full h-1 bg-white/20 rounded"></div>
                    <div className="w-4/5 h-1 bg-white/20 rounded"></div>
                  </div>
                  <div className="w-1/2 p-2 space-y-1 bg-slate-800">
                    <div className="w-12 h-1.5 bg-cyan-400 rounded"></div>
                    <div className="w-full h-1 bg-white/20 rounded"></div>
                    <div className="w-3/4 h-1 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="h-4 rounded bg-black/40 flex items-center justify-center text-[9px] text-white/60">
                پیمایش با چرخ موس، کلیدهای جهت‌نما و کلیک
              </div>
            </div>
          </div>

          {/* 2. Tablet Mockup (4 cols) */}
          <div className="md:col-span-4 rounded-2xl bg-black/40 border border-white/15 p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-white/60">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Tablet className="w-4 h-4 text-amber-400" />
                Tablet (تبلت لمسی)
              </span>
              <span className="font-mono">iPad & Android</span>
            </div>

            {/* Tablet Screen Frame */}
            <div className="w-full aspect-[4/3] rounded-lg bg-[#00144f] border border-white/10 p-3 flex flex-col justify-between">
              <div className="h-3 rounded bg-white/10 flex items-center justify-between px-2 text-[8px] text-white/50">
                <span>Touch Gesture Mode</span>
              </div>

              <div className="my-auto flex justify-center">
                <div className="w-4/5 h-24 rounded bg-slate-900 border border-white/15 flex shadow">
                  <div className="w-1/2 p-1.5 border-l border-white/10">
                    <div className="w-8 h-1 bg-amber-400 rounded mb-1"></div>
                    <div className="w-full h-0.5 bg-white/20 rounded"></div>
                  </div>
                  <div className="w-1/2 p-1.5 bg-slate-800">
                    <div className="w-8 h-1 bg-cyan-400 rounded mb-1"></div>
                    <div className="w-full h-0.5 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="h-3 rounded bg-black/40 flex items-center justify-center text-[8px] text-white/60">
                ورق‌زدن با سوایپ (Swipe)
              </div>
            </div>
          </div>

          {/* 3. Mobile Mockup (2 cols) */}
          <div className="md:col-span-2 rounded-2xl bg-black/40 border border-white/15 p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-white/60">
              <span className="flex items-center gap-1.5 font-bold text-white truncate">
                <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                Mobile
              </span>
            </div>

            {/* Mobile Screen Frame */}
            <div className="w-full aspect-[9/16] rounded-xl bg-[#00144f] border-2 border-slate-700 p-2 flex flex-col justify-between">
              <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto"></div>

              {/* Single page reading view in mobile portrait */}
              <div className="my-auto w-full h-32 rounded bg-slate-900 border border-white/10 p-2 text-center flex flex-col justify-between">
                <div>
                  <div className="w-8 h-1 bg-[#FF7A00] rounded mx-auto mb-1"></div>
                  <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-white/20 rounded mx-auto"></div>
                </div>
                <div className="text-[8px] text-emerald-400">حالت تک‌صفحه روان</div>
              </div>

              <div className="w-6 h-1 bg-slate-700 rounded-full mx-auto"></div>
            </div>
          </div>

        </div>

        {/* 4 Feature Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Responsive Layout</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Touch / Pointer Interaction</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>RTL / LTR Support</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Fullscreen Mode</span>
          </div>
        </div>

      </div>
    </section>
  );
};
