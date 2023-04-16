import s from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_section}>
        <p className={s.footer_text}> 2023 | All Rights Reserved |&nbsp;</p>
        <p className={s.footer_margin}>
          Developed by <span className={s.footer_name}>Shturma</span>
        </p>
      </div>
    </footer>
  );
};
