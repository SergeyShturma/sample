import React, { useState } from 'react';

import DropDown from 'hooks/DropDown/DropDown';
import s from './Modal.module.css';
import Sorting from 'hooks/Sorting';

const Modal = ({ closeModal }) => {
  // Handle filter changes here and update the state accordingly

  const handleSizeChange = event => {
    // Update size filter logic
  };

  const handlePriceChange = event => {
    // Update price filter logic
  };

  const [sortDir, setSortDir] = useState('default');

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Filter By Size and Price</h2>
      <DropDown setSortDir={setSortDir} />
      <Sorting sortDir={sortDir} />
      <button className={s.btn} onClick={closeModal}>
        Close
      </button>
    </div>
  );
};

export default Modal;
