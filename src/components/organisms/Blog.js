import BlogItem from 'components/molecules/BlogItem';
import Button from 'components/atoms/Button';

const Blog = ({data}) => {

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__title">
          <h3 className="text-title">Check out our latest article</h3>
        </div>
        <div className="blog__content">
          <div className="blog__list js-blog-list">
          { 
            data.map( (v, i) => {
              return (
                <BlogItem key={`blog-${i}`} to={v.to} image={v.image} title={v.title} desc={v.desc} />
              )
            }) 
          }
          </div>
        </div>
        <div className="blog__btn">
          <Button element='link' to='blog-detail.html' variant='secondary'>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
