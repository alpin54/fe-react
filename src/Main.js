import HeroBanner from './HeroBanner';
import SectionDescription from './SectionDescription';
import Features from './Features';
import Testimonials from './Testimonials';

function Main() {
  return (
    <div className="main-site js-main-site">
      <HeroBanner />
      <SectionDescription />
      <Features />
      <Testimonials />
    </div>
  );
}

export default Main;
