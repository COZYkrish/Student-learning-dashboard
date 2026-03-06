import { useContext, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { UserContext } from "../context/UserContext"
import { CourseContext } from "../context/CourseContext"

function Profile() {
  const { profile, updateProfile } = useContext(UserContext)
  const { courses } = useContext(CourseContext)

  const [form, setForm] = useState(profile)
  const [saved, setSaved] = useState(false)

  const stats = useMemo(() => {
    const completed = courses.filter((course) => course.progress === 100).length
    const totalLessons = courses.reduce((sum, course) => sum + course.lessons, 0)
    const doneLessons = courses.reduce((sum, course) => sum + course.completed, 0)

    return {
      completed,
      totalLessons,
      doneLessons,
    }
  }, [courses])

  const onChange = (field, value) => {
    setSaved(false)
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const saveProfile = () => {
    updateProfile({
      ...form,
      weeklyTargetHours: Number(form.weeklyTargetHours) || 0,
    })
    setSaved(true)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-0 md:p-2">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Profile</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6 xl:col-span-2">
          <h2 className="text-2xl font-semibold mb-5">Learning Preferences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-sm text-slate-300">
              Name
              <input
                value={form.name}
                onChange={(e) => onChange("name", e.target.value)}
                className="mt-1 w-full glass-strong rounded-lg px-3 py-2 border border-slate-600/50 outline-none"
              />
            </label>

            <label className="text-sm text-slate-300">
              Role
              <input
                value={form.role}
                onChange={(e) => onChange("role", e.target.value)}
                className="mt-1 w-full glass-strong rounded-lg px-3 py-2 border border-slate-600/50 outline-none"
              />
            </label>

            <label className="text-sm text-slate-300">
              Weekly Target Hours
              <input
                type="number"
                min="0"
                value={form.weeklyTargetHours}
                onChange={(e) => onChange("weeklyTargetHours", e.target.value)}
                className="mt-1 w-full glass-strong rounded-lg px-3 py-2 border border-slate-600/50 outline-none"
              />
            </label>

            <label className="text-sm text-slate-300">
              Preferred Category
              <input
                value={form.preferredCategory}
                onChange={(e) => onChange("preferredCategory", e.target.value)}
                className="mt-1 w-full glass-strong rounded-lg px-3 py-2 border border-slate-600/50 outline-none"
              />
            </label>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={saveProfile}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition px-4 py-2 rounded-lg font-medium"
            >
              Save Profile
            </button>

            {saved && <span className="text-sm text-teal-300">Changes saved.</span>}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-panel rounded-xl p-4">
            <p className="text-slate-400 text-sm">Completed Courses</p>
            <p className="text-2xl font-semibold">{stats.completed}</p>
          </div>
          <div className="glass-panel rounded-xl p-4">
            <p className="text-slate-400 text-sm">Lessons Finished</p>
            <p className="text-2xl font-semibold">{stats.doneLessons}</p>
          </div>
          <div className="glass-panel rounded-xl p-4">
            <p className="text-slate-400 text-sm">Total Lessons Planned</p>
            <p className="text-2xl font-semibold">{stats.totalLessons}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Profile
