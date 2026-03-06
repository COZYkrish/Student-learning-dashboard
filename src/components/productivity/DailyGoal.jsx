import { useState } from "react"
import { motion } from "framer-motion"

function DailyGoal() {
  const [goal, setGoal] = useState(5)
  const [completed, setCompleted] = useState(2)

  const percent = Math.min((completed / goal) * 100, 100)

  return (
    <motion.div className="glass-panel p-6 rounded-2xl" whileHover={{ y: -3 }}>
      <h2 className="text-xl font-semibold mb-3">Daily Learning Goal</h2>

      <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
        <div className="bg-gradient-to-r from-sky-400 to-teal-400 h-3 rounded-full" style={{ width: `${percent}%` }} />
      </div>

      <p className="mt-3 text-sm text-slate-300">
        {completed} / {goal} lessons completed
      </p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm"
          onClick={() => setGoal((prev) => Math.max(1, prev - 1))}
        >
          Goal-
        </button>
        <button
          type="button"
          className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm"
          onClick={() => setGoal((prev) => prev + 1)}
        >
          Goal+
        </button>
        <button
          type="button"
          className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-sm"
          onClick={() => setCompleted((prev) => Math.min(goal, prev + 1))}
        >
          Add Lesson
        </button>
      </div>
    </motion.div>
  )
}

export default DailyGoal
