// assets
import imgSD1 from './img/dummy/section-description-1.png';
import imgSD2 from './img/dummy/section-description-2.png';

// components
import {Header, Footer, HeroBanner, Services, SectionDescription, Testimony, Blog} from './components';

function App() {
  const dataSection1 = {
    image: imgSD1,
    title: 'Leading healthcare providers',
    desc: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver',
    btn: {
      to: '/services',
      text: 'Learn More'
    }
  };
  const dataSection2 = {
    image: imgSD2,
    title: 'Download our mobile apps',
    desc: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
    btn: {
      to: '/providers',
      text: 'Download'
    }
  };

  return (
    <>
      <Header />
      <div className='main-site'>
        <HeroBanner />
        <Services />
        <SectionDescription data={dataSection1} />
        <SectionDescription data={dataSection2} reverse={true} arrowIcon={true} />
        <Testimony />
        <Blog />
      </div>
      <Footer />
    </>
  );
}

export default App;
