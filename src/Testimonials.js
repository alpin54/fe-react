import customer from './assets/img/dummy/customer-1.png';

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__wrapper">
          <h2 className="testimonials__title">Testimonials</h2>
          <div className="testimonials__list js-testimonials">
            <div className="testimonials__item">
              <div className="testimonials__box">
                <div className="testimonials__head">
                  <div className="testimonials__avatar">
                    <img className="testimonials__avatar__el" src={customer} alt="John Fang" />
                  </div>
                  <div className="testimonials__txt">
                    <h3 className="testimonials__name">John Fang</h3>
                    <p className="testimonials__position">wordfaang.com</p>
                  </div>
                </div>
                <div className="testimonials__body">
                  <p className="testimonials__desc">Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
