import image1 from './assets/img/dummy/section-description-1.png';
import image2 from './assets/img/dummy/section-description-2.png';
import Button from './Button';

function SectionDescription() {

  // description data
  const descriptionData = [
    {
      modifier: 'section-description--reverse',
      image: image1,
      title: "Leading healthcare providers",
      desc: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
      btn: {
        to: 'learn-more.html',
        text: 'Learn More'
      }
    },
    {
      image: image2,
      title: "Download our mobile apps",
      desc: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      btn: {
        to: 'downloads.html',
        text: 'Downloads',
        icon: 'icon-arrow-down'
      }
    }
  ];

  return (
    <>
      { 
        descriptionData.map( (v, i) => {
          return (
            <div className={`section-description ${(v.modifier !== undefined ? v.modifier : '')}`} key={`sd-${i}`}>
              <div className="container">
                <div className="section-description__box">
                  <div className="section-description__img">
                    <img className="section-description__img__el" src={v.image} alt={v.title} />
                  </div>
                  <div className="section-description__txt">
                    <div className="section-description__txt__wrapper">
                      <h3 className="text-title text-title--left">{v.title}</h3>
                      <p className="text-desc text-desc--left">{v.desc}</p>
                      <Button element='link' to={v.btn.to} variant='secondary'>
                        {v.btn.text}
                        {( v.btn.icon !== undefined ? <i className={v.btn.icon}></i> : '')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }) 
      }
    </>
  );
}

export default SectionDescription;
