import s from './Suppliers.module.css';

export const Suppliers = () => {
  return (
    <div className={s.container}>
      <h2 className={s.clients__title}>Фірмові постачальники</h2>
      <ul className={s.clients__list}>
        <li>
          <a
            href="https://www.amazon.com/"
            className={s.clients__link_img1}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
          </a>
        </li>
        <li>
          <a
            href="https://www.themountain.com/"
            className={s.clients__link_img2}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
          </a>
        </li>
        <li>
          <a
            href="https://6pm.com/"
            className={s.clients__link_img3}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
          </a>
        </li>
      </ul>
    </div>
  );
};
