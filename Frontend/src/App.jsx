import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Sidebar from "./components/ui/sidebar"
import ValidationView from "./pages/validación"
import Historial from "./pages/historial"
import Configuracion from "./pages/configuracion"
import Footer from "./components/ui/Footer"

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-[#1a1a24]">
        <Sidebar 
          isSidebarVisible={isSidebarVisible} 
          toggleSidebarVisibility={toggleSidebarVisibility} 
        />
        <div className="flex-1 flex flex-col">
          <main
            className={`flex-1 transition-all duration-300 ease-in-out
              ${isSidebarVisible ? 'ml-0 md:ml-64' : 'ml-0'}
            `}
            style={{
              marginLeft: isSidebarVisible ? undefined : 0,
              // En desktop, si el sidebar está oculto, el margen es 0
            }}
          >
            <Routes>
              <Route path="/" element={<ValidationView />} />
              <Route path="/historial" element={<Historial />} />
              <Route path="/configuracion" element={<Configuracion />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
