import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

function ParticlesBg() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-20"
      options={{
        fpsLimit: 120,
        fullScreen: { enable: false },
        particles: {
          number: { value: 44 },
          size: { value: { min: 1, max: 3 } },
          move: { speed: 0.65 },
          opacity: { value: 0.22 },
          links: {
            enable: true,
            distance: 130,
            color: "#2dd4bf",
            opacity: 0.2,
          },
          color: { value: ["#2dd4bf", "#f59e0b", "#38bdf8"] },
        },
      }}
    />
  )
}

export default ParticlesBg
