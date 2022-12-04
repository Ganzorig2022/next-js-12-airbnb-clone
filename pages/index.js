import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { SmallCard } from '../components/SmallCard';
import { MediumCard } from '../components/MediumCard';
import { LargeCard } from '../components/LargeCard';

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className=''>
      <Head>
        <title>Ganzo Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* HEADER */}
      <Header />
      {/* BANNER */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          {
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {exploreData?.map((item, i) => (
                <SmallCard
                  key={i}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              ))}
            </div>
          }
        </section>
        <section>
          <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
          {
            <div className='flex space-x-3 overflow-scroll scrollbar-hide'>
              {cardsData?.map((item) => (
                <MediumCard key={item.img} img={item.img} title={item.title} />
              ))}
            </div>
          }
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

//https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

//sm:grid-cols-2 ==> 640px dr grid ni 2 bagana bolno.
