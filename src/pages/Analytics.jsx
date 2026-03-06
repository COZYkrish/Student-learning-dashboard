import { motion } from "framer-motion"
import AnalyticsChart from "../components/dashboard/AnalyticsChart"

function Analytics() {

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      className="p-8"
    >

      <h1 className="text-4xl font-bold mb-10">
        Analytics 📊
      </h1>

      <AnalyticsChart />

    </motion.div>
  )
}

export default Analytics