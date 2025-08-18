'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, ArrowUp, Heart, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Web Development',
    'Frontend Development',
    'React.js Applications',
    'Next.js Projects',
    'Responsive Design',
    'UI/UX Implementation',
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Marcus02', icon: Github, color: 'hover:bg-gray-900 hover:text-white' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayan-khan-603373255', icon: Linkedin, color: 'hover:bg-blue-600 hover:text-white' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                AYAN{' '}
                <span className="text-gradient-primary">KHAN</span>
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                A passionate fresher learning web development, creating innovative digital solutions, 
                and always eager to learn new technologies. Ready to contribute to exciting projects!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+91 8643093934</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>ayan25005@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Arvind nagar, sarkanda Bilaspur, Chhattisgarh</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon group ${social.color} hover:shadow-glow`}
                  whileHover={{ y: -8, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div variants={itemVariants} className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024{' '}
                <span className="text-primary-400 font-medium">AYAN KHAN</span>
                . All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with <Heart className="w-3 h-3 inline text-red-400" /> and Next.js
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto group-hover:animate-bounce" />
      </motion.button>
    </footer>
  )
}
