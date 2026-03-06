import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import ProgressBar from "../ui/ProgressBar"

function StatsCard({ title, value, icon }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.07}
      tiltMaxAngleX={14}
      tiltMaxAngleY={14}
      transitionSpeed={2200}
      className="rounded-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-2xl p-7 transition-all duration-300 hover:border-teal-300/40"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-300 text-sm tracking-wide font-medium">
              {title}
            </p>

            <h2 className="text-4xl font-extrabold mt-2 text-white">
              {value}
            </h2>
          </div>

          <div className="text-4xl text-teal-300">
            {icon}
          </div>
        </div>

        <ProgressBar value={Math.min(Number(value) * 5, 100)} />
      </motion.div>
    </Tilt>
  )
}

export default StatsCard
