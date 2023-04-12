import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './Layout.module.css';
import { Footer } from './Footer';
import { Suppliers } from './Suppliers';
import { Arrow } from './Arrow';
import { Animation } from './Animation';
import RunningString from './RunningString';
import Loader from './Loader';
// import { Theme } from './Theme';

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <div className={s.banner}>#StandWithUKRAINE</div>
        <nav className={s.header}>
          <h2 className={s.header__logo_title}>
            Якісний оригінальний одяг фірмового бренду
            <Animation /> з офіційного магазину в США.
          </h2>
          <div className={s.link__wrapper}>
            <NavLink className={s.link} to="/">
              Футболки
            </NavLink>
            <NavLink className={s.link} to="/ShirtsWomen">
              Жіночі
            </NavLink>
            <NavLink className={s.link} to="/ShirtsChild">
              Дитячі
            </NavLink>
            <NavLink className={s.link} to="/Masks">
              Маски
            </NavLink>
          </div>
          <p className={s.link_info}>viber та telegram: </p>
          <a href="https://t.me/Serg_Shturma/" className={s.link_phone}>
            (099) 044-88-74
          </a>

          <a
            href="https://www.kidstaff.com.ua/userhistory-1085307.html"
            className={s.link_feedback}
          >
            Відгуки
          </a>
        </nav>
      </header>
      <RunningString />
      {/* <Theme /> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Suppliers />
      <Arrow />
      <Footer />
    </div>
  );
};
