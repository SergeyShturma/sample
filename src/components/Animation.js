import { ConicTextGradient } from 'react-text-gradients-and-animations';
import s from './Animation.module.css';

export const Animation = () => {
  return (
    <ConicTextGradient
      angle={45}
      className={s.brand}
      animate
      animateDuration={10}
      animateDirection={'diagonal'}
      position={'center'}
      colors={['#5DADE2', '#ffff00']}
    >
      &nbsp;The Mountain
    </ConicTextGradient>
  );
};
