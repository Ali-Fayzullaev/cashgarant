import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'
import { PRIMARY_MANAGER } from '../data'
import { waLink } from '../i18n'
import { MessageCircle, Menu, X } from 'lucide-react'

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { id: 'services', label: t('nav_services') },
    { id: 'advantages', label: t('nav_advantages') },
    { id: 'managers', label: t('nav_managers') },
    { id: 'contacts', label: t('nav_contacts') },
  ]

  return (
    <header
      className={
        'sticky top-0 z-40 transition-all duration-300 ' +
        (scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-brand-600/10 shadow-[0_8px_24px_-20px_rgba(11,26,18,0.25)]'
          : 'bg-transparent')
      }
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-18 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img src="/logo.png" alt="Cash Garant" className="h-9 w-9 lg:h-10 lg:w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-[15px] lg:text-base font-bold text-brand-700 tracking-tight">
              Cash <span className="text-gold-600">Garant</span>
            </div>
            <div className="text-[10px] lg:text-[11px] text-ink-500 -mt-0.5">
              {lang === 'kk' ? 'Несие брокері' : 'Кредитный брокер'}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="px-3 py-2 text-sm text-ink-700 hover:text-brand-700 rounded-lg hover:bg-brand-50/60 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-full border border-brand-600/15 bg-white/60 backdrop-blur p-0.5 text-xs font-semibold">
            {(['ru', 'kk'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={
                  'px-3 py-1.5 rounded-full transition-all ' +
                  (lang === l
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-ink-700 hover:text-brand-700')
                }
                aria-pressed={lang === l}
              >
                {l === 'ru' ? 'RU' : 'KZ'}
              </button>
            ))}
          </div>

          <a
            href={waLink(PRIMARY_MANAGER.phoneIntl)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 btn-primary rounded-full px-4 py-2.5 text-sm font-semibold"
          >
            <MessageCircle className="size-4" strokeWidth={2.4} />
            WhatsApp
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-full border border-brand-600/15 bg-white/70"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-brand-600/10 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-5 py-3 flex flex-col">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-ink-700 border-b border-brand-600/10 last:border-0"
              >
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3">
              {(['ru', 'kk'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={
                    'flex-1 py-2 rounded-full text-xs font-semibold ' +
                    (lang === l ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700')
                  }
                >
                  {l === 'ru' ? 'Русский' : 'Қазақша'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
