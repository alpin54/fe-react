// dummy
import { bannerData, servicesData, blogData, testimonyData, sectionData } from 'assets/dummy';

// components
import { Header, HeroBanner, Footer, SectionDescription, Services, Blog, Testimony } from 'components';

function App() {

  return (
    <>
      <Header />
      <div className='main-site'>
        <HeroBanner data={ bannerData } />
        <Services data={ servicesData } />
        <SectionDescription data={sectionData.data1} />
        <SectionDescription data={sectionData.data2} reverse={true} arrowIcon={true} />
        <Testimony data={ testimonyData } />
        <Blog data={ blogData } />
      </div>
      <Footer />
    </>
  );
}

export default App;
