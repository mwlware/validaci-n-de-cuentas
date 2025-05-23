import React from 'react'

const ValidationForm = ({ selectedValidations, onCheckboxChange }) => {
  return (
    <div>
      <h2 className="text-xl font-medium text-[#B84BA7] mb-4">Seleccione validaciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-[#E0E0E0]">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#007BC7]"
              checked={selectedValidations.contractorName}
              onChange={() => onCheckboxChange("contractorName")}
            />
            <span>Nombre del contratista</span>
          </label>

          <label className="flex items-center space-x-2 text-[#E0E0E0]">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#007BC7]"
              checked={selectedValidations.actDate}
              onChange={() => onCheckboxChange("actDate")}
            />
            <span>Fecha del acta parcial</span>
          </label>

          <label className="flex items-center space-x-2 text-[#E0E0E0]">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#007BC7]"
              checked={selectedValidations.epsForm}
              onChange={() => onCheckboxChange("epsForm")}
            />
            <span>Mes de la planilla EPS</span>
          </label>
        </div>

        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-[#E0E0E0]">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#007BC7]"
              checked={selectedValidations.contractNumber}
              onChange={() => onCheckboxChange("contractNumber")}
            />
            <span>Número de contrato</span>
          </label>

          <label className="flex items-center space-x-2 text-[#E0E0E0]">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#007BC7]"
              checked={selectedValidations.rutValidity}
              onChange={() => onCheckboxChange("rutValidity")}
            />
            <span>Vigencia del RUT (&lt; 3 meses)</span>
          </label>

          <label className="flex items-center space-x-2 text-[#E0E0E0]">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#007BC7]"
              checked={selectedValidations.supervisionPeriod}
              onChange={() => onCheckboxChange("supervisionPeriod")}
            />
            <span>Periodo de supervisión válido</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ValidationForm 