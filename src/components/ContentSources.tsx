import React from 'react';
import { FileUp, Image as ImageIcon, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export const ContentSources: React.FC = () => {
  const sources = [
    {
      title: 'فایل‌های PDF',
      subtitle: 'ورودی مستقیم سند',
      desc: 'کتاب، مجله، کاتالوگ و بروشور PDF خود را مستقیماً از کتابخانه رسانه وردپرس یا URL وارد کنید. موتور بهینه‌شده به صورت خودکار تمام صفحات را پردازش و برای رندر سه‌بعدی آماده می‌سازد.',
      icon: FileUp,
      accent: 'border-red-400/30 text-red-400 bg-red-500/10',
      tag: 'پردازش خودکار',
      specs: ['سازگار با تمام نسخه‌های PDF', 'پشتیبانی از فایل‌های چند ده صفحه‌ای', 'حفظ کیفیت برداری متون'],
    },
    {
      title: 'مجموعه تصاویر',
      subtitle: 'ورودی عکس و گالری',
      desc: 'مجموعه تصاویر با فرمت‌های مختلف را بارگذاری کنید. فلیپانو هر عکس را به ترتیب دلخواه شما به یک صفحه از کتاب، آلبوم، ژورنال یا کاتالوگ کالای شما تبدیل می‌کند.',
      icon: ImageIcon,
      accent: 'border-amber-400/30 text-amber-400 bg-amber-500/10',
      tag: 'آلبوم تصاویر',
      specs: ['لود تنبل (Lazy Load) تصاویر', 'مرتب‌سازی ساده با کشیدن و رها کردن', 'وضوح بالا در نمایشگرهای رتینا'],
    },
    {
      title: 'ابعاد و نسبت دلخواه',
      subtitle: 'سایزبندی منعطف',
      desc: 'نسبت تصویر و ابعاد کتاب را متناسب با قطع پروژه خود انتخاب کنید؛ از قطع‌های استاندارد چاپی A4، رحلی و وزیری تا ژورنال‌های مربعی و کاتالوگ‌های عریض و افقی.',
      icon: SlidersHorizontal,
      accent: 'border-cyan-400/30 text-cyan-400 bg-cyan-500/10',
      tag: 'ابعاد سفارشی',
      specs: ['پشتیبانی از قطع A4، وزیری و پالتویی', 'حالت عریض ۱۶:۹ و مربعی ۱:۱', 'تنظیم ضخامت برگه و جلد سخت'],
    },
  ];

  return (
    <section className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            انعطاف‌پذیری در ورود اطلاعات
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            از هر نوع محتوایی، یک کتاب بسازید
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            فرقی نمی‌کند خروجی نرم‌افزارهای صفحه‌بندی را دارید یا گالری از عکس‌های کالا؛ فلیپانو هر دو را پشتیبانی می‌کند.
          </p>
        </div>

        {/* 3 Large Cards Grid - Professional, Clean, Zero Fake Clutter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sources.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-white/50 bg-white/[0.06] px-2.5 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-white/50 mb-3">{item.subtitle}</div>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/70">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
