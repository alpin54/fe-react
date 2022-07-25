// components
import { Header, Footer } from 'components';

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <div className='main-site'>{children}</div>
      <Footer />
    </>
  );
};

export default Default;
