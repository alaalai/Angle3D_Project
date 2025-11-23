import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import useStore from '../store'

function Model({ url }) {
    const { scene } = useGLTF(url)
    const parts = useStore((state) => state.parts)
    const selectPart = useStore((state) => state.selectPart)

    useEffect(() => {
        // Apply customizations
        scene.traverse((child) => {
            if (child.isMesh) {
                const partConfig = parts.find(p => p.name === child.name)
                if (partConfig) {
                    child.visible = partConfig.visible
                    if (child.material) {
                        child.material.color.set(partConfig.color)
                    }
                }
            }
        })
    }, [parts, scene])

    return <primitive object={scene} onClick={(e) => {
        e.stopPropagation()
        selectPart(e.object.name)
    }} />
}

export default function Viewer3D() {
    const currentModelUrl = useStore((state) => state.currentModelUrl)

    return (
        <div className="h-full w-full bg-gray-200">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        {currentModelUrl && <Model url={currentModelUrl} />}
                    </Stage>
                </Suspense>
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    )
}
