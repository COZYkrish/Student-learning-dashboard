import { useContext, useMemo } from "react"
import { UserContext } from "../../context/UserContext"

function Navbar({ onToggleMenu }) {
  const { profile } = useContext(UserContext)

  const today = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
    []
  )

  return (
    <header className="h-16 glass-strong border-b border-slate-200/10 flex items-center justify-between px-4 md:px-8 md:ml-64 fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-slate-200 border border-slate-300/20 rounded-lg px-3 py-1.5"
          onClick={onToggleMenu}
          type="button"
        >
          Menu
        </button>
        <div>
          <h2 className="text-base md:text-lg text-slate-100 font-medium">
            Welcome back, {profile.name}
          </h2>
          <p className="text-xs text-slate-400">{today}</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 text-sm">
        <span className="status-dot" />
        <span className="text-slate-300">Learning Mode Active</span>
      </div>
    </header>
  )
}

export default Navbar
