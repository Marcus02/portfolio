'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ChevronUp } from 'lucide-react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import Footer from './Footer'

export default function ClientLayout() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    setDarkMode(false)
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent-200/20 dark:bg-accent-800/20 rounded-full blur-3xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-primary-300/20 dark:bg-primary-700/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-accent-300/20 dark:bg-accent-700/20 rounded-full blur-3xl animate-float animation-delay-3000"></div>
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 w-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-dark-700/50 shadow-lg"
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-gradient cursor-pointer">
              Ayan Khan
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  className="nav-link relative py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 hover:shadow-glow"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <Sun className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <Moon className="w-5 h-5 text-blue-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-gray-200/50 dark:border-dark-700/50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl"
            >
              <div className="container-custom px-4 sm:px-6 lg:px-8 py-4">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={itemVariants}
                      onClick={() => setMobileMenuOpen(false)}
                      className="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800"
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
      </main>

      <Footer />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="back-to-top z-40"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}



