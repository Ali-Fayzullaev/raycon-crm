export function DetailedFeatures() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C0D47] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
            <span>Не упускайте</span>
            <img 
              src="https://pcfcdn.kommo.com/images/auth/kommo-dashboard-character.png" 
              alt="Chat" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain inline-block"
            />
            <span>чаты</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C0D47] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mt-2">
            <span>и не забывайте о</span>
            <img 
              src="https://pcfcdn.kommo.com/images/main/kommo-message-character.png" 
              alt="Clients" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain inline-block"
            />
            <span>клиентах</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Customizable pipelines */}
          <div className="bg-purple-50/70 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C0D47] mb-3 md:mb-4">
                  У НАС ЕСТЬ РЕШЕНИЕ
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-gray-700">
                  <p>
                    Мы разработали <span className="font-bold text-[#7C3AED]">Raycon CRM</span> — проверенную систему для бизнеса с мощным <span className="font-bold text-[#7C3AED]">Мультичатом</span>, чтобы вы видели: <span className="font-semibold text-[#1C0D47]">о чём и когда менеджеры говорят с клиентами</span>.
                  </p>
                  <p>
                    <span className="font-bold text-[#7C3AED]">Простой интерфейс</span> — новый менеджер <span className="font-semibold text-[#1C0D47]">начинает продавать через 20 минут</span>, не тратя дни на обучение.
                  </p>
                </div>
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C0D47] mb-6 md:mb-8">
                  ЧТО ВЫ ПОЛУЧИТЕ:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {/* Item 1 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C0D47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#7C3AED] rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-[#1C0D47] font-medium leading-tight">Тотальный контроль<br/>над МОП</span>
                  </div>
                  {/* Item 2 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C0D47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#7C3AED] rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-[#1C0D47] font-medium leading-tight">100% безопасность<br/>базы</span>
                  </div>
                  {/* Item 3 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C0D47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#7C3AED] rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-[#1C0D47] font-medium leading-tight">Рост конверсии<br/>на 20-30%</span>
                  </div>
                  {/* Item 4 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C0D47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#7C3AED] rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-[#1C0D47] font-medium leading-tight">Прозрачная<br/>аналитика</span>
                  </div>
                  {/* Item 5 */}
                  <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C0D47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#7C3AED] rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-[#1C0D47] font-medium leading-tight">Автоматизация<br/>рутины</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
