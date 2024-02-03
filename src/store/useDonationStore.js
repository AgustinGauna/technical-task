import { create } from 'zustand';

const useDonationStore = create((set) => ({
    donation: 0,
    setDonation: (amount) => set({ donation: amount }),
}));

export default useDonationStore;
