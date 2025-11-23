import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function ModelUpload() {
    const onDrop = useCallback(acceptedFiles => {
        // Handle file upload
        console.log(acceptedFiles)
        alert(`File ${acceptedFiles[0].name} ready for upload (Backend required)`)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className="p-4 border rounded bg-white shadow-sm mb-6">
            <h3 className="text-lg font-medium mb-2">Upload 3D Model</h3>
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
            >
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p className="text-blue-500">Drop the files here ...</p> :
                        <p className="text-gray-500">Drag 'n' drop a GLB/GLTF file here, or click to select files</p>
                }
            </div>
        </div>
    )
}
