import s from './Masks.module.css';
import dataMasks from './dataMasks';

const Masks = () => {
  return (
    <ul className={s.portfolio__examples}>
      {dataMasks.map(({ id, price, image, link }, index) => (
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

export default Masks;
