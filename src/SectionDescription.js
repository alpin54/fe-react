import descImage from './assets/img/dummy/bg-1.png';

function SectionDescription() {
  return (
    <div className="section-desc">
      <div className="container">
        <div className="section-desc__box">
          <div className="section-desc__img">
            <img className="section-desc__img__el" src={descImage} alt="We are a high-level data storage bank" />
          </div>
          <div className="section-desc__txt">
            <h3 className="section-desc__title">We are a high-level data storage bank</h3>
            <p className="section-desc__desc">The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionDescription;
