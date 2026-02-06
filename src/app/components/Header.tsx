import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src="https://pcfcdn.kommo.com/images/main/kommo-message-character.png" 
            alt="Raycon" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="text-xl sm:text-2xl font-bold text-[#1C0D47]">
            Raycon<span className="text-[#7C3AED]">CRM</span>
          </span>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#features" className="text-sm text-[#1C0D47] hover:text-[#7C3AED] transition-colors font-medium">
            Возможности
          </a>
          <a href="#pricing" className="text-sm text-[#1C0D47] hover:text-[#7C3AED] transition-colors font-medium">
            Тарифы
          </a>
          <a href="#testimonials" className="text-sm text-[#1C0D47] hover:text-[#7C3AED] transition-colors font-medium">
            Отзывы
          </a>
        </nav>

        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#" 
            className="text-sm text-[#1C0D47] hover:text-[#7C3AED] transition-colors font-medium px-4 py-2"
          >
            Войти
          </a>
          <a 
            href="#" 
            className="bg-[#1C0D47] hover:bg-[#2D1760] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Попробовать бесплатно
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-[#1C0D47]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-[#1C0D47] hover:text-[#7C3AED] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Возможности
            </a>
            <a 
              href="#pricing" 
              className="text-[#1C0D47] hover:text-[#7C3AED] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Тарифы
            </a>
            <a 
              href="#testimonials" 
              className="text-[#1C0D47] hover:text-[#7C3AED] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-3">
              <a 
                href="#" 
                className="text-[#1C0D47] font-medium py-2 text-center border border-[#1C0D47] rounded-full"
              >
                Войти
              </a>
              <a 
                href="#" 
                className="bg-[#1C0D47] text-white font-medium py-2.5 text-center rounded-full"
              >
                Попробовать бесплатно
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
