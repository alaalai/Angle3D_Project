import React from 'react'
import ModelUpload from './components/ModelUpload'
import ProductForm from './components/ProductForm'

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow p-4 mb-6">
                <div className="container mx-auto">
                    <h1 className="text-xl font-bold text-gray-800">Angle3D Admin</h1>
                </div>
            </nav>
            <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <ModelUpload />
                </div>
                <div>
                    <ProductForm />
                </div>
            </main>
        </div>
    )
}

export default App
