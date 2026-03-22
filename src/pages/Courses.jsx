import { useContext, useMemo, useState } from "react"
import { motion } from "framer-motion"
import CourseCard from "../components/ui/CourseCard"
import { CourseContext } from "../context/CourseContext"

function Courses() {
  const { courses } = useContext(CourseContext)

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState("progress_desc")

  const categories = useMemo(
    () => ["All", ...new Set(courses.map((course) => course.category || "Other"))],
    [courses]
  )

  const filtered = useMemo(() => {
    let result = courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    )

    if (category !== "All") {
      result = result.filter((course) => (course.category || "Other") === category)
    }

    const sorted = [...result]

    if (sortBy === "progress_desc") {
      sorted.sort((a, b) => b.progress - a.progress)
    } else if (sortBy === "progress_asc") {
      sorted.sort((a, b) => a.progress - b.progress)
    } else {
      sorted.sort((a, b) => a.title.localeCompare(b.title))
    }

    return sorted
  }, [courses, query, category, sortBy])

  const avgProgress = useMemo(() => {
    if (!courses.length) return 0
    return Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length)
  }, [courses])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-0 md:p-2">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-panel rounded-xl p-4">
          <p className="text-slate-400 text-sm">Total Courses</p>
          <p className="text-2xl font-semibold">{courses.length}</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-slate-400 text-sm">Average Progress</p>
          <p className="text-2xl font-semibold">{avgProgress}%</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-slate-400 text-sm">Filtered Results</p>
          <p className="text-2xl font-semibold">{filtered.length}</p>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by course name"
          className="glass-strong rounded-lg px-3 py-2 border border-slate-600/50 outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="glass-strong rounded-lg px-3 py-2 border border-slate-600/50 outline-none"
        >
          {categories.map((option) => (
            <option key={option} value={option} className="bg-slate-900">
              {option}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="glass-strong rounded-lg px-3 py-2 border border-slate-600/50 outline-none"
        >
          <option value="progress_desc" className="bg-slate-900">Highest Progress</option>
          <option value="progress_asc" className="bg-slate-900">Lowest Progress</option>
          <option value="title_asc" className="bg-slate-900">Alphabetical</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-400">No courses match your current filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default Courses
