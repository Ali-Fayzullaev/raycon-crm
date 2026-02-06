export function FeaturesGrid() {
  return (
    <section id="features" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Banner Section - Like the image */}
        <div className="relative py-6 sm:py-8 md:py-12">
          {/* Content */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 relative z-10">
            
            {/* Left Avatar */}
            <div className="relative flex-shrink-0">
              <img 
                src="https://pcfcdn.kommo.com/images/main/kommo-happy-client.png" 
                alt="Счастливый клиент" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain drop-shadow-xl"
              />
            </div>
            
            {/* Center Text */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#1C0D47] text-center max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg leading-tight">
              ЧЕМ ГРОЗИТ ОТСУТСТВИЕ CRM В НАШИ ДНИ?
            </h2>
            
            {/* Right Avatar */}
            <div className="relative flex-shrink-0">
              <img 
                src="https://pcfcdn.kommo.com/images/main/kommo-enterpreneur.png" 
                alt="Предприниматель" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Feature blocks with colored backgrounds */}
        <div className="space-y-12 md:space-y-24 mt-12 md:mt-24">
          
          {/* Feature 1 - Messaging */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0D47] mb-4">
                 Теневой бизнес отдела продаж 
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Объедините WhatsApp, Telegram, Instagram и другие каналы в единый инбокс. Больше не нужно переключаться между приложениями — все сообщения клиентов в одном окне.
              </p>
              <div className="flex flex-wrap gap-3">
                <img src="https://pcfcdn.kommo.com/images/main/circle-whatsapp.svg" alt="WhatsApp" className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
                <img src="https://pcfcdn.kommo.com/images/main/circle-telegram.svg" alt="Telegram" className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
                <img src="https://pcfcdn.kommo.com/images/main/circle-tiktok.svg" alt="TikTok" className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <img 
                  src="https://pcfcdn.kommo.com/images/main/kommo-message-character.png" 
                  alt="Мессенджеры" 
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Email & Notifications */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0D47] mb-4">
                Менеджеры работают только с легкими клиентами
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Никогда не пропускайте важные сообщения. Raycon CRM автоматически уведомит вас о новых лидах, ответах клиентов и важных событиях в реальном времени.
              </p>
              <a href="#" className="text-[#7C3AED] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-base sm:text-lg">
                Узнать больше →
              </a>
            </div>
            <div className="order-1 relative flex justify-center">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-200 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <div className="flex gap-4 items-end justify-center">
                  <img 
                    src="https://pcfcdn.kommo.com/images/auth/kommo-envelope-character.png" 
                    alt="Email" 
                    className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain"
                  />
                  <img 
                    src="https://pcfcdn.kommo.com/images/auth/kommo-bell-gold-character.png" 
                    alt="Уведомления" 
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Analytics & Search */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0D47] mb-4">
                Имитация бурной деятельности
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Мгновенно находите любого клиента, сделку или разговор. Получайте детальную аналитику по продажам, конверсиям и эффективности вашей команды.
              </p>
              <a href="#" className="text-[#7C3AED] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-base sm:text-lg">
                Узнать больше →
              </a>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <img 
                  src="https://pcfcdn.kommo.com/images/auth/kommo-searchglass-character.png" 
                  alt="Поиск и аналитика" 
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 4 - Premium Experience */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0D47] mb-4">
                Показ только успешных сделок
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Автоматизируйте рутинные задачи, настройте воронку продаж под ваш бизнес и масштабируйте продажи без увеличения команды. Raycon CRM растёт вместе с вами.
              </p>
              <a href="#" className="text-[#7C3AED] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-base sm:text-lg">
                Начать бесплатно →
              </a>
            </div>
            <div className="order-1 relative flex justify-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-200 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <div className="flex gap-4 items-end justify-center">
                  <img 
                    src="https://pcfcdn.kommo.com/images/main/kommo-crown-character.png" 
                    alt="Премиум" 
                    className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain"
                  />
                  <img 
                    src="https://pcfcdn.kommo.com/images/main/kommo-crm-email-character.png" 
                    alt="CRM" 
                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
