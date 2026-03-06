import { motion } from "framer-motion"
import { useContext, useMemo } from "react"
import { CourseContext } from "../../context/CourseContext"

function Achievements() {
  const { courses } = useContext(CourseContext)

  const badges = useMemo(() => {
    const results = []

    if (courses.length >= 1) results.push("Started Learning")
    if (courses.length >= 3) results.push("3 Course Explorer")

    const completedCourses = courses.filter((course) => course.progress === 100).length
    if (completedCourses >= 1) results.push("First Completion")

    const totalCompletedLessons = courses.reduce((sum, course) => sum + course.completed, 0)
    if (totalCompletedLessons >= 20) results.push("20 Lessons Done")

    if (!results.length) results.push("No badges yet")

    return results
  }, [courses])

  return (
    <motion.div className="glass-panel p-6 rounded-2xl" whileHover={{ y: -3 }}>
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>

      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge) => (
          <div key={badge} className="bg-slate-800/70 border border-slate-700 p-3 rounded-lg text-center text-sm">
            {badge}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Achievements
