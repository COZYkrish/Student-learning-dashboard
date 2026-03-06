import { useContext } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

import { CourseContext } from "../../context/CourseContext"

function AnalyticsChart() {
  const { courses } = useContext(CourseContext)

  const data = courses.map((course) => ({
    name: course.title,
    progress: course.progress,
  }))

  const topCourse = [...courses].sort((a, b) => b.progress - a.progress)[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-teal-300/40"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold tracking-wide">Course Progress Analytics</h2>
        {topCourse && (
          <p className="text-sm text-slate-300">
            Top performer:{" "}
            <span className="text-teal-300 font-semibold">
              {topCourse.title} ({topCourse.progress}%)
            </span>
          </p>
        )}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid rgba(148,163,184,0.25)",
              borderRadius: "12px",
              color: "#e2e8f0",
            }}
          />

          <Bar
            dataKey="progress"
            fill="#2dd4bf"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default AnalyticsChart
