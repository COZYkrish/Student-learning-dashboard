import { useState, useContext } from "react"
import { CourseContext } from "../../context/CourseContext"

function AddCourseModal({ close }) {
  const { addCourse } = useContext(CourseContext)

  const [title, setTitle] = useState("")
  const [lessons, setLessons] = useState("")
  const [category, setCategory] = useState("Custom")

  const handleSubmit = () => {
    const parsedLessons = Number(lessons)

    if (!title.trim() || !parsedLessons || parsedLessons < 1) {
      return
    }

    const newCourse = {
      id: Date.now(),
      title: title.trim(),
      lessons: parsedLessons,
      completed: 0,
      progress: 0,
      category,
    }

    addCourse(newCourse)
    close()
  }

  return (
    <div className="fixed inset-0 bg-slate-950/70 flex items-center justify-center z-50 p-4">
      <div className="glass-strong rounded-xl w-full max-w-md p-6 border border-slate-400/20">
        <h2 className="text-xl mb-4 font-semibold">Add Course</h2>

        <input
          className="w-full p-2.5 mb-3 bg-slate-800/70 border border-slate-600/50 rounded-lg outline-none"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-2.5 mb-3 bg-slate-800/70 border border-slate-600/50 rounded-lg outline-none"
          placeholder="Total Lessons"
          type="number"
          min="1"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
        />

        <input
          className="w-full p-2.5 mb-5 bg-slate-800/70 border border-slate-600/50 rounded-lg outline-none"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <div className="flex gap-3 justify-end">
          <button onClick={close} className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-4 py-2 rounded-lg transition font-medium"
          >
            Add Course
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddCourseModal
