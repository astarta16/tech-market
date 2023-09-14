import React, { Fragment } from 'react';
import playstation from '../../assets/banner/playstation-joystick.png';
import bannerMacbook from '../../assets/banner/banner-macbook.png';
import dacoHeadset from '../../assets/banner/daco-headset.png';

export const Banner = () => {
  return (
    <Fragment>
      <div className='banner-container rounded-lg bg-custom-bg container mx-auto'>
        <div className='banner-title text-center'>
          <h1 className='text-3xl text-white font-FiraGO not-italic font-normal'>
            იყიდე და გაყიდე ნივთები მარტივად
          </h1>
        </div>
        <div className='flex items-center justify-center gap-14 mt-4'>
          <img src={playstation} alt='playstation controller' />
          <img src={bannerMacbook} alt='mcbook' />
          <img src={dacoHeadset} alt='deco' />
        </div>
        <div className='banner-buttons  flex justify-center items-center gap-16 pb-3.5 pt-3.5'>
          <button className='pt-3 pb-3 rounded-lg px-12 text-white font-firago bg-banner-bg-blue text-xs font-medium'>
            იყიდე
          </button>
          <button className='pt-3 pb-3 rounded-lg px-12 text-black font-firago bg-banner-bg-yellow text-xs font-medium'>
            გაყიდე
          </button>
        </div>
      </div>
    </Fragment>
  );
};
