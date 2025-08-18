'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const [imgSrc, setImgSrc] = useState('/images/ayan.jpg')
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

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Marcus02', icon: Github, color: 'hover:bg-gray-900 hover:text-white' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayan-khan-603373255', icon: Linkedin, color: 'hover:bg-blue-600 hover:text-white' },
  ]

  const skills = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS']

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-5 dark:opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-10 md:space-y-12">
            {/* Animated Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                AYAN{' '}
                <span className="text-gradient-primary">KHAN</span>
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium">
                <span className="text-gradient-accent">Fresher</span> Learning{' '}
                <span className="text-gradient-primary">Web Development</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              I come from a Computer Applications background and consider myself a responsible and organized individual. 
              I am looking forward to applying my skills in real-world projects and gaining valuable experience by learning 
              from the IT industry.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4 md:pt-6">
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/Ayan_khan_CV.pdf.pdf"
                download="Ayan_Khan_CV.pdf"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon group ${social.color} hover:shadow-glow`}
                  whileHover={{ y: -5, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end lg:-translate-x-14 xl:-translate-x-24 2xl:-translate-x-32 lg:pr-12 xl:pr-20 2xl:pr-28"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={imgSrc}
                  alt="Ayan Khan"
                  fill
                  sizes="(min-width: 1024px) 20rem, 16rem"
                  className="object-contain"
                  style={{ objectPosition: 'center top' }}
                  unoptimized
                  onError={() => setImgSrc('/images/dp_male.svg')}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
              </motion.div>

              {/* Floating Skill Icons */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  animate="animate"
                  variants={{
                    animate: {
                      y: [0, -20, 0],
                      rotate: [0, 5, -5, 0],
                      transition: {
                        duration: 4,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    },
                  }}
                  className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-primary-200 dark:border-primary-800"
                  style={{
                    top: `${20 + (index * 15)}%`,
                    left: index % 2 === 0 ? '-20px' : 'auto',
                    right: index % 2 === 1 ? '-20px' : 'auto',
                  }}
                >
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 text-center leading-tight">
                    {skill}
                  </span>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

