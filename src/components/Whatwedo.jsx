"use client"
import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react"

const WhatWeDo = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Frontend Technologies",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "AWS"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      skills: ["Data Structures", "Algorithms", "System Design", "Debugging"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <div id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Currently focusing on Data Structures and Algorithms to enhance problem-solving skills and create more
            efficient solutions while building modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <category.icon className="text-white" size={28} />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">{category.title}</h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + skillIndex * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
