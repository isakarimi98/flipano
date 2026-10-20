import React from 'react';
import { FileX, BookOpenCheck, Check, X } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.07] border border-white/10 text-xs font-semibold text-amber-300">
            تفاوت اساسی در تجربه کاربر
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            فقط فایل را نمایش ندهید؛ تجربه‌اش کنید.
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            نمایش ساده PDF دیگر کافی نیست. با Flipano محتوای شما به یک تجربه تعاملی تبدیل می‌شود؛ کاربر صفحات را ورق می‌زند، زوم می‌کند، صفحات را سریع پیدا می‌کند و در صورت نیاز کتاب را تمام‌صفحه مشاهده می‌کند.
          </p>
        </div>

        {/* Clean, professional comparison grid (without fake simulators) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Side 1: Flat Ordinary PDF */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 space-y-5 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileX className="w-5 h-5 text-red-400" />
                <span className="font-bold text-white text-base">نمایشگر سنتی و تخت PDF</span>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                ایستا و خسته‌کننده
              </span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>اسکرول عمودی طولانی و خستگی کاربر هنگام مطالعه اسناد چند ده صفحه‌ای</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>وابستگی به ابزار پیش‌فرض مرورگر کاربر و عدم یکپارچگی ظاهری با سایت شما</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>فقدان حس فیزیکی ورق‌زدن، صدا، زوم روان و ابزارهای چندرسانه‌ای</span>
              </li>
            </ul>
          </div>

          {/* Side 2: Flipano Experience */}
          <div className="rounded-2xl bg-[#001b6a]/80 border-2 border-[#FF7A00]/40 p-6 space-y-5 shadow-xl shadow-blue-950/60 backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <BookOpenCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-white text-base">کتابخوان تعاملی Flipano</span>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                ۳بعدی و تعاملی
              </span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-white/90">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ورق‌زدن طبیعی و روان با فیزیک انحنای کاغذ و محاسبه سایه‌ها در WebGL</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>نوار ابزار کامل شامل زوم چندبرابری، بندانگشتی، موسیقی مطالعه و تمام‌صفحه</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>افزایش چشمگیر زمان ماندگاری کاربر در سایت (Time on Page) و نرخ تعامل</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
