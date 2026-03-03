import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#00ffff" },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  )
}

export default ParticlesBg