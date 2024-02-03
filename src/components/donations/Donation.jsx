import React, { useState } from 'react';
import './donation.scss';
import Button from '../Button';
import useButtonStore from '../../store/useButtonStore';
import useDonationStore from '../../store/useDonationStore';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'sonner';
import CustomAmount from '../CustomAmount';
import useCustomDonation from '../../store/useCustomDonation';

const Donation = ({ isMonthly, values, handleComponents }) => {
  const phrases = [
    'Could help an Animal Rescue Team take on an urgent animal rescue.',
    'Could help answer an emergency call to our Animal Rescue Line',
    'Could help us buy a lot of food for street dogs',
    'Could help us buy a lot of food for street cats',
  ];
  const [randomPhraseIndex, setRandomPhraseIndex] = useState(0);
  const lastClickedIndex = useButtonStore((state) => state.lastClickedIndex);
  const customDonation = useCustomDonation((state) => state.open);
  const setCustomDonation = useCustomDonation((state) => state.setOpen);
  const setCustomDonationOpen = useCustomDonation((state) => state.setOpen);
  const setLastClickedIndex = useButtonStore(
    (state) => state.setLastClickedIndex
  );

  const handleButtonClick = (index, amount) => {
    setLastClickedIndex(index);
    setDonation(amount);

    const randomNumber = Math.floor(Math.random() * 4);
    setRandomPhraseIndex(randomNumber);
  };

  const donation = useDonationStore((state) => state.donation);
  const setDonation = useDonationStore((state) => state.setDonation);

  const handleDonation = () => {
    if (donation > 0) {
      toast.success(`Success, thank you for your £${donation} donation`);
      setLastClickedIndex(null);
      setDonation(null);
      setCustomDonationOpen(false);
      setLastClickedIndex(null);
    } else {
      return;
    }
  };

  return (
    <div className='donation-container'>
      <div className='top'>
        {isMonthly ? (
          <p>I would like to make a monthly donation of</p>
        ) : (
          <p>I would like to make a one-off donation of</p>
        )}
      </div>

      {customDonation ? (
        <CustomAmount />
      ) : (
        <div className='donation-buttons'>
          {values.map((amount, index) => (
            <Button
              key={index}
              amount={amount}
              selected={lastClickedIndex === index}
              onClick={() => handleButtonClick(index, amount)}
            />
          ))}

          <button
            onClick={() => {
              setCustomDonation(true);
            }}
            className={
              lastClickedIndex === 999
                ? 'custom-amount custom-amount-active'
                : 'custom-amount'
            }
          >
            <img className='pound' src='pound.svg' alt='pound sign' />
            <span>Other amount</span>
            <img className='selected-img' src='selected.svg' alt='selected' />
          </button>

          <button
            onClick={() => {
              handleDonation();
            }}
            className='submit-button'
          >
            <span>Donate </span>
            {donation > 0 ? (
              <span>
                <img className='pound' src='pound.svg' alt='pound sign' />
                {donation}
              </span>
            ) : (
              <></>
            )}
            <span className='submit-button-secure'>
              {isMonthly ? 'monthly' : 'today'}
              <img className='secure' src='secure.svg' alt='' />
            </span>
          </button>
        </div>
      )}
      <div className='message'>
        <p>
          £{donation > 0 ? donation : '12'} {phrases[randomPhraseIndex]}
        </p>
      </div>

      <div className='payment-info'>
        {isMonthly ? (
          <p
            onClick={() => {
              handleComponents(false);
            }}
            className='payment-text'
          >
            I would like to make a one-off donation
          </p>
        ) : (
          <p
            onClick={() => {
              handleComponents(true);
            }}
            className='payment-text'
          >
            I would like to give monthly
          </p>
        )}

        {isMonthly ? (
          <div className='credit-cards'>
            <img src='visa-logo.png' alt='' />
            <img src='mastercard-logo.png' alt='' />
            <img src='paypal-logo.png' alt='' />
            <img src='fundraising-regulator-logo.png' alt='' />
          </div>
        ) : (
          <div className='payment-details'>
            <p>All Direct Debits are protected by the Direct Debit Guarantee</p>
            <div className='payment-images'>
              <img src='direct-debit-1-logo-png-transparent.png' alt='' />
              <img src='fundraising-regulator-logo.png' alt='' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
