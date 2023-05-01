import { useState } from 'react';

import s from './SizeOptions.module.css';

const options = ['S', 'M', 'L', 'XL'];

const SizeOptions = ({ onClick }) => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = selectedValue => {
    setSelectedValue(selectedValue);
    onClick(selectedValue.value);
  };

  return (
    <div className={s.options}>
      {options.map(option => (
        <button
          value={selectedValue}
          className={s.button}
          type="button"
          onClick={handleChange}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SizeOptions;
