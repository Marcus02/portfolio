'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Database, Cloud, Smartphone, Globe, Zap, Cpu } from 'lucide-react'

export default function SkillsSection() {
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

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Palette,
      description: 'Creating beautiful and responsive user interfaces',
      skills: [
        { name: 'HTML & CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', level: 70, color: 'from-yellow-500 to-orange-500' },
        { name: 'React.js', level: 75, color: 'from-blue-500 to-cyan-500' },
        { name: 'Tailwind CSS', level: 80, color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', level: 65, color: 'from-gray-800 to-gray-600' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Software',
      icon: Cpu,
      description: 'Essential tools for development and productivity',
      skills: [
        { name: 'MS Office', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Git', level: 70, color: 'from-orange-600 to-red-600' },
        { name: 'VS Code', level: 80, color: 'from-blue-600 to-purple-600' },
        { name: 'Cursor AI', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'v0.dev', level: 70, color: 'from-indigo-500 to-purple-500' },
      ],
    },

  ]

  const technologies = [
    { name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '⚡', category: 'Full Stack' },
    { name: 'TypeScript', icon: '🔷', category: 'Language' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Git', icon: '📚', category: 'Version Control' },
    { name: 'Vercel', icon: '🚀', category: 'Deployment' },
    { name: 'Mapbox API', icon: '🗺️', category: 'External API' },
    { name: 'Gemini API', icon: '🤖', category: 'AI Integration' },
    { name: 'Razorpay', icon: '💳', category: 'Payment' },
    { name: 'shadcn/ui', icon: '🎭', category: 'UI Components' },
  ]

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-5 dark:opacity-10"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="heading-primary mb-6">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical skills and proficiency levels in various technologies and tools
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="glass-card p-8 lg:p-10 group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="heading-secondary mb-4">Technologies I Work With</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A comprehensive list of technologies, frameworks, and tools I use in my projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="glass-card p-6 text-center group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {tech.name}
                </h4>
                <span className="text-xs text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </motion.div>
    </section>
  )
}

