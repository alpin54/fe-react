// dummy
import { bannerData, servicesData, sectionData } from 'assets/dummy';

// components
import { Header, HeroBanner, Footer, SectionDescription, Services } from 'components';

function Home() {
  return (
    <>
      <Header />
      <div className='main-site'>
        <HeroBanner data={bannerData} />
        <Services data={servicesData} />
        <SectionDescription data={sectionData.data1} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
