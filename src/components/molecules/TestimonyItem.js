const TestimonyItem = ({ image, name, position, desc }) => {
  return (
    <div className="testimony__item">
      <div className="testimony__customer">
        <div className="testimony__avatar">
          <img className="testimony__avatar__img" src={image} alt={name} />
          </div>
        <div className="testimony__txt">
          <h3 className="testimony__customer__name">{name}</h3>
          <p className="testimony__customer__position">{position}</p>
        </div>
      </div>
      <div className="testimony__desc">
        <p className="testimony__desc__txt">"{desc}"</p>
      </div>
    </div>
  );
}

export default TestimonyItem;
