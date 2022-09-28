import Head from 'next/head';
import { StartPage } from '../components/StartPage';
import { VideoInner } from '../components/VideoInner';

const Home = () => {
  return (
    <>
      <Head>
        <title>Bee Honey | Customs Broker - Import and Export Services</title>
        <meta
          name="description"
          content="Online Customs Broker Bee Honey is the fastest way to complete your US Customs Clearance. Import to the USA, fast and easily!"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.beehoneyllc.us/" />
      </Head>
      <main className="d-flex flex-column">
        <VideoInner />
        <StartPage />
      </main>
    </>
  );
};
export default Home;
