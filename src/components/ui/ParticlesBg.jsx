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
      options={{
        background: {
          color: "#020617"
        },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 1 },
          links: {
            enable: true,
            distance: 120,
            color: "#6366f1"
          }
        }
      }}
    />
  )
}

export default ParticlesBg