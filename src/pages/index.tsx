import Head from 'next/head';
import { Poppins } from 'next/font/google';
import HomeView from '@/views/HomeView';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
export default function Home() {
  return (
    <>
      <Head>
        <title>SocialBuzzStudio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <HomeView />
      </main>
    </>
  );
}
