import bannerImage from './assets/img/dummy/bg-1.png';

function HeroBanner() {
  return (
    <div className="hero-banner hero-banner--single">
      <div className="hero-banner__item">
        <div className="container">
          <div className="hero-banner__img">
            <img className="hero-banner__img__el" src={bannerImage} alt="Save your data storage here." />
          </div>
          <div className="hero-banner__txt">
            <h2 className="hero-banner__title">Save your data storage here.</h2>
            <p className="hero-banner__desc">Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</p>
            <div className="hero-banner__btn">
              <a className="btn btn--primary" href="apps.html">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
