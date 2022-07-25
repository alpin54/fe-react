import { Fragment } from 'react';
// components
import { BlogItem, Button, TextTitle } from 'components';

const Blog = ({ data }) => {
  return (
    <div className='blog'>
      <div className='container'>
        <div className='blog__title'>
          <TextTitle title={data.title} />
        </div>
        <div className='blog__content'>
          <div className='blog__list js-blog-list'>
            {data.list.map((val, idx) => {
              return (
                <Fragment key={idx}>
                  <BlogItem data={val} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className='blog__btn'>
          <Button type='link' to={data.btn.to} variant='secondary'>
            {data.btn.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
