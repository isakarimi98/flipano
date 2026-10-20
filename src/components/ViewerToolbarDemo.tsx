import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ZoomIn, 
  LayoutGrid, 
  Music, 
  Volume2, 
  Download, 
  Maximize2 
} from 'lucide-react';

export const ViewerToolbarDemo: React.FC = () => {
  const [activeControl, setActiveControl] = useState<string>('zoom');

  const tools = [
    {
      id: 'prev',
      name: 'صفحه قبل',
      icon: ChevronRight,
      desc: 'برگشت نرم به صفحه پیشین با افکت ورق‌زدن طبیعی',
    },
    {
      id: 'next',
      name: 'صفحه بعد',
      icon: ChevronLeft,
      desc: 'ورق زدن به صفحه بعد با سرعت و انحنای تنظیم‌شده',
    },
    {
      id: 'zoom',
      name: 'بزرگنمایی جزییات',
      icon: ZoomIn,
      desc: 'بزرگنمایی دو برابری و بررسی دقیق متون و نقوش ریز',
    },
    {
      id: 'thumbs',
      name: 'پیش‌نمایش بندانگشتی',
      icon: LayoutGrid,
      desc: 'نمایش نوار بندانگشتی تمام صفحات و پرش مستقیم با یک کلیک',
    },
    {
      id: 'music',
      name: 'موسیقی زمینه',
      icon: Music,
      desc: 'پخش یا توقف موسیقی آرامش‌بخش مطالعه با کنترل بلندی صدا',
    },
    {
      id: 'sound',
      name: 'صدای ورق‌زدن',
      icon: Volume2,
      desc: 'فعال یا بی‌صدا کردن افکت صوتی حرکت برگه‌های کاغذ',
    },
    {
      id: 'download',
      name: 'دانلود مستقیم',
      icon: Download,
      desc: 'امکان فعال‌سازی دریافت مستقیم نسخه اصلی سند توسط کاربر',
    },
    {
      id: 'fullscreen',
      name: 'نمایش تمام‌صفحه',
      icon: Maximize2,
      desc: 'ورود به حالت تمام‌صفحه بدون المان‌های مزاحم مرورگر',
    },
  ];

  return (
    <section className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            ابزارهای کامل مشاهده‌گر
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            نوار ابزار هوشمند برای ناوبری آسان
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            کاربران بدون سردرگمی به تمامی کلیدهای پیمایش، بزرگنمایی، تنظیمات صوتی و اشتراک‌گذاری دسترسی دارند.
          </p>
        </div>

        {/* Toolbar Mockup Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Floating Toolbar Bar */}
          <div className="p-3 sm:p-4 rounded-2xl bg-[#001758]/90 border border-white/20 shadow-2xl backdrop-blur-md flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto">
            {tools.map((t) => {
              const Icon = t.icon;
              const isSelected = activeControl === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveControl(t.id)}
                  className={`p-3 rounded-xl flex items-center gap-2 transition-all shrink-0 ${
                    isSelected
                      ? 'bg-[#FF7A00] text-white shadow-lg shadow-orange-600/30 scale-105'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white'
                  }`}
                  title={t.name}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline text-xs font-medium">{t.name}</span>
                </button>
              );
            })}
          </div>

          {/* Explanations Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((t) => {
              const Icon = t.icon;
              const isSelected = activeControl === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveControl(t.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-right flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/[0.10] border-[#FF7A00] ring-1 ring-[#FF7A00]/40'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#FF7A00] text-white' : 'bg-white/10 text-[#FF7A00]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-white">{t.name}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
