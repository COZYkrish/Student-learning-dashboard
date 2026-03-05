import { useState } from "react"
import { motion } from "framer-motion"

function DailyGoal() {

  const [goal,setGoal] = useState(5)
  const [completed,setCompleted] = useState(2)

  const percent = (completed/goal)*100

  return (
    <motion.div
      className="bg-slate-900 p-6 rounded-2xl"
      whileHover={{ scale: 1.03 }}
    >

      <h2 className="text-xl font-semibold mb-3">
        🎯 Daily Learning Goal
      </h2>

      <div className="w-full bg-slate-700 h-3 rounded-full">

        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{width:`${percent}%`}}
        />

      </div>

      <p className="mt-3 text-sm">
        {completed} / {goal} lessons completed
      </p>

    </motion.div>
  )
}

export default DailyGoal