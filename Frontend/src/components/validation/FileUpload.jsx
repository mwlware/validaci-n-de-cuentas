import React from 'react'
import { Upload } from 'lucide-react'

const FileUpload = ({ file, isDragging, onDragOver, onDragLeave, onDrop, onFileSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-medium text-[#B84BA7] mb-4">Suba su PDF para analizarlo</h2>
      <div
        className={`border-2 border-dashed rounded-md p-8 mb-8 flex flex-col items-center justify-center cursor-pointer ${
          isDragging ? "border-[#B84BA7] bg-[#B84BA7]/10" : "border-[#738993]"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => document.getElementById("file-upload").click()}
      >
        <input 
          id="file-upload" 
          type="file" 
          accept=".pdf" 
          className="hidden" 
          onChange={onFileSelect} 
        />
        <Upload className="h-10 w-10 text-[#007BC7] mb-2" />
        <p className="text-center text-[#E0E0E0]">
          Arrastre aquí el archivo o haga clic
          <br />
          <span className="text-sm text-[#738993]">(solo PDF)</span>
        </p>
        {file && <p className="mt-2 text-[#007BC7]">{file.name}</p>}
      </div>
    </div>
  )
}

export default FileUpload 