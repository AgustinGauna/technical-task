import { useState } from "react";
import "./App.scss";
import Donation from "./components/Donations/Donation";

function App() {
  const [monthlyDonation, setMonthlyDonation] = useState(true);

  return (
    <div className="container">
      <div className="buttons">
        <button
          className={monthlyDonation ? "button-active" : ""}
          onClick={() => setMonthlyDonation(true)}
        >
          Donate monthly
        </button>
        <button
          className={monthlyDonation ? "" : "button-active"}
          onClick={() => setMonthlyDonation(false)}
        >
          Donate once
        </button>
      </div>
      {monthlyDonation ? (
        <Donation isMonthly={monthlyDonation} />
      ) : (
        <Donation isMonthly={monthlyDonation} />
      )}
    </div>
  );
}

export default App;
