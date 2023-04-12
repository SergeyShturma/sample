import Animate from 'react-smooth';
import s from './Animation.module.css';

export const Animation = () => {
  return (
    <Animate from={{ opacity: 0 }} to={{ opacity: 1 }} easing="ease-in">
      {({ opacity }) => (
        <span style={{ opacity }} className={s.brand}>
          {' '}
          The Mountain
        </span>
      )}
    </Animate>
  );
};
