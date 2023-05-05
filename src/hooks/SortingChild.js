import { useMemo } from 'react';

import dataShirtsChild from '../components/data/dataShirtsChild';
import SizeOptions from 'components/SizeOptions/SizeOptions';

const SortingChild = ({ sortDir }) => {
  const sortedItems = useMemo(
    () =>
      [...dataShirtsChild].sort((a, b) => {
        if (sortDir === 'lowtohigh') return a.price - b.price;
        else if (sortDir === 'hightolow') return b.price - a.price;
        else return a.id - b.id;
      }),
    [sortDir]
  );

  return <SizeOptions sortedItems={sortedItems} />;
};

export default SortingChild;
