import { create } from 'zustand';

const useCustomDonation = create((set) => ({
    open: false,
    setOpen: (variable) => set({ open: variable }),
}));

export default useCustomDonation;
