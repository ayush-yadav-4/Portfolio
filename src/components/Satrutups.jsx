"use client"
import { motion } from "framer-motion"

const Startups = () => {
  const skills = [
    { name: "React.js", color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "Node.js", color: "from-green-400 to-green-600", icon: "🟢" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600", icon: "🟨" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700", icon: "🔷" },
    { name: "MongoDB", color: "from-green-500 to-green-700", icon: "🍃" },
    { name: "Next.js", color: "from-gray-700 to-gray-900", icon: "▲" },
    { name: "Python", color: "from-blue-400 to-yellow-400", icon: "🐍" },
    { name: "AWS", color: "from-orange-400 to-orange-600", icon: "☁️" },
  ]

  return (
    <div className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Startups
