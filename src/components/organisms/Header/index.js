import { Logo, BurgerMenu } from 'components';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__nav">
          <a className="header__logo" href="index.html">
            <Logo className='header__logo__img'/>
          </a>
          <ul className="header__nav__menu">
            <li className="header__nav__item">
              <a className="header__nav__link header__nav__link--active" href="index.html">Home</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="find-doctor.html">Find a doctor</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="apps.html">Apps</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="testimonials.html">Testimonials</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="about-us.html">About us</a>
            </li>
          </ul>
          <BurgerMenu/>
        </div>
      </div>
    </div>
  );
}

export default Header;
