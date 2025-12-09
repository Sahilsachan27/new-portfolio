'use client'

import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { ResponsiveNavbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import LogoLoop from '@/components/LogoLoop'
import { ProjectFollowingPointer } from '@/components/ProjectFollowingPointer'
import GitHubInsights from '@/components/GitHubInsights'
import { motion } from 'framer-motion'
import {
  IconCode,
  IconDatabase,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandTypescript,
  IconBrandGit,
  IconDeviceDesktop,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconExternalLink,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconCertificate,
  IconCalendar,
  IconTrophy,
  IconApi,
  IconFlask,
  IconBrandRedux,
  IconChartBar,
  IconChartLine,
  IconTerminal,
  IconBrandNextjs,
  IconDatabase as IconPostgreSQL,
  IconBrandSocketIo,
  IconBrandDocker,
  IconBrandStripe,
  IconServer,
  IconWorldWww,
  IconBolt,
} from '@tabler/icons-react'
import { Highlighter } from '@/components/ui/highlighter'

export default function Home() {
  // Function to get tech icon and color
  const getTechIconAndColor = (tech) => {
    const techMap = {
      React: { icon: IconBrandReact, color: 'text-cyan-400' },
      'Next.js': { icon: IconBrandNextjs, color: 'text-white' },
      'Node.js': { icon: IconBrandNodejs, color: 'text-green-500' },
      JavaScript: { icon: IconBrandJavascript, color: 'text-yellow-400' },
      Python: { icon: IconBrandPython, color: 'text-blue-400' },
      'Tailwind CSS': { icon: IconBrandTailwind, color: 'text-cyan-400' },
      RapidAPI: { icon: IconApi, color: 'text-blue-400' },
      'Socket.io': { icon: IconBrandSocketIo, color: 'text-white' },
      Flask: { icon: IconFlask, color: 'text-gray-300' },
      Docker: { icon: IconBrandDocker, color: 'text-blue-400' },
      Express: { icon: IconServer, color: 'text-gray-300' },
      JWT: { icon: IconWorldWww, color: 'text-gray-400' },
      OpenAI: { icon: IconBolt, color: 'text-green-400' },
      'Framer Motion': { icon: IconBolt, color: 'text-pink-500' },
      Pandas: { icon: IconChartBar, color: 'text-blue-400' },
    }

    return techMap[tech] || { icon: IconCode, color: 'text-gray-400' }
  }

  const skills = [
    { name: 'Frontend Development', icon: IconBrandReact, level: 90 },
    { name: 'Backend Development', icon: IconBrandNodejs, level: 85 },
    { name: 'Database Management', icon: IconDatabase, level: 80 },
    { name: 'Python Programming', icon: IconBrandPython, level: 88 },
    { name: 'JavaScript', icon: IconBrandJavascript, level: 92 },
  ]

  const skillLogos = [
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-cyan-400/30 glow-box group hover:border-cyan-400/50 transition-all duration-300">
          <IconBrandReact
            className="text-cyan-400 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            React
          </span>
        </div>
      ),
      alt: 'React',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-green-500/30 glow-box group hover:border-green-500/50 transition-all duration-300">
          <IconBrandMongodb
            className="text-green-500 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            MongoDB
          </span>
        </div>
      ),
      alt: 'MongoDB',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandHtml5 className="text-orange-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            HTML
          </span>
        </div>
      ),
      alt: 'HTML',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandCss3 className="text-blue-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            CSS
          </span>
        </div>
      ),
      alt: 'CSS',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandTailwind className="text-teal-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Tailwind CSS
          </span>
        </div>
      ),
      alt: 'Tailwind CSS',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandNodejs className="text-green-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Node.js
          </span>
        </div>
      ),
      alt: 'Node.js',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-gray-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Express.js
          </span>
        </div>
      ),
      alt: 'Express.js',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconApi className="text-orange-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Postman
          </span>
        </div>
      ),
      alt: 'Postman',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandPython className="text-blue-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Python
          </span>
        </div>
      ),
      alt: 'Python',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconFlask className="text-gray-300" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Flask
          </span>
        </div>
      ),
      alt: 'Flask',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-yellow-400/30 glow-box group hover:border-yellow-400/50 transition-all duration-300">
          <IconBrandJavascript
            className="text-yellow-400 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            JavaScript
          </span>
        </div>
      ),
      alt: 'JavaScript',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandGithub className="text-white" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            GitHub
          </span>
        </div>
      ),
      alt: 'GitHub',
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandGit className="text-red-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Git
          </span>
        </div>
      ),
      alt: 'Git',
    },
  ]

  const projects = [
    {
      title: 'WorkWayFinder – Real-Time Employee Location Tracking System',
      description:
        '• Developed a web-based system to monitor employee movement across campus in real time. • Built using React.js, Node.js, and MySQL with secure role-based authentication for Admins and Employees. • Enhanced operational visibility and workforce efficiency through an interactive Leaflet/OSM-based live location dashboard.',
      image: '/workwayfinder.png', // <-- change to your actual screenshot file
      tech: ['React.js', 'Node.js', 'MySQL', 'Leaflet', 'Express'],
      github: 'https://github.com/Sahilsachan27', // <-- add correct repo link
      live: 'http://workwayfinder.tech', // <-- replace with your deployed link if any
    },

    {
      title: 'Friday AI – Virtual Assistant',
      description:
        '• Built a voice and chat-based AI assistant to automate daily computer and web tasks. • Powered by Python, Eel, and OpenRouter’s DeepSeek model with speech recognition and TTS integration. • Improved productivity by enabling seamless human–computer interaction through natural voice commands.',
      image: '/FridayAI.png', // Your existing asset
      tech: [
        'Python',
        'Eel',
        'SpeechRecognition',
        'OpenRouter API',
        'DeepSeek',
      ],
      github: 'https://github.com/Sahilsachan27/FridayAI', // <-- update if repo exists
      live: 'https://www.linkedin.com/posts/sahilsachan2303_python-ai-voiceassistant-activity-7317248824941436928-DkT2/',
    },

    {
      title: 'Portfolio Website',
      description:
        '• Created a modern, responsive personal portfolio showcasing skills, experience, and projects. • Designed with smooth UI/UX, optimized performance, and mobile-first layout.',
      image: '/portfolio.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
      github: 'https://github.com/Sahilsachan27',
      live: 'https://sahilsachansportfolio.netlify.app/',
    },

    {
      title: 'SahilCalc – Web Calculator',
      description:
        '• A responsive and fast web calculator built with HTML, CSS, and JavaScript. • Features clean UI, essential arithmetic operations, and mobile-friendly design.',
      image: '/cacl.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Sahilsachan27',
      live: 'https://sahilwebcalc.netlify.app/',
    },

    {
      title: 'Tic Tac Toe Game',
      description:
        '• Interactive two-player Tic Tac Toe game with clean UI and restart functionality. • Fully responsive and built for smooth gameplay.',
      image: '/tictaktoe.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Sahilsachan27',
      live: 'https://sahiltictaktoe.netlify.app/',
    },

    {
      title: 'TriClash – Rock Paper Scissors',
      description:
        '• Neon-themed, animated Rock-Paper-Scissors game built with JavaScript. • Features modern UI, smooth transitions, and engaging gameplay.',
      image: '/triclash.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Sahilsachan27',
      live: 'https://triclash.netlify.app/',
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Axis Institute of Higher Education, C.S.J.M.U. University',
      location: 'Uttar Pradesh, India',
      period: '2022 - Expected 2026',
      grade: 'CGPA: 8.76 / 10',
      icon: IconSchool,
      achievements: [
        'Maintaining strong academic performance throughout the program.',
        'Actively involved in software development and AI/ML-based projects.',
      ],
    },

    {
      degree: 'Class 12 (Intermediate) – Science Stream',
      institution: 'Kamad Shining Stars Academy',
      location: 'Uttar Pradesh, India',
      period: '2021 - 2022',
      grade: '78.33%',
      icon: IconCertificate,
      achievements: [
        'Focused on Computer Science and Mathematics.',
        'Scored consistently well in core science subjects.',
      ],
    },

    {
      degree: 'Class 10 (Secondary Education)',
      institution: 'Kamad Shining Stars Academy',
      location: 'Uttar Pradesh, India',
      period: '2019 - 2020',
      grade: '88.33%',
      icon: IconCertificate,
      achievements: [
        'Excellent academic performance with strong fundamentals.',
        'Actively participated in academic and extracurricular activities.',
      ],
    },
  ]

  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 relative overflow-hidden particles-container"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(247,147,30,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_70%)]" />

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500/30 rounded-full blur-sm float-animation"></div>
          <div
            className="absolute top-32 right-20 w-3 h-3 bg-orange-400/20 rounded-full blur-sm float-animation"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-1 h-1 bg-orange-600/40 rounded-full blur-sm float-animation"
            style={{ animationDelay: '3s' }}
          ></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  Passionate Full-Stack Developer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Final-year BCA student specializing in full-stack development
                  and AI-driven applications. Skilled in building scalable
                  systems using{' '}
                  <strong className="text-white font-bold">React</strong>,{' '}
                  <strong className="text-white font-bold">Node.js</strong>, and{' '}
                  <strong className="text-white font-bold">MySQL</strong>.
                  Passionate about problem-solving, clean architecture, and
                  currently exploring{' '}
                  <strong className="text-white font-bold">Agentic AI</strong>{' '}
                  to create intelligent and autonomous digital solutions.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  My expertise spans frontend development with{' '}
                  <strong className="text-white font-bold">React</strong> and{' '}
                  <strong className="text-white font-bold">Next.js</strong>,
                  backend engineering with{' '}
                  <strong className="text-white font-bold">Node.js</strong>, and
                  efficient data handling using{' '}
                  <strong className="text-white font-bold">MySQL</strong>. I
                  enjoy building real-world applications such as{' '}
                  <strong className="text-white font-bold">
                    WorkWayFinder
                  </strong>{' '}
                  — a live employee tracking system — and{' '}
                  <strong className="text-white font-bold">Friday AI</strong>,
                  my personal virtual assistant project.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMapPin size={20} />
                    <span>Kanpur, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMail size={20} />
                    <span>Available for hire</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {[
                  { number: '10+', label: 'Projects Completed' },
                  { number: '1+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                      {stat.number}
                    </h4>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Education
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                My{' '}
                <Highlighter action="underline" color="#FF9800">
                  academic journey
                </Highlighter>{' '}
                and continuous{' '}
                <Highlighter action="highlight" color="#87CEFA">
                  learning path
                </Highlighter>{' '}
                in technology
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Education Card */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 group"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl">
                          <edu.icon
                            size={28}
                            className="text-orange-400 sm:w-8 sm:h-8"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-orange-400 mt-2 lg:mt-0">
                              <IconCalendar size={18} />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                                {edu.institution}
                              </h4>
                              <span className="text-sm sm:text-base text-gray-400">
                                • {edu.location}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 px-4 py-2 rounded-full border border-orange-500/30">
                              <IconTrophy
                                size={16}
                                className="text-orange-400"
                              />
                              <span className="text-orange-300 font-medium">
                                {edu.grade}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-gray-300 font-medium mb-3">
                              Key Achievements:
                            </h5>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + i * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Connector */}
                  <div className="hidden lg:flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 border-4 border-orange-500 bg-black rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    {index < education.length - 1 && (
                      <motion.div
                        className="w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"
                        initial={{ height: 0 }}
                        whileInView={{ height: 128 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Skills
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Here are the{' '}
                <Highlighter action="underline" color="#FF9800">
                  technologies
                </Highlighter>{' '}
                and tools I work with to bring{' '}
                <Highlighter action="highlight" color="#87CEFA">
                  ideas to life
                </Highlighter>
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            {/* LogoLoop Skills Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos}
                  speed={40}
                  direction="left"
                  logoHeight={40}
                  gap={24}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-4"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos}
                  speed={60}
                  direction="left"
                  logoHeight={60}
                  gap={48}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-8"
                />
              </div>
            </motion.div>

            {/* Reverse Direction Skills Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={30}
                  direction="right"
                  logoHeight={35}
                  gap={20}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills reverse"
                  className="py-3 opacity-75"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={45}
                  direction="right"
                  logoHeight={50}
                  gap={40}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills reverse"
                  className="py-6 opacity-75"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interactive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Project Showcase
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
                Explore my{' '}
                <Highlighter action="underline" color="#FF9800">
                  portfolio projects
                </Highlighter>{' '}
                with interactive{' '}
                <Highlighter action="highlight" color="#87CEFA">
                  following pointer effects
                </Highlighter>
              </p>
              <p className="text-gray-400 text-sm">
                Hover over any card to experience the magic ✨
              </p>
            </motion.div>

            {/* Following Pointer Projects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ProjectFollowingPointer
                projects={projects}
                getTechIconAndColor={getTechIconAndColor}
              />
            </motion.div>
          </div>
        </section>

        {/* GitHub Insights Section */}
        <GitHubInsights />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Connect
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to bring your{' '}
                <Highlighter action="underline" color="#FF9800">
                  ideas to life
                </Highlighter>
                ? Let&apos;s discuss your{' '}
                <Highlighter action="highlight" color="#87CEFA">
                  next project
                </Highlighter>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMail
                          size={18}
                          className="text-orange-400 sm:w-5 sm:h-5"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          Email
                        </p>
                        <p className="text-orange-400 text-sm sm:text-base break-all">
                          sahilsachan755@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconPhone size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-orange-400">+91 93397 12883</p>
                      </div>
                    </div> */}

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMapPin size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-orange-400">
                          Kanpur, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/sahilsachan2303/"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg 
               border border-gray-600/30 hover:border-orange-500/50 
               transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandLinkedin size={24} className="text-orange-400" />
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/sahilsachan27"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg 
               border border-gray-600/30 hover:border-orange-500/50 
               transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandGithub size={24} className="text-orange-400" />
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/sahil_sachan2303/"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg 
               border border-gray-600/30 hover:border-orange-500/50 
               transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandInstagram size={24} className="text-orange-400" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-400">
              © 2025 Sahil Sachan. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
