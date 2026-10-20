/**
 * ماژول صوتی شبیه‌ساز ورق زدن کاغذ و موسیقی ملایم مطالعه با استفاده از Web Audio API
 * بدون نیاز به لود فایل خارجی، کاملاً پایدار و بدون خطای شبکه
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * پخش صدای طبیعی و واقع‌گرایانه ورق خوردن کاغذ (Paper Rustle)
 */
export function playPageFlipSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 0.28; // 280ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // تولید نویز سفید ملایم با شکل‌دهی شبیه به خش‌خش کاغذ
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // فیلتر باندپَس برای تمرکز روی فرکانس‌های واقعی ورق‌زدن کاغذ
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.25);
    filter.Q.setValueAtTime(2.5, ctx.currentTime);

    // Envelope برای شیب ملایم بالا و افت طبیعی
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.27);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noise.start();
  } catch {
    // Ignore audio errors on restrictive browsers
  }
}

// وضعیت و نودهای موسیقی آرامش‌بخش مطالعه
let ambientOsc1: OscillatorNode | null = null;
let ambientOsc2: OscillatorNode | null = null;
let ambientGain: GainNode | null = null;
let isMusicActive = false;

export function toggleAmbientMusic(enable?: boolean): boolean {
  try {
    const ctx = getAudioContext();
    if (!ctx) return false;

    const shouldEnable = enable !== undefined ? enable : !isMusicActive;

    if (shouldEnable) {
      if (isMusicActive) return true;

      // ساخت دو اسیلاتور سینوسی هارمونیک ملایم برای صدای مدیتیشن مطالعه
      ambientOsc1 = ctx.createOscillator();
      ambientOsc2 = ctx.createOscillator();
      ambientGain = ctx.createGain();

      ambientOsc1.type = 'sine';
      ambientOsc1.frequency.setValueAtTime(220, ctx.currentTime); // A3

      ambientOsc2.type = 'sine';
      ambientOsc2.frequency.setValueAtTime(329.63, ctx.currentTime); // E4 (پنجم هارمونیک ملایم)

      ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
      ambientGain.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 1.2);

      ambientOsc1.connect(ambientGain);
      ambientOsc2.connect(ambientGain);
      ambientGain.connect(ctx.destination);

      ambientOsc1.start();
      ambientOsc2.start();
      isMusicActive = true;
      return true;
    } else {
      if (!isMusicActive) return false;
      if (ambientGain) {
        ambientGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          try {
            ambientOsc1?.stop();
            ambientOsc2?.stop();
            ambientOsc1?.disconnect();
            ambientOsc2?.disconnect();
          } catch {
            // Already stopped
          }
          ambientOsc1 = null;
          ambientOsc2 = null;
          ambientGain = null;
        }, 850);
      }
      isMusicActive = false;
      return false;
    }
  } catch {
    return false;
  }
}

export function isAmbientMusicPlaying(): boolean {
  return isMusicActive;
}
