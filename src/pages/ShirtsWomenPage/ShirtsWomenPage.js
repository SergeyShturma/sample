import React, { useState } from 'react';

import DropDown from 'hooks/DropDown/DropDown';
import SortingWomen from 'hooks/SortingWomen';

const ShirtsWomenPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingWomen sortDir={sortDir} />
    </>
  );
};

export default ShirtsWomenPage;
