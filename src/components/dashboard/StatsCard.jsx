import { motion } from "framer-motion"

function StatsCard({ title, value, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 
                 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 
                 hover:border-cyan-400/30 transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h2 className="text-3xl font-bold mt-2 text-white">{value}</h2>
        </div>
        <div className="text-3xl text-cyan-400">{icon}</div>
      </div>
    </motion.div>
  )
}

export default StatsCard