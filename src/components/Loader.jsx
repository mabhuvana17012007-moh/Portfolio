import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ rotate: { duration: 1.4, repeat: Infinity, ease: 'linear' } }}
              className="h-14 w-14 rounded-full border-4 border-maroon-300/30 border-t-maroon"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-sm tracking-[0.3em] text-cloud uppercase"
            >
              Bhuvaneswari M
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
