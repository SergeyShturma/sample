import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const FilterButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Filter</button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default FilterButton;
