import React, { useState } from 'react';

import DropDown from 'hooks/DropDown/DropDown';
import Sorting from 'hooks/Sorting';
import ImgCarousel from 'components/ImgCarousel/ImgCarousel';

const ShirtsPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <Sorting sortDir={sortDir} />
      <ImgCarousel />
    </>
  );
};

export default ShirtsPage;
