import { motion } from "framer-motion"

function ProgressBar({ value }) {
  return (
    <div className="w-full bg-slate-700/60 rounded-full h-3 mt-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className="h-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-amber-400 shadow-lg shadow-cyan-400/30"
      />
    </div>
  )
}

export default ProgressBar
