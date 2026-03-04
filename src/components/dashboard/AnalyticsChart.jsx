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

  // Convert courses to chart data
  const data = courses.map(course => ({
    name: course.title,
    progress: course.progress
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-8 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
      style={{ boxShadow: "0 4px 32px 0 #0ff2, 0 1.5px 8px 0 #6366f1" }}
    >
      <h2 className="text-2xl font-bold mb-6 text-cyan-300 tracking-wide drop-shadow-lg">
        Course Progress Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#6366f1" />
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
          />

          <Tooltip />

          <Bar
            dataKey="progress"
            fill="#6366f1"
            radius={[6,6,0,0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </motion.div>
  )
}

export default AnalyticsChart