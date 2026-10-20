import React from 'react';
import { InteractiveBook } from './InteractiveBook';
import { Sparkles, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-6 pb-12 md:pt-10 md:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content Column (Right in RTL) */}
          <div className="lg:col-span-6 space-y-5 text-right">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white/90 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8500]" />
              <span>افزونه حرفه‌ای کتابخوان سه‌بعدی وردپرس</span>
            </div>

            {/* Main Headline - Single line */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-black text-white tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
              <span>PDF شما، یک کتاب واقعی می‌شود.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              فلیپانو فایل‌های PDF و تصاویر شما را به یک کتاب، مجله، کاتالوگ یا آلبوم سه‌بعدی و تعاملی تبدیل می‌کند؛ با ورق‌زدن طبیعی، زوم، تمام‌صفحه، بندانگشتی صفحات و تجربه صوتی.
            </p>

            {/* Action Button */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 shadow-lg transition-all group"
              >
                <span>مشاهده قابلیت‌ها و امکانات</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-[#FF8500]" />
              </a>
            </div>

            {/* Pure technical notes */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                ✓ سازگار با المنتور و گوتنبرگ
              </span>
              <span>·</span>
              <span>موتور رندرینگ سه‌بعدی شتاب‌یافته</span>
              <span>·</span>
              <span>پشتیبانی کامل از اسناد فارسی و راست‌چین</span>
            </div>

          </div>

          {/* Interactive 3D Mockup Column (Left in RTL) */}
          <div className="lg:col-span-6 relative">
            <InteractiveBook />
          </div>

        </div>
      </div>
    </section>
  );
};
