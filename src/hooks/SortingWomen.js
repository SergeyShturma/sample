import React, { useMemo } from 'react';

import dataShirtsWomen from '../components/data/dataShirtsWomen';
import ShirtMarkup from './ShirtMarkup';

const SortingWomen = ({ sortDir }) => {
  const sortedIems = useMemo(
    () =>
      [...dataShirtsWomen].sort((a, b) => {
        if (sortDir === 'lowtohigh') return a.price - b.price;
        else if (sortDir === 'hightolow') return b.price - a.price;
        else return a.id - b.id;
      }),
    [sortDir]
  );

  return <ShirtMarkup sortedIems={sortedIems} />;
};

export default SortingWomen;
