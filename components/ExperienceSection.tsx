'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Award, Users, Calendar, MapPin, TrendingUp, Lightbulb } from 'lucide-react'

export default function ExperienceSection() {
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

  const learningJourney = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      period: '2023 - Present',
      description: 'Learning core web technologies including HTML, CSS, JavaScript, and modern frameworks.',
      achievements: ['Mastered HTML & CSS fundamentals', 'Built responsive layouts with Tailwind CSS', 'Developed interactive web applications'],
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'React.js & Modern Frontend',
      period: '2023 - Present',
      description: 'Exploring React.js ecosystem and modern frontend development practices.',
      achievements: ['Built GeoProfiles with React.js', 'Integrated external APIs and Mapbox', 'Implemented responsive design patterns'],
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Full-Stack Development',
      period: '2024 - Present',
      description: 'Learning Next.js, TypeScript, and backend technologies for full-stack applications.',
      achievements: ['Developed ChatVerse AI chatbot', 'Built E-commerce platform', 'Integrated databases and payment systems'],
      icon: Award,
      color: 'from-green-500 to-emerald-500',
    },
  ]





  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 overflow-hidden">
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
          <h2 className="heading-primary mb-4">Learning Journey & Growth</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a fresher in web development, I'm on an exciting journey of continuous learning and skill development
          </p>
        </motion.div>


        {/* Learning Journey Timeline */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="heading-secondary text-center mb-12">My Learning Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-12">
              {learningJourney.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10`}></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-card p-6 group hover:shadow-xl transition-all duration-500">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>




      </motion.div>
    </section>
  )
}
