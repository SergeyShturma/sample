import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './Layout.module.css';
import { Footer } from './Footer';
import { Suppliers } from './Suppliers';
import { Arrow } from './Arrow';
// import { Theme } from './Theme';

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <div className={s.banner}>#StandWithUKRAINE</div>
        <nav className={s.header}>
          <h2 className={s.header__logo_title}>
            Якісний оригінальний одяг фірмового бренду The Mountain з офіційного
            магазину в США.
          </h2>
          <div className={s.link__wrapper}>
            <NavLink className={s.link} activeStyle={s.activeStyle} to="/">
              Футболки
            </NavLink>
            <NavLink className={s.link} activeStyle={s.activeStyle} to="/Masks">
              Маски
            </NavLink>
          </div>
          <p className={s.link_info}>viber та telegram: (099) 044-88-74</p>
        </nav>
      </header>
      {/* <Theme /> */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Suppliers />
      <Arrow />
      <Footer />
    </div>
  );
};
