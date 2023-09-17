import {Banner, NewAddedProducts, SpecialOffers} from './components';

function Landing() {
  return (
    <>
      <Banner />
      <div className='container'>
        <SpecialOffers />
      </div>
        <NewAddedProducts/>
    </>
  );
}

export default Landing;
