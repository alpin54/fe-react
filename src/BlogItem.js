import Button from './Button';

function BlogItem({ to, image, title, desc }) {
  return (
    <div className="blog__item">
      <div className="blog__box">
        <a className="blog__link" href={to}></a>
        <div className="blog__img">
          <img className="blog__img__el" src={image} alt={title} />
        </div>
        <div className="blog__txt">
          <h3 className="blog__txt__title">{title}</h3>
          <p className="blog__txt__desc">{desc}</p>
          <Button element='icon'>
            Read More
            <i className="icon-arrow-right"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
