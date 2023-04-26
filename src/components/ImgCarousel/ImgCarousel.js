import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import s from './ImgCarousel.module.css';

export default function ImgCarousel() {
  return (
    <Carousel
      autoPlay
      emulateTouch
      infiniteLoop
      centerMode
      centerSlidePercentage={50}
      transitionTime={2200}
      interval={5000}
      width={450}
      showThumbs={false}
      showArrows={false}
      className={s.wrapper}
    >
      <div>
        <img
          className={s.item}
          src={require('../../images/mask1.jpg')}
          alt="mask"
        />
        {/* <p className="legend">250 грн</p> */}
      </div>
      <div>
        <img
          className={s.item}
          src={require('../../images/mask2.jpg')}
          alt="mask"
        />
        {/* <p className="legend">250 грн</p> */}
      </div>
      <div>
        <img
          className={s.item}
          src={require('../../images/mask3.jpg')}
          alt="mask"
        />
        {/* <p className="legend">200 грн</p> */}
      </div>
      <div>
        <img
          className={s.item}
          src={require('../../images/mask4.jpg')}
          alt="mask"
        />
        {/* <p className="legend">200 грн</p> */}
      </div>
      <div>
        <img
          className={s.item}
          src={require('../../images/mask5.jpg')}
          alt="mask"
        />
        {/* <p className="legend">250 грн</p> */}
      </div>
      <div>
        <img
          className={s.item}
          src={require('../../images/mask6.jpeg')}
          alt="mask"
        />
        {/* <p className="legend">200 грн</p> */}
      </div>
      <div>
        <img
          className={s.item}
          src={require('../../images/mask7.jpg')}
          alt="mask"
        />
        {/* <p className="legend">250 грн</p> */}
      </div>
      <div>
        <img
          className={s.item}
          src={require('../../images/mask8.jpg')}
          alt="mask"
        />
        {/* <p className="legend">150 грн</p> */}
      </div>
    </Carousel>
  );
}
