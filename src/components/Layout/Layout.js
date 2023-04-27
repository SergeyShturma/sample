import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import s from './Layout.module.css';
import { Footer } from '../Footer/Footer';
import { Arrow } from '../Arrow/Arrow';
import RunningString from '../RunningString/RunningString';
import { Suppliers } from '../Suppliers/Suppliers';
import Loader from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <RunningString />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Suppliers />
      <Arrow />
      <Footer />
    </div>
  );
};
