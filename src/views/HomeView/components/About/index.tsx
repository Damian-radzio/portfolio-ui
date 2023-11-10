import styles from './styles.module.scss';
import Button from '@/components/Button';
import ExampleImage from '@/assets/ex-img.png';
import Image from 'next/image';
const About = (): JSX.Element => {
  return (
    <div className={styles.HomeAbout}>
      <div className={styles.aboutTextWrapper}>
        <p className={styles.textHeader}>Cześć! Jestem Damian...</p>
        <p className={styles.longText}>
          ...i miło mi Cię poznać! Jestem młodym front-end developerem, który z
          pasją zajmuje się tworzeniem responsywnych i atrakcyjnych stron
          internetowych. Moja przygoda z kodowaniem rozpoczęła się w trakcie
          słynnego locdown’u 😷, a teraz jestem gotowy, by przekształcać pomysły
          w rzeczywistość cyfrową.Moje doświadczenie obejmuje prace nad
          różnorodnymi projektami, zarówno dla małych startupów, jak i większych
          korporacji. Jestem przekonany, że kluczem do udanej strony
          internetowej jest połączenie funkcjonalności z estetyką. Pracując nad
          projektami, staram się też być na bieżąco z najnowszymi trendami, aby
          dostarczać innowacyjne rozwiązania. Więcej informacji o mojej ścieżce
          zawodowej i doświadczeniach znajdziesz w moim CV.Kliknij poniższy
          button by dowiedzieć się więcej!
        </p>
        <Button buttonText={'Zobacz CV'} />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={ExampleImage}
          width="300"
          height="300"
          alt="przykładowe zdjęcie"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default About;
