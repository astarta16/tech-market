import { Banner, SpecialOffers } from "./components";
import { useTranslation } from "react-i18next";

import { SP_DATA } from "./data/SpecialOffers";
import { Card } from "../../components"

function Landing() {
  const { t } = useTranslation(["Landing"]);
  const Special_Offers = SP_DATA(t);

  return (
    <>
      <Banner />
      <div className="">
        <div className="flex items-center justify-between gap-6">
          {Special_Offers.map((item) => (
            <SpecialOffers key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Card />
    </>
  );
}

export default Landing;
