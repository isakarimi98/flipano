import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

/**
 * برای تنظیم آدرس صفحه محصول در مارکت ژاکت، مقدار زیر را تغییر دهید:
 */
export const ZHAKET_URL = "#";

export const FloatingCTA: React.FC = () => {
  return (
    <aside 
      aria-label="خرید سریع افزونه فلیپانو از ژاکت"
      className="fixed bottom-5 left-5 z-50 sm:bottom-6 sm:left-6 transition-transform duration-300 pointer-events-auto"
    >
      <a
        href={ZHAKET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF7A00] to-[#FF901A] hover:from-[#E56E00] hover:to-[#FF7A00] shadow-[0_10px_30px_rgba(255,122,0,0.5)] hover:shadow-[0_15px_35px_rgba(255,122,0,0.7)] hover:-translate-y-1 transition-all duration-300 ring-2 ring-white/25"
      >
        {/* Subtle gentle pulse ring around the button */}
        <span className="absolute -inset-1 rounded-full bg-[#FF7A00] opacity-30 animate-ping pointer-events-none -z-10"></span>

        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <ShoppingBag className="w-3.5 h-3.5 text-white" />
        </div>

        <span className="whitespace-nowrap tracking-tight font-bold">خرید از ژاکت</span>

        <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
      </a>
    </aside>
  );
};
