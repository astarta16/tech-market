import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import playstation from "../../../assets/images/banner/playstation-joystick.png";
import bannerMacbook from "../../../assets/images/banner/banner-macbook.png";
import dacoHeadset from "../../../assets/images/banner/daco-headset.png";

export function Banner() {
  const { t } = useTranslation(["Landing"]);
  return (
    <Fragment>
      <div className="rounded-lg bg-custom-bg mx-auto sm:mx-10">
        <div className="text-center  sm:px-5">
          <h1 className="text-3xl text-white font-FiraGO not-italic font-normal mb-[-8px] pt-2 sm:text-sm">
            {t("იყიდე_გაყიდე")}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-14 sm:px-5 sm:pt-1 sm:pb-1.5">
          <img
            className="sm:w-20"
            src={playstation}
            alt="playstation controller"
          />
          <img className="md:hidden" src={bannerMacbook} alt="mcbook" />
          <img className="sm:w-20" src={dacoHeadset} alt="deco" />
        </div>
        <div className="flex justify-center items-center gap-16 pb-3.5 mt-[-8px] sm:gap-8 sm:px-5">
          <button
            className="pt-3 pb-3 mr-[-4px] rounded-lg px-12 text-white font-firago
           bg-banner-bg-blue text-base font-medium sm:px-4 sm:pt-1 sm:pb-2"
          >
            {t("იყიდე")}
          </button>
          <button
            className="pt-3 pb-3 rounded-lg px-12 text-black font-firago
           bg-banner-bg-yellow text-base font-medium sm:px-4 sm:pt-1 sm:pb-2"
          >
            {t("გაყიდე")}
          </button>
        </div>
      </div>
    </Fragment>
  );
}
