import { Logo } from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl" style={{ fontFamily: "'Peyda', sans-serif" }}>
      {/* Logo in top right */}
      <header className="absolute top-8 right-8 md:top-12 md:right-12">
        <Logo />
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Coming Soon Text */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-[#2C3F50] tracking-tight">
              به زودی
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-1 w-20 bg-[#9CE7C2]"></div>
              <p className="text-2xl md:text-4xl text-[#2C3F50]/60">
                آژانس نقطه
              </p>
              <div className="h-1 w-20 bg-[#9CE7C2]"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-[#2C3F50]/70 max-w-2xl mx-auto leading-relaxed">
            ما در حال آماده‌سازی چیزی خاص برای شما هستیم
          </p>

          {/* Contact Info */}
          <div className="pt-12 space-y-3">
            <p className="text-lg md:text-xl text-[#2C3F50]/80">
              برای اطلاعات بیشتر با ما تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#2C3F50]">
              <a 
                href="mailto:mahdi@noghtehagency.ir" 
                className="hover:text-[#9CE7C2] transition-colors"
                style={{ fontSize: '18px' }}
              >
                mahdi@noghtehagency.ir
              </a>
              <span className="hidden sm:inline text-[#2C3F50]/30">|</span>
              <a 
                href="tel:+989126392784" 
                className="hover:text-[#9CE7C2] transition-colors"
                style={{ fontSize: '18px' }}
              >
                ۲۷۸۴ ۶۳۹ ۹۱۲ ۹۸+
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-12 size-16 rounded-full bg-[#9CE7C2]/20 blur-xl hidden md:block"></div>
      <div className="absolute top-1/3 left-1/4 size-24 rounded-full bg-[#2C3F50]/5 blur-2xl hidden lg:block"></div>
    </div>
  );
}