"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronLeft } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Sidebar = ({ isSidebarVisible, toggleSidebarVisibility }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const handleMobileToggle = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Botón de hamburguesa para móviles */}
      {isMobile && (
        <button
          onClick={handleMobileToggle}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Botón para ocultar/mostrar sidebar en desktop */}
      {!isMobile && (
        <button
          onClick={toggleSidebarVisibility}
          className={`fixed top-6 z-50 p-2 rounded-full shadow-lg transition-all duration-300
            bg-[#232336] text-white hover:bg-[#373759]
            ${isSidebarVisible ? 'left-60' : 'left-4'}
            border border-[#232336] hover:border-[#9370db]'
          `}
          style={{
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)',
            transition: 'left 0.3s',
          }}
          aria-label={isSidebarVisible ? "Ocultar menú" : "Mostrar menú"}
        >
          <ChevronLeft size={22} className={`transition-transform ${!isSidebarVisible ? 'rotate-180' : ''}`} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#1e1e24] text-gray-300 w-64 transition-all duration-300 ease-in-out z-40
          ${isMobile
            ? (!isOpen ? "-translate-x-full" : "translate-x-0")
            : (!isSidebarVisible ? "-translate-x-80" : "translate-x-0")
          }
        `}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold text-[#9370db] mb-6">Panel de Control</h1>
          <nav className="space-y-4">
            <Link 
              to="/" 
              className={`block py-2 transition-colors ${
                isActive("/") ? "text-[#9370db]" : "text-white hover:text-[#9370db]"
              }`}
            >
              Validación
            </Link>
            <Link 
              to="/historial" 
              className={`block py-2 transition-colors ${
                isActive("/historial") ? "text-[#9370db]" : "text-white hover:text-[#9370db]"
              }`}
            >
              Historial
            </Link>
            <Link 
              to="/configuracion" 
              className={`block py-2 transition-colors ${
                isActive("/configuracion") ? "text-[#9370db]" : "text-white hover:text-[#9370db]"
              }`}
            >
              Configuración
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar