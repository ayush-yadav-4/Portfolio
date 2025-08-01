"use client"
import { motion } from "framer-motion"

const Scrolltext = () => {
  const skills = [
    "MERN STACK",
    "REACT.JS",
    "NODE.JS",
    "NEXT.JS",
    "EXPRESS.JS",
    "MONGODB",
    "MYSQL",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "TAILWIND CSS",
    "PYTHON",
    "JAVA",
    "C++",
    "DSA",
    "PROBLEM SOLVING",
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.span
            key={index}
            className="mx-8 text-2xl md:text-3xl font-bold text-white/90 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-600 to-transparent pointer-events-none"></div>
    </div>
  )
}

export default Scrolltext
