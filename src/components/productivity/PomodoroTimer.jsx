import { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"

const modes = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
}

function PomodoroTimer() {
  const [mode, setMode] = useState("focus")
  const [time, setTime] = useState(modes.focus)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [running, time])

  useEffect(() => {
    if (time === 0) {
      setRunning(false)
    }
  }, [time])

  const selectMode = (nextMode) => {
    setMode(nextMode)
    setTime(modes[nextMode])
    setRunning(false)
  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const progress = useMemo(
    () => ((modes[mode] - time) / modes[mode]) * 100,
    [mode, time]
  )

  return (
    <motion.div className="glass-panel p-6 rounded-2xl" whileHover={{ y: -3 }}>
      <h2 className="text-xl font-semibold mb-4">Pomodoro Timer</h2>

      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => selectMode("focus")}
          className={`px-3 py-1.5 rounded-lg text-sm ${mode === "focus" ? "bg-teal-500 text-slate-950" : "bg-slate-700 text-slate-200"}`}
        >
          Focus
        </button>
        <button
          onClick={() => selectMode("shortBreak")}
          className={`px-3 py-1.5 rounded-lg text-sm ${mode === "shortBreak" ? "bg-teal-500 text-slate-950" : "bg-slate-700 text-slate-200"}`}
        >
          Short Break
        </button>
        <button
          onClick={() => selectMode("longBreak")}
          className={`px-3 py-1.5 rounded-lg text-sm ${mode === "longBreak" ? "bg-teal-500 text-slate-950" : "bg-slate-700 text-slate-200"}`}
        >
          Long Break
        </button>
      </div>

      <div className="text-4xl font-bold text-center mb-4">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>

      <div className="w-full h-2 rounded-full bg-slate-700/70 mb-4 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-teal-400 to-cyan-400" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setRunning((prev) => !prev)}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg font-medium"
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => setTime(modes[mode])}
          className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </motion.div>
  )
}

export default PomodoroTimer
