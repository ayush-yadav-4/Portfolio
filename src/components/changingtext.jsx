"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const texts = ["Developer", "Problem Solver", "Programmer", "Creator"]

const Typewriter = () => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index]
      setText((prevText) => {
        if (!deleting) {
          return currentText.slice(0, prevText.length + 1)
        } else {
          return prevText.slice(0, -1)
        }
      })

      if (!deleting && text === currentText) {
        setTimeout(() => setDeleting(true), 1500)
      } else if (deleting && text === "") {
        setDeleting(false)
        setIndex((prevIndex) => (prevIndex + 1) % texts.length)
      }
    }

    const typingSpeed = deleting ? 100 : 150
    const timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return (
    <motion.span
      className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {text}
      <motion.span
        className="text-yellow-500"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      >
        |
      </motion.span>
    </motion.span>
  )
}

export default Typewriter
