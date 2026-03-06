import { motion } from "framer-motion"
import { useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import ParticlesBg from "../components/ui/ParticlesBg"

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative min-h-screen text-slate-100 overflow-hidden">
      <ParticlesBg />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onToggleMenu={() => setSidebarOpen((prev) => !prev)} />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-20 px-4 pb-8 md:px-8 md:pb-10 md:ml-64 relative z-10"
      >
        {children}
      </motion.div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300/20 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 blur-3xl rounded-full -z-10 animate-pulse" />
    </div>
  )
}

export default MainLayout
