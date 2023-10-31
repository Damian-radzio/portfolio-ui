import Triangle from '@/components/Triangle';
import HomeMainView from './HomeMainView';
import styles from './styles.module.scss';

const HomeView = (): JSX.Element => {
  return (
    <div className={styles.Home}>
      <div className={styles.homeMainViewWrapper}>
        <div className={styles.trainglesWrapper}>
          <Triangle />
        </div>
        <HomeMainView />
      </div>
    </div>
  );
};

export default HomeView;
