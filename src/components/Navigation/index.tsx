import styles from './styles.module.scss';
import Facebook from '../../assets/Facebook.svg';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';
import Image from 'next/image';
import Link from 'next/link';
const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.linksList}>
        <Link
          href="https://www.linkedin.com/in/damian-radecki/"
          target="_blank"
        >
          <Image
            src={Linkedin}
            alt="link do linkedin"
            width="24"
            height="24"
          ></Image>
        </Link>
        <Link href="https://github.com/Damian-radzio" target="blank">
          <Image
            src={Github}
            alt="link do github"
            width="24"
            height="24"
          ></Image>
        </Link>
        <Link
          href="https://www.facebook.com/Damiandejmon16?locale=pl_PL"
          target="_blank"
        >
          <Image
            src={Facebook}
            alt="link do facebook"
            width="24"
            height="24"
          ></Image>
        </Link>
      </div>
      <ul className={styles.navList}>
        <Link href="/about">O mnie</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/technologies">Technologie</Link>
        <Link href="/contact">Kontakt</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
