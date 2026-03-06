import { useContext } from "react"
import { motion } from "framer-motion"
import CourseCard from "../components/ui/CourseCard"
import { CourseContext } from "../context/CourseContext"

function Courses() {

  const { courses } = useContext(CourseContext)

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      className="p-8"
    >

      <h1 className="text-4xl font-bold mb-10">
        Courses 📚
      </h1>

      {courses.length === 0 ? (
        <p className="text-gray-400">
          No courses added yet.
        </p>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {courses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      )}

    </motion.div>
  )
}

export default Courses