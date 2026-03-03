import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Mon", progress: 30 },
  { name: "Tue", progress: 50 },
  { name: "Wed", progress: 40 },
  { name: "Thu", progress: 70 },
  { name: "Fri", progress: 90 },
]

function AnalyticsChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 
                 rounded-xl p-6 mt-10 
                 shadow-xl shadow-black/30"
    >
      <h2 className="text-xl mb-4 text-cyan-400 font-semibold">
        Weekly Progress
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default AnalyticsChart