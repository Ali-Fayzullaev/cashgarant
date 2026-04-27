import { useI18n } from '../i18n'
import { ADDRESS_MAPS_URL, MANAGERS } from '../data'
import { MapPin, Clock, ArrowUpRight, Phone } from 'lucide-react'

export default function Footer() {
  const { t, lang } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer id="contacts" className="relative bg-ink-900 text-white pt-14 lg:pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Cash Garant" className="h-11 w-11 object-contain" />
              <div>
                <div className="font-display text-xl font-bold">
                  Cash <span className="text-gold-500">Garant</span>
                </div>
                <div className="text-xs text-white/55 mt-0.5">{t('footer_tagline')}</div>
              </div>
            </div>

            <p className="mt-6 text-sm text-white/55 max-w-md leading-relaxed">
              {t('footer_disclaimer')}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-wider text-gold-500 font-semibold">
              {t('contacts_title')}
            </div>
            <div className="mt-3 flex items-start gap-3">
              <MapPin className="size-5 text-gold-500 mt-0.5 shrink-0" strokeWidth={2.2} />
              <div>
                <div className="text-xs text-white/55 mb-1">{t('contacts_addr_label')}</div>
                <div className="text-sm text-white/90 leading-relaxed">
                  {t('contacts_addr')}
                </div>
                <a
                  href={ADDRESS_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300"
                >
                  {t('contacts_route')}
                  <ArrowUpRight className="size-3.5" strokeWidth={2.6} />
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <Clock className="size-5 text-gold-500 mt-0.5 shrink-0" strokeWidth={2.2} />
              <div>
                <div className="text-xs text-white/55 mb-1">{t('contacts_hours_label')}</div>
                <div className="text-sm text-white/90">{t('contacts_hours')}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider text-gold-500 font-semibold">
              {lang === 'kk' ? 'Тікелей байланыс' : 'Прямые контакты'}
            </div>
            <ul className="mt-3 space-y-2.5">
              {MANAGERS.map((m) => (
                <li key={m.phoneIntl}>
                  <a
                    href={`tel:${m.phoneIntl}`}
                    className="flex items-center gap-2 text-sm text-white/85 hover:text-white"
                  >
                    <Phone className="size-4 text-gold-500" strokeWidth={2.4} />
                    <span className="font-medium">{m.name}</span>
                    <span className="text-white/55">·</span>
                    <span>{m.phoneDisplay}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/45">
            © {year} Cash Garant. {t('footer_rights')}
          </div>
          <div className="text-xs text-white/45">
            {lang === 'kk' ? 'Теміртау · Қазақстан' : 'Темиртау · Казахстан'}
          </div>
        </div>
      </div>
    </footer>
  )
}
