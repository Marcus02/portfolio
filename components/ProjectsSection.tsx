'use client'

import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Globe, Database, Smartphone, Palette } from 'lucide-react'
import { useState, useMemo, useCallback } from 'react'

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  })

  const [activeCategory, setActiveCategory] = useState('all')

  // Memoize projects data for better performance
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'GeoProfiles',
      description: 'Developed a React.js web app to display user profiles with interactive maps using Mapbox and external API integration. Used Cursor AI and Bolt AI for efficient development.',
      image: '/images/Screenshot 2025-08-11 160129.png',
      category: 'web',
      tech: ['React.js', 'Tailwind CSS', 'Mapbox API', 'Vite', 'REST API', 'Bolt AI', 'Cursor'],
      liveLink: 'https://project-seven-eosin-21.vercel.app/',
      githubLink: '#',
      features: ['Interactive Maps', 'User Profiles', 'API Integration', 'Responsive Design'],
      icon: Globe,
    },
    {
      id: 2,
      title: 'ChatVerse AI',
      description: 'Developed a modern AI chatbot using Next.js and TypeScript, integrated with the Gemini API for real-time conversational responses. Designed a sleek and responsive UI using shadcn/ui and Tailwind CSS.',
      image: '/images/Screenshot 2025-08-11 155508.png',
      category: 'ai',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Gemini API', 'v0.dev', 'Cursor', 'Vercel'],
      liveLink: 'https://chatbot-two-smoky-16.vercel.app/',
      githubLink: '#',
      features: ['AI Chatbot', 'Real-time Responses', 'Modern UI', 'TypeScript', 'Responsive Design'],
      icon: Smartphone,
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Developed a full-stack ecommerce website with product management, user authentication, and secure payment processing. Built an admin dashboard with real-time analytics, integrated Razorpay for payments, and created a modern UI with glass morphism effects.',
      image: '/images/Screenshot 2025-08-11 152831.png',
      category: 'fullstack',
      tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'NextAuth.js', 'Razorpay API', 'Tailwind CSS', 'Radix UI', 'Vercel', 'Cursor', 'Bolt AI'],
      liveLink: 'https://ecommerce-lemon-eta.vercel.app/',
      githubLink: '#',
      features: ['Full-stack', 'User Authentication', 'Payment Processing', 'Admin Dashboard', 'Real-time Analytics', 'Glass Morphism'],
      icon: Database,
    },
  ], [])

  // Memoize categories for better performance
  const categories = useMemo(() => [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', label: 'AI Projects', count: projects.filter(p => p.category === 'ai').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  ], [projects])

  // Memoize filtered projects for better performance
  const filteredProjects = useMemo(() => 
    activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory),
    [activeCategory, projects]
  )

  // Optimize category change handler
  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId)
  }, [])

  // Optimized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
  }), [])

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 overflow-hidden">
        {/* Background decoration with reduced motion support */}
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
            <h2 className="heading-primary mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my latest work showcasing modern web development, AI integration, and full-stack solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card group p-6"
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  {project.image && project.image !== '/images/project-card.svg' ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4 relative z-10">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105 cursor-pointer pointer-events-auto"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 pointer-events-auto"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </motion.div>
      </section>
    </LazyMotion>
  )
}
