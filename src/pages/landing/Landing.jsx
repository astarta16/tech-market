import { Banner, SpecialOffers, SpecialCard } from './components';

function Landing() {
  return (
    <>
      <SpecialCard />
      <Banner />
      <div className='container'>
        <SpecialOffers />
      </div>
    </>
  );
}

export default Landing;
