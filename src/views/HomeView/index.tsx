import Triangle from '@/components/Triangle';
import HomeMainView from './components/HomeMainView';
import styles from './styles.module.scss';
import About from './components/About';

const HomeView = (): JSX.Element => {
  return (
    <div className={styles.Home}>
      <div className={styles.homeMainViewWrapper}>
        <div className={styles.trainglesWrapper}>
          <Triangle />
        </div>
        <HomeMainView />
      </div>
      <About />
    </div>
  );
};

export default HomeView;
