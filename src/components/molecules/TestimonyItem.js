const TestimonyItem = ({ data }) => {
  return (
    <div className="testimony__item">
      <div className="testimony__customer">
        <div className="testimony__avatar">
          <img className="testimony__avatar__img" src={data.image} alt={data.name} />
          </div>
        <div className="testimony__txt">
          <h3 className="testimony__customer__name">{data.name}</h3>
          <p className="testimony__customer__position">{data.position}</p>
        </div>
      </div>
      <div className="testimony__desc">
        <p className="testimony__desc__txt">"{data.desc}"</p>
      </div>
    </div>
  );
}

export default TestimonyItem;
