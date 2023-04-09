import s from './App.module.css';
import data from './data';

const App = () => {
  return (
    <ul className={s.portfolio__examples}>
      {data.map(({ id, price, size, image, link }, index) => (
        <li key={index} className={s.portfolio__item}>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className={s.portfolio__link}
          >
            <div className={s.portfolio__wrapper}>
              <img className={s.portfolio__pic} src={image} alt="футболка" />

              <p className={s.portfolio__title_code}>#{id}</p>
              {/* <p className={s.portfolio__overlay}>
                розмір L <br />
                унісекс <br />
                для дорослих <br />
                довжина 79 см <br />
                ширина в плечах 51 см <br />
                ширина в грудях 53 см <br />
                ширина внизу 55 см
              </p> */}
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

export default App;
