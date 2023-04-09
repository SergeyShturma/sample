import s from './Arrow.module.css';
import ScrollToTop from 'react-scroll-up';
import { BsArrowUpCircle } from 'react-icons/bs';

export const Arrow = () => {
  return (
    // <button type="button" className={s.btnToUp}>
    //   <svg className={s.iconToUp}>
    //     <use href="./images/sprite.svg#icon-circle-up"></use>
    //   </svg>
    // </button>
    <ScrollToTop className={s.btnToUp} showUnder={160}>
      <BsArrowUpCircle className={s.iconToUp} />
    </ScrollToTop>
  );
};
