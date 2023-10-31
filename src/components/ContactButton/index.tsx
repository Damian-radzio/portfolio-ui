import Link from 'next/link';
import styles from './styles.module.scss';

const ContactButton = (): JSX.Element => {
  return (
    <Link href="/contact">
      <button className={styles.contactButton}> Napisz do mnie</button>;
    </Link>
  );
};

export default ContactButton;
