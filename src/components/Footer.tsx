import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#001754] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-right">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF7A00] flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Flipano <span className="text-white/60 text-sm font-normal">| فلیپانو</span>
              </span>
            </div>
            <p className="text-xs text-white/70">
              کتابخوان سه‌بعدی و تعاملی برای وردپرس
            </p>
          </div>

          {/* Quick compatibility info */}
          <div className="text-xs text-white/70">
            سازگار با المنتور، ویژوال کامپوزر و ویرایشگر گوتنبرگ
          </div>

        </div>

        <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50 text-center sm:text-right">
          <p>© {new Date().getFullYear()} Flipano WordPress Plugin. تمامی حقوق محفوظ است.</p>
          <p className="font-mono">Engineered with WebGL & Three.js</p>
        </div>
      </div>
    </footer>
  );
};
