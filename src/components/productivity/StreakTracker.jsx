import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const streakStorageKey = "learntrack-streak"

function StreakTracker() {
  const [streak, setStreak] = useState(1)

  useEffect(() => {
    const saved = localStorage.getItem(streakStorageKey)
    const today = new Date().toDateString()

    if (!saved) {
      localStorage.setItem(streakStorageKey, JSON.stringify({ streak: 1, lastVisit: today }))
      setStreak(1)
      return
    }

    const parsed = JSON.parse(saved)
    const lastVisit = new Date(parsed.lastVisit)
    const now = new Date(today)
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24))

    let nextStreak = parsed.streak || 1

    if (diffDays === 1) {
      nextStreak += 1
    } else if (diffDays > 1) {
      nextStreak = 1
    }

    localStorage.setItem(streakStorageKey, JSON.stringify({ streak: nextStreak, lastVisit: today }))
    setStreak(nextStreak)
  }, [])

  return (
    <motion.div className="glass-panel p-6 rounded-2xl" whileHover={{ y: -3 }}>
      <h2 className="text-xl font-semibold mb-3">Study Streak</h2>

      <p className="text-4xl font-bold text-amber-300">{streak} days</p>

      <p className="text-sm text-slate-400 mt-2">
        Open the app daily to keep your streak active.
      </p>
    </motion.div>
  )
}

export default StreakTracker
