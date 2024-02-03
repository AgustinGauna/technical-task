import { create } from 'zustand';

const useButtonStore = create((set) => ({
    lastClickedIndex: null,
    setLastClickedIndex: (index) => set({ lastClickedIndex: index }),
}));

export default useButtonStore;
