
import { motion } from "framer-motion"

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-teal-300/40"
    >
      {children}
    </motion.div>
  )
}

export default Card
