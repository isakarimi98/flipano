import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ZoomIn, 
  ZoomOut, 
  Volume2, 
  VolumeX, 
  Music, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';
import { toggleAmbientMusic, isAmbientMusicPlaying, playPageFlipSound } from '../utils/audio';

import gardenImg from '../assets/images/hafez_miniature_garden_1792517785871.jpg';
import nightImg from '../assets/images/hafez_miniature_night_1792517787311.jpg';

export const InteractiveBook: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [musicEnabled, setMusicEnabled] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const handlePageClick = () => {
    if (soundEnabled) {
      playPageFlipSound();
    }
  };

  const toggleSound = () => {
    if (!soundEnabled) {
      playPageFlipSound();
    }
    setSoundEnabled(!soundEnabled);
  };

  const handleToggleMusic = () => {
    const newState = toggleAmbientMusic();
    setMusicEnabled(newState);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      if (isAmbientMusicPlaying()) {
        toggleAmbientMusic(false);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full max-w-2xl mx-auto rounded-2xl bg-[#001758]/70 backdrop-blur-md border border-white/15 p-4 md:p-6 shadow-[0_20px_50px_rgba(0,10,50,0.6)] transition-all duration-300 ${
        isFullscreen ? 'p-8 flex flex-col justify-center items-center h-screen max-w-none bg-[#001758]' : ''
      }`}
    >
      {/* Badges */}
      <div className="absolute -top-3.5 right-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md shadow-lg">
        <Sparkles className="w-3.5 h-3.5" />
        <span>نمونه کتاب سه‌بعدی</span>
      </div>

      <div className="absolute -top-3.5 left-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-medium backdrop-blur-md shadow-lg">
        <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
        <span>دیوان شعر نفیس حافظ</span>
      </div>

      {/* 3D Book Stage */}
      <div className="relative py-3 sm:py-5 flex items-center justify-center min-h-[360px] md:min-h-[420px] overflow-visible perspective-1200">
        
        {/* Soft realistic drop shadow under book */}
        <div className="absolute bottom-1 w-4/5 h-8 bg-black/60 rounded-[50%] blur-xl -z-10 transform scale-y-50"></div>

        {/* 3D Open Book Container */}
        <div 
          className="relative w-full max-w-xl aspect-[16/10.8] rounded-xl transform-style-3d transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Complete Two-Page Spread */}
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl flex border-2 border-amber-800/40 bg-[#f4eee1]">
            
            {/* Right Page (صفحه راست: ۴ مصرع زیر هم با خط نستعلیق) */}
            <div className="w-1/2 h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 bg-[#faf6ed] text-slate-800 relative select-none border-l border-amber-900/20 shadow-[inset_-12px_0_20px_rgba(0,0,0,0.12)]">
              {/* Delicate traditional border */}
              <div className="absolute inset-2 sm:inset-2.5 border border-amber-700/25 rounded pointer-events-none"></div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px] text-amber-900 font-semibold pb-1 border-b border-amber-900/15">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#FF7A00]" />
                  <span>غزل شماره ۱ · دیوان حافظ</span>
                </span>
                <span className="font-mono text-amber-800/70 text-[9px]">صفحه ۱</span>
              </div>

              {/* Miniature Illustration */}
              <div className="relative z-10 my-1 rounded overflow-hidden border border-amber-800/30 shadow aspect-[16/8.5] bg-amber-950 shrink-0">
                <img 
                  src={gardenImg} 
                  alt="مینیاتور گلستان و بلبلان شیراز"
                  className="w-full h-full object-cover" 
                  loading="eager"
                />
              </div>

              {/* ۴ مصرع زیر هم با خط نستعلیق و کامل */}
              <div className="relative z-10 my-auto py-1 px-1 bg-amber-900/[0.03] border border-amber-900/15 rounded">
                <div className="font-nastaliq text-[11px] sm:text-xs md:text-[13px] text-slate-900 text-center leading-[2.4] space-y-0.5">
                  <div>الا یا ایها الساقی ادر کأسا و ناولها</div>
                  <div>که عشق آسان نمود اول ولی افتاد مشکل‌ها</div>
                  <div>به بوی نافه‌ای کآخر صبا زان طره بگشاید</div>
                  <div>ز تاب جعد مشکینش چه خون افتاد در دل‌ها</div>
                </div>
              </div>

              {/* Page Footer */}
              <div className="relative z-10 text-[9px] text-amber-800/60 pt-0.5 border-t border-amber-900/10 flex justify-between items-center">
                <span>دیوان خواجه حافظ شیرازی</span>
                <span className="font-serif">ص ۱</span>
              </div>
            </div>

            {/* Book Spine Center Gutter Shadow */}
            <div className="absolute top-0 bottom-0 left-1/2 -ml-2.5 w-5 z-20 pointer-events-none bg-gradient-to-r from-black/55 via-black/15 to-black/55 opacity-80"></div>

            {/* Left Page (صفحه چپ: ۴ مصرع زیر هم با خط نستعلیق) */}
            <div className="w-1/2 h-full flex flex-col justify-between p-3 sm:p-4 md:p-5 bg-[#faf6ed] text-slate-800 relative select-none shadow-[inset_12px_0_20px_rgba(0,0,0,0.12)]">
              {/* Delicate traditional border */}
              <div className="absolute inset-2 sm:inset-2.5 border border-amber-700/25 rounded pointer-events-none"></div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px] text-amber-900 font-semibold pb-1 border-b border-amber-900/15">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#FF7A00]" />
                  <span>غزل شماره ۳۷۴ · دیوان حافظ</span>
                </span>
                <span className="font-mono text-amber-800/70 text-[9px]">صفحه ۲</span>
              </div>

              {/* Miniature Illustration */}
              <div className="relative z-10 my-1 rounded overflow-hidden border border-amber-800/30 shadow aspect-[16/8.5] bg-amber-950 shrink-0">
                <img 
                  src={nightImg} 
                  alt="مینیاتور ایوان مهتابی و انارستان"
                  className="w-full h-full object-cover" 
                  loading="eager"
                />
              </div>

              {/* ۴ مصرع زیر هم با خط نستعلیق و کامل */}
              <div className="relative z-10 my-auto py-1 px-1 bg-amber-900/[0.03] border border-amber-900/15 rounded">
                <div className="font-nastaliq text-[11px] sm:text-xs md:text-[13px] text-slate-900 text-center leading-[2.4] space-y-0.5">
                  <div>بیا تا گل برافشانیم و می در ساغر اندازیم</div>
                  <div>فلک را سقف بشکافیم و طرحی نو دراندازیم</div>
                  <div>اگر غم لشکر انگیزد که خون عاشقان ریزد</div>
                  <div>من و ساقی به هم تازیم و بنیادش براندازیم</div>
                </div>
              </div>

              {/* Page Footer */}
              <div className="relative z-10 text-[9px] text-amber-800/60 pt-0.5 border-t border-amber-900/10 flex justify-between items-center">
                <span>دیوان خواجه حافظ شیرازی</span>
                <span className="font-serif">ص ۲</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* نوار ابزار شبیه‌ساز افزونه فلیپانو: شامل تمام دکمه‌های ضروری ناوبری و تعاملی */}
      <div className="mt-3 pt-3 border-t border-white/15">
        <div className="flex flex-wrap items-center justify-between gap-2.5 bg-black/40 backdrop-blur-md rounded-xl p-2 px-3 border border-white/15 shadow-inner">
          
          {/* بخش ناوبری: صفحه قبل، نشانگر صفحه و صفحه بعد */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePageClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 hover:border-white/30 transition-all active:scale-95 shadow-sm"
              title="صفحه قبل (ورق زدن)"
            >
              <ChevronRight className="w-4 h-4 text-[#FF7A00]" />
              <span className="text-[11px] sm:text-xs">صفحه قبل</span>
            </button>

            <div className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 font-mono text-xs select-none">
              ۱ / ۲
            </div>

            <button
              onClick={handlePageClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 hover:border-white/30 transition-all active:scale-95 shadow-sm"
              title="صفحه بعد (ورق زدن)"
            >
              <span className="text-[11px] sm:text-xs">صفحه بعد</span>
              <ChevronLeft className="w-4 h-4 text-[#FF7A00]" />
            </button>
          </div>

          {/* ابزارهای کنترلی: دو ذره‌بین (+ و -)، بلندگوی صدای ورق‌خوردن، دکمه موزیک، دکمه بزرگنمایی تمام‌صفحه */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* ۱. ذره‌بین علامت مثبت (بزرگنمایی) */}
            <button
              onClick={handleZoomIn}
              className={`p-2 rounded-lg border transition-all active:scale-95 flex items-center justify-center ${
                zoomLevel > 1 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400/40 shadow-sm' 
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/15 hover:border-white/30'
              }`}
              title="ذره‌بین بزرگنمایی (+)"
              aria-label="بزرگنمایی"
            >
              <ZoomIn className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            {/* ۲. ذره‌بین علامت منفی (کوچک‌نمایی) */}
            <button
              onClick={handleZoomOut}
              className={`p-2 rounded-lg border transition-all active:scale-95 flex items-center justify-center ${
                zoomLevel < 1.25 
                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/15 hover:border-white/30' 
                  : 'bg-amber-500/20 text-amber-300 border-amber-400/40 shadow-sm'
              }`}
              title="ذره‌بین کوچک‌نمایی (-)"
              aria-label="کوچک‌نمایی"
            >
              <ZoomOut className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            {/* خط جداکننده باریک */}
            <div className="w-[1px] h-5 bg-white/20 my-auto mx-0.5"></div>

            {/* ۳. دکمه بلندگو (قطع و وصل کردن صدای طبیعی ورق‌خوردن برگه) */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-lg border transition-all active:scale-95 flex items-center justify-center ${
                soundEnabled 
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]' 
                  : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'
              }`}
              title={soundEnabled ? 'بلندگو: صدای ورق‌زدن فعال است (کلیک برای قطع)' : 'بلندگو: صدای ورق‌زدن قطع است (کلیک برای فعال‌سازی)'}
              aria-label="صدای ورق‌زدن"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              ) : (
                <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              )}
            </button>

            {/* ۴. دکمه موزیک (پخش و قطع موسیقی آرام مطالعه) */}
            <button
              onClick={handleToggleMusic}
              className={`p-2 rounded-lg border transition-all active:scale-95 flex items-center justify-center ${
                musicEnabled 
                  ? 'bg-cyan-500/25 text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.3)] animate-pulse' 
                  : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border-white/15 hover:border-white/30'
              }`}
              title={musicEnabled ? 'موزیک مطالعه در حال پخش است (کلیک برای توقف)' : 'پخش موسیقی ملایم مطالعه'}
              aria-label="موسیقی مطالعه"
            >
              <Music className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            {/* ۵. دکمه بزرگنمایی تمام‌صفحه (Fullscreen) */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/15 hover:border-white/30 transition-all active:scale-95 flex items-center justify-center shadow-sm"
              title={isFullscreen ? 'خروج از نمایش تمام‌صفحه' : 'نمایش تمام‌صفحه (بزرگنمایی کل صفحه)'}
              aria-label="نمایش تمام‌صفحه"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FF7A00]" />
              ) : (
                <Maximize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
