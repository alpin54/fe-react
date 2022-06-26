// import { Fragment } from 'react';
import ServicesItem from 'components/molecules/ServicesItem';
import Button from 'components/atoms/Button';

const Services = ({data}) => {

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
              data.map( (v, i) => {
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
