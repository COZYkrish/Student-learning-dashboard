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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card>

        <h3 className="text-lg font-semibold mb-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-400 mb-3">
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