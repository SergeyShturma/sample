import React, { useState } from 'react';

import SortingChild from 'hooks/SortingChild';
import DropDown from 'hooks/DropDown/DropDown';
import ImgCarousel from 'components/ImgCarousel/ImgCarousel';
import dataMasks from 'components/data/dataMasks';

const ShirtsChildPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingChild sortDir={sortDir} />
      <ImgCarousel data={dataMasks} />
    </>
  );
};

export default ShirtsChildPage;
