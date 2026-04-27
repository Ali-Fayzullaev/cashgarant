import { motion } from 'framer-motion'
import { useI18n, waLink } from '../i18n'
import { MANAGERS } from '../data'
import { MessageCircle, Phone, User } from 'lucide-react'

export default function Managers() {
  const { t } = useI18n()

  return (
    <section id="managers" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-brand-50/60 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            {t('mgr_eyebrow')}
          </div>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900">
            {t('mgr_title')}
          </h2>
          <p className="mt-4 text-ink-500 text-base lg:text-lg">{t('mgr_subtitle')}</p>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {MANAGERS.map((m, i) => (
            <motion.a
              key={m.phoneIntl}
              href={waLink(m.phoneIntl)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card-hover group relative rounded-2xl border border-brand-600/10 bg-white p-6 lg:p-7 flex flex-col"
            >
              <div className="flex items-center gap-4">
                <div className="grid place-items-center size-14 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-700/20">
                  <User className="size-6" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
                    {t('mgr_role')}
                  </div>
                  <div className="font-display text-xl font-bold text-ink-900">{m.name}</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {m.langs.map((l) => (
                  <span
                    key={l}
                    className="rounded-full bg-gold-400/20 text-brand-800 border border-gold-500/30 text-[11px] font-semibold px-2.5 py-1"
                  >
                    {l === 'kk' ? t('mgr_lang_kk') : t('mgr_lang_ru')}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-ink-700">
                <Phone className="size-4 text-brand-700" strokeWidth={2.4} />
                <span className="font-semibold tracking-wide">{m.phoneDisplay}</span>
              </div>

              <div className="mt-6 inline-flex items-center justify-center gap-2 btn-primary rounded-full px-4 py-3 text-sm font-semibold">
                <MessageCircle className="size-4" strokeWidth={2.4} />
                {t('mgr_write')} · WhatsApp
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
