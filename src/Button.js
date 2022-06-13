function Button({ element='button', type='button', to, variant='primary', children }) {
  return (
    <>
      {
        element === 'button' && (
          <button className={`btn btn--${variant}`} type={type}>
            {children}
          </button>
        )
      }
      {
        element === 'link' && (
          <a className={`btn btn--${variant}`} href={to}>
            {children}
          </a>
        )
      }
      {
        element === 'icon' && (
          <button className='btn-forward' type={type}>
            {children}
          </button>
        )
      }
    </>
  );
}

export default Button;
