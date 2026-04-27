import { motion } from 'framer-motion'
import { useI18n, waLink } from '../i18n'
import { PRIMARY_MANAGER } from '../data'
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, BadgePercent } from 'lucide-react'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="top" className="relative overflow-hidden bg-radial-brand">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-10 lg:pt-14 pb-14 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-brand-700"
            >
              <Sparkles className="size-3.5 text-gold-500" strokeWidth={2.6} />
              {t('hero_eyebrow')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[54px] lg:text-[68px] font-extrabold text-ink-900"
            >
              {t('hero_title_1')}{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-br from-brand-700 to-brand-500 bg-clip-text text-transparent">
                  {t('hero_title_2')}
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gold-400/60 rounded-full -z-0" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 max-w-xl text-base lg:text-lg text-ink-700 leading-relaxed"
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href={waLink(PRIMARY_MANAGER.phoneIntl)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                <MessageCircle className="size-4" strokeWidth={2.4} />
                {t('cta_whatsapp')}
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-brand-700 border border-brand-600/20 bg-white/60 backdrop-blur hover:bg-white transition-colors"
              >
                {t('nav_services')}
                <ArrowRight className="size-4" strokeWidth={2.4} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-10 grid grid-cols-3 gap-3 lg:gap-5 max-w-xl"
            >
              {[
                { v: t('hero_stat_1_v'), l: t('hero_stat_1_l') },
                { v: t('hero_stat_2_v'), l: t('hero_stat_2_l') },
                { v: t('hero_stat_3_v'), l: t('hero_stat_3_l') },
              ].map((s, i) => (
                <div key={i} className="glass rounded-2xl p-4">
                  <div className="font-display text-xl lg:text-2xl font-bold text-brand-700">
                    {s.v}
                  </div>
                  <div className="text-xs text-ink-500 mt-1 leading-snug">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Card stack */}
              <div className="relative aspect-[5/6]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-700 to-brand-500 shadow-2xl shadow-brand-900/20 rotate-[-4deg] translate-x-3" />
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold-400 to-gold-500 shadow-2xl shadow-gold-700/20 rotate-[3deg] -translate-x-2" />
                <div className="absolute inset-0 rounded-[2rem] bg-white shadow-2xl shadow-brand-900/15 border border-brand-600/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,rgba(249,184,0,0.18),transparent_60%),radial-gradient(80%_60%_at_0%_100%,rgba(17,94,50,0.16),transparent_60%)]" />
                  <div className="relative h-full flex flex-col p-7">
                    <div className="flex items-center gap-3">
                      <img src="/logo.png" alt="" className="size-12 object-contain" />
                      <div>
                        <div className="font-display font-bold text-brand-700 text-lg leading-none">
                          Cash <span className="text-gold-600">Garant</span>
                        </div>
                        <div className="text-[11px] text-ink-500 mt-1">Темиртау · Теміртау</div>
                      </div>
                    </div>

                    <div className="mt-7 space-y-3">
                      {[
                        { Icon: BadgePercent, text: t('s4_t') },
                        { Icon: ShieldCheck, text: t('s1_t') },
                        { Icon: Sparkles, text: t('s2_t') },
                      ].map(({ Icon, text }, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-xl border border-brand-600/10 bg-paper px-4 py-3"
                        >
                          <div className="grid place-items-center size-9 rounded-lg bg-brand-50 text-brand-700">
                            <Icon className="size-4.5" strokeWidth={2.2} />
                          </div>
                          <div className="text-sm font-semibold text-ink-900">{text}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 flex items-end justify-between">
                      <div>
                        <div className="text-[11px] text-ink-500">
                          {t('hero_stat_1_l')}
                        </div>
                        <div className="font-display text-2xl font-bold text-brand-700">
                          {t('hero_stat_1_v')}
                        </div>
                      </div>
                      <div className="size-12 rounded-full bg-gold-400 grid place-items-center shadow-lg shadow-gold-500/30">
                        <ArrowRight className="size-5 text-brand-800" strokeWidth={2.6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
