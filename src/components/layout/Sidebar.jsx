import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const links = [
  { name: "Dashboard", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Analytics", path: "/analytics" },
  { name: "Profile", path: "/profile" },
]

function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 bg-slate-950/60 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 w-64 glass-strong p-6 z-40 border-r border-slate-200/10 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="text-2xl font-bold mb-10">
          <span className="gradient-text">LearnTrack</span>
        </h1>

        <div className="space-y-3">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={onClose}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-teal-500/20 text-teal-300 border border-teal-300/30"
                      : "text-slate-300 hover:bg-slate-700/40 hover:text-white border border-transparent"
                  }`}
                >
                  {link.name}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
