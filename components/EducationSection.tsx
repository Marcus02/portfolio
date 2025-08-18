'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Users, Calendar, MapPin, Star, FileText } from 'lucide-react'

export default function EducationSection() {
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

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'IGNTU UNIVERSITY (Indira Gandhi National Tribal University)',
      period: '2023 - 2025',
      location: 'India',
      cgpa: '7.4',
      semester: '3rd SEM',
      description: 'Pursuing advanced studies in Computer Applications with focus on software development, database management, and web technologies.',
      achievements: [
        'Maintaining strong academic performance with 7.4 CGPA',
        'Studying core computer science concepts and modern technologies',
        'Learning practical development skills through projects',
        'Participating in academic and technical activities',
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
    },
  ]

  const certifications = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      issuer: 'Self-Learning',
      date: 'Present',
      description: 'Comprehensive understanding of HTML, CSS, JavaScript, and modern web development practices.',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 2,
      title: 'React.js Development',
      issuer: 'Project-Based Learning',
      date: 'Present',
      description: 'Practical experience building React applications including GeoProfiles with interactive maps.',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Next.js & Full-Stack',
      issuer: 'Advanced Project Development',
      date: 'Present',
      description: 'Building full-stack applications with Next.js, TypeScript, and modern backend technologies.',
      icon: Award,
      color: 'from-orange-500 to-red-500',
    },
  ]



  return (
    <section id="education" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-5 dark:opacity-10"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="heading-primary mb-4">Education & Learning</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning achievements in computer science and web development
          </p>
        </motion.div>

        {/* Education Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Main Education */}
          <motion.div variants={itemVariants}>
            <h3 className="heading-secondary mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass-card p-8 group hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {edu.featured && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium rounded-full mb-4">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {edu.degree}
                      </h4>
                      <h5 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {edu.institution}
                      </h5>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                          {edu.cgpa}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                          {edu.semester}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Current</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h6 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Achievements:</h6>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div variants={itemVariants}>
            <h3 className="heading-secondary mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              Certifications & Skills
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="glass-card p-6 group hover:shadow-lg transition-all duration-500"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>


      </motion.div>
    </section>
  )
}
