import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import ProgressBar from "../ui/ProgressBar"

function StatsCard({ title, value, icon }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.05}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      transitionSpeed={2500}
      className="rounded-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10
                   rounded-xl p-6 
                   shadow-xl shadow-black/30
                   hover:shadow-cyan-500/30
                   hover:border-cyan-400/40
                   transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm tracking-wide">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-2 text-white">
              {value}
            </h2>
          </div>

          <div className="text-3xl text-cyan-400 drop-shadow-lg">
            {icon}
          </div>
        </div>

        <ProgressBar value={Math.min(value * 5, 100)} />
      </motion.div>
    </Tilt>
  )
}

export default StatsCard