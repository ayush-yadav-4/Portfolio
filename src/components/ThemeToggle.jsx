"use client"
import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div initial={false} animate={{ rotate: isDark ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {isDark ? <Moon className="w-5 h-5 text-yellow-400" /> : <Sun className="w-5 h-5 text-yellow-500" />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
