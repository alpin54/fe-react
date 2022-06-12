import logo from './assets/img/logo/data-warehouse-text.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__txt">
            <h2 className="footer__txt__title">Try for free!</h2>
            <p className="footer__txt__desc">Get limited 1 week free try our features!</p>
          </div>
          <div className="footer__btn">
            <a className="btn btn--secondary" href="index.html">Learn more</a>
            <a className="btn btn--white" href="index.html">
              Request Demo
              <i className="fi fi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__about">
            <a className="footer__logo" href="index.html">
              <img className="footer__logo__el" src={logo} alt="data-warehouse-text.svg" />
            </a>
            <p className="footer__about__address">Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
            <p className="footer__about__email">info@warehouse.project</p>
            <p className="footer__about__phone">1-232-3434 (Main)</p>
          </div>
          <div className="footer__menu">
            <div className="footer__list js-accordion-footer">
              <div className="footer__list__item">
                <h3 className="footer__title">About</h3>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="profile.html">Profile</a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="features.html">Features</a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="careers.html">Careers</a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="dw-news.html">DW News</a>
                  </li>
                </ul>
              </div>
              <div className="footer__list__item">
                <h3 className="footer__title">Help</h3>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="support.html">Support</a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="sign.html">Sign Up</a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="guide.html">Guide</a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="reports.html">Reports</a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="qa.html">Q&A</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__sosmed">
            <h3 className="footer__sosmed__title">Social Media</h3>
            <ul className="footer__sosmed__nav">
              <li className="footer__sosmed__item facebook">
                <a className="footer__sosmed__link" href="facebook.com">
                  <i className="fi fi-facebook"></i>
                </a>
              </li>
              <li className="footer__sosmed__item twitter">
                <a className="footer__sosmed__link" href="twitter.com">
                  <i className="fi fi-twitter"></i>
                </a>
              </li>
              <li className="footer__sosmed__item instagram">
                <a className="footer__sosmed__link" href="instagram.com">
                  <i className="fi fi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
