import React, { useState } from 'react';

import DropDown from 'hooks/DropDown/DropDown';
import Sorting from 'hooks/Sorting';
import ImgCarousel from 'components/ImgCarousel/ImgCarousel';
import dataMasks from 'components/data/dataMasks';
// import FilterButton from 'components/FilterButton/FilterButton';

const ShirtsPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      {/* <FilterButton /> */}
      <Sorting sortDir={sortDir} />
      <ImgCarousel data={dataMasks} />
    </>
  );
};

export default ShirtsPage;
