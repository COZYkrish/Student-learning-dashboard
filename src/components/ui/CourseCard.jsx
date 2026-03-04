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
      whileHover={{ scale: 1.07, boxShadow: "0 0 32px #0ff, 0 0 8px #6366f1" }}
      transition={{ type: "spring", stiffness: 180 }}
    >
      <Card>
        <h3 className="text-xl font-bold mb-2 text-cyan-300 tracking-wide drop-shadow-lg">
          {course.title}
        </h3>

        <p className="text-base text-cyan-200 mb-3 font-medium">
          {course.completed}/{course.lessons} lessons
        </p>

        <ProgressBar progress={course.progress} />

        <p className="text-xs text-gray-400 mt-2">
          {course.progress}% completed
        </p>

        {/* Complete Lesson Button */}
        <button
          onClick={handleCompleteLesson}
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 transition py-2 rounded-lg text-sm"
        >
          Complete Lesson
        </button>

      </Card>
    </motion.div>
  )
}

export default CourseCard