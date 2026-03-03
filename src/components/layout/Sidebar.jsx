import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const links = [
  { name: "Dashboard", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Analytics", path: "/analytics" },
  { name: "Profile", path: "/profile" },
]

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white/5 backdrop-blur-lg border-r border-white/10 p-6 fixed">
      <h1 className="text-2xl font-bold text-cyan-400 mb-10">
        LearnTrack
      </h1>

      <div className="space-y-4">
        {links.map((link, index) => (
          <NavLink key={index} to={link.path}>
            {({ isActive }) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20"
                    : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar