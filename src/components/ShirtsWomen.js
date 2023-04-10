import s from './ShirtsWomen.module.css';
import dataShirtsWomen from './dataShirtsWomen';

const ShirtsWomen = () => {
  return (
    <ul className={s.portfolio__examples}>
      {dataShirtsWomen.map(({ id, price, size, image, link }, index) => (
        <li key={index} className={s.portfolio__item}>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className={s.portfolio__link}
          >
            <div className={s.portfolio__wrapper}>
              <img className={s.portfolio__pic} src={image} alt="t-shirt" />

              <p className={s.portfolio__title_code}>#{id}</p>
              <p className={s.portfolio__overlay}>
                Перейдіть за посиланням <br />
                для детальніх замірів та <br />
                додаткових фото <br />
              </p>
            </div>
            <div className={s.portfolio__subtitle}>
              <h2 className={s.portfolio__title}>{size}</h2>
              <p className={s.portfolio__text}>{price} грн</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ShirtsWomen;
