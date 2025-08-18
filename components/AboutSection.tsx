'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Mail, Phone, MapPin, GraduationCap, Languages, Code, Award } from 'lucide-react'

export default function AboutSection() {
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

  const stats = [
    { label: 'Years Experience', value: 'Fresher', icon: Award },
    { label: 'Projects Completed', value: '3+', icon: Code },
    { label: 'CGPA', value: '7.4', icon: GraduationCap },
    { label: 'Technologies', value: '6+', icon: Code },
  ]

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-5 dark:opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="heading-primary mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know me better - my background, skills, and what drives me in the world of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile (left column, top) */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-card p-8 w-full max-w-xl mx-auto min-h-[18rem] md:min-h-[22rem] flex flex-col justify-between">
              <h3 className="heading-secondary mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                Profile
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am currently a fresher and learning web development. I come from a Computer Applications 
                background and consider myself a responsible and organized individual. I am looking forward 
                to applying my skills in real-world projects and gaining valuable experience by learning 
                from the IT industry.
              </p>
            </div>
          </motion.div>

          {/* Computer Skills (right column, top) */}
          <motion.div variants={itemVariants} className="flex items-start justify-center">
            <div className="glass-card p-8 w-full max-w-xl mx-auto">
              <h3 className="heading-secondary mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                Computer Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">HTML & CSS</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Basic</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">React.js</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Basic</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Next.js</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Basic</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">MS Office</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact (left column, second row) */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-card p-8 w-full max-w-xl mx-auto min-h-[18rem] md:min-h-[22rem] flex flex-col justify-center">
              <h3 className="heading-secondary mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                Contact Me
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span>+91 8643093934</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span>ayan25005@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span>Arvind nagar, sarkanda Bilaspur, Chhattisgarh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages (right column, second row) - placed in highlighted area */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <div className="glass-card p-8 w-full max-w-xl mx-auto min-h-[18rem] md:min-h-[22rem] flex flex-col justify-center">
              <h3 className="heading-secondary mb-6 flex items-center gap-3">
                <Languages className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="skill-badge">English</span>
                <span className="skill-badge">Hindi</span>
              </div>
            </div>
          </motion.div>

          {/* Skills and other lower content */}
          <motion.div variants={itemVariants} className="space-y-8 lg:col-span-2 flex justify-center">
            {/* Education Card (moved) */}
            <div className="glass-card p-8 w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <h3 className="heading-secondary mb-6 flex items-center gap-3 justify-center">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">IGNTU UNIVERSITY (Indira Gandhi National Tribal University)</h4>
                  <p className="text-gray-600 dark:text-gray-400">MCA (Master's In Computer Application)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">MCA 3rd SEM - 7.4 CGPA</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2023-2025</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

