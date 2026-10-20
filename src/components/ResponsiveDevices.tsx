import React from 'react';
import { Monitor, Tablet, Smartphone, CheckCircle } from 'lucide-react';

import gardenImg from '../assets/images/hafez_miniature_garden_1792517785871.jpg';
import nightImg from '../assets/images/hafez_miniature_night_1792517787311.jpg';
import poetImg from '../assets/images/hafez_miniature_figures_1792517786362.jpg';
import tazhibImg from '../assets/images/hafez_tazhib_illumination_1792517785660.jpg';

export const ResponsiveDevices: React.FC = () => {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-[#00175b]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            سازگاری با انواع نمایشگرها
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            سازگاری کامل با رایانه، تبلت و تلفن همراه
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            کتابخوان سه‌بعدی به صورت خودکار ابعاد خود را با صفحه نمایش کاربر هماهنگ کرده و تجربه‌ای روان و چشم‌نواز ارائه می‌دهد.
          </p>
        </div>

        {/* 3 Device Mockups Row - Rich with real miniature & poetry in Nastaliq */}
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

            {/* Book Canvas in Desktop */}
            <div className="w-full min-h-[310px] rounded-xl bg-[#001347] border border-white/10 p-3 flex flex-col justify-between items-center">
              <div className="w-full flex items-center justify-between text-[10px] text-white/60 pb-1 border-b border-white/5">
                <span>نمای دوبرگی بازشو</span>
                <span className="text-emerald-400">کیفیت کامل</span>
              </div>

              {/* Square Book Shape with Real Miniature Images and 4-line Nastaliq Poetry */}
              <div className="w-full max-w-[310px] aspect-[16/12] rounded-lg bg-[#fcf8f0] border-2 border-amber-800/40 shadow-2xl flex relative overflow-hidden my-auto">
                {/* Right Page */}
                <div className="w-1/2 h-full bg-[#faf6ed] p-2 border-l border-amber-900/20 flex flex-col justify-between text-slate-800">
                  <div className="w-full aspect-[16/7] rounded overflow-hidden border border-amber-900/20">
                    <img src={gardenImg} alt="مینیاتور حافظ" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* ۴ مصرع زیر هم و هر مصرع در یک خط */}
                  <div className="font-nastaliq text-[7px] sm:text-[7.5px] text-center text-slate-900 leading-[1.8] py-1 bg-amber-900/[0.04] rounded px-0.5 space-y-0.5 select-none">
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">الا یا ایها الساقی ادر کأسا و ناولها</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">که عشق آسان نمود اول ولی افتاد مشکل‌ها</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">به بوی نافه‌ای کآخر صبا زان طره بگشاید</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">ز تاب جعد مشکینش چه خون افتاد در دل‌ها</div>
                  </div>
                  
                  <div className="text-[7px] text-amber-900/60 text-right">صفحه ۱</div>
                </div>

                {/* Center Spine Crease */}
                <div className="absolute inset-y-0 left-1/2 -ml-1 w-2 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none z-10"></div>

                {/* Left Page */}
                <div className="w-1/2 h-full bg-[#faf6ed] p-2 flex flex-col justify-between text-slate-800">
                  <div className="w-full aspect-[16/7] rounded overflow-hidden border border-amber-900/20">
                    <img src={nightImg} alt="مینیاتور شب مهتاب" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* ۴ مصرع زیر هم و هر مصرع در یک خط */}
                  <div className="font-nastaliq text-[7px] sm:text-[7.5px] text-center text-slate-900 leading-[1.8] py-1 bg-amber-900/[0.04] rounded px-0.5 space-y-0.5 select-none">
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">بیا تا گل برافشانیم و می در ساغر اندازیم</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">فلک را سقف بشکافیم و طرحی نو دراندازیم</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">اگر غم لشکر انگیزد که خون عاشقان ریزد</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">من و ساقی به هم تازیم و بنیادش براندازیم</div>
                  </div>

                  <div className="text-[7px] text-amber-900/60 text-left">صفحه ۲</div>
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

            {/* Book Canvas in Tablet */}
            <div className="w-full min-h-[310px] rounded-xl bg-[#001347] border border-white/10 p-3 flex flex-col justify-between items-center">
              <div className="w-full flex items-center justify-between text-[10px] text-white/60 pb-1 border-b border-white/5">
                <span>پشتیبانی از لمس چندانگشتی</span>
              </div>

              {/* Book Shape with 4-line Nastaliq */}
              <div className="w-full max-w-[270px] aspect-[16/12] rounded-lg bg-[#fcf8f0] border-2 border-amber-800/40 shadow-xl flex relative overflow-hidden my-auto">
                {/* Right Page */}
                <div className="w-1/2 h-full bg-[#faf6ed] p-1.5 border-l border-amber-900/20 flex flex-col justify-between">
                  <div className="w-full aspect-[16/7] rounded overflow-hidden border border-amber-900/20">
                    <img src={poetImg} alt="مینیاتور بزم شعر" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* ۴ مصرع زیر هم و هر مصرع در یک خط */}
                  <div className="font-nastaliq text-[6.5px] sm:text-[7px] text-center text-slate-900 leading-[1.8] py-1 bg-amber-900/[0.04] rounded px-0.5 space-y-0.5 select-none">
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">سینه از آتش دل در غم جانانه بسوخت</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">آتشی بود در این خانه که کاشانه بسوخت</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">تنم از واسطه دوری دلبر بگداخت</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">جانم از آتش مهر رخ جانانه بسوخت</div>
                  </div>

                  <div className="text-[7px] text-amber-900/60 text-right">ص ۳</div>
                </div>

                <div className="absolute inset-y-0 left-1/2 -ml-1 w-2 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none z-10"></div>

                {/* Left Page */}
                <div className="w-1/2 h-full bg-[#faf6ed] p-1.5 flex flex-col justify-between">
                  <div className="w-full aspect-[16/7] rounded overflow-hidden border border-amber-900/20">
                    <img src={tazhibImg} alt="تذهیب شمسه" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* ۴ مصرع زیر هم و هر مصرع در یک خط */}
                  <div className="font-nastaliq text-[6.5px] sm:text-[7px] text-center text-slate-900 leading-[1.8] py-1 bg-amber-900/[0.04] rounded px-0.5 space-y-0.5 select-none">
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">در خرابات مغان نور خدا می‌بینم</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">این عجب بین که چه نوری ز کجا می‌بینم</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">جلوه بر من مفروش ای ملک الحاج که تو</div>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">خانه می‌بینی و من خانه خدا می‌بینم</div>
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
              <span className="flex items-center gap-1.5 font-bold text-white shrink-0">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                تلفن همراه
              </span>
              <span className="text-[10px] text-white/50">تک‌صفحه</span>
            </div>

            {/* Book Canvas in Mobile */}
            <div className="w-full min-h-[310px] rounded-xl bg-[#001347] border border-white/10 p-2.5 flex flex-col justify-between items-center">
              <div className="w-8 h-1 bg-slate-600 rounded-full"></div>

              {/* Single Page Book for Mobile with 4-line Nastaliq */}
              <div className="w-full max-w-[155px] aspect-[3/4.2] rounded-lg bg-[#faf6ed] border-2 border-amber-800/40 p-2 text-center flex flex-col justify-between shadow-lg my-auto">
                <div className="w-full aspect-[16/8] rounded overflow-hidden border border-amber-900/20 mb-1">
                  <img src={gardenImg} alt="مینیاتور حافظ" className="w-full h-full object-cover" />
                </div>
                
                {/* ۴ مصرع زیر هم و هر مصرع در یک خط */}
                <div className="font-nastaliq text-[7.5px] text-slate-900 text-center leading-[1.8] bg-amber-900/[0.04] py-1 px-1 rounded space-y-0.5 select-none">
                  <div className="whitespace-nowrap overflow-hidden text-ellipsis">الا یا ایها الساقی ادر کأسا و ناولها</div>
                  <div className="whitespace-nowrap overflow-hidden text-ellipsis">که عشق آسان نمود اول ولی افتاد مشکل‌ها</div>
                  <div className="whitespace-nowrap overflow-hidden text-ellipsis">به بوی نافه‌ای کآخر صبا زان طره بگشاید</div>
                  <div className="whitespace-nowrap overflow-hidden text-ellipsis">ز تاب جعد مشکینش چه خون افتاد در دل‌ها</div>
                </div>

                <div className="text-[7px] text-amber-900/70 pt-0.5 border-t border-amber-900/10">دیوان حافظ · ص ۱</div>
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
