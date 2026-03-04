import { useContext } from "react"
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
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h2 className="text-xl font-semibold mb-4">
        Course Progress Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

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

    </div>
  )
}

export default AnalyticsChart