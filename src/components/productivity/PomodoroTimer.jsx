import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function PomodoroTimer() {

  const [time, setTime] = useState(1500)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime(prev => prev - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [running, time])

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

        <button
          onClick={() => setRunning(!running)}
          className="bg-green-500 px-4 py-2 rounded-lg"
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => setTime(1500)}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          Reset
        </button>

      </div>
    </motion.div>
  )
}

export default PomodoroTimer