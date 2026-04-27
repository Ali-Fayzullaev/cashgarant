import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useI18n, waLink } from '../i18n'
import { PRIMARY_MANAGER } from '../data'

export default function WhatsAppFab() {
  const { t } = useI18n()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink(PRIMARY_MANAGER.phoneIntl)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('cta_whatsapp')}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold btn-primary shadow-2xl shadow-brand-900/30"
        >
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-gold-400/60 animate-ping" />
            <MessageCircle className="relative size-5" strokeWidth={2.4} />
          </span>
          <span className="hidden sm:inline">{t('cta_whatsapp')}</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
