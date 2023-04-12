import Marquee from 'react-double-marquee';
import s from './RunningString.module.css';

export default function RunningString() {
  return (
    <div className={s.string}>
      <Marquee scrollWhen="always">
        За рекомендацією від друга - знижка 10% на першу футболку!
      </Marquee>
    </div>
  );
}
