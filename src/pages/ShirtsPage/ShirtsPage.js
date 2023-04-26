import React, { useState } from 'react';

import DropDown from 'hooks/DropDown/DropDown';
import Sorting from 'hooks/Sorting';

const ShirtsPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <Sorting sortDir={sortDir} />
    </>
  );
};

export default ShirtsPage;
