import cn from 'classnames';

const TextTitle = ({ className = 'text-title', modifier, title, desc }) => {
  const classModifier = modifier ? `text-title--${modifier}` : '';
  const classNames = cn(className, classModifier);
  const classDesc = `text-desc ${modifier ? `text-desc--${modifier}` : ''}`;

  return (
    <>
      <h3 className={classNames}>{title}</h3>
      {desc && <p className={classDesc}>{desc}</p>}
    </>
  );
};

export default TextTitle;
