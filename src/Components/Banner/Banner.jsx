import React, { Fragment } from "react";
import playstation from "../../assets/banner/playstation-joystick.png";
import bannerMacbook from "../../assets/banner/banner-macbook.png";
import dacoHeadset from "../../assets/banner/daco-headset.png";

const Banner = () => {
  return (
    <Fragment>
      <div className="banner-container rounded-lg bg-custom-bg container mx-auto">
        <div className="banner-title text-center">
          <h1 className="text-3xl text-white font-FiraGO not-italic font-normal mb-[-8px] pt-2">
            იყიდე და გაყიდე ნივთები მარტივად
          </h1>
        </div>
        <div className="flex items-center justify-center gap-14">
          <img src={playstation} alt="playstation controller" />
          <img src={bannerMacbook} alt="mcbook" />
          <img src={dacoHeadset} alt="deco" />
        </div>
        <div className="banner-buttons  flex justify-center items-center gap-16 pb-3.5 mt-[-8px]">
          <button className="pt-3 pb-3 mr-[-4px] rounded-lg px-12 text-white font-firago bg-banner-bg-blue text-base font-medium">
            იყიდე
          </button>
          <button className="pt-3 pb-3 rounded-lg px-12 text-black font-firago bg-banner-bg-yellow text-base font-medium">
            გაყიდე
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
