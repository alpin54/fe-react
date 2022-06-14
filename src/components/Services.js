import serviceImage1 from '../img/dummy/features-1.svg';
import serviceImage2 from '../img/dummy/features-2.svg';
import serviceImage3 from '../img/dummy/features-3.svg';
import serviceImage4 from '../img/dummy/features-4.svg';
import serviceImage5 from '../img/dummy/features-5.svg';
import serviceImage6 from '../img/dummy/features-6.svg';
import ServicesItem from './ServicesItem';
import Button from './Button';

function Services() {

  // services data
  const servicesData = [
    {
      image: serviceImage1,
      title: "Search doctor",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
      image: serviceImage2,
      title: "Online pharmacy",
      desc: "Buy your medicines with our mobile application with a simple delivery system"
    },
    {
      image: serviceImage3,
      title: "Consultation",
      desc: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      image: serviceImage4,
      title: "Details info",
      desc: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      image: serviceImage5,
      title: "Emergency care",
      desc: "You can get 24/7 urgent care for yourself or your children and your lovely family"
    },
    {
      image: serviceImage6,
      title: "Tracking",
      desc: "Track and save your medical history and health data"
    },
  ];

  return (
    <div className="service">
      <div className="container">
        <div className="service__head">
          <h3 className="text-title">Our services</h3>
          <p className="text-desc">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        </div>
        <div className="service__body">
          <div className="service__list">
            { 
              servicesData.map( (v, i) => {
                return (
                  <ServicesItem key={`services-${i}`} image={v.image} title={v.title} desc={v.desc} />
                )
              }) 
            }
          </div>
        </div>
        <div className="service__footer">
          <Button element='link' to='learn-more.html' variant='secondary'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
