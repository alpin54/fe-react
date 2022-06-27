import { Fragment } from 'react';
// components
import { TestimonyItem } from 'components';

const Testimony = ( { data } ) => {

  return (
    <div className="testimony">
      <div className="container">
        <div className="testimony__box">
          <div className="testimony__head">
            <h3 className="text-title text-title--white">{data.title}</h3>
          </div>
          <div className="testimony__body">
            { 
              data.list.map( (val, idx) => {
                return (
                  <Fragment key={idx}>
                    <TestimonyItem data={val}/>
                  </Fragment>
                )
              }) 
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
