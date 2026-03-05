import { useState } from "react"
import { motion } from "framer-motion"

function PomodoroTimer() {

  const [time, setTime] = useState(25 * 60)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <motion.div
      className="bg-slate-900 p-6 rounded-2xl shadow-lg"
      whileHover={{ scale: 1.03 }}
    >
      <h2 className="text-xl font-semibold mb-4">
        ⏱ Pomodoro Study Timer
      </h2>

      <div className="text-4xl font-bold text-center mb-4">
        {minutes}:{seconds.toString().padStart(2,"0")}
      </div>

      <div className="flex gap-3 justify-center">
        <button className="bg-blue-500 px-4 py-2 rounded-lg">
          Start
        </button>

        <button className="bg-red-500 px-4 py-2 rounded-lg">
          Reset
        </button>
      </div>
    </motion.div>
  )
}

export default PomodoroTimer