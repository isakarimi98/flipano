import React from 'react';
import { 
  BookOpen, 
  FileText, 
  Images, 
  Maximize2, 
  LayoutGrid, 
  Volume2, 
  Music, 
  Sliders 
} from 'lucide-react';
import { KEY_FEATURES } from '../constants';

const iconMap = {
  BookOpen,
  FileText,
  Images,
  Maximize2,
  LayoutGrid,
  Volume2,
  Music,
  Sliders,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            امکانات اصلی
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            همه چیز برای یک کتابخوان حرفه‌ای
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            طراحی شده با مدرن‌ترین فناوری‌های وب برای رندر دقیق، سریع و بدون وقفه در هر مرورگر.
          </p>
        </div>

        {/* 8 Feature Cards Grid - Clean, sharp, zero fluff */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {KEY_FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.iconName as keyof typeof iconMap] || BookOpen;
            return (
              <div 
                key={feature.id}
                className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF7A00]/50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon and Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#001757] border border-white/15 flex items-center justify-center text-[#FF7A00] group-hover:scale-105 group-hover:border-[#FF7A00]/50 transition-all duration-300 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-white/50 bg-white/[0.06] px-2 py-0.5 rounded">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
