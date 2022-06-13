import HeroBanner from './HeroBanner';
import Services from './Services';
import SectionDescription from './SectionDescription';
import Testimony from './Testimony';
import Blog from './Blog';


function Main() {
  return (
    <div className="main-site js-main-site">
      <HeroBanner />
      <Services />
      <SectionDescription />
      <Testimony />
      <Blog />
    </div>
  );
}

export default Main;
