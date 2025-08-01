"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Search } from "lucide-react"
import tripyeeImage from "../assets/tripyee.jpeg"
import cloudNavigatorImage from "../assets/cloud_navigator.png"
import urbanGoImage from "../assets/urban_go.jpeg"
import reelifyImage from "../assets/Reelify.png"
import zoomCloneImage from "../assets/zoom_clone.jpeg"
import chatAppImage from "../assets/chat_app.jpeg"
const Projects = () => {
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const projects = [
    {
      id: 1,
      title: "Chat Application",
      description:
        "A feature-rich chat application inspired by WhatsApp, built with the MERN stack. Features include real-time messaging using Socket.io, user authentication, message history, file sharing, and end-to-end message encryption. The app supports both individual and group chats with message status indicators.",
      image: chatAppImage,
      category: "Full Stack",
      techUsed: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT", "WebSockets"],
      liveLink: "https://chat-app-6jii.onrender.com/",
      githubLink: "https://github.com/ayush-yadav-4/Chat-App",
      featured: false,
    },
    {
      id: 2,
      title: "Tripyee - AI Travel Planner",
      description:
        "An intelligent vacation planner that creates personalized travel itineraries. Built with Next.js and Node.js, it uses AI to analyze user preferences, budget, and interests to generate custom travel plans. Features include interactive maps, real-time weather updates, and integration with booking platforms.",
      image: tripyeeImage,
      category: "AI/ML",
      techUsed: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "REST APIs", "AI Integration", "Maps API"],
      liveLink: "https://trippyee.vercel.app/",
      githubLink: "https://github.com/nikunjcodes/Trippyee",
      featured: true,
    },
    {
      id: 3,
      title: "CloudNavigator",
      description:
        "An innovative AI-powered tool that simplifies AWS service deployment. Built using Python and React, it features natural language processing to convert user requirements into AWS CloudFormation templates. Includes automated security best practices, cost optimization, and infrastructure monitoring.",
      image: cloudNavigatorImage,
      category: "Automation",
      techUsed: ["Python", "React.js", "AWS", "NLP", "CloudFormation", "REST APIs", "Security"],
      liveLink: "https://cloudnavigator-demo.com",
      githubLink: "https://github.com/ayush-yadav-4/AWS-Cloud-automation-ai-agent",
      featured: true,
    },
    {
      id: 4,
      title: "Zoom Clone",
      description:
        "A real-time video conferencing application built with WebRTC and Socket.io. Features include video/audio calls, screen sharing, chat functionality, and room creation. Supports multiple participants with low latency communication and includes features like mute/unmute, camera toggle, and recording capabilities.",
      image: zoomCloneImage,
      category: "Full Stack",
      techUsed: ["WebRTC", "Socket.io", "Node.js", "Express.js", "React.js", "Real-time Communication"],
      liveLink: "https://zoom-clone-demo.com",
      githubLink: "https://github.com/username/zoom-clone",
      featured: false,
    },
    {
      id: 5,
      title: "Reelify",
      description:
        "A modern short-form video platform inspired by Instagram Reels. Built with React and Node.js, featuring infinite scroll, user engagement metrics, content creation tools, and AI-powered content recommendations. Includes video editing capabilities and social features.",
      image: reelifyImage,
      category: "Social Media",
      techUsed: ["React.js", "Node.js", "MongoDB", "FFmpeg", "AI Recommendations", "Cloud Storage"],
      liveLink: "http://reelify-silk.vercel.app/",
      githubLink: "https://github.com/ayush-yadav-4/reelify",
      featured: false,
    },
    {
      id: 6,
      title: "Urban Go",
      description:
        "Built a full‑stack  ride‑hailing platform enabling users to search, book, and track rides with live Google Maps integration across 50+ locations. Drivers receive instant ride requests and can accept or decline in real time, supporting seamless matches and optimized allocation. Implemented dynamic fare calculation and ETA updates, reducing simulated wait times by 40%.",
      image: urbanGoImage,
      category: "Platforms",
      techUsed: ["React.js", "Node.js", "MongoDB", "GSAP", "Google Maps API", "Socket.io"],
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/ayush-yadav-4/Urban-Go",
      featured: true,
    },
  ]

  const categories = ["All", "Full Stack", "Automation", "Social Media", "Platforms"]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techUsed.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, AI integration, and modern web
            technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=256&width=400"
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{project.category}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techUsed.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techUsed.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        +{project.techUsed.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Filters and Search */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=192&width=300"
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{project.category}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techUsed.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techUsed.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{project.techUsed.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-xl text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
