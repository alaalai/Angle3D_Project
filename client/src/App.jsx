import { useEffect } from 'react'
import Viewer3D from './components/Viewer3D'
import Configurator from './components/Configurator'
import useStore from './store'

function App() {
    const setModel = useStore((state) => state.setModel)

    useEffect(() => {
        // Load a sample model for demonstration
        // In a real app, this would come from an API or route param
        setModel('/sample.glb', ['Body', 'Cap', 'Label'])
    }, [setModel])

    return (
        <div className="h-screen flex flex-col md:flex-row">
            <div className="flex-1 h-2/3 md:h-full relative">
                <Viewer3D />
                <div className="absolute top-4 left-4 bg-white/80 p-2 rounded shadow">
                    <h1 className="text-xl font-bold text-gray-800">Angle3D Clone</h1>
                </div>
            </div>
            <div className="w-full md:w-80 h-1/3 md:h-full border-l border-gray-200">
                <Configurator />
            </div>
        </div>
    )
}

export default App
