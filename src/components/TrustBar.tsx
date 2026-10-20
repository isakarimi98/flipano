import React from 'react';
import { Box, FileImage, Smartphone, SlidersHorizontal } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const highlights = [
    { title: 'WebGL سه‌بعدی', desc: 'موتور پردازش رندر طبیعی Three.js', icon: Box },
    { title: 'PDF و تصاویر', desc: 'پشتیبانی مستقیم از PDF، JPG و PNG', icon: FileImage },
    { title: 'طراحی Responsive', desc: 'تجربه لمسی بهینه روی موبایل و تبلت', icon: Smartphone },
    { title: 'کنترل کامل Viewer', desc: 'زوم، تمام‌صفحه، صوت، و بندانگشتی', icon: SlidersHorizontal },
  ];

  return (
    <section className="relative z-10 -mt-4 mb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#001c6d]/80 backdrop-blur-sm border border-white/10 py-4 px-4 sm:px-6 shadow-lg shadow-black/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`flex items-center gap-3 ${index > 0 ? 'pt-3 md:pt-0' : ''}`}>
                  <div className="w-9 h-9 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0 text-[#FF7A00]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span className="text-emerald-400 text-xs">✓</span>
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[11px] text-white/70 line-clamp-1">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
