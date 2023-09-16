import { Banner, SpecialOffers } from './components';

function Landing() {
  return (
    <>
      <Banner />
      <div className='container'>
        <SpecialOffers />
      </div>
    </>
  );
}

export default Landing;
