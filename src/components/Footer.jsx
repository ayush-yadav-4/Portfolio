"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"
import { Send, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Google Sheets integration
      const response = await fetch("https://script.google.com/macros/s/AKfycbzYourScriptIdHere/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      })

      setSubmitStatus("Message sent successfully!")
      setFormData({ email: "", message: "" })
    } catch (error) {
      setSubmitStatus("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(""), 3000)
    }
  }

  const socialLinks = [
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
    { icon: FaGithub, href: "#", color: "hover:text-gray-600" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
  ]

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const profileLinks = [
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "LeetCode", href: "#" },
    { name: "Instagram", href: "#" },
  ]

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                <Mail className="text-blue-400" size={20} />
                <a href="mailto:yadavais@gmail.com" className="hover:text-blue-400 transition-colors">
                  yadavais@gmail.com
                </a>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                <Phone className="text-green-400" size={20} />
                <span>+91 9188888</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                <MapPin className="text-red-400" size={20} />
                <span>India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Profile Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Profiles</h3>
            <ul className="space-y-3">
              {profileLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Message Me</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="email"
                name="email"
                placeholder="Your email..."
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
              {submitStatus && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-sm ${submitStatus.includes("Error") ? "text-red-400" : "text-green-400"}`}
                >
                  {submitStatus}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Ayush Yadav. All rights reserved.</p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
