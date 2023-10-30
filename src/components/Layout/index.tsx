import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import styles from './styles.module.scss';

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
