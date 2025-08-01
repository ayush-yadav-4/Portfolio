"use client"
import { motion } from "framer-motion"
import { ArrowDown, Download, Github, ExternalLink } from "lucide-react"
import Typewriter from "./changingtext"

const Herosection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ayush
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">Yadav</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2">Full-Stack Developer</p>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400">I'm a</span>
                <Typewriter />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              Passionate MERN Stack Developer with expertise in building scalable web applications. I focus on creating
              efficient, user-friendly solutions while continuously learning and growing in Data Structures and
              Algorithms.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <ExternalLink size={18} />
              </motion.button>

              <motion.button
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6 mt-8">
              {[Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image/Animation */}
          <motion.div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center" variants={itemVariants}>
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="text-white text-6xl font-bold">AY</div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                JS
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                React
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
        </motion.div>
      </div>
    </div>
  )
}

export default Herosection
