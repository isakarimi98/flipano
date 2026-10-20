import React from 'react';
import { Cpu, Wind, Fingerprint, Sparkles, CheckCircle2 } from 'lucide-react';

export const ThreeDShowcase: React.FC = () => {
  const pillars = [
    {
      title: 'WebGL Rendering',
      subtitle: 'رندرینگ سخت‌افزاری شتاب‌یافته',
      desc: 'بهره‌گیری مستقیم از شتاب‌دهنده گرافیکی کارت گرافیک سیستم کاربر (GPU) از طریق Three.js، بدون نیاز به نصب هیچ‌گونه پلاگین خارجی و با فریم‌ریت ثابت ۶۰ فریم بر ثانیه.',
      icon: Cpu,
      accent: 'border-cyan-400/40 text-cyan-300 bg-cyan-500/10',
      metric: '60 FPS',
      metricLabel: 'نرخ فریم رندرینگ',
    },
    {
      title: 'Natural Page Bending',
      subtitle: 'انحنای طبیعی و فیزیک کاغذ',
      desc: 'صفحات هنگام گردش به شکل یک تکه مقوای صلب تکان نمی‌خورند؛ بلکه درست همانند کاغذ گلاسه واقعی، انحنا برداشته و سایه‌های پویا و واقعی در شیار عطف کتاب ایجاد می‌کنند.',
      icon: Wind,
      accent: 'border-[#FF7A00]/40 text-[#FF7A00] bg-orange-500/10',
      metric: 'Bézier Curve',
      metricLabel: 'شبیه‌سازی فیزیک ورتکس',
    },
    {
      title: 'Interactive Page Flip',
      subtitle: 'تعامل مستقیم موس و ژست‌های لمسی',
      desc: 'کاربر می‌تواند گوشه هر صفحه را با موس یا انگشت کشیده و با سرعت دلخواه ورق بزند، یا در میانه راه رها کند تا با اینرسی طبیعی به آرامی در جای خود بنشیند.',
      icon: Fingerprint,
      accent: 'border-emerald-400/40 text-emerald-300 bg-emerald-500/10',
      metric: '< 20ms',
      metricLabel: 'پاسخگویی آنی لمسی',
    },
  ];

  return (
    <section id="threed-showcase" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-[#00175b]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>معماری رندرینگ سه‌بعدی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            این فقط یک PDF Viewer نیست.
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            ترکیب سخت‌افزاری WebGL، محاسبات ریاضی انحنای کاغذ و سیستم تعامل لمسی، مرز بین نسخه چاپی و دیجیتال را از بین می‌برد.
          </p>
        </div>

        {/* 3 Tech Pillars Grid (Clean, Compact, Technical) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/25 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left font-mono">
                      <div className="text-xs font-bold text-white">{item.metric}</div>
                      <div className="text-[10px] text-white/50">{item.metricLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-cyan-300/80 mb-3 font-medium">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>بهینه‌سازی شده برای وب مدرن</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
