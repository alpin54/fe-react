import { Fragment } from 'react';
// components
import { ServicesItem, Button } from 'components';

const Services = ({ data }) => {

  return (
    <div className="service">
      <div className="container">
        <div className="service__head">
          <h3 className="text-title">{data.title}</h3>
          <p className="text-desc">{data.desc}</p>
        </div>
        <div className="service__body">
          <div className="service__list">
            { 
              data.list.map( (val, idx) => {
                return (
                  <Fragment key={idx}>
                    <ServicesItem data={val} />
                  </Fragment>
                )
              }) 
            }
          </div>
        </div>
        <div className="service__footer">
          <Button type='link' to='/service' variant='secondary'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
