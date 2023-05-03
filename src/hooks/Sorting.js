import React, { useMemo } from 'react';

import dataShirts from '../components/data/dataShirts';
import ShirtMarkup from './ShirtMarkup';

const Sorting = ({ sortDir }) => {
  const sortedItems = useMemo(
    () =>
      [...dataShirts].sort((a, b) => {
        if (sortDir === 'lowtohigh') return a.price - b.price;
        else if (sortDir === 'hightolow') return b.price - a.price;
        else return a.id - b.id;
      }),
    [sortDir]
  );

  return <ShirtMarkup sortedItems={sortedItems} />;
};

export default Sorting;
