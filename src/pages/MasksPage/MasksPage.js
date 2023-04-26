import React, { useState } from 'react';

import SortingMasks from 'hooks/SortingMasks';
import DropDown from 'hooks/DropDown/DropDown';

const MasksPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingMasks sortDir={sortDir} />
    </>
  );
};

export default MasksPage;
