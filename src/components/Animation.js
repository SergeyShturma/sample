import { ConicTextGradient } from 'react-text-gradients-and-animations';
import s from './Animation.module.css';

export const Animation = () => {
  return (
    <ConicTextGradient
      angle={0}
      className={s.brand}
      animate
      animateDuration={10}
      animateDirection={'horizontal'}
      position={'center'}
      colors={['#00ff00 25%', '#ffff00 75%']}
    >
      &nbsp;The Mountain
    </ConicTextGradient>
  );
};
