import { create } from 'zustand'

const useStore = create((set) => ({
    currentModelUrl: null,
    parts: [], // { name, material, color, visible }
    selectedPart: null,

    setModel: (url, parts) => set({ currentModelUrl: url, parts: parts.map(p => ({ name: p, color: '#ffffff', visible: true })) }),
    updatePartColor: (partName, color) => set((state) => ({
        parts: state.parts.map(p => p.name === partName ? { ...p, color } : p)
    })),
    togglePartVisibility: (partName) => set((state) => ({
        parts: state.parts.map(p => p.name === partName ? { ...p, visible: !p.visible } : p)
    })),
    selectPart: (partName) => set({ selectedPart: partName }),
}))

export default useStore
