import { motion } from "framer-motion"
import Card from "./Card"
import ProgressBar from "./ProgressBar"

function CourseCard({ course }) {
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

      </Card>
    </motion.div>
  )
}

export default CourseCard