import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { Zap, TrendingUp, ShieldCheck, HeadphonesIcon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const items: { Icon: LucideIcon; tKey: string; dKey: string }[] = [
  { Icon: Zap,            tKey: 'adv_1_t', dKey: 'adv_1_d' },
  { Icon: TrendingUp,     tKey: 'adv_2_t', dKey: 'adv_2_d' },
  { Icon: ShieldCheck,    tKey: 'adv_3_t', dKey: 'adv_3_d' },
  { Icon: HeadphonesIcon, tKey: 'adv_4_t', dKey: 'adv_4_d' },
]

export default function Advantages() {
  const { t } = useI18n()

  return (
    <section id="advantages" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-600/10 bg-gradient-to-br from-brand-700 via-brand-700 to-brand-800 text-white p-8 lg:p-14">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-gold-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-brand-400/25 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-gold-300">
                {t('adv_eyebrow')}
              </div>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05]">
                {t('adv_title')}
              </h2>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
              {items.map(({ Icon, tKey, dKey }, i) => (
                <motion.div
                  key={tKey}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl bg-white/8 border border-white/12 backdrop-blur-sm p-5 lg:p-6 hover:bg-white/12 transition-colors"
                >
                  <div className="grid place-items-center size-11 rounded-xl bg-gold-500 text-brand-800">
                    <Icon className="size-5" strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{t(tKey as never)}</h3>
                  <p className="mt-1.5 text-sm text-white/75 leading-relaxed">
                    {t(dKey as never)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
