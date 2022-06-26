import bannerImage from 'assets/img/dummy/home-banner-1.png';
import Button from 'components/atoms/Button';

const HeroBanner = () => {

  return (
    <div className="hero-banner hero-banner--single">
      <div className="hero-banner__item">
        <div className="container">
          <div className="hero-banner__wrapper">
            <div className="hero-banner__img">
              <img className="hero-banner__img__el" src={bannerImage} alt="Virtual healthcare for you" />
            </div>
            <div className="hero-banner__txt">
              <h2 className="hero-banner__title">Virtual healthcare for you</h2>
              <p className="hero-banner__desc">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
              <div className="hero-banner__btn">
                <Button type='link' to='/app'>
                  Consult today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
