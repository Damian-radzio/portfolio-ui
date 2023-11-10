import ContactButton from '@/components/Button';
import styles from './styles.module.scss';
import Triangle from '@/components/Triangle';

const HomeMainView = (): JSX.Element => {
  return (
    <div className={styles.HomeMainView}>
      <div className={styles.mainTextWrapper}>
        <p className={styles.fullName}>Damian Radecki</p>
        <p className={styles.profession}>Front-end Developer</p>
        <p className={styles.longText}>
          Witaj na moim portfolio! Jako Front-end Developer staram się tworzyć
          estetyczne i użyteczne strony internetowe, które nie tylko wyglądają
          dobrze, ale także zapewniają użytkownikom doskonałe doświadczenia.
        </p>
        <ContactButton buttonText={'Napisz do mnie'} />
      </div>
    </div>
  );
};

export default HomeMainView;
