import { Banner, SpecialOffers } from "./components";

import SP_DATA from "../../../SpecialOffersdb.json";

function Landing() {
  return (
    <>
      <Banner />
      <div className="">
        <div className="flex items-center justify-between gap-6">
          {SP_DATA.map((item) => (
            <SpecialOffers key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
