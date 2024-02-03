import React from 'react';

const Button = ({ amount, selected, onClick }) => {
  return (
    <button className={selected ? 'active' : ''} onClick={onClick}>
      <img className='pound' src='pound.svg' alt='pound sign' />
      {amount}
      {selected ? (
        <img className='selected-img' src='selected.svg' alt='selected' />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;
