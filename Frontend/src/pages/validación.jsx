

import { useState } from "react"
import { Check, X, AlertTriangle, Upload } from "lucide-react"

const ValidationView = () => {
  const [selectedValidations, setSelectedValidations] = useState({
    contractorName: true,
    actDate: true,
    epsForm: false,
    contractNumber: true,
    rutValidity: false,
    supervisionPeriod: false,
  })

  const [context, setContext] = useState("")
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  // Resultados simulados
  /* const results = [
    { id: "contractorName", status: "success", message: "Nombre del contratista coincide" },
    { id: "contractNumber", status: "success", message: "Número de contrato correcto" },
    { id: "actDate", status: "error", message: "Fecha del acta es anterior al período" },
    { id: "rutValidity", status: "warning", message: "Vigencia del RUT expirada" },
    { id: "epsForm", status: "success", message: "Mes de planilla EPS válido" },
  ] */

  const handleCheckboxChange = (field) => {
    setSelectedValidations({
      ...selectedValidations,
      [field]: !selectedValidations[field],
    })
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
    }
  }

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    }
  }

  /* const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <Check className="text-green-500" />
      case "error":
        return <X className="text-red-500" />
      case "warning":
        return <AlertTriangle className="text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "text-green-500"
      case "error":
        return "text-red-500"
      case "warning":
        return "text-yellow-500"
      default:
        return ""
    }
  } */

  return (
    <div className="p-6 bg-[#1a1a24] text-gray-200 min-h-screen">
      {/* Seleccione validaciones */}
      <h2 className="text-xl font-medium text-[#9370db] mb-4">Seleccione validaciones</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#9370db]"
              checked={selectedValidations.contractorName}
              onChange={() => handleCheckboxChange("contractorName")}
            />
            <span>Nombre del contratista</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#9370db]"
              checked={selectedValidations.actDate}
              onChange={() => handleCheckboxChange("actDate")}
            />
            <span>Fecha del acta parcial</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#9370db]"
              checked={selectedValidations.epsForm}
              onChange={() => handleCheckboxChange("epsForm")}
            />
            <span>Mes de la planilla EPS</span>
          </label>
        </div>

        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#9370db]"
              checked={selectedValidations.contractNumber}
              onChange={() => handleCheckboxChange("contractNumber")}
            />
            <span>Número de contrato</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#9370db]"
              checked={selectedValidations.rutValidity}
              onChange={() => handleCheckboxChange("rutValidity")}
            />
            <span>Vigencia del RUT (&lt; 3 meses)</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#9370db]"
              checked={selectedValidations.supervisionPeriod}
              onChange={() => handleCheckboxChange("supervisionPeriod")}
            />
            <span>Periodo de supervisión válido</span>
          </label>
        </div>
      </div>

      {/* Contexto adicional */}
      <h2 className="text-xl font-medium text-[#9370db] mb-4">Contexto adicional para la IA</h2>
      <textarea
        className="w-full p-3 bg-[#252530] border border-gray-700 rounded-md mb-8 text-gray-300"
        rows="4"
        placeholder="Escribe aquí instrucciones o contexto extra para el análisis..."
        value={context}
        onChange={(e) => setContext(e.target.value)}
      ></textarea>

      {/* Subir PDF */}
      <h2 className="text-xl font-medium text-[#9370db] mb-4">Suba su PDF para analizarlo</h2>
      <div
        className={`border-2 border-dashed rounded-md p-8 mb-8 flex flex-col items-center justify-center cursor-pointer ${
          isDragging ? "border-[#9370db] bg-[#9370db]/10" : "border-gray-600"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload").click()}
      >
        
        <input id="file-upload" type="file" accept=".pdf" className="hidden" onChange={handleFileSelect} />
        <Upload className="h-10 w-10 text-gray-400 mb-2" />
        <p className="text-center text-gray-400">
          Arrastre aquí el archivo o haga clic
          <br />
          <span className="text-sm">(solo PDF)</span>
        </p>
        {file && <p className="mt-2 text-[#9370db]">{file.name}</p>}
      </div>
      

      {/* Resultados */}
      {/* <h2 className="text-xl font-medium text-[#9370db] mb-4">Resultados</h2>
      <div className="space-y-2 mb-8">
        {results.map((result) => (
          <div
            key={result.id}
            className={`flex items-center p-3 rounded-md bg-[#252530] border-l-4 ${
              result.status === "success"
                ? "border-green-500"
                : result.status === "error"
                  ? "border-red-500"
                  : "border-yellow-500"
            }`}
          >
            <div className="mr-3">{getStatusIcon(result.status)}</div>
            <span className={getStatusColor(result.status)}>{result.message}</span>
          </div>
        ))}
      </div> */}

      {/* Botones de acción */}
      <div className="flex flex-wrap gap-4">
      <button className="px-4 py-2 bg-[#4361ee] text-white rounded-md hover:bg-[#3a56d4] transition-colors">
          Validar el documento
        </button>
        <button className="px-4 py-2 bg-[#4361ee] text-white rounded-md hover:bg-[#3a56d4] transition-colors">
          Validar otro documento
        </button>
        <button className="px-4 py-2 bg-[#3a56d4] text-white rounded-md hover:bg-[#2e4bbd] transition-colors">
          Descargar resultado (PDF)
        </button>
      </div>
    </div>
  )
}

export default ValidationView
