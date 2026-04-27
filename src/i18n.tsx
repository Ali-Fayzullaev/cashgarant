import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'ru' | 'kk'

type Dict = Record<string, string | string[] | Record<string, string>>

const ru: Dict = {
  nav_services: 'Услуги',
  nav_advantages: 'Преимущества',
  nav_managers: 'Менеджеры',
  nav_contacts: 'Контакты',
  cta_consult: 'Получить консультацию',
  cta_whatsapp: 'Написать в WhatsApp',

  hero_eyebrow: 'Кредитный брокер · Темиртау',
  hero_title_1: 'Деньги на ваши',
  hero_title_2: 'важные цели',
  hero_subtitle:
    'Подберём выгодное решение по кредиту. Работаем быстро, удобно и с индивидуальным подходом к каждому клиенту.',
  hero_stat_1_v: 'до 24 ч',
  hero_stat_1_l: 'срок рассмотрения',
  hero_stat_2_v: '5+',
  hero_stat_2_l: 'продуктов',
  hero_stat_3_v: '100%',
  hero_stat_3_l: 'индивидуальный подход',

  services_eyebrow: 'Что мы предлагаем',
  services_title: 'Подберём решение под вашу задачу',
  services_subtitle: 'Полный спектр кредитных продуктов для физических и юридических лиц.',

  s1_t: 'Кредит без залога',
  s1_d: 'Быстрое оформление наличными без обеспечения.',
  s2_t: 'Ипотека',
  s2_d: 'Программы для покупки жилья на выгодных условиях.',
  s3_t: 'Залоговый кредит',
  s3_d: 'Крупные суммы под залог недвижимости или авто.',
  s4_t: 'Рефинансирование',
  s4_d: 'Снизим нагрузку и объединим действующие кредиты.',
  s5_t: 'Кредиты для ИП и ТОО',
  s5_d: 'Бизнес-финансирование под цели и обороты компании.',
  s6_t: 'Индивидуальный подбор',
  s6_d: 'Сравним условия банков и предложим лучший вариант.',

  adv_eyebrow: 'Почему Cash Garant',
  adv_title: 'Профессионально. Быстро. Прозрачно.',
  adv_1_t: 'Скорость',
  adv_1_d: 'Решение в день обращения, без лишних формальностей.',
  adv_2_t: 'Лучшие условия',
  adv_2_d: 'Сравниваем предложения банков и выбираем самое выгодное.',
  adv_3_t: 'Прозрачность',
  adv_3_d: 'Никаких скрытых комиссий — всё чётко и понятно.',
  adv_4_t: 'Поддержка',
  adv_4_d: 'Сопровождаем сделку от заявки до получения средств.',

  mgr_eyebrow: 'Наши менеджеры',
  mgr_title: 'Свяжитесь напрямую в WhatsApp',
  mgr_subtitle: 'Бесплатная консультация — ответим в течение нескольких минут.',
  mgr_lang_ru: 'Русский',
  mgr_lang_kk: 'Қазақша',
  mgr_role: 'Менеджер',
  mgr_write: 'Написать',

  contacts_title: 'Где нас найти',
  contacts_addr_label: 'Адрес офиса',
  contacts_addr:
    'г. Темиртау, ТД «БУМ» («Корзина»), пр. Металлургов, 33, 3-й этаж, офис 9',
  contacts_route: 'Открыть в картах',
  contacts_hours_label: 'Часы работы',
  contacts_hours: 'Пн–Сб · 09:00–19:00',

  footer_tagline: 'Кредитный брокер. Подбор лучших условий.',
  footer_rights: 'Все права защищены.',
  footer_disclaimer:
    'Cash Garant не является банком. Окончательные условия определяются банком-кредитором.',
}

