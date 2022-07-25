import cn from 'classnames';
// button
import { Button, TextTitle } from 'components';

const SectionDescription = ({ data, reverse = false, arrowIcon = false }) => {
  const classNames = cn('section-description', {
    'section-description--reverse': reverse
  });

  return (
    <div className={classNames}>
      <div className='container'>
        <div className='section-description__box'>
          <div className='section-description__img'>
            <img className='section-description__img__el' src={data.image} alt={data.title} />
          </div>
          <div className='section-description__txt'>
            <div className='section-description__txt__wrapper'>
              <TextTitle modifier='left' title={data.title} desc={data.desc} />
              <Button type='link' to={data.btn.to} arrowIcon={arrowIcon} variant='secondary'>
                {data.btn.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDescription;
