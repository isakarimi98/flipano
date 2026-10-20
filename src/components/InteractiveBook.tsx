import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Volume2, 
  VolumeX, 
  Music, 
  LayoutGrid, 
  RotateCcw,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { playPageFlipSound, toggleAmbientMusic, isAmbientMusicPlaying } from '../utils/audio';

// Generated authentic Persian miniature and tazhib illuminations for Hafez book
import gardenImg from '../assets/images/hafez_miniature_garden_1792517785871.jpg';
import tazhibImg from '../assets/images/hafez_tazhib_illumination_1792517785660.jpg';
import poetImg from '../assets/images/hafez_miniature_figures_1792517786362.jpg';
import nightImg from '../assets/images/hafez_miniature_night_1792517787311.jpg';

interface PoetryPage {
  pageNumber: number;
  title: string;
  image: string;
  imageAlt: string;
  couplets: [string, string][];
}

interface Spread {
  id: number;
  label: string;
  rightPage: PoetryPage;
  leftPage: PoetryPage;
}

export const InteractiveBook: React.FC = () => {
  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [musicEnabled, setMusicEnabled] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 4-page unified Hafez poetry book (۲ صفحه دوبرگی کاملاً هماهنگ)
  const spreads: Spread[] = [
    {
      id: 0,
      label: 'صفحات ۱ و ۲',
      rightPage: {
        pageNumber: 1,
        title: 'غزل شماره ۱ · دیوان حافظ',
        image: gardenImg,
        imageAlt: 'مینیاتور گلستان و بلبلان شیراز',
        couplets: [
          ['الا یا ایها الساقی ادر کأسا و ناولها', 'که عشق آسان نمود اول ولی افتاد مشکل‌ها'],
          ['به بوی نافه‌ای کآخر صبا زان طره بگشاید', 'ز تاب جعد مشکینش چه خون افتاد در دل‌ها'],
        ],
      },
      leftPage: {
        pageNumber: 2,
        title: 'غزل شماره ۱۷ · دیوان حافظ',
        image: tazhibImg,
        imageAlt: 'تذهیب شمسه زرین و لاجورد',
        couplets: [
          ['سینه از آتش دل در غم جانانه بسوخت', 'آتشی بود در این خانه که کاشانه بسوخت'],
          ['تنم از واسطه دوری دلبر بگداخت', 'جانم از آتش مهر رخ جانانه بسوخت'],
        ],
      },
    },
    {
      id: 1,
      label: 'صفحات ۳ و ۴',
      rightPage: {
        pageNumber: 3,
        title: 'غزل شماره ۳۷۴ · دیوان حافظ',
        image: poetImg,
        imageAlt: 'مینیاتور بزم شعر زیر درختان شکوفه',
        couplets: [
          ['بیا تا گل برافشانیم و می در ساغر اندازیم', 'فلک را سقف بشکافیم و طرحی نو دراندازیم'],
          ['اگر غم لشکر انگیزد که خون عاشقان ریزد', 'من و ساقی به هم تازیم و بنیادش براندازیم'],
        ],
      },
      leftPage: {
        pageNumber: 4,
        title: 'غزل شماره ۱۸۲ · دیوان حافظ',
        image: nightImg,
        imageAlt: 'مینیاتور ایوان مهتابی و انارستان',
        couplets: [
          ['در خرابات مغان نور خدا می‌بینم', 'این عجب بین که چه نوری ز کجا می‌بینم'],
          ['سوز دل، اشک روان، آه سحر، ناله شب', 'این همه از نظر لطف شما می‌بینم'],
        ],
      },
    },
  ];

  const totalSpreads = spreads.length;

  const handleNextSpread = () => {
    if (currentSpread < totalSpreads - 1 && !flipDirection) {
      setFlipDirection('next');
      if (soundEnabled) playPageFlipSound();
      setTimeout(() => {
        setCurrentSpread((prev) => prev + 1);
        setFlipDirection(null);
      }, 420);
    }
  };

  const handlePrevSpread = () => {
    if (currentSpread > 0 && !flipDirection) {
      setFlipDirection('prev');
      if (soundEnabled) playPageFlipSound();
      setTimeout(() => {
        setCurrentSpread((prev) => prev - 1);
        setFlipDirection(null);
      }, 420);
    }
  };

  const handleGoToSpread = (index: number) => {
    if (index !== currentSpread && !flipDirection) {
      setFlipDirection(index > currentSpread ? 'next' : 'prev');
      if (soundEnabled) playPageFlipSound();
      setTimeout(() => {
        setCurrentSpread(index);
        setFlipDirection(null);
      }, 420);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleToggleMusic = () => {
    const newState = toggleAmbientMusic();
    setMusicEnabled(newState);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
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

  const renderPoetryPage = (page: PoetryPage, isRight: boolean) => (
    <div 
      className={`h-full flex flex-col justify-between p-3.5 sm:p-5 bg-[#faf6ed] text-slate-800 relative select-none ${
        isRight 
          ? 'border-l border-amber-900/20 shadow-[inset_-12px_0_20px_rgba(0,0,0,0.12)]' 
          : 'shadow-[inset_12px_0_20px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Delicate traditional Tazhib border line */}
      <div className="absolute inset-2 sm:inset-3 border border-amber-600/30 rounded pointer-events-none"></div>
      <div className="absolute inset-2.5 sm:inset-3.5 border border-amber-700/15 rounded pointer-events-none"></div>

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] text-amber-900 font-semibold pb-1.5 border-b border-amber-900/15">
        <span className="flex items-center gap-1">
          <BookOpen className="w-3 h-3 text-[#FF7A00]" />
          <span>{page.title}</span>
        </span>
        <span className="font-mono text-amber-800/70">صفحه {page.pageNumber}</span>
      </div>

      {/* Top: Related Persian Miniature Illustration */}
      <div className="relative z-10 my-1.5 sm:my-2 rounded overflow-hidden border border-amber-800/30 shadow-md aspect-[16/9] bg-amber-950">
        <img 
          src={page.image} 
          alt={page.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Bottom: Classical Hafez Poetry in Nastaliq script */}
      <div className="relative z-10 my-auto py-1.5 text-center space-y-2">
        {page.couplets.map((couplet, cIdx) => (
          <div key={cIdx} className="font-nastaliq leading-[2.1] text-xs sm:text-[13px] md:text-sm text-slate-900">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
              <span className="tracking-wide">{couplet[0]}</span>
              <span className="text-amber-700/40 hidden sm:inline">✤</span>
              <span className="tracking-wide">{couplet[1]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Page Footer */}
      <div className="relative z-10 text-[9px] text-amber-800/60 pt-1 border-t border-amber-900/10 flex justify-between items-center">
        <span>دیوان خواجه شمس‌الدین محمد حافظ شیرازی</span>
        <span className="font-serif">ص {page.pageNumber}</span>
      </div>
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className={`relative w-full max-w-2xl mx-auto rounded-2xl bg-[#001758]/70 backdrop-blur-md border border-white/15 p-4 md:p-6 shadow-[0_20px_50px_rgba(0,10,50,0.6)] transition-all duration-300 ${
        isFullscreen ? 'p-8 flex flex-col justify-center items-center h-screen max-w-none bg-[#001758]' : ''
      }`}
    >
      {/* Floating Badges */}
      <div className="absolute -top-3.5 right-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md shadow-lg">
        <Sparkles className="w-3.5 h-3.5" />
        <span>3D WebGL Engine</span>
      </div>

      <div className="absolute -top-3.5 left-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-medium backdrop-blur-md shadow-lg">
        <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
        <span>دیوان شعر نفیس حافظ</span>
      </div>

      {/* Book Stage with 3D Perspective */}
      <div className="relative py-2 sm:py-4 flex items-center justify-center min-h-[350px] md:min-h-[410px] overflow-visible perspective-1200">
        
        {/* Soft realistic drop shadow under book */}
        <div className="absolute bottom-1 w-4/5 h-8 bg-black/60 rounded-[50%] blur-xl -z-10 transform scale-y-50"></div>

        {/* 3D Realistic Open Two-Page Spread Book */}
        <div 
          className={`relative w-full max-w-xl aspect-[16/10.5] rounded-xl transform-style-3d transition-all duration-500 ${
            isZoomed ? 'scale-125 z-30 cursor-zoom-out' : 'scale-100 cursor-default'
          }`}
          onClick={isZoomed ? toggleZoom : undefined}
        >
          {/* Complete Two-Page Spread: Real Separate Right & Left Pages */}
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl flex border-2 border-amber-800/40 bg-[#f4eee1]">
            
            {/* Right Page (ورق سمت راست در ساختار فارسی) */}
            <div className="w-1/2 h-full relative overflow-hidden">
              {renderPoetryPage(spreads[currentSpread].rightPage, true)}
            </div>

            {/* Book Spine Center Gutter Shadow (شیار عطف مرکزی کتاب با گرادیان واقع‌گرایانه) */}
            <div className="absolute top-0 bottom-0 left-1/2 -ml-2.5 w-5 z-20 pointer-events-none bg-gradient-to-r from-black/55 via-black/15 to-black/55 opacity-80"></div>

            {/* Left Page (ورق سمت چپ) */}
            <div className="w-1/2 h-full relative overflow-hidden">
              {renderPoetryPage(spreads[currentSpread].leftPage, false)}
            </div>

            {/* Realistic Smooth 3D Page Turn Animation Layer */}
            {flipDirection && (
              <div 
                className={`absolute inset-y-0 w-1/2 z-30 pointer-events-none origin-left transition-transform duration-500 ease-out bg-gradient-to-r from-amber-950/20 via-white/20 to-transparent ${
                  flipDirection === 'next' 
                    ? 'left-1/2 animate-[spin_0.42s_ease-out]' 
                    : 'right-1/2 origin-right'
                }`}
                style={{
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                }}
              ></div>
            )}
          </div>

          {/* Quick Click Areas on Page Corners for Realistic Flipping */}
          <button
            onClick={handleNextSpread}
            disabled={currentSpread >= totalSpreads - 1}
            aria-label="ورق زدن به جلو"
            className="absolute left-0 top-0 bottom-0 w-1/4 z-30 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-r from-black/25 to-transparent flex items-center justify-start pl-3 text-white disabled:pointer-events-none"
            title="کلیک برای ورق‌زدن به جلو"
          >
            <div className="p-2 rounded-full bg-black/60 backdrop-blur-sm shadow-md">
              <ChevronLeft className="w-5 h-5 text-amber-300" />
            </div>
          </button>

          <button
            onClick={handlePrevSpread}
            disabled={currentSpread <= 0}
            aria-label="ورق زدن به عقب"
            className="absolute right-0 top-0 bottom-0 w-1/4 z-30 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-l from-black/25 to-transparent flex items-center justify-end pr-3 text-white disabled:pointer-events-none"
            title="کلیک برای برگشت به صفحه قبل"
          >
            <div className="p-2 rounded-full bg-black/60 backdrop-blur-sm shadow-md">
              <ChevronRight className="w-5 h-5 text-amber-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Viewer Toolbar Component - Unchanged and functional as requested */}
      <div className="mt-2 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 px-2">
        {/* Page Nav Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrevSpread}
            disabled={currentSpread <= 0}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="صفحه قبل"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-black/30 text-white/90">
            {spreads[currentSpread].label}
          </span>

          <button
            onClick={handleNextSpread}
            disabled={currentSpread >= totalSpreads - 1}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="صفحه بعد"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleGoToSpread(0)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            title="شروع مجدد از ابتدا"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Media & View Controls */}
        <div className="flex items-center gap-1.5">
          {/* Thumbnails toggle */}
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`p-2 rounded-lg transition-colors ${
              showThumbnails ? 'bg-[#FF7A00] text-white shadow-md' : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
            title="مشاهده بندانگشتی صفحات"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          {/* Sound Effect toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-lg transition-colors ${
              soundEnabled ? 'bg-white/20 text-amber-300' : 'bg-white/5 text-white/40'
            }`}
            title={soundEnabled ? 'قطع صدای ورق‌زدن' : 'فعال‌سازی صدای ورق‌زدن'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Background Music toggle */}
          <button
            onClick={handleToggleMusic}
            className={`p-2 rounded-lg transition-colors ${
              musicEnabled ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/40' : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
            title={musicEnabled ? 'قطع موسیقی مطالعه' : 'پخش موسیقی ملایم مطالعه'}
          >
            <Music className="w-4 h-4" />
          </button>

          {/* Zoom toggle */}
          <button
            onClick={toggleZoom}
            className={`p-2 rounded-lg transition-colors ${
              isZoomed ? 'bg-[#FF7A00] text-white' : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
            title={isZoomed ? 'بزرگنمایی عادی' : 'بزرگنمایی جزییات (Zoom)'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            title={isFullscreen ? 'خروج از تمام‌صفحه' : 'نمایش تمام‌صفحه (Fullscreen)'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Thumbnails Drawer Strip */}
      {showThumbnails && (
        <div className="mt-3 pt-3 border-t border-white/10 overflow-x-auto pb-1 flex items-center gap-2">
          {spreads.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleGoToSpread(idx)}
              className={`shrink-0 w-28 h-16 rounded-lg border text-right p-1.5 transition-all flex flex-col justify-between ${
                currentSpread === idx 
                  ? 'border-[#FF7A00] bg-orange-500/20 shadow-md ring-2 ring-orange-500/40' 
                  : 'border-white/15 bg-black/40 hover:border-white/30'
              }`}
            >
              <span className="text-[10px] font-bold text-white truncate">{s.label}</span>
              <span className="text-[9px] text-amber-300 truncate">دیوان حافظ شیرازی</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
