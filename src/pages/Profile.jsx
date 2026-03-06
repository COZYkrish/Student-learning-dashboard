import { motion } from "framer-motion"

function Profile() {

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      className="p-8"
    >

      <h1 className="text-4xl font-bold mb-10">
        Profile 👤
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl w-80">

        <p className="text-gray-400">Name</p>
        <h2 className="text-xl font-semibold mb-4">
          Krish
        </h2>

        <p className="text-gray-400">Role</p>
        <h2 className="text-xl font-semibold">
          Student
        </h2>

      </div>

    </motion.div>
  )
}

export default Profile