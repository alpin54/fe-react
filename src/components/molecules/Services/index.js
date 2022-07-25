import { Fragment } from 'react';
// components
import { ServicesItem, Button, TextTitle } from 'components';

const Services = ({ data }) => {
  return (
    <div className='service'>
      <div className='container'>
        <div className='service__head'>
          <TextTitle title={data.title} desc={data.desc} />
        </div>
        <div className='service__body'>
          <div className='service__list'>
            {data.list.map((val, idx) => {
              return (
                <Fragment key={idx}>
                  <ServicesItem data={val} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className='service__footer'>
          <Button type='link' to='/service' variant='secondary'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
