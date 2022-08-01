// dummy
import {
  bannerData,
  servicesData,
  blogData,
  testimonyData,
  sectionData
} from 'assets/dummy';

// templates
import { Default } from 'container/templates';

// components
import {
  HeroBanner,
  SectionDescription,
  Services,
  Blog,
  Testimony
} from 'components';

function Home() {
  return (
    <Default>
      <HeroBanner data={bannerData} />
      <Services data={servicesData} />
      <SectionDescription data={sectionData.data1} />
      <SectionDescription
        data={sectionData.data2}
        reverse={true}
        arrowIcon={true}
      />
      <Testimony data={testimonyData} />
      <Blog data={blogData} />
    </Default>
  );
}

export default Home;
