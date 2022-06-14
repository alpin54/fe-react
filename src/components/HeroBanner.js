import bannerImage from '../img/dummy/home-banner-1.png';
import HeroBannerItem from './HeroBannerItem';

function HeroBanner() {

  // banner data
  const bannerData = [
    {
      to: 'apps.html',
      image: bannerImage,
      title: "Virtual healthcare for you",
      desc: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
    }
  ];

  return (
    <div className="hero-banner hero-banner--single">
      { 
        bannerData.map( (v, i) => {
          return (
            <HeroBannerItem key={`banner-${i}`} to={v.to} image={v.image} title={v.title} desc={v.desc} />
          )
        }) 
      }
    </div>
  );
}

export default HeroBanner;
