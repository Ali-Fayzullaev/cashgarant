import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import {
  Wallet,
  Home,
  Landmark,
  RefreshCw,
  Building2,
  SlidersHorizontal,
  ArrowUpRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Tone = 'green' | 'gold' | 'mix'
type Service = { Icon: LucideIcon; tKey: string; dKey: string; tone: Tone }

const services: Service[] = [
  { Icon: Wallet,             tKey: 's1_t', dKey: 's1_d', tone: 'green' },
  { Icon: Home,               tKey: 's2_t', dKey: 's2_d', tone: 'gold'  },
  { Icon: Landmark,           tKey: 's3_t', dKey: 's3_d', tone: 'green' },
  { Icon: RefreshCw,          tKey: 's4_t', dKey: 's4_d', tone: 'mix'   },
  { Icon: Building2,          tKey: 's5_t', dKey: 's5_d', tone: 'gold'  },
  { Icon: SlidersHorizontal,  tKey: 's6_t', dKey: 's6_d', tone: 'green' },
]

const iconBg: Record<Tone, string> = {
  green: 'linear-gradient(145deg, #0a3a1f 0%, #115E32 55%, #1f7a44 100%)',
  gold:  'linear-gradient(145deg, #7c5a00 0%, #c08800 50%, #f9b800 100%)',
  mix:   'linear-gradient(145deg, #0e4d29 0%, #115E32 45%, #c08800 80%, #f9b800 100%)',
}

const iconShadow: Record<Tone, string> = {
  green: '0 12px 28px -8px rgba(17,94,50,0.50)',
  gold:  '0 12px 28px -8px rgba(180,120,0,0.45)',
  mix:   '0 12px 28px -8px rgba(17,94,50,0.40)',
}

const iconColor: Record<Tone, string> = {
  green: '#a8e6bc',
  gold:  '#fff3b0',
  mix:   '#ffd766',
}

function ServiceCard({ Icon, tKey, dKey, tone, index }: Service & { index: number }) {
  const { t } = useI18n()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.055 }}
      className="card-hover group relative flex flex-col rounded-2xl bg-white p-6 lg:p-7"
      style={{
        boxShadow: '0 2px 16px -8px rgba(11,26,18,0.10), 0 0 0 1px rgba(17,94,50,0.08)',
      }}
    >
      <div className="flex items-start justify-between">
        {/* Icon bubble */}
        <div
          className="relative grid place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
          style={{
            width: 60,
            height: 60,
            background: iconBg[tone],
            boxShadow: iconShadow[tone],
          }}
        >
          {/* Gloss highlight */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                'radial-gradient(70% 60% at 28% 18%, rgba(255,255,255,0.28) 0%, transparent 65%)',
            }}
          />
          <Icon
            className="relative z-10"
            style={{ width: 26, height: 26, color: iconColor[tone] }}
            strokeWidth={1.8}
          />
        </div>

        {/* Arrow */}
        <div className="grid place-items-center size-8 rounded-full border border-brand-600/15 text-ink-300 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-colors">
          <ArrowUpRight className="size-4" strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="mt-5 font-display text-lg lg:text-xl font-bold text-ink-900 leading-snug">
        {t(tKey as never)}
      </h3>
      <p className="mt-2 text-sm text-ink-500 leading-relaxed">
        {t(dKey as never)}
      </p>
    </motion.div>
  )
}

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
          {services.map((s, i) => (
            <ServiceCard key={s.tKey} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
