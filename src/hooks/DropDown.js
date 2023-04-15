import s from './DropDown.module.css';

const DropDown = ({ setSortDir }) => (
  <select className={s.select} onChange={e => setSortDir(e.target.value)}>
    <option value="default">за популярністю </option>
    <option value="lowtohigh">ціна: low to high </option>
    <option value="hightolow">ціна: high to low </option>
  </select>
);

export default DropDown;
