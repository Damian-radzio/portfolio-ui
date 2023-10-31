import ContactButton from '@/components/ContactButton';
import styles from './styles.module.scss';
import Triangle from '@/components/Triangle';

const HomeMainView = (): JSX.Element => {
  return (
    <div className={styles.HomeMainView}>
      <div className={styles.mainTextWrapper}>
        <div className={styles.fullName}>Damian Radecki</div>
        <div className={styles.profession}>Front-end Developer</div>
        <div className={styles.longText}>
          Witaj na moim portfolio! Jako Front-end Developer staram się tworzyć
          estetyczne i użyteczne strony internetowe, które nie tylko wyglądają
          dobrze, ale także zapewniają użytkownikom doskonałe doświadczenia.
        </div>
        <ContactButton />
      </div>
    </div>
  );
};

export default HomeMainView;
