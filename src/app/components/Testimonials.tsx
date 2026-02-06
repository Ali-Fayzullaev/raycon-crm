import { ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Петров",
    position: "CEO, TechStart Kazakhstan",
    company: "TechStart",
    avatar: "https://pcfcdn.kommo.com/images/main/kommo-happy-client.png",
    quote: "С Raycon CRM наши продажи выросли на 340% за 6 месяцев. Теперь вся команда работает в едином пространстве, и ни один клиент не теряется.",
    stats: "+340%",
    statsLabel: "рост продаж",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50"
  },
  {
    name: "Мария Иванова",
    position: "Директор по продажам, Digital Agency",
    company: "Digital Agency",
    avatar: "https://pcfcdn.kommo.com/images/main/kommo-enterpreneur.png",
    quote: "Раньше менеджеры тратили 4 часа на ответы клиентам. Теперь с WhatsApp интеграцией — 15 минут. Конверсия выросла в 2 раза!",
    stats: "x2",
    statsLabel: "конверсия",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50"
  },
  {
    name: "Тимур Касымов",
    position: "Основатель, E-commerce Pro",
    company: "E-commerce Pro",
    avatar: "https://pcfcdn.kommo.com/images/auth/kommo-searchglass-character.png",
    quote: "Автоматизация в Raycon CRM сэкономила нам 120 часов в месяц. Боты отвечают 24/7, а менеджеры фокусируются на закрытии сделок.",
    stats: "120ч",
    statsLabel: "экономия/мес",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Отзывы клиентов
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C0D47] mb-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span>Истории</span>
            <img 
              src="https://pcfcdn.kommo.com/images/main/kommo-crown-character.png" 
              alt="Success" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
            />
            <span>успеха</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, как компании по всему миру увеличивают продажи с Raycon CRM
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-[24px] sm:rounded-[32px] ${testimonial.bgColor} p-5 sm:p-6 md:p-8 relative overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              {/* Quote icon */}
              <div className={`absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity`}>
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Stats badge */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${testimonial.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6`}>
                <span className="text-base sm:text-lg">{testimonial.stats}</span>
                <span className="opacity-80">{testimonial.statsLabel}</span>
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-800 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain bg-white p-1 shadow-md"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                    <span className="text-white text-[10px] sm:text-xs">✓</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#1C0D47] text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                </div>
              </div>

              {/* Read more link */}
              <button className="mt-4 sm:mt-6 text-[#7C3AED] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                Читать историю
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>

              {/* Decorative corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl sm:rounded-full p-4 sm:px-8 sm:py-4">
            <div className="flex -space-x-3">
              <img src="https://pcfcdn.kommo.com/images/main/kommo-happy-client.png" alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-contain bg-white" />
              <img src="https://pcfcdn.kommo.com/images/main/kommo-enterpreneur.png" alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-contain bg-white" />
              <img src="https://pcfcdn.kommo.com/images/main/kommo-message-character.png" alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-contain bg-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base font-semibold text-[#1C0D47]">Присоединяйтесь к 200+ компаниям</p>
              <p className="text-xs sm:text-sm text-gray-600">которые уже используют Raycon CRM</p>
            </div>
            <button className="bg-[#1C0D47] hover:bg-[#2D1760] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-colors">
              Начать бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
