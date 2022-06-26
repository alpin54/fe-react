import TestimonyItem from 'components/molecules/TestimonyItem';

const Testimony = ( { data } ) => {

  return (
    <div className="testimony">
      <div className="container">
        <div className="testimony__box">
          <div className="testimony__head">
            <h3 className="text-title text-title--white">What our customer are saying</h3>
          </div>
          <div className="testimony__body">
            { 
              data.map( (v, i) => {
                return (
                  <TestimonyItem key={`testimony-${i}`} image={v.image} name={v.name} position={v.position} desc={v.desc} />
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
