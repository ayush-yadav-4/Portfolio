import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Aboutus from "./components/Aboutus"
import Scrolltext from "./components/Scrolltext"
import Cards from "./components/Cards"
import WhatWeDo from "./components/Whatwedo"
import Incubatedstartup from "./components/Incubatedstartup"
import Startups from "./components/Satrutups"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <Aboutus />
                <Scrolltext />
                <WhatWeDo />
                <Cards />
                <Incubatedstartup />
                <Startups />
                <Footer />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
