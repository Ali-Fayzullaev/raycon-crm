import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

type PeriodKey = 'month' | 'halfYear' | 'year';

interface PlanData {
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  perDay: string;
  bonus?: string;
  bonusEmoji?: string;
  features: string[];
  result: string;
  suitable: string;
  popular?: boolean;
  isEnterprise?: boolean;
  cornerImage: string;
  cornerColor: string;
}

const pricingData: Record<PeriodKey, PlanData[]> = {
  month: [
    {
      name: "Standard",
      description: "Базовый контроль заявок. Для бизнеса, которому нужен порядок без масштабирования переписок",
      price: "1 166 ₸",
      perDay: "/день",
      bonusEmoji: "☕",
      bonus: "По цене чашки кофе",
      features: [
        "CRM и воронка продаж",
        "Автораспределение заявок",
        "Аналитика, отчёты, статистика",
        "WhatsApp в CRM",
        "Чат-бот и автоматические ответы",
        "Автоматизация процессов",
        "Стандартная скорость обработки сообщений"
      ],
      result: "Контроль заявок и продаж без потерь без сложных сценариев",
      suitable: "ИП, микробизнес, 1–2 менеджера",
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/mail-corner-desktop.png",
      cornerColor: "from-yellow-200 to-yellow-300"
    },
    {
      name: "Pro",
      description: "Для масштабирования бизнеса и больших объёмов продаж",
      price: "1 633 ₸",
      perDay: "/день",
      bonusEmoji: "🥐",
      bonus: "Лёгкий завтрак",
      features: [
        "Всё из Standard, плюс:",
        "Ускоренный мультичат",
        "Мультичат с WhatsApp",
        "Ускоренная обработка сообщений",
        "WhatsApp в CRM работает быстрее",
        "Расширенное время хранения файлов",
        "Повышенная надёжность CRM"
      ],
      result: "Менеджеры отвечают быстрее, клиенты не теряются, конверсия растёт",
      suitable: "Отделы продаж, сервисы, онлайн-бизнес, до 20 менеджеров",
      popular: true,
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/heart-corner-desktop.png",
      cornerColor: "from-purple-200 to-purple-300"
    },
    {
      name: "Business",
      description: "Максимум скорости и стабильности. Максимум возможностей и полный пакет контроля",
      price: "По запросу",
      perDay: "",
      features: [
        "Всё из Pro, плюс:",
        "Мультичат WhatsApp + Instagram",
        "Максимальная скорость обработки сообщений",
        "Самая стабильная работа WhatsApp",
        "Хранение файлов без ограничений по времени",
        "Максимальная надёжность CRM",
        "Приоритетная скорость рассмотрения обращений"
      ],
      result: "CRM не ограничивает рост бизнеса даже при большом потоке заявок",
      suitable: "Отделы продаж, сервисы, онлайн-бизнес, e-commerce, от 20 менеджеров",
      isEnterprise: true,
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/lightning-corner-desktop.png",
      cornerColor: "from-pink-200 to-pink-300"
    }
  ],
  halfYear: [
    {
      name: "Standard",
      description: "Базовый контроль заявок. Для бизнеса, которому нужен порядок без масштабирования переписок",
      price: "1 050 ₸",
      oldPrice: "1 166 ₸",
      perDay: "/день",
      bonusEmoji: "⛽",
      bonus: "🎁 Выгода 21 000 ₸ — 70 литров АИ-95 (полный бак)",
      features: [
        "CRM и воронка продаж",
        "Автораспределение заявок",
        "Аналитика, отчёты, статистика",
        "WhatsApp в CRM",
        "Чат-бот и автоматические ответы",
        "Автоматизация процессов",
        "Стандартная скорость обработки сообщений"
      ],
      result: "Контроль заявок и продаж без потерь без сложных сценариев",
      suitable: "ИП, микробизнес, 1–2 менеджера",
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/mail-corner-desktop.png",
      cornerColor: "from-yellow-200 to-yellow-300"
    },
    {
      name: "Pro",
      description: "Для масштабирования бизнеса и больших объёмов продаж",
      price: "1 470 ₸",
      oldPrice: "1 633 ₸",
      perDay: "/день",
      bonusEmoji: "🍽️",
      bonus: "🎁 Выгода 29 400 ₸ — Бизнес-ланч на троих",
      features: [
        "Всё из Standard, плюс:",
        "Ускоренный мультичат",
        "Мультичат с WhatsApp",
        "Ускоренная обработка сообщений",
        "WhatsApp в CRM работает быстрее",
        "Расширенное время хранения файлов",
        "Повышенная надёжность CRM"
      ],
      result: "Менеджеры отвечают быстрее, клиенты не теряются, конверсия растёт",
      suitable: "Отделы продаж, сервисы, онлайн-бизнес, до 20 менеджеров",
      popular: true,
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/heart-corner-desktop.png",
      cornerColor: "from-purple-200 to-purple-300"
    },
    {
      name: "Business",
      description: "Максимум скорости и стабильности. Максимум возможностей и полный пакет контроля",
      price: "По запросу",
      perDay: "",
      features: [
        "Всё из Pro, плюс:",
        "Мультичат WhatsApp + Instagram",
        "Максимальная скорость обработки сообщений",
        "Самая стабильная работа WhatsApp",
        "Хранение файлов без ограничений по времени",
        "Максимальная надёжность CRM",
        "Приоритетная скорость рассмотрения обращений"
      ],
      result: "CRM не ограничивает рост бизнеса даже при большом потоке заявок",
      suitable: "Отделы продаж, сервисы, онлайн-бизнес, e-commerce, от 20 менеджеров",
      isEnterprise: true,
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/lightning-corner-desktop.png",
      cornerColor: "from-pink-200 to-pink-300"
    }
  ],
  year: [
    {
      name: "Standard",
      description: "Базовый контроль заявок. Для бизнеса, которому нужен порядок без масштабирования переписок",
      price: "933 ₸",
      oldPrice: "1 166 ₸",
      perDay: "/день",
      bonusEmoji: "💪",
      bonus: "🎁 Выгода 84 000 ₸ — Месяц безлимита в FitnessBlitz",
      features: [
        "CRM и воронка продаж",
        "Автораспределение заявок",
        "Аналитика, отчёты, статистика",
        "WhatsApp в CRM",
        "Чат-бот и автоматические ответы",
        "Автоматизация процессов",
        "Стандартная скорость обработки сообщений"
      ],
      result: "Контроль заявок и продаж без потерь без сложных сценариев",
      suitable: "ИП, микробизнес, 1–2 менеджера",
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/mail-corner-desktop.png",
      cornerColor: "from-yellow-200 to-yellow-300"
    },
    {
      name: "Pro",
      description: "Для масштабирования бизнеса и больших объёмов продаж",
      price: "1 306 ₸",
      oldPrice: "1 633 ₸",
      perDay: "/день",
      bonusEmoji: "⌚",
      bonus: "🎁 Выгода 117 600 ₸ — Apple Watch SE",
      features: [
        "Всё из Standard, плюс:",
        "Ускоренный мультичат",
        "Мультичат с WhatsApp",
        "Ускоренная обработка сообщений",
        "WhatsApp в CRM работает быстрее",
        "Расширенное время хранения файлов",
        "Повышенная надёжность CRM"
      ],
      result: "Менеджеры отвечают быстрее, клиенты не теряются, конверсия растёт",
      suitable: "Отделы продаж, сервисы, онлайн-бизнес, до 20 менеджеров",
      popular: true,
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/heart-corner-desktop.png",
      cornerColor: "from-purple-200 to-purple-300"
    },
    {
      name: "Business",
      description: "Максимум скорости и стабильности. Максимум возможностей и полный пакет контроля",
      price: "По запросу",
      perDay: "",
      features: [
        "Всё из Pro, плюс:",
        "Мультичат WhatsApp + Instagram",
        "Максимальная скорость обработки сообщений",
        "Самая стабильная работа WhatsApp",
        "Хранение файлов без ограничений по времени",
        "Максимальная надёжность CRM",
        "Приоритетная скорость рассмотрения обращений"
      ],
      result: "CRM не ограничивает рост бизнеса даже при большом потоке заявок",
      suitable: "Отделы продаж, сервисы, онлайн-бизнес, e-commerce, от 20 менеджеров",
      isEnterprise: true,
      cornerImage: "https://pcfcdn.kommo.com/images/pages/main/lightning-corner-desktop.png",
      cornerColor: "from-pink-200 to-pink-300"
    }
  ]
};

