
import { motion } from "framer-motion"

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 0 32px #0ff, 0 0 8px #6366f1" }}
      transition={{ type: "spring", stiffness: 180 }}
      className="bg-white/5 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-6 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
      style={{ boxShadow: "0 4px 32px 0 #0ff2, 0 1.5px 8px 0 #6366f1" }}
    >
      {children}
    </motion.div>
  )
}

export default Card