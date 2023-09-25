import { useRef } from "react";
import { useTranslation } from "react-i18next";

import Logo from "../../../../assets/images/header/site-logo.svg";
import UserIco from "../../../../assets/images/header/user-icon.svg";
import Favourite from "../../../../assets/images/header/favourite-icon.svg";
import Basket from "../../../../assets/images/header/basket-icon.svg";
import Search from "../../../../assets/images/header/search-icon.svg";

import BurgerMenu from "./Burger";
import { LanguageSelect } from "./LanguageSelect";

export function Header() {
  const { t } = useTranslation(["Head"]);

  const inputRef = useRef(null);
  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    console.log("Searching:", inputValue);
  };
  return (
    <div className="  max-w-[1134px] mx-auto w-full">
      <div
        // style={{ maxWidth: "1134px" }}
        className="flex items-center justify-between my-7 m-auto "
      >
        <div className="flex ">
          <img
            className="mr-10 cursor-pointer "
            src={Logo}
            alt="Tech E-commerce sales platform logo"
          />
          <div className="relative mr-20 ">
            <input
              style={{ width: "443px" }}
              type="text"
              className="border rounded-lg pl-2 pr-4 py-2 focus:outline-none focus:border-addButtonColor "
              placeholder={`${t("ძებნა")}`}
              ref={inputRef}
            />
            <div
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            >
              <img src={Search} alt="search loop" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mx-5">
            <LanguageSelect />
          </div>
          <button className="bg-addButtonColor flex justify-center items-center px-4 py-2 rounded-lg">
            {t("დამატება")}
          </button>
          <div className="flex justify-center items-center gap-11 mx-16">
            <div className="relative">
              <img
                style={{ width: "20px", height: "20px" }}
                className="cursor-pointer "
                src={Favourite}
                alt="favourite icon"
              />
              <span className="bg-badgeColor text-badgeText rounded-full w-3 h-3 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-xs">
                2
              </span>
            </div>
            <div className="relative">
              <img
                style={{ width: "20px", height: "20px" }}
                className="cursor-pointer"
                src={Basket}
                alt="basket icon"
              />
              <span className="bg-badgeColor text-badgeText rounded-full w-3 h-3 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-xs">
                3
              </span>
            </div>
          </div>
          <div className="bg-logInButtonColor flex  px-4 py-2 justify-center items-center rounded-lg cursor-pointer">
            <img src={UserIco} alt="login icon" className=" mr-2" />
            <span>{t("შესვლა")}</span>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between m-auto"
        // style={{ maxWidth: "1134px" }}
      >
        <div className="flex justify-center items-center">
          <BurgerMenu />
        </div>
        <div className="flex justify-center items-center gap-10">
          <span className="cursor-pointer">{t("სპეციალური_შეთავაზება")}</span>
          <span className="cursor-pointer">{t("ფასდაკლება")}</span>
          <span className="cursor-pointer">{t("კონტაქტი")}</span>
        </div>
      </div>
    </div>
  );
}
