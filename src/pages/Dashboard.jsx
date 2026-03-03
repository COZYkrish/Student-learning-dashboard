import StatsCard from "../components/dashboard/StatsCard"
import useCountUp from "../hooks/useCountUp"

function Dashboard() {
  const courses = useCountUp(12)
  const completed = useCountUp(8)
  const streak = useCountUp(15)

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard 🚀
      </h1>

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
    </div>
  )
}

export default Dashboard