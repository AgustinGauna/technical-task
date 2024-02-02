import React from "react";
import "./donation.scss";
import Button from "../Button";

const Donation = ({ isMonthly }) => {
  return (
    <div className="donation-container">
      <div className="top">
        <p>I would like to make a monthly donation of</p>
      </div>

      <div className="donation-buttons">
        <Button amount={6} selected={false} />

        <Button amount={12} selected={true} />

        <Button amount={18} selected={false} />

        <Button amount={30} selected={false} />

        <button
          className="custom-amount"
          type="number"
          placeholder="Other amount"
        >
          <img className="pound" src="pound.svg" alt="pound sign" />
          <span>Other amount</span>
        </button>

        <button className="submit-button">
          <span>Donate </span>
          <span>
            <img className="pound" src="pound.svg" alt="pound sign" />
            12
          </span>
          <span>{isMonthly ? "monthly" : "today"}</span>
          <img className="secure" src="secure.svg" alt="" />
        </button>
      </div>

      <div className="message">
        <p>
          £16 Could help an Animal Rescue Team take on an urgent animal rescue.
        </p>
      </div>

      <div className="payment-info">
        <p>
          {isMonthly
            ? "I would like to make a one-off donation"
            : "I would like to give monthly"}
        </p>

        <div>
          <p>All Direct Debits are protected by the Direct Debit Guarantee</p>
          <img src="direct-debit-1-logo-png-transparent.png" alt="" />
          <img src="fundraising-regulator-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Donation;
