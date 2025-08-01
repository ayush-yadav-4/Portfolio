"use client"
import { motion } from "framer-motion"
import { Code, Database, Globe, Zap } from "lucide-react"

const Aboutus = () => {
  const skills = [
    { icon: Code, title: "Full Stack", subtitle: "Development", color: "from-blue-500 to-cyan-500" },
    { icon: Database, title: "Database", subtitle: "Management", color: "from-green-500 to-emerald-500" },
    { icon: Globe, title: "Web", subtitle: "Technologies", color: "from-purple-500 to-pink-500" },
    { icon: Zap, title: "Problem", subtitle: "Solving", color: "from-yellow-500 to-orange-500" },
  ]

  return (
    <div className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    About
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I'm a passionate Full Stack Developer specializing in MERN stack development. With a strong foundation in
              both frontend and backend technologies, I create robust and scalable web applications that deliver
              exceptional user experiences. I'm constantly learning and adapting to new technologies to stay at the
              forefront of web development.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon size={20} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{skill.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Aboutus
