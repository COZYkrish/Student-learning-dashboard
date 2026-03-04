import { motion } from "framer-motion"
import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import ParticlesBg from "../components/ui/ParticlesBg"

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-cyan-100 font-montserrat overflow-hidden">
      {/* Floating Particles Background */}
      <ParticlesBg />

      {/* Layout Content */}
      <Sidebar />
      <Navbar />

      {/* Main Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="ml-64 pt-16 p-8 relative z-10"
      >
        {children}
      </motion.div>

      {/* Soft Glow Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full -z-10 animate-pulse" />
    </div>
  )
}

export default MainLayout