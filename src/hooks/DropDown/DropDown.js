import { format } from 'date-fns';

import s from './DropDown.module.css';

const myDate = new Date();
const formattedDate = format(myDate, 'dd.MM.yyyy');

const DropDown = ({ setSortDir }) => {
  return (
    <div className={s.dropdown_wrapper}>
      <select
        className={s.dropdown_select}
        onChange={e => setSortDir(e.target.value)}
      >
        <option value="default">за популярністю </option>
        <option value="lowtohigh">ціна: low to high </option>
        <option value="hightolow">ціна: high to low </option>
      </select>
      <p className={s.dropdown_text}>
        *Ціни та наявність актуальні на {formattedDate}
      </p>
    </div>
  );
};

export default DropDown;
