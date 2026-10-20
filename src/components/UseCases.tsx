import React from 'react';
import { 
  BookMarked, 
  Newspaper, 
  ShoppingBag, 
  Briefcase, 
  Camera, 
  FolderGit2,
  ArrowUpLeft
} from 'lucide-react';
import { USE_CASES } from '../constants';

const iconMap = {
  BookMarked,
  Newspaper,
  ShoppingBag,
  Briefcase,
  Camera,
  FolderGit2,
};

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            کاربردهای متنوع
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            برای هر نوع محتوای تصویری
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            از فروشگاه‌های ووکامرس تا وب‌سایت‌های شخصی و پورتفولیو، فلیپانو بالاترین کیفیت نمایش اسناد را رقم می‌زند.
          </p>
        </div>

        {/* 6 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, index) => {
            const Icon = iconMap[useCase.icon as keyof typeof iconMap] || BookMarked;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF7A00]/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & EnTitle */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#001c6d] border border-white/10 flex items-center justify-center text-[#FF7A00] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-white/50">{useCase.enTitle}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                </div>

                {/* Accent Highlight footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span className="text-white/80 line-clamp-1">{useCase.accent}</span>
                  <ArrowUpLeft className="w-4 h-4 text-[#FF7A00] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
