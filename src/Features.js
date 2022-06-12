import featuresImage from './assets/img/dummy/f-1.png';

function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="features__head">
          <h2 className="features__title">Features</h2>
          <h4 className="features__desc">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</h4>
        </div>
        <div className="features__body">
          <div className="features__item js-features-card">
            <div className="features__box">
              <div className="features__img">
                <img className="features__img__el" src={featuresImage} alt="Search Data" />
              </div>
              <div className="features__txt">
                <h3 className="features__txt__title">Search Data</h3>
                <div className="features__txt__box">
                  <p className="features__txt__desc">Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                </div>
                <a className="features__txt__link" href="index.html">
                  Learn more
                  <i className="fi fi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="features__item js-features-card">
            <div className="features__box">
              <div className="features__img">
                <img className="features__img__el" src={featuresImage} alt="24 Hours Access" />
              </div>
              <div className="features__txt">
                <h3 className="features__txt__title">24 Hours Access</h3>
                <div className="features__txt__box">
                  <p className="features__txt__desc">Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.</p>
                </div>
                <a className="features__txt__link" href="index.html">
                  Learn more
                  <i className="fi fi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="features__item js-features-card">
            <div className="features__box">
              <div className="features__img">
                <img className="features__img__el" src={featuresImage} alt="Print Out" />
              </div>
              <div className="features__txt">
                <h3 className="features__txt__title">Print Out</h3>
                <div className="features__txt__box">
                  <p className="features__txt__desc">Print out service gives you convenience if someday you need print data, just edit it all and just print it.</p>
                </div>
                <a className="features__txt__link" href="index.html">
                  Learn more
                  <i className="fi fi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="features__item js-features-card">
            <div className="features__box">
              <div className="features__img">
                <img className="features__img__el" src={featuresImage} alt="Security Code" />
              </div>
              <div className="features__txt">
                <h3 className="features__txt__title">Security Code</h3>
                <div className="features__txt__box">
                  <p className="features__txt__desc">Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</p>
                </div>
                <a className="features__txt__link" href="index.html">
                  Learn more
                  <i className="fi fi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
