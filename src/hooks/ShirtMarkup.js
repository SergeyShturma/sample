import s from '../pages/ShirtsWomenPage/ShirtsWomenPage.module.css';

const ShirtMarkup = ({ sortedItems }) => {
  return (
    <>
      <div className={s.portfolio__examples}>
        {sortedItems.map(({ id, price, size, image, link }, index) =>
          price ? (
            <li key={index} className={s.portfolio__item}>
              <div className={s.portfolio__box}>
                <div className={s.portfolio__wrapper}>
                  <img
                    className={s.portfolio__pic}
                    src={image[0]}
                    alt="t-shirt"
                  />
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
                  <h2 className={s.portfolio__title}>{size.join(', ')}</h2>
                  <p className={s.portfolio__text}>{price} грн</p>
                </div>
              </div>
            </li>
          ) : (
            <li key={index} className={s.portfolio__item}>
              <div className={s.portfolio__box}>
                <div className={s.portfolio__wrapper}>
                  <img className={s.portfolio__pic} src={image} alt="t-shirt" />
                  <p className={s.portfolio__title_code}>#{id}</p>
                  <p className={s.portfolio__overlay}>
                    Розміри закінчилися. <br />
                    Оберіть іншу модель <br />
                  </p>
                </div>
                <div className={s.portfolio__subtitle}>
                  <p className={s.portfolio__title_link}>Детальніше</p>
                  <h2 className={s.portfolio__title}>{size}</h2>
                  <p className={s.portfolio__text}>
                    &nbsp;
                    {/* <iframe
                      title="Fun"
                      className={s.gif}
                      src="https://giphy.com/embed/kcerH6iby9Id8KRTHr"
                      alt="gif"
                    ></iframe> */}
                  </p>
                </div>
              </div>
            </li>
          )
        )}
      </div>
    </>
  );
};

export default ShirtMarkup;

// <iframe src="https://giphy.com/embed/kcerH6iby9Id8KRTHr" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Friends-season-1-episode-21-the-one-with-fake-monica-kcerH6iby9Id8KRTHr">via GIPHY</a></p>
