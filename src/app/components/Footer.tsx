import { MessageCircle, Send, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 relative">
      {/* CTA Section - Purple */}
      <div className="bg-[#1C0D47] pt-14 md:pt-20 pb-14 md:pb-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Получите Raycon CRM бесплатно на 14 дней
        </h2>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Начните строить CRM-воронку своей мечты сегодня
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1C0D47] px-6 py-3 rounded-full font-semibold text-sm transition-colors">
            Попробовать бесплатно
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors">
            Получить демо
          </button>
        </div>
      </div>

      {/* Heart character - positioned at corner */}
      <img 
        src="https://pcfcdn.kommo.com/images/footer/kommo-heart.png" 
        alt="" 
        className="absolute left-0 top-[calc(100%-16rem)] sm:top-[calc(100%-20rem)] md:top-[calc(100%-24rem)] w-20 sm:w-28 md:w-36 lg:w-44 z-20"
      />

      {/* Main Footer - White */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 pl-24 sm:pl-32 md:pl-44 lg:pl-48">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1 mb-2 md:mb-0">
            <div className="text-xl sm:text-2xl font-bold text-[#1C0D47]">
              Raycon<span className="text-purple-500">CRM</span>
            </div>
          </div>

          {/* What's Raycon? */}
          <div>
            <h4 className="font-semibold text-[#1C0D47] mb-4 text-sm">Что такое Raycon?</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-[#7C3AED] transition-colors">Обзор</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Воронка CRM</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Salesbot</a></li>
            </ul>
          </div>

          {/* Why Raycon? */}
          <div>
            <h4 className="font-semibold text-[#1C0D47] mb-4 text-sm">Почему Raycon?</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#pricing" className="hover:text-[#7C3AED] transition-colors">Тарифы</a></li>
              <li><a href="#testimonials" className="hover:text-[#7C3AED] transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Кейсы</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#1C0D47] mb-4 text-sm">Ресурсы</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">База знаний</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">API</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#1C0D47] mb-4 text-sm">Связаться</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://wa.me/77001234567" className="hover:text-[#7C3AED] transition-colors">WhatsApp</a></li>
              <li><a href="https://t.me/rayconcrm" className="hover:text-[#7C3AED] transition-colors">Telegram</a></li>
              <li><a href="mailto:info@raycon.kz" className="hover:text-[#7C3AED] transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2026 Raycon CRM
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://t.me/rayconcrm" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#0088cc] flex items-center justify-center transition-colors group">
              <Send className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#25D366] flex items-center justify-center transition-colors group">
              <MessageCircle className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a href="https://instagram.com/rayconcrm" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] flex items-center justify-center transition-colors group">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://tiktok.com/@rayconcrm" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-black flex items-center justify-center transition-colors group">
              <Music2 className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}