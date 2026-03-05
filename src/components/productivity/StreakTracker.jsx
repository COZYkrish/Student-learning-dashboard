import { motion } from "framer-motion"

function StreakTracker() {

  const streak = 5

  return (
    <motion.div
      className="bg-slate-900 p-6 rounded-2xl"
      whileHover={{ scale: 1.03 }}
    >

      <h2 className="text-xl font-semibold mb-3">
        🔥 Study Streak
      </h2>

      <p className="text-4xl font-bold text-orange-400">
        {streak} Days
      </p>

      <p className="text-sm text-gray-400 mt-2">
        Keep learning daily to grow your streak.
      </p>

    </motion.div>
  )
}

export default StreakTracker