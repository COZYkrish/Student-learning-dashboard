import { motion } from "framer-motion"
import { useContext, useMemo, useState } from "react"

import StatsCard from "../components/dashboard/StatsCard"
import AnalyticsChart from "../components/dashboard/AnalyticsChart"
import CourseCard from "../components/ui/CourseCard"
import AddCourseModal from "../components/modals/AddCourseModal"

import { CourseContext } from "../context/CourseContext"
import { UserContext } from "../context/UserContext"

import PomodoroTimer from "../components/productivity/PomodoroTimer"
import StreakTracker from "../components/productivity/StreakTracker"
import DailyGoal from "../components/productivity/DailyGoal"
import Achievements from "../components/productivity/Achievements"

function Dashboard() {
  const { courses } = useContext(CourseContext)
  const { profile } = useContext(UserContext)

  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState("")

  const filteredCourses = useMemo(
    () =>
      courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      ),
    [courses, search]
  )

  const completedCourses = useMemo(
    () => courses.filter((c) => c.progress === 100).length,
    [courses]
  )

  const avgProgress = useMemo(() => {
    if (!courses.length) return 0
    const total = courses.reduce((sum, course) => sum + course.progress, 0)
    return Math.round(total / courses.length)
  }, [courses])

  const insight = useMemo(() => {
    if (!courses.length) return "Add your first course to start tracking momentum."

    const highMomentum = courses.filter((c) => c.progress >= 70).length
    if (highMomentum >= 2) {
      return "Strong momentum: keep focusing on your top courses this week."
    }

    const lowProgress = courses.find((c) => c.progress < 30)
    if (lowProgress) {
      return `You can gain quick wins by finishing 2-3 lessons in ${lowProgress.title}.`
    }

    return "Your pace is balanced. Continue daily sessions to improve consistency."
  }, [courses])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="mb-8 md:mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Learning Dashboard</h1>
          <p className="text-slate-400 mt-2">
            Welcome {profile.name}. Track performance, focus areas, and daily goals.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition px-4 py-2 rounded-lg font-medium w-full lg:w-auto"
        >
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Courses" value={courses.length} icon="CL" />
        <StatsCard title="Completed" value={completedCourses} icon="OK" />
        <StatsCard title="Avg Progress %" value={avgProgress} icon="UP" />
      </div>

      <div className="glass-panel rounded-2xl p-5 mt-6">
        <p className="text-sm uppercase tracking-wide text-slate-400 mb-2">Smart Insight</p>
        <p className="text-slate-100 font-medium">{insight}</p>
      </div>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-3">
          <h2 className="text-2xl font-semibold">Your Courses</h2>

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="glass-strong text-sm px-3 py-2 rounded-lg outline-none border border-slate-600/60 w-full md:w-72"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <AnalyticsChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <PomodoroTimer />
        <DailyGoal />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        <StreakTracker />
        <Achievements />
      </div>

      {showModal && <AddCourseModal close={() => setShowModal(false)} />}
    </motion.div>
  )
}

export default Dashboard
