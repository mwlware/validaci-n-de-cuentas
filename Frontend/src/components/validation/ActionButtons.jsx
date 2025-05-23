import React from 'react'

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="px-4 py-2 bg-[#007BC7] text-white rounded-md hover:bg-[#005387] transition-colors">
        Validar el documento
      </button>
      <button className="px-4 py-2 bg-[#B84BA7] text-white rounded-md hover:bg-[#914169] transition-colors">
        Descargar resultado (PDF)
      </button>
      <button className="px-4 py-2 bg-[#007BC7] text-white rounded-md hover:bg-[#005387] transition-colors">
        Validar otro documento
      </button>
    </div>
  )
}

export default ActionButtons 