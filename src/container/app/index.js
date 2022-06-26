// dummy
import { servicesData, blogData, testimonyData, sectionData } from 'assets/dummy';

// components
import { Header, Footer, HeroBanner, SectionDescription, Services, Blog, Testimony } from 'components';

function App() {

  return (
    <>
      <Header />
      <div className='main-site'>
        <HeroBanner />
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
