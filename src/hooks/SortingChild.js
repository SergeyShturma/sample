import { useMemo } from 'react';

import dataShirtsChild from '../components/data/dataShirtsChild';
import ShirtMarkup from './ShirtMarkup';

const SortingChild = ({ sortDir }) => {
  const sortedIems = useMemo(
    () =>
      [...dataShirtsChild].sort((a, b) => {
        if (sortDir === 'lowtohigh') return a.price - b.price;
        else if (sortDir === 'hightolow') return b.price - a.price;
        else return a.id - b.id;
      }),
    [sortDir]
  );

  return <ShirtMarkup sortedIems={sortedIems} />;
};

export default SortingChild;
