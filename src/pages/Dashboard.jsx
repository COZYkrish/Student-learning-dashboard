import { motion } from "framer-motion"
import StatsCard from "../components/dashboard/StatsCard"
import useCountUp from "../hooks/useCountUp"
import AnalyticsChart from "../components/dashboard/AnalyticsChart"

function Dashboard() {
  const courses = useCountUp(12)
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
          value={courses}
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

      {/* Analytics Section */}
      <div className="mt-12">
        <AnalyticsChart />
      </div>
    </motion.div>
  )
}

export default Dashboard