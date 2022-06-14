import BlogImage1 from '../img/dummy/blog-1.jpg';
import BlogImage2 from '../img/dummy/blog-2.jpg';
import BlogImage3 from '../img/dummy/blog-3.jpg';
import BlogItem from './BlogItem';
import Button from './Button';

function Blog() {

  // blog data
  const blogData = [
    {
      to: '/blog-detail',
      image: BlogImage1,
      title: "Disease detection, check up in the laboratory",
      desc: "In this case, the role of the health laboratory is very important to doa disease detection"
    },
    {
      to: '/blog-detail',
      image: BlogImage2,
      title: "Herbal medicines that are safe for consumption",
      desc: "Herbal medicine is very widely used at this time because of its very good for your health"
    },
    {
      to: '/blog-detail',
      image: BlogImage3,
      title: "Natural care for healthy facial skin",
      desc: "A healthy lifestyle should start from now and also for your skin health. There are some"
    }
  ];

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__title">
          <h3 className="text-title">Check out our latest article</h3>
        </div>
        <div className="blog__content">
          <div className="blog__list js-blog-list">
          { 
            blogData.map( (v, i) => {
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
