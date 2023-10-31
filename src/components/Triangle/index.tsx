import styles from './styles.module.scss';

const Triangle = (): JSX.Element => {
  return (
    <div className={styles.square}>
      <div className={styles.trianglesWrapper}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default Triangle;
