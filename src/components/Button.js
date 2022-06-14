import cn from 'classnames';

function Button(props) {

  const { to, children, type = 'button', variant = 'primary', block = false, arrowIcon = false } = props

  const classNames = cn('btn', `btn--${variant}`, {
    'btn--block': block,
  });

  return (
    <>
      {
        type === 'link' && (
          <a className={classNames} href={to}>
            {children}
            {arrowIcon && (
              <i className='icon-arrow-down'></i>
            )}
          </a>
        )
      }
      {
        type !== 'link' && (
          <button type={type} className={classNames}>
            {children}
            {arrowIcon && (
              <i className='icon-arrow-down'></i>
            )}
          </button>
        )
      }
    </>
  );
}

export default Button;
