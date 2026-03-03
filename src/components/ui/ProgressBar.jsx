import { motion } from "framer-motion"

function ProgressBar({ value }) {
  return (
    <div className="w-full bg-white/10 rounded-full h-3 mt-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className="h-3 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-400/40"
      />
    </div>
  )
}

export default ProgressBar