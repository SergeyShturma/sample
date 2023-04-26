import React, { useState } from 'react';

import SortingChild from 'hooks/SortingChild';
import DropDown from 'hooks/DropDown/DropDown';

const ShirtsChildPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingChild sortDir={sortDir} />
    </>
  );
};

export default ShirtsChildPage;
