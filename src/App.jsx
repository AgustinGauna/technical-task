import { useState } from 'react';
import './App.scss';
import Donation from './components/Donations/Donation';
import useDonationStore from './store/useDonationStore';
import useButtonStore from './store/useButtonStore';
import useCustomDonation from './store/useCustomDonation';

function App() {
  const [monthlyDonation, setMonthlyDonation] = useState(true);
  const setDonation = useDonationStore((state) => state.setDonation);
  const setCustomDonation = useCustomDonation((state) => state.setOpen);
  const setLastClickedIndex = useButtonStore(
    (state) => state.setLastClickedIndex
  );
  const handleComponents = (condition) => {
    setDonation(0);
    setCustomDonation(false);
    setLastClickedIndex(null);
    setMonthlyDonation(condition);
  };

  return (
    <div className='container'>
      <div className='buttons'>
        <button
          className={monthlyDonation ? 'button-active' : ''}
          onClick={() => handleComponents(true)}
        >
          Donate monthly
        </button>
        <button
          className={monthlyDonation ? '' : 'button-active'}
          onClick={() => handleComponents(false)}
        >
          Donate once
        </button>
      </div>
      {monthlyDonation ? (
        <Donation
          handleComponents={handleComponents}
          isMonthly={monthlyDonation}
          values={[6, 12, 18, 32]}
        />
      ) : (
        <Donation
          handleComponents={handleComponents}
          isMonthly={monthlyDonation}
          values={[10, 40, 75, 100]}
        />
      )}
    </div>
  );
}

export default App;
