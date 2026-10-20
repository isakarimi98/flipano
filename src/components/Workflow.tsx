import React from 'react';
import { UploadCloud, Sliders, Code2, ArrowLeft } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'PDF یا تصاویر خود را انتخاب کنید',
      desc: 'فایل PDF مورد نظر خود را از رایانه آپلود کرده یا تصاویر مربوط به صفحات را به ترتیب انتخاب فرمایید.',
      icon: UploadCloud,
      tag: 'انتخاب منبع',
    },
    {
      num: '02',
      title: 'ظاهر و رفتار Flipbook را تنظیم کنید',
      desc: 'ابعاد، ضخامت برگه‌ها، سرعت ورق‌زدن و صدای محیطی را متناسب با طراحی سایت خود در چند کلیک مشخص کنید.',
      icon: Sliders,
      tag: 'پیکربندی سریع',
    },
    {
      num: '03',
      title: 'شورت‌کد را در صفحه قرار دهید',
      desc: 'کد کوتاه ایجاد شده نظیر [flipano id="14"] را در المنتور، گوتنبرگ یا هر برگه وردپرسی کپی نمایید.',
      icon: Code2,
      tag: 'انتشار نهایی',
    },
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            سهولت در استفاده
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            از فایل خام تا کتاب سه‌بعدی، فقط در چند قدم
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            برای راه‌اندازی و نمایش کتاب‌ها نیازی به دانش فنی، کدنویسی پیچیده یا پیکربندی وب‌سرور ندارید.
          </p>
        </div>

        {/* 3 Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FF7A00]/50 p-7 flex flex-col justify-between transition-all hover:-translate-y-1 group"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-amber-300/40 group-hover:text-amber-300 transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/60">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#001757] border border-white/10 flex items-center justify-center text-[#FF7A00] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                  <span>فرآیند خودکار</span>
                  <ArrowLeft className="w-4 h-4 text-[#FF7A00] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
