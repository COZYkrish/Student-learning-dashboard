import { motion } from "framer-motion"

function Achievements() {

  const badges = [
    "🚀 First Course",
    "🔥 7 Day Streak",
    "📚 10 Lessons",
    "🏆 Productivity Master"
  ]

  return (
    <motion.div
      className="bg-slate-900 p-6 rounded-2xl"
      whileHover={{ scale: 1.03 }}
    >

      <h2 className="text-xl font-semibold mb-4">
        🏆 Achievements
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {badges.map((badge,i)=>(
          <div
            key={i}
            className="bg-slate-800 p-3 rounded-lg text-center"
          >
            {badge}
          </div>
        ))}

      </div>

    </motion.div>
  )
}

export default Achievements