import Head from 'next/head';
import { Lato } from 'next/font/google';
import HomeView from '@/views/HomeView';

const poppins = Lato({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Damian Radecki - Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <HomeView />
      </main>
    </>
  );
}
