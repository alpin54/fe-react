import './App.css';
import logo from './assets/img/logo/data-warehouse.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__nav">
          <a className="header__logo" href="index.html">
            <img className="header__logo__img" src={logo} alt="Data Warehouse" />
          </a>
          <div className="header__nav__menu">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <a className="header__nav__link header__nav__link--active" href="about.html">About</a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="help.html">Help</a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="features.html">Features</a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="signup.html">Signup</a>
              </li>
            </ul>
            <div className="header__nav__btn">
              <a className="btn btn--white" href="index.html">Request Demo<i className="fi fi-arrow-right"></i></a>
            </div>
          </div>
          <button className="burger-menu js-mobile-menu" type="button">
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
