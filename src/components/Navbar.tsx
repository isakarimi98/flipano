import React from 'react';
import { BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#001859]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single clean brand wordmark */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight whitespace-nowrap shrink-0 group"
          title="فلیپانو - افزونه وردپرس کتابخوان سه‌بعدی"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF7A00] to-[#FF9E3D] flex items-center justify-center text-white shadow-md shadow-orange-950/40 group-hover:scale-105 transition-transform">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="font-bold text-lg text-white">
            Flipano <span className="text-white/60 text-sm font-normal">| فلیپانو</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-white/80 overflow-x-auto py-1">
          <a href="#features" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            قابلیت‌های کلیدی
          </a>
          <a href="#threed-showcase" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            فناوری سه‌بعدی
          </a>
          <a href="#customization" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            تنظیمات و شخصی‌سازی
          </a>
          <a href="#use-cases" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            کاربردها
          </a>
          <a href="#workflow" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            نحوه راه‌اندازی
          </a>
          <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            پرسش‌های متداول
          </a>
        </nav>

      </div>
    </header>
  );
};
