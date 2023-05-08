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

  const countBySize = sortedItems.reduce(
    (acc, item) => {
      item.size.forEach(size => {
        if (options.includes(size)) {
          acc[size] += 1;
        }
      });
      return acc;
    },
    { S: 0, M: 0, L: 0, XL: 0 }
  );

  return (
    <>
      <div className={s.options}>
        {options.map((option, index) => (
          <div className={s.wrapper} key={option}>
            <label className={s.label} htmlFor={index}>
              {option}({countBySize[option]})
            </label>
            <input
              type="checkbox"
              className={s.checkbox}
              value={option}
              id={index}
              onChange={e => handleSizeChange(e)}
            />
          </div>
        ))}
      </div>
      {selectedSizes.length ? (
        filteredArray.length ? (
          <ShirtMarkup sortedItems={filteredArray} />
        ) : (
          <div className={s.gif_wrapper}>
            <p className={s.gif_text}>
              Оберіть інший розмір, бо цей вже розібрали...
            </p>
            <iframe
              title="Fun"
              className={s.gif}
              src="https://giphy.com/embed/kcerH6iby9Id8KRTHr"
              alt="gif"
            ></iframe>
          </div>
        )
      ) : (
        <ShirtMarkup sortedItems={sortedItems} />
      )}
    </>
  );
};

export default SizeOptions;