export function PricingTable() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>('month');
  
  const periods: { key: PeriodKey; label: string; discount?: string }[] = [
    { key: 'month', label: 'Месяц' },
    { key: 'halfYear', label: 'Полгода', discount: 'скидка 10%' },
    { key: 'year', label: 'Год', discount: 'скидка 20%' }
  ];

  const plans = pricingData[selectedPeriod];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-purple-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Period selector */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex gap-1 sm:gap-2 bg-white p-1 sm:p-1.5 rounded-full shadow-lg">
            {periods.map((period) => (
              <button
                key={period.key}
                onClick={() => setSelectedPeriod(period.key)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all flex flex-col items-center ${
                  selectedPeriod === period.key
                    ? 'bg-[#1C0D47] text-white'
                    : 'text-gray-600 hover:text-[#1C0D47]'
                }`}
              >
                <span>{period.label}</span>
                {period.discount && (
                  <span className={`text-[10px] sm:text-xs ${selectedPeriod === period.key ? 'text-yellow-300' : 'text-green-600'}`}>
                    {period.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 bg-white relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                plan.popular ? "ring-2 ring-[#7C3AED]" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium">
                  Популярный
                </div>
              )}

              <div className="relative z-10">
                {/* Plan name */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C0D47] mb-2">
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 mb-4 min-h-[40px] sm:min-h-[50px]">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-4">
                  {!plan.isEnterprise ? (
                    <>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        {plan.oldPrice && (
                          <span className="text-lg sm:text-xl text-gray-400 line-through">
                            {plan.oldPrice}
                          </span>
                        )}
                        <span className="text-3xl sm:text-4xl font-bold text-[#1C0D47]">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500">{plan.perDay}</p>
                      {plan.bonus && (
                        <p className="text-xs sm:text-sm text-green-600 mt-2 font-medium">
                          {plan.bonus}
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-bold text-[#1C0D47]">
                      {plan.price}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full rounded-full py-5 sm:py-6 mb-6 text-sm sm:text-base ${
                    plan.isEnterprise 
                      ? "bg-white border-2 border-[#1C0D47] text-[#1C0D47] hover:bg-[#1C0D47] hover:text-white" 
                      : "bg-[#1C0D47] hover:bg-[#2D1760] text-white"
                  }`}
                >
                  {plan.isEnterprise ? "Связаться с нами" : "Выбрать план"}
                </Button>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-[#1C0D47] mb-2">Включено:</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-500" />
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="mb-3">
                  <p className="text-xs sm:text-sm font-semibold text-[#1C0D47] mb-1">Результат:</p>
                  <p className="text-xs sm:text-sm text-gray-600">{plan.result}</p>
                </div>

                {/* Suitable for */}
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#1C0D47] mb-1">Подходит для:</p>
                  <p className="text-xs sm:text-sm text-gray-600">{plan.suitable}</p>
                </div>
              </div>

              {/* Corner image decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-80">
                <img 
                  src={plan.cornerImage} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
