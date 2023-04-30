import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import s from './ImgCarousel.module.css';

export default function ImgCarousel({ data }) {
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
      {data.map(({ id, image }) => (
        <div key={id}>
          <img className={s.item} src={image} alt="the mountain item" />
        </div>
      ))}
    </Carousel>
  );
}
