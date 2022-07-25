// dummy
import { bannerData, testimonyData } from 'assets/dummy';

// components
import { Header, HeroBanner, Footer, Testimony } from 'components';

function Testimonials() {
  return (
    <>
      <Header />
      <div className='main-site'>
        <HeroBanner data={bannerData} />
        <Testimony data={testimonyData} />
      </div>
      <Footer />
    </>
  );
}

export default Testimonials;
