import { useContext, useMemo } from "react"
import { motion } from "framer-motion"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import AnalyticsChart from "../components/dashboard/AnalyticsChart"
import { CourseContext } from "../context/CourseContext"

const PIE_COLORS = ["#2dd4bf", "#f59e0b", "#38bdf8"]

function Analytics() {
  const { courses } = useContext(CourseContext)

  const completionBreakdown = useMemo(() => {
    const completed = courses.filter((c) => c.progress === 100).length
    const inProgress = courses.filter((c) => c.progress > 0 && c.progress < 100).length
    const notStarted = courses.filter((c) => c.progress === 0).length

    return [
      { name: "Completed", value: completed },
      { name: "In Progress", value: inProgress },
      { name: "Not Started", value: notStarted },
    ]
  }, [courses])

  const trendData = useMemo(() => {
    const avg = courses.length
      ? Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length)
      : 0

    return [
      { week: "W1", score: Math.max(avg - 18, 0) },
      { week: "W2", score: Math.max(avg - 12, 0) },
      { week: "W3", score: Math.max(avg - 7, 0) },
      { week: "W4", score: avg },
    ]
  }, [courses])

  const strongestCategory = useMemo(() => {
    if (!courses.length) return "No data yet"

    const scoreByCategory = courses.reduce((acc, course) => {
      const key = course.category || "Other"
      acc[key] = (acc[key] || 0) + course.progress
      return acc
    }, {})

    return Object.entries(scoreByCategory).sort((a, b) => b[1] - a[1])[0][0]
  }, [courses])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-0 md:p-2">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-panel rounded-xl p-4">
          <p className="text-slate-400 text-sm">Course Count</p>
          <p className="text-2xl font-semibold">{courses.length}</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-slate-400 text-sm">Strongest Category</p>
          <p className="text-2xl font-semibold">{strongestCategory}</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-slate-400 text-sm">Completed Courses</p>
          <p className="text-2xl font-semibold">{completionBreakdown[0].value}</p>
        </div>
      </div>

      <AnalyticsChart />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <div className="glass-panel rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Completion Breakdown</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={completionBreakdown}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={88}
                paddingAngle={4}
              >
                {completionBreakdown.map((entry, index) => (
                  <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid rgba(148,163,184,0.25)",
                  borderRadius: "12px",
                  color: "#e2e8f0",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Consistency Trend</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#334155" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid rgba(148,163,184,0.25)",
                  borderRadius: "12px",
                  color: "#e2e8f0",
                }}
              />
              <Line type="monotone" dataKey="score" stroke="#2dd4bf" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  )
}

export default Analytics
