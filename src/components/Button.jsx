import React from "react";

const Button = ({ amount, selected }) => {
  return (
    <button className={selected ? "active" : ""}>
      <img className="pound" src="pound.svg" alt="pound sign" />
      {amount}
      {selected ? (
        <img className="selected-img" src="selected.svg" alt="selected img" />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;
