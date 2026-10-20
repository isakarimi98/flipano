import React, { useState } from 'react';
import { Sliders, Check, Copy, CheckCheck } from 'lucide-react';

export const CustomizationPanel: React.FC = () => {
  const [pageSize, setPageSize] = useState<'a4' | 'square' | 'landscape' | 'custom'>('a4');
  const [pageThickness, setPageThickness] = useState<number>(3);
  const [hardcover, setHardcover] = useState<boolean>(true);
  const [bgColor, setBgColor] = useState<string>('#001b66');
  const [flipSpeed, setFlipSpeed] = useState<number>(600);
  const [paperBending, setPaperBending] = useState<number>(85);
  const [soundEffect, setSoundEffect] = useState<boolean>(true);
  const [bgMusic, setBgMusic] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyShortcode = () => {
    navigator.clipboard.writeText('[flipano id="12" theme="dark"]');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="customization" className="py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-amber-300">
            شخصی‌سازی کامل در پیشخوان وردپرس
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            ظاهر کتابخوان را مطابق برند خود تنظیم کنید
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            تمامی جزییات فیزیکی، بصری و رفتاری فلیپ‌بوک را از طریق پنل اختصاصی وردپرس به دلخواه مدیریت کنید؛ بدون نیاز به کدنویسی.
          </p>
        </div>

        {/* Clean, authentic WordPress Admin Mockup Window */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#001754] border border-white/15 shadow-2xl overflow-hidden">
          
          {/* WP Admin Top Bar */}
          <div className="bg-[#001242] border-b border-white/10 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="mr-3 text-xs text-white/60 font-mono hidden sm:inline">
                wp-admin/admin.php?page=flipano-settings
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>پیشخوان وردپرس · Flipano Settings</span>
            </div>
          </div>

          {/* Settings Grid */}
          <div className="p-6 sm:p-8 space-y-6 text-right">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#FF7A00]" />
                <span>پیکربندی مشخصات ظاهری، فیزیک و صدای کتابخوان</span>
              </h3>
              <span className="text-xs text-emerald-400 font-medium">ذخیره خودکار تغییرات</span>
            </div>

            {/* Row 1: Page Aspect Ratio */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/90">
                ابعاد و نسبت صفحه (Page Dimensions):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'a4', label: 'A4 استاندارد (210×297)' },
                  { id: 'square', label: 'مربعی Square (1:1)' },
                  { id: 'landscape', label: 'عریض افقی Landscape' },
                  { id: 'custom', label: 'ابعاد سفارشی Custom' },
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setPageSize(size.id as typeof pageSize)}
                    className={`px-3.5 py-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                      pageSize === size.id
                        ? 'bg-[#FF7A00] text-white border-orange-400 shadow'
                        : 'bg-white/[0.05] text-white/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 2: Sliders and Switches in 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Page Thickness */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-white/90">
                  <span>ضخامت صفحات (Page Thickness):</span>
                  <span className="font-mono text-cyan-300 font-bold">{pageThickness} px</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={pageThickness}
                  onChange={(e) => setPageThickness(Number(e.target.value))}
                  className="w-full accent-[#FF7A00] cursor-pointer"
                />
                <div className="text-[10px] text-white/50">شبیه‌سازی ضخامت لبه کتاب در حالت بسته</div>
              </div>

              {/* Hardcover toggle */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">جلد سخت (Hardcover)</div>
                  <div className="text-[10px] text-white/60">ضخامت و استحکام ویژه برای جلد رو و پشت کتاب</div>
                </div>
                <button
                  onClick={() => setHardcover(!hardcover)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    hardcover ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      hardcover ? 'translate-x-0' : '-translate-x-5'
                    }`}
                  ></div>
                </button>
              </div>

              {/* Flip Speed */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-white/90">
                  <span>سرعت ورق‌زدن (Flip Speed):</span>
                  <span className="font-mono text-cyan-300 font-bold">{flipSpeed} میلی‌ثانیه</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1200"
                  step="50"
                  value={flipSpeed}
                  onChange={(e) => setFlipSpeed(Number(e.target.value))}
                  className="w-full accent-[#FF7A00] cursor-pointer"
                />
                <div className="text-[10px] text-white/50">مدت‌زمان گردش ۳۶۰ درجه‌ای برگه</div>
              </div>

              {/* Paper Bending */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-white/90">
                  <span>میزان خمش کاغذ (Paper Bending):</span>
                  <span className="font-mono text-cyan-300 font-bold">%{paperBending}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={paperBending}
                  onChange={(e) => setPaperBending(Number(e.target.value))}
                  className="w-full accent-[#FF7A00] cursor-pointer"
                />
                <div className="text-[10px] text-white/50">انعطاف‌پذیری و انحنای آیرودینامیک برگه</div>
              </div>

              {/* Background Color & Image */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="text-xs text-white/90">رنگ پس‌زمینه نمایشگر (Background Color):</div>
                <div className="flex items-center gap-2">
                  {['#001b66', '#091026', '#1e1b4b', '#18181b'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setBgColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        bgColor === color ? 'border-amber-400 scale-110' : 'border-white/30'
                      }`}
                    ></button>
                  ))}
                  <span className="font-mono text-xs text-white/60 mr-2">{bgColor}</span>
                </div>
              </div>

              {/* Background Image */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="text-xs text-white/90">تصویر پس‌زمینه (Background Image):</div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded bg-white/[0.05] border border-white/10 text-white/60 flex-1 truncate">
                    wood-table-texture.webp
                  </span>
                  <span className="text-xs text-amber-300 cursor-pointer hover:underline">انتخاب از رسانه</span>
                </div>
              </div>

              {/* Sound Effect Toggle */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">افکت صوتی ورق‌زدن (Sound)</div>
                  <div className="text-[10px] text-white/60">پخش صدای واقعی خش‌خش کاغذ</div>
                </div>
                <button
                  onClick={() => setSoundEffect(!soundEffect)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    soundEffect ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      soundEffect ? 'translate-x-0' : '-translate-x-5'
                    }`}
                  ></div>
                </button>
              </div>

              {/* Background Music Toggle */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">موسیقی زمینه (Background Music)</div>
                  <div className="text-[10px] text-white/60">پخش ملایم موسیقی مطالعه با کنترل صدا</div>
                </div>
                <button
                  onClick={() => setBgMusic(!bgMusic)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    bgMusic ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      bgMusic ? 'translate-x-0' : '-translate-x-5'
                    }`}
                  ></div>
                </button>
              </div>

            </div>

            {/* Shortcode Embed Box */}
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-right">
                  <div className="text-xs font-semibold text-white">شورت‌کد اختصاصی جهت قرار دادن در هر صفحه یا نوشته:</div>
                  <div className="text-[11px] text-white/60">قابل استفاده مستقیم در المنتور، گوتنبرگ و ابزارک‌ها</div>
                </div>
                <button
                  onClick={handleCopyShortcode}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs text-amber-300 transition-colors"
                >
                  {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>[flipano id=&quot;12&quot; theme=&quot;dark&quot;]</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Save Action Bar */}
          <div className="bg-[#00103b] border-t border-white/10 px-6 py-3 flex items-center justify-between text-xs">
            <span className="text-white/60">سازگار با جدیدترین نسخه وردپرس و PHP 8.1+</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>پیکربندی با موفقیت ذخیره شد</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
