import Button from './Button';

function HeroBannerItem({ to, image, title, desc }) {
  return (
    <div className="hero-banner__item">
      <div className="container">
        <div className="hero-banner__wrapper">
          <div className="hero-banner__img">
            <img className="hero-banner__img__el" src={image} alt="Virtual healthcare for you" />
          </div>
          <div className="hero-banner__txt">
            <h2 className="hero-banner__title">{title}</h2>
            <p className="hero-banner__desc">{desc}</p>
            <div className="hero-banner__btn">
              <Button element='link' to={to}>
                Consult today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBannerItem;
