import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  isDark?: boolean
  hasGradient?: boolean
}

const Section: FC<SectionProps> = ({ 
  children, 
  className = '', 
  isDark = true, 
  hasGradient = false 
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-20 md:py-32 px-4 md:px-6 lg:px-8 ${
        isDark 
          ? 'bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900' 
          : 'bg-gradient-to-br from-navy-50 to-navy-100'
      } ${
        hasGradient 
          ? 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/5 before:to-transparent before:pointer-events-none' 
          : ''
      } ${className}`}
    >
      {hasGradient && <div className="relative z-10">{children}</div>}
      {!hasGradient && children}
    </motion.section>
  )
}

export default Section
