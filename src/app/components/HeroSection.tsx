import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-white relative overflow-hidden min-h-[auto] md:min-h-[80vh] flex items-center">
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 200, 0, 0.5)); }
          50% { filter: drop-shadow(0 0 25px rgba(255, 200, 0, 0.8)); }
        }
        .animate-float-custom {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Mobile: Characters row on top */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-6 md:hidden">
          <img 
            src="https://pcfcdn.kommo.com/images/main/kommo-message-character.png" 
            alt="Message"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-float-custom"
          />
          <img 
            src="https://pcfcdn.kommo.com/images/auth/kommo-envelope-character.png" 
            alt="Envelope"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-bounce-slow"
            style={{ animationDelay: '0.5s' }}
          />
          <img 
            src="https://pcfcdn.kommo.com/images/auth/kommo-searchglass-character.png" 
            alt="Search"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-float-reverse"
            style={{ animationDelay: '1s' }}
          />
          <img 
            src="https://pcfcdn.kommo.com/images/auth/kommo-bell-gold-character.png" 
            alt="Bell"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-bounce-slow animate-pulse-glow"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        {/* Desktop Layout with characters on sides */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Characters - Desktop */}
          <div className="hidden md:flex flex-col gap-4 lg:gap-6 absolute left-0 lg:left-4 xl:left-8 top-1/2 -translate-y-1/2 z-10">
            <img 
              src="https://pcfcdn.kommo.com/images/main/kommo-message-character.png" 
              alt="Message"
              className="w-14 lg:w-20 xl:w-24 object-contain animate-float-custom drop-shadow-xl"
            />
            <img 
              src="https://pcfcdn.kommo.com/images/auth/kommo-envelope-character.png" 
              alt="Envelope"
              className="w-12 lg:w-16 xl:w-20 object-contain animate-bounce-slow drop-shadow-xl"
              style={{ animationDelay: '0.5s' }}
            />
            <img 
              src="https://pcfcdn.kommo.com/images/main/kommo-crm-email-character.png" 
              alt="Email"
              className="w-14 lg:w-20 xl:w-24 object-contain animate-wiggle drop-shadow-xl"
              style={{ animationDelay: '1s' }}
            />
          </div>

          {/* Center Content */}
          <div className="text-center relative z-20 max-w-3xl mx-auto px-2 md:px-16 lg:px-24">
            <div className="mb-3 md:mb-4 text-xs sm:text-sm text-gray-600 font-medium">
              CRM для мессенджеров и продаж
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1C0D47] mb-6 md:mb-8 leading-tight">
              Все каналы коммуникации в Raycon CRM
            </h1>
            
            <Button 
              size="lg" 
              className="bg-[#1C0D47] hover:bg-[#2D1760] text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Попробовать бесплатно 14 дней
            </Button>
          </div>

          {/* Right Characters - Desktop */}
          <div className="hidden md:flex flex-col gap-4 lg:gap-6 absolute right-0 lg:right-4 xl:right-8 top-1/2 -translate-y-1/2 z-10">
            <img 
              src="https://pcfcdn.kommo.com/images/auth/kommo-searchglass-character.png" 
              alt="Search"
              className="w-14 lg:w-20 xl:w-24 object-contain animate-float-reverse drop-shadow-xl"
              style={{ animationDelay: '1.5s' }}
            />
            <img 
              src="https://pcfcdn.kommo.com/images/auth/kommo-bell-gold-character.png" 
              alt="Bell"
              className="w-12 lg:w-16 xl:w-20 object-contain animate-bounce-slow animate-pulse-glow drop-shadow-xl"
              style={{ animationDelay: '2s' }}
            />
            <img 
              src="https://pcfcdn.kommo.com/images/main/kommo-crown-character.png" 
              alt="Crown"
              className="w-14 lg:w-20 xl:w-24 object-contain animate-float-custom drop-shadow-xl"
              style={{ animationDelay: '2.5s' }}
            />
          </div>
        </div>

        {/* Mobile: Bottom characters + Social Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 md:hidden">
          <img 
            src="https://pcfcdn.kommo.com/images/main/kommo-crm-email-character.png" 
            alt="Email"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain animate-wiggle"
          />
          <img 
            src="https://pcfcdn.kommo.com/images/main/kommo-crown-character.png" 
            alt="Crown"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain animate-float-custom"
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 md:mt-10">
          <img 
            src="https://pcfcdn.kommo.com/images/main/circle-telegram.svg" 
            alt="Telegram"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-lg hover:scale-110 transition-transform cursor-pointer animate-float-reverse"
            style={{ animationDelay: '3s' }}
          />
          <img 
            src="https://pcfcdn.kommo.com/images/main/circle-whatsapp.svg" 
            alt="WhatsApp"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-lg hover:scale-110 transition-transform cursor-pointer animate-bounce-slow"
            style={{ animationDelay: '3.5s' }}
          />
          <img 
            src="https://pcfcdn.kommo.com/images/main/circle-tiktok.svg" 
            alt="TikTok"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-lg hover:scale-110 transition-transform cursor-pointer animate-float-custom"
            style={{ animationDelay: '4s' }}
          />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 md:top-20 left-0 w-48 md:w-96 h-48 md:h-96 bg-purple-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 md:bottom-20 right-0 w-48 md:w-96 h-48 md:h-96 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-yellow-50 to-pink-50 rounded-full opacity-40 blur-3xl -z-10"></div>
    </section>
  );
}
