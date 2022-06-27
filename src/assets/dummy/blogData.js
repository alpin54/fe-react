import BlogImage1 from 'assets/img/dummy/blog-1.jpg';
import BlogImage2 from 'assets/img/dummy/blog-2.jpg';
import BlogImage3 from 'assets/img/dummy/blog-3.jpg';

// blog data
const blogData = {
  title: 'Check out our latest article',
  btn: {
    to: '/blog',
    text: 'Read More'
  },
  list: [
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
  ]
};

export default blogData;