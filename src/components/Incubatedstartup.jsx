"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"
import { motion } from "framer-motion"

import tripyeeImage from "../assets/tripyee.jpeg"
import cloudNavigatorImage from "../assets/cloud_navigator.png"
import urbanGoImage from "../assets/urban_go.jpeg"
import reelifyImage from "../assets/Reelify.png"

const projectData = [

  {
    id: 2,
    title: "Tripyee",
    category: "Travel Planning Platform",
    description:
      "An intelligent vacation planner that creates personalized travel itineraries. Built with Next.js and Node.js, it uses AI to analyze user preferences, budget, and interests to generate custom travel plans. Features include interactive maps, real-time weather updates, and integration with booking platforms.",
    imageUrl: tripyeeImage,
    skills: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "REST APIs", "AI Integration", "Maps API"],
  },
  {
    id: 3,
    title: "CloudNavigator",
    category: "AWS Automation Tool",
    description:
      "An innovative AI-powered tool that simplifies AWS service deployment. Built using Python and React, it features natural language processing to convert user requirements into AWS CloudFormation templates. Includes automated security best practices, cost optimization, and infrastructure monitoring.",
    imageUrl: cloudNavigatorImage,
    skills: ["Python", "React.js", "AWS", "NLP", "CloudFormation", "REST APIs", "Security"],
  },
  {
    id: 4,
    title: "Urban Go",
    category: "Ride Booking Platform",
    description:
      "Built a full‑stack  ride‑hailing platform enabling users to search, book, and track rides with live Google Maps integration across 50+ locations. Drivers receive instant ride requests and can accept or decline in real time, supporting seamless matches and optimized allocation. Implemented dynamic fare calculation and ETA updates, reducing simulated wait times by 40%.",
    imageUrl: urbanGoImage,
    skills: [ "Node.js", "Express.js", "React.js", "GSAP","Google Maps API","Socket.io"],
  },
  {
    id: 5,
    title: "Reelify",
    category: "Short-form Content Platform",
    description:
      "A modern short-form video platform inspired by Instagram Reels. Built with React and Node.js, featuring infinite scroll, user engagement metrics, content creation tools, and AI-powered content recommendations.",
    imageUrl: reelifyImage,
    skills: ["React.js", "Node.js", "MongoDB", "FFmpeg", "AI Recommendations", "Cloud Storage"],
  },
]

const Incubatedstartup = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Major{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              As a passionate MERN stack developer, I've built several projects that demonstrate my expertise in
              full-stack development. Each project showcases different aspects of my technical skills, from real-time
              communication to AI integration and cloud deployment.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">5+</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Major Projects</h3>
                  <p className="text-gray-600 dark:text-gray-400">Completed Successfully</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">20+</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Technologies</h3>
                  <p className="text-gray-600 dark:text-gray-400">Used Across Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Swiper */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="h-[450px] w-[300px] md:h-[550px] md:w-[400px]"
            >
              {projectData.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="h-40 mb-6 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center transition-colors duration-300">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="w-32 h-32 object-contain"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src =
                          "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4">
                    {project.category}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Incubatedstartup
