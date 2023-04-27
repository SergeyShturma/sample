import { NavLink } from 'react-router-dom';
import { AnimationLogo } from '../AnimationLogo/AnimationLogo';
import { FcCellPhone } from 'react-icons/fc';
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { TbMoodKid } from 'react-icons/tb';
import { IoWomanOutline, IoShirtOutline } from 'react-icons/io5';

import s from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={s.banner}>#StandWithUKRAINE</div>
      <nav className={s.header}>
        <h2 className={s.header__logo_title}>
          Якісний оригінальний одяг фірмового бренду
          <AnimationLogo /> з офіційного магазину в США.
        </h2>
        <div className={s.link__wrapper}>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ''}`
            }
            to="/"
          >
            <IoShirtOutline className={s.link_icon_all} />
            <p className={s.link_text}>Футболки</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ''}`
            }
            to="/ShirtsWomenPage"
          >
            <IoWomanOutline className={s.link_icon_women} />
            <p className={s.link_text}>Жіночі</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ''}`
            }
            to="/ShirtsChildPage"
          >
            <TbMoodKid className={s.link_icon_kid} />
            <p className={s.link_text}>Дитячі</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ''}`
            }
            to="/MasksPage"
          >
            <RiSurgicalMaskLine className={s.link_icon} />
            <p className={s.link_text}>Маски</p>
          </NavLink>
        </div>
        <p className={s.link_info}>viber та telegram: </p>
        <a href="https://t.me/Serg_Shturma/" className={s.link_phone_wrapper}>
          <FcCellPhone className={s.phone_icon} />
          <p className={s.link_phone}>(099) 044-88-74</p>
        </a>

        <a
          href="https://www.kidstaff.com.ua/userhistory-1085307.html"
          className={s.link_feedback}
        >
          Відгуки
        </a>
      </nav>
    </header>
  );
};
