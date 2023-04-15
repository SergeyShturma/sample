import DropDown from 'hooks/DropDown';
import React, { useState } from 'react';
import SortingMasks from 'hooks/SortingMasks';

const Masks = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingMasks sortDir={sortDir} />
    </>
  );
};

export default Masks;
