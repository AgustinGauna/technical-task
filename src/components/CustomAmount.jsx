import React, { useState } from 'react';
import useDonationStore from '../store/useDonationStore';
import useCustomDonation from '../store/useCustomDonation';
import { toast } from 'sonner';
import useButtonStore from '../store/useButtonStore';

const CustomAmount = () => {
  const setDonation = useDonationStore((state) => state.setDonation);
  const [customDonation, setCustomDonation] = useState(0);
  const setCustomDonationOpen = useCustomDonation((state) => state.setOpen);
  const setLastClickedIndex = useButtonStore(
    (state) => state.setLastClickedIndex
  );
  const handleDonation = () => {
    if (customDonation > 9999 || customDonation < 1) {
      toast.error('The amount has to be between 1 and 9999');
      return;
    }
    setDonation(customDonation);
    setCustomDonationOpen(false);
    setLastClickedIndex(999);
  };

  return (
    <div className='custom-amount-container'>
      <input
        onChange={(e) => {
          setCustomDonation(e.target.value);
        }}
        type='number'
      />
      <button
        onClick={() => {
          setCustomDonationOpen(false);
        }}
        className='cancel'
      >
        Cancel
      </button>
      <button
        onClick={() => {
          handleDonation();
        }}
        className='accept'
      >
        Confirm
      </button>
    </div>
  );
};

export default CustomAmount;
