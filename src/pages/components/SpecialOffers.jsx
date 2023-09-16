import { SPOferrs } from "../__mocks__/SPOffers";

export const SpecialOffers = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      {SPOferrs.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <div className=" bg-speacial-bg-gray rounded-full mb-5">
              <img
                src={item.images}
                alt={item.title}
                height={114}
                width={122}
                className="pt-[28px] pb-[27px] pl-[23px] pr-[24px]"
              />
            </div>
            <div className="flex flex-col items-center ">
              <h4 className="text-special_offers p-[10px] mb-[-12px] font-semibold">
                {item.title}
              </h4>
              <h5 className="text-special_offers opacity-[0.6] p-[10px]">
                {item.amount}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};
