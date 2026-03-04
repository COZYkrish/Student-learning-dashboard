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
        className="bg-white/5 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-7 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
        style={{ boxShadow: "0 4px 32px 0 #0ff2, 0 1.5px 8px 0 #6366f1" }}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-cyan-300 text-sm tracking-wide font-medium drop-shadow">
              {title}
            </p>

            <h2 className="text-4xl font-extrabold mt-2 text-white drop-shadow-lg">
              {value}
            </h2>
          </div>

          <div className="text-4xl text-cyan-400 drop-shadow-xl animate-pulse">
            {icon}
          </div>
        </div>

        <ProgressBar value={Math.min(value * 5, 100)} />
      </motion.div>
    </Tilt>
  )
}

export default StatsCard