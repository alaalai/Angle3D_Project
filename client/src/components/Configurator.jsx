import React from 'react'
import useStore from '../store'

export default function Configurator() {
    const parts = useStore((state) => state.parts)
    const updatePartColor = useStore((state) => state.updatePartColor)
    const togglePartVisibility = useStore((state) => state.togglePartVisibility)
    const selectedPart = useStore((state) => state.selectedPart)

    return (
        <div className="p-4 bg-white shadow-lg h-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Customization</h2>

            {selectedPart && (
                <div className="mb-4 p-2 bg-blue-50 rounded">
                    <span className="font-semibold">Selected:</span> {selectedPart}
                </div>
            )}

            <div className="space-y-4">
                {parts.map((part) => (
                    <div key={part.name} className="border p-3 rounded">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{part.name}</span>
                            <button
                                onClick={() => togglePartVisibility(part.name)}
                                className={`px-2 py-1 text-xs rounded ${part.visible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                            >
                                {part.visible ? 'Visible' : 'Hidden'}
                            </button>
                        </div>

                        {part.visible && (
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Color</label>
                                <input
                                    type="color"
                                    value={part.color}
                                    onChange={(e) => updatePartColor(part.name, e.target.value)}
                                    className="w-full h-8 cursor-pointer"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
