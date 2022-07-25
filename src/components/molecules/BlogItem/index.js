import { SystemIcon } from 'components';

const BlogItem = ({ data }) => {
  return (
    <div className='blog__item'>
      <div className='blog__box'>
        <a className='blog__link' href={data.to}>
          link
        </a>
        <div className='blog__img'>
          <img className='blog__img__el' src={data.image} alt={data.title} />
        </div>
        <div className='blog__txt'>
          <h3 className='blog__txt__title'>{data.title}</h3>
          <p className='blog__txt__desc'>{data.desc}</p>
          <button className='btn-forward' type='button'>
            Read More
            <SystemIcon name='arrow-right' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
