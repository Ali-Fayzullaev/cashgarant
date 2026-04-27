import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import {
  Wallet,
  Home,
  Landmark,
  RefreshCw,
  Building2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = { Icon: LucideIcon; tKey: string; dKey: string }

const services: Service[] = [
  { Icon: Wallet,    tKey: 's1_t', dKey: 's1_d' },
  { Icon: Home,      tKey: 's2_t', dKey: 's2_d' },
  { Icon: Landmark,  tKey: 's3_t', dKey: 's3_d' },
  { Icon: RefreshCw, tKey: 's4_t', dKey: 's4_d' },
  { Icon: Building2, tKey: 's5_t', dKey: 's5_d' },
  { Icon: Sparkles,  tKey: 's6_t', dKey: 's6_d' },
]

export default function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-brand-50/60 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            {t('services_eyebrow')}
          </div>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900">
            {t('services_title')}
          </h2>
          <p className="mt-4 text-ink-500 text-base lg:text-lg">{t('services_subtitle')}</p>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map(({ Icon, tKey, dKey }, i) => (
            <motion.div
              key={tKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card-hover group relative rounded-2xl border border-brand-600/10 bg-white p-6 lg:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="grid place-items-center size-12 rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon className="size-6" strokeWidth={2.1} />
                </div>
                <ArrowUpRight
                  className="size-5 text-ink-300 group-hover:text-gold-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={2.2}
                />
              </div>

              <h3 className="mt-5 font-display text-lg lg:text-xl font-bold text-ink-900">
                {t(tKey as never)}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {t(dKey as never)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
