import { motion } from "framer-motion"
import { useContext } from "react"

import Card from "./Card"
import ProgressBar from "./ProgressBar"

import { CourseContext } from "../../context/CourseContext"

function CourseCard({ course }) {

  const { updateCourse } = useContext(CourseContext)

  const handleCompleteLesson = () => {

    if (course.completed >= course.lessons) return

    const newCompleted = course.completed + 1
    const newProgress = Math.round((newCompleted / course.lessons) * 100)

    updateCourse(course.id, {
      completed: newCompleted,
      progress: newProgress
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180 }}
    >
      <Card>
        <h3 className="text-xl font-bold mb-2 text-slate-100 tracking-wide">
          {course.title}
        </h3>

        <p className="text-base text-slate-300 mb-3 font-medium">
          {course.completed}/{course.lessons} lessons
        </p>

        <ProgressBar value={course.progress} />

        <p className="text-xs text-slate-400 mt-2">
          {course.progress}% completed
        </p>

        <button
          onClick={handleCompleteLesson}
          className="mt-4 w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition py-2 rounded-lg text-sm font-medium"
        >
          Complete Lesson
        </button>

      </Card>
    </motion.div>
  )
}

export default CourseCard
