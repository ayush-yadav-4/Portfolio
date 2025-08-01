"use client"
import { motion } from "framer-motion"

import tripyeeImage from "../assets/tripyee.jpeg"
import cloudNavigatorImage from "../assets/cloud_navigator.png"
import urbanGoImage from "../assets/urban_go.jpeg"
import zoomCloneImage from "../assets/zoom_clone.jpeg"
import reelifyImage from "../assets/Reelify.png"
import chatAppImage from "../assets/chat_app.jpeg"

const ThreeDCard = ({ title, date, description, image }) => {
  return (
    <motion.div
      className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.05, rotate: [0, 0, 2, -2, 0], transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10">
        <div className="h-32 flex items-center justify-center mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="max-h-full max-w-full object-contain p-2"
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            }}
          />
        </div>
        <div className="text-2xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300">
          {title}
        </div>
        <div className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4">
          {date}
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
          {description}
        </div>
      </div>
    </motion.div>
  )
}

const cards = [
  {
    title: "Tripyee",
    date: "AI Travel Planner",
    description:
      "A personalized vacation planner using AI to create custom travel itineraries. Built with Next.js and Node.js, it analyzes user preferences to generate tailored travel plans with interactive maps and real-time weather updates.",
    image: tripyeeImage,
  },
  {
    title: "CloudNavigator",
    date: "AWS Automation",
    description:
      "An AI-powered AWS service deployment tool using Python and React. Features natural language processing for converting requirements into CloudFormation templates, with automated security practices and cost optimization.",
    image: cloudNavigatorImage,
  },
  {
    title: "Urban Go",
    date: "Full-Stack Solution",
    description:
      "Built a full‑stack ride‑hailing platform enabling users to search, book, and track rides with live Google Maps integration across 50+ locations. Drivers receive instant ride requests and can accept or decline in real time, supporting seamless matches and optimized allocation. Implemented dynamic fare calculation and ETA updates, reducing simulated wait times by 40%.",
    image: urbanGoImage,
  },
  {
    title: "Zoom Clone",
    date: "Video Conferencing",
    description:
      "A real-time video conferencing application built with WebRTC and Socket.io. Features include video/audio calls, screen sharing, chat functionality, and room creation. Supports multiple participants with low latency communication.",
    image: zoomCloneImage,
  },
  {
    title: "Reelify",
    date: "Short-form Content Platform",
    description:
      "A modern short-form video platform inspired by Instagram Reels. Built with React and Node.js, featuring infinite scroll, user engagement metrics, content creation tools, and AI-powered content recommendations.",
    image: reelifyImage,
  },
  {
    title: "Chat Application",
    date: "Real-time Messaging",
    description:
      "A WhatsApp-inspired chat application built with MERN stack and Socket.io. Features include real-time messaging, user authentication, file sharing, and message encryption. Supports both individual and group chats with message status indicators.",
    image: chatAppImage,
  },
]

function Cards() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent projects demonstrating expertise in full-stack development, AI integration, and
            modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ThreeDCard title={card.title} date={card.date} description={card.description} image={card.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
