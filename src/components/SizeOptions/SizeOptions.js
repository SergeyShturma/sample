import { useState } from 'react';

import s from './SizeOptions.module.css';
import ShirtMarkup from 'hooks/ShirtMarkup';

const options = ['S', 'M', 'L', 'XL'];

const SizeOptions = ({ sortedItems }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = e => {
    const size = e.target.value;

    setSelectedSizes(prevSizes =>
      prevSizes.includes(size)
        ? prevSizes.filter(s => s !== size)
        : [...prevSizes, size]
    );
  };

  const filteredArray = sortedItems.filter(item =>
    item.size.some(s => selectedSizes.includes(s.trim()))
  );

  return (
    <>
      <div className={s.options}>
        {options.map(option => (
          <div className={s.wrapper} key={option}>
            <label className={s.label}>{option}</label>
            <input
              type="checkbox"
              className={s.checkbox}
              value={option}
              onChange={e => handleSizeChange(e)}
            />
          </div>
        ))}
      </div>
      {selectedSizes.length ? (
        <ShirtMarkup sortedItems={filteredArray} />
      ) : (
        <ShirtMarkup sortedItems={sortedItems} />
      )}
    </>
  );
};

export default SizeOptions;
