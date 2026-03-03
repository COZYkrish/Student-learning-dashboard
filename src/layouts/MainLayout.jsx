import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"

function MainLayout({ children }) {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <Navbar />
      <div className="ml-64 pt-16 p-8">
        {children}
      </div>
    </div>
  )
}

export default MainLayout