const kk: Dict = {
  nav_services: 'Қызметтер',
  nav_advantages: 'Артықшылықтар',
  nav_managers: 'Менеджерлер',
  nav_contacts: 'Байланыс',
  cta_consult: 'Кеңес алу',
  cta_whatsapp: 'WhatsApp-қа жазу',

  hero_eyebrow: 'Несие брокері · Теміртау',
  hero_title_1: 'Маңызды мақсаттарға',
  hero_title_2: 'ақша',
  hero_subtitle:
    'Сізге тиімді несие шешімін таңдаймыз. Жылдам, ыңғайлы және әр клиентке жеке тәсілмен жұмыс істейміз.',
  hero_stat_1_v: '24 сағатқа дейін',
  hero_stat_1_l: 'қарау мерзімі',
  hero_stat_2_v: '5+',
  hero_stat_2_l: 'өнім',
  hero_stat_3_v: '100%',
  hero_stat_3_l: 'жеке тәсіл',

  services_eyebrow: 'Біздің қызметтер',
  services_title: 'Мақсатыңызға сай шешім',
  services_subtitle: 'Жеке және заңды тұлғаларға арналған толық несие өнімдері.',

  s1_t: 'Кепілсіз несие',
  s1_d: 'Кепілсіз қолма-қол ақшаны жылдам рәсімдеу.',
  s2_t: 'Ипотека',
  s2_d: 'Тұрғын үй сатып алуға тиімді бағдарламалар.',
  s3_t: 'Кепілмен несие',
  s3_d: 'Жылжымайтын мүлік немесе көлік кепілімен ірі сома.',
  s4_t: 'Қайта қаржыландыру',
  s4_d: 'Қолданыстағы несиелерді біріктіріп, жүкті азайтамыз.',
  s5_t: 'ЖК және ЖШС несиелері',
  s5_d: 'Компанияның мақсаттары мен айналымына қарай қаржыландыру.',
  s6_t: 'Жеке таңдау',
  s6_d: 'Банктердің шарттарын салыстырып, ең тиімдісін ұсынамыз.',

  adv_eyebrow: 'Неліктен Cash Garant',
  adv_title: 'Кәсіби. Жылдам. Айқын.',
  adv_1_t: 'Жылдамдық',
  adv_1_d: 'Сол күні шешім — артық формалдылықсыз.',
  adv_2_t: 'Ең жақсы шарттар',
  adv_2_d: 'Банк ұсыныстарын салыстырып, ең тиімдісін таңдаймыз.',
  adv_3_t: 'Айқындық',
  adv_3_d: 'Жасырын комиссия жоқ — бәрі анық және түсінікті.',
  adv_4_t: 'Қолдау',
  adv_4_d: 'Өтінімнен қаражат алуға дейін қолдаймыз.',

  mgr_eyebrow: 'Біздің менеджерлер',
  mgr_title: 'WhatsApp арқылы тікелей хабарласыңыз',
  mgr_subtitle: 'Тегін кеңес — бірнеше минутта жауап береміз.',
  mgr_lang_ru: 'Орысша',
  mgr_lang_kk: 'Қазақша',
  mgr_role: 'Менеджер',
  mgr_write: 'Жазу',

  contacts_title: 'Біз қайдамыз',
  contacts_addr_label: 'Кеңсе мекенжайы',
  contacts_addr:
    'Теміртау қ., «БУМ» СҮ («Корзина»), Металлургтер даңғылы, 33, 3-қабат, 9-кеңсе',
  contacts_route: 'Картадан ашу',
  contacts_hours_label: 'Жұмыс уақыты',
  contacts_hours: 'Дс–Сб · 09:00–19:00',

  footer_tagline: 'Несие брокері. Ең жақсы шарттарды таңдау.',
  footer_rights: 'Барлық құқықтар қорғалған.',
  footer_disclaimer:
    'Cash Garant банк болып табылмайды. Соңғы шарттарды несие беруші банк белгілейді.',
}

const dicts: Record<Lang, Dict> = { ru, kk }

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: keyof typeof ru) => string
}

const I18nCtx = createContext<Ctx | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = (typeof localStorage !== 'undefined' && localStorage.getItem('cg_lang')) as Lang | null
    return stored === 'kk' || stored === 'ru' ? stored : 'ru'
  })

  useEffect(() => {
    document.documentElement.lang = lang === 'kk' ? 'kk' : 'ru'
    try { localStorage.setItem('cg_lang', lang) } catch {}
  }, [lang])

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: (l) => setLangState(l),
    t: (key) => {
      const v = dicts[lang][key as string]
      return typeof v === 'string' ? v : String(key)
    },
  }), [lang])

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

// WhatsApp prefilled bilingual message
export const WHATSAPP_MESSAGE =
  'Сәлеметсіз бе, несие бойынша кеңес алғым келеді.\nЗдравствуйте, хочу получить консультацию по кредитованию.'

export function waLink(phoneIntl: string) {
  const num = phoneIntl.replace(/[^\d]/g, '')
  return `https://wa.me/${num}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}
