import DropDown from 'hooks/DropDown';
import SortingWomen from 'hooks/SortingWomen';
import React, { useState } from 'react';

const ShirtsWomen = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingWomen sortDir={sortDir} />
    </>
  );
};

export default ShirtsWomen;
