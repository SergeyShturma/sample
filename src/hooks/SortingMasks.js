import React, { useMemo } from 'react';

import s from '../pages/MasksPage/MasksPage.module.css';
import dataMasks from '../components/data/dataMasks';

const SortingMasks = ({ sortDir }) => {
  const sortedItems = useMemo(
    () =>
      [...dataMasks].sort((a, b) => {
        if (sortDir === 'lowtohigh') return a.price - b.price;
        else if (sortDir === 'hightolow') return b.price - a.price;
        else return a.id - b.id;
      }),
    [sortDir]
  );

  return (
    <ul className={s.portfolio__examples}>
      {sortedItems.map(({ id, price, image, link }, index) => (
        <li key={index} className={s.portfolio__item}>
          <div className={s.portfolio__box}>
            <div className={s.portfolio__wrapper}>
              <img className={s.portfolio__pic} src={image} alt="mask" />
              <p className={s.portfolio__title_code}>#{id}</p>
              <p className={s.portfolio__overlay}>
                Перейдіть за посиланням <br />
                для детальніх замірів та <br />
                додаткових фото <br />
              </p>
            </div>
            <div className={s.portfolio__subtitle}>
              <a
                className={s.portfolio__title_link}
                href={link}
                rel="noreferrer"
                target="_blank"
              >
                Детальніше
              </a>
              <p className={s.portfolio__text}>{price} грн</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SortingMasks;
