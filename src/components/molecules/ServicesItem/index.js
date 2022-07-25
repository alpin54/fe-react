const ServicesItem = ({ data }) => {
  return (
    <div className='service__card'>
      <div className='service__card__box'>
        <div className='service__card__img'>
          <img className='service__card__img__el' src={data.image} alt={data.title} />
        </div>
        <div className='service__card__txt'>
          <h3 className='service__card__title'>{data.title}</h3>
          <p className='service__card__desc'>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
