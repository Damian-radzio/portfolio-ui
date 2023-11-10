import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  buttonText: string;
};

const Button = ({ buttonText }: Props): JSX.Element => {
  return (
    <Link href="/contact">
      <button className={styles.contactButton}>{buttonText}</button>
    </Link>
  );
};

export default Button;
