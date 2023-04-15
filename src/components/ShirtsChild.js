import DropDown from 'hooks/DropDown';
import SortingChild from 'hooks/SortingChild';
import React, { useState } from 'react';

const ShirtsChild = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingChild sortDir={sortDir} />
    </>
  );
};

export default ShirtsChild;
