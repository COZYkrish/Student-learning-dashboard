import { motion } from "framer-motion"
import StatsCard from "../components/dashboard/StatsCard"
import AnalyticsChart from "../components/dashboard/AnalyticsChart"
import CourseCard from "../components/cards/CourseCard"
import useCountUp from "../hooks/useCountUp"

import { useContext } from "react"
import { CourseContext } from "../context/CourseContext"

function Dashboard() {

  const { courses } = useContext(CourseContext)

  const completed = useCountUp(8)
  const streak = useCountUp(15)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >

      {/* Page Title */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-wide">
          Dashboard 🚀
        </h1>

        <p className="text-gray-400 mt-2">
          Track your learning progress in real-time
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatsCard
          title="Total Courses"
          value={courses.length}
          icon="📚"
        />

        <StatsCard
          title="Completed"
          value={completed}
          icon="✅"
        />

        <StatsCard
          title="Current Streak"
          value={streak}
          icon="🔥"
        />

      </div>

      {/* Course Section */}
      <div className="mt-12">

        <h2 className="text-2xl font-semibold mb-6">
          Your Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </div>

      {/* Analytics Section */}
      <div className="mt-12">
        <AnalyticsChart />
      </div>

    </motion.div>
  )
}

export default Dashboard