import styles from './styles.module.scss';
import Link from 'next/link';
const Navigation = (): JSX.Element => {
  return (
    <div className={styles.navbarWrapper}>
    
      <nav>
        <ul className={styles.navList}>
          <Link href="/contact">Kontact</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/newsletter">Newsletter</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
