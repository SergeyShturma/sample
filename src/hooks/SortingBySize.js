// import React, { useEffect, useState } from 'react';
//
// import s from '../components/SizeOptions/SizeOptions.module.css';
// import ShirtMarkup from './ShirtMarkup';
//
// const options = ['S', 'M', 'L', 'XL'];
//
// export default function SortingBySize({ sortedIems }) {
//   const [SSelected, setSSelected] = useState(false);
//   const [MSelected, setMSelected] = useState(false);
//   const [LSelected, setLSelected] = useState(false);
//   const [XLSelected, setXLSelected] = useState(false);
//
//   const handleSelected = size => {
//     switch (size) {
//       case options[0]:
//         setSSelected(!SSelected);
//         break;
//
//       case options[1]:
//         setMSelected(!MSelected);
//         break;
//
//       case options[2]:
//         setLSelected(!LSelected);
//         break;
//
//       case options[3]:
//         setXLSelected(!XLSelected);
//         break;
//
//       default:
//         setSSelected(!SSelected);
//         setMSelected(!MSelected);
//         setLSelected(!LSelected);
//         setXLSelected(!XLSelected);
//         break;
//     }
//   };
//
//   const [selectedProducts, setSelectedProducts] = useState([]);
//
//   useEffect(() => {
//     const filteredList = sortedIems.filter(
//       ({ size }) =>
//         size === options[0] ||
//         size === options[1] ||
//         size === options[2] ||
//         size === options[3]
//     );
//
//     setSelectedProducts(filteredList);
//   }, [sortedIems]);
//
//   return (
//     <>
//       <div className={s.options}>
//         {options.map(option => (
//           <button
//             // value={selectedValue}
//             className={s.button}
//             type="button"
//             onClick={handleSelected}
//             key={option}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <ShirtMarkup sortedIems={selectedProducts} />
//     </>
//   );
// }

import SizeOptions from 'components/SizeOptions/SizeOptions';
// import ShirtMarkup from './ShirtMarkup';

export default function SortingBySize({ sortedItems }) {
  const handleSelected = s => {
    if (s === 'S') {
      return sortedItems =>
        [...sortedItems].filter(({ size }) => size.toString().includes(s));
    } else if (s === 'M') {
      return sortedItems =>
        [...sortedItems].filter(({ size }) => size.toString().includes(s));
    } else if (s === 'L') {
      return sortedItems =>
        [...sortedItems].filter(({ size }) => size.toString().includes(s));
    } else if (s === 'XL') {
      return sortedItems =>
        [...sortedItems].filter(({ size }) => size.toString().includes(s));
    } else {
      return sortedItems;
    }
  };

  return (
    <>
      <SizeOptions handleSelected={handleSelected} />
      {/* <ShirtMarkup sortedItems={sortedItems} /> */}
    </>
  );
}
