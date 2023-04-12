import s from './Arrow.module.css';
import ScrollToTop from 'react-scroll-up';
import { BsArrowUpCircle } from 'react-icons/bs';

export const Arrow = () => {
  return (
    <ScrollToTop className={s.btnToUp} showUnder={160}>
      <BsArrowUpCircle className={s.iconToUp} />
    </ScrollToTop>
  );
};
