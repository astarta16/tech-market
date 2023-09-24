import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import playstation from "../../../assets/images/banner/playstation-joystick.png";
import bannerMacbook from "../../../assets/images/banner/banner-macbook.png";
import dacoHeadset from "../../../assets/images/banner/daco-headset.png";

export function Banner() {
  const { t } = useTranslation(["Landing"]);
  return (
    <Fragment>
      <div className="rounded-lg bg-custom-bg mx-auto">
        <div className=" text-center">
          <h1 className="text-3xl text-white font-FiraGO not-italic font-normal mb-[-8px] pt-2">
            {t("იყიდე_გაყიდე")}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-14">
          <img src={playstation} alt="playstation controller" />
          <img src={bannerMacbook} alt="mcbook" />
          <img src={dacoHeadset} alt="deco" />
        </div>
        <div className="flex justify-center items-center gap-16 pb-3.5 mt-[-8px]">
          <button className="pt-3 pb-3 mr-[-4px] rounded-lg px-12 text-white font-firago bg-banner-bg-blue text-base font-medium">
            {t("იყიდე")}
          </button>
          <button className="pt-3 pb-3 rounded-lg px-12 text-black font-firago bg-banner-bg-yellow text-base font-medium">
            {t("გაყიდე")}
          </button>
        </div>
      </div>
    </Fragment>
  );
}
