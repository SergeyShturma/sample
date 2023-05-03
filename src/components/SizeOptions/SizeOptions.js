// import { useState } from 'react';

import s from './SizeOptions.module.css';

const options = ['S', 'M', 'L', 'XL'];

const SizeOptions = ({ handleSelected }) => {
  //   const [selectedValue, setSelectedValue] = useState();
  //
  //   const handleChange = selectedValue => {
  //     setSelectedValue(selectedValue);
  //     onClick(selectedValue.value);
  // };

  return (
    <div className={s.options}>
      {options.map(option => (
        <button
          className={s.button}
          type="button"
          onClick={() => handleSelected(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SizeOptions;
