export function DetailedFeatures() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C0D47] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
            <span>Уникальный</span>
            <img 
              src="https://pcfcdn.kommo.com/images/main/kommo-crown-character.png" 
              alt="Crown" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain inline-block"
            />
            <span>способ</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C0D47] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mt-2">
            <span>ведения</span>
            <img 
              src="https://pcfcdn.kommo.com/images/main/kommo-message-character.png" 
              alt="Business" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain inline-block"
            />
            <span>бизнеса</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Customizable pipelines */}
          <div className="bg-purple-50/70 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C0D47] mb-3 md:mb-4">
                  Настраиваемые воронки
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                  Отслеживайте путь каждого клиента на этапе покупки для мгновенного понимания общей картины.
                </p>
                <a href="#" className="text-[#7C3AED] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base">
                  Узнать больше →
                </a>
              </div>
              <div className="order-1 md:order-2 relative flex justify-center">
                <img 
                  src="https://pcfcdn.kommo.com/images/pages/main/mail-corner-desktop.png" 
                  alt="Воронки" 
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Task management */}
          <div className="bg-purple-50/70 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="relative flex justify-center">
                <img 
                  src="https://pcfcdn.kommo.com/images/pages/main/heart-corner-desktop.png" 
                  alt="Задачи" 
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C0D47] mb-3 md:mb-4">
                  Управление задачами
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                  Держите себя и коллег в курсе дел с помощью напоминаний, которые можно установить вручную или с помощью ботов.
                </p>
                <a href="#" className="text-[#7C3AED] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base">
                  Узнать больше →
                </a>
              </div>
            </div>
          </div>

          {/* Templates & bots */}
          <div className="bg-purple-50/70 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C0D47] mb-3 md:mb-4">
                  Шаблоны и боты
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                  Отправляйте персонализированные шаблоны клиентам одним кликом или используйте ботов для автоматизации рабочих процессов (без программирования!).
                </p>
                <a href="#" className="text-[#7C3AED] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base">
                  Узнать больше →
                </a>
              </div>
              <div className="order-1 md:order-2 relative flex justify-center">
                <img 
                  src="https://pcfcdn.kommo.com/images/pages/main/lightning-corner-desktop.png" 
                  alt="Шаблоны" 
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
