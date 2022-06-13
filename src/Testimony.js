import testimonyImage1 from './assets/img/dummy/testimony-1.jpg';
import TestimonyItem from './TestimonyItem';

function Testimony() {

  // testimony data
  const testimonyData = [
    {
      image: testimonyImage1,
      name: "Edward Newgate",
      position: "Founder Circle",
      desc: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
    }
  ];

  return (
    <div className="testimony">
      <div className="container">
        <div className="testimony__box">
          <div className="testimony__head">
            <h3 className="text-title text-title--white">What our customer are saying</h3>
          </div>
          <div className="testimony__body">
            { 
              testimonyData.map( (v, i) => {
                return (
                  <TestimonyItem key={`banner-${i}`} image={v.image} name={v.name} position={v.position} desc={v.desc} />
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
