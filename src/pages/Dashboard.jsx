import { motion } from "framer-motion"
import { useContext, useState } from "react"

import StatsCard from "../components/dashboard/StatsCard"
import AnalyticsChart from "../components/dashboard/AnalyticsChart"
import CourseCard from "../components/ui/CourseCard"
import AddCourseModal from "../components/modals/AddCourseModal"

import useCountUp from "../hooks/useCountUp"
import { CourseContext } from "../context/CourseContext"
import PomodoroTimer from "../components/productivity/PomodoroTimer"
function Dashboard() {

  const { courses } = useContext(CourseContext)

  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState("")

  const completed = useCountUp(8)
  const streak = useCountUp(15)

  // 🔎 Filter courses based on search
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >

      {/* Page Title */}
      <div className="mb-10 flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold tracking-wide">
            Dashboard 🚀
          </h1>

          <p className="text-gray-400 mt-2">
            Track your learning progress in real-time
          </p>
        </div>

        {/* Add Course Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg font-medium"
        >
          + Add Course
        </button>

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

      {/* Courses Section */}
      <div className="mt-12">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-semibold">
            Your Courses
          </h2>

          {/* 🔎 Search Input */}
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-800 text-sm px-3 py-2 rounded-lg outline-none border border-slate-700"
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredCourses.map((course) => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      <PomodoroTimer />

      </div>

      {/* Add Course Modal */}
      {showModal && (
        <AddCourseModal close={() => setShowModal(false)} />
      )}

    </motion.div>
  )
}

export default Dashboard