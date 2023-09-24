import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function BurgerMenu() {
  const { t } = useTranslation(["Head"]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center"
        style={{ marginLeft: "-12px" }}
      >
        {isOpen ? (
          <svg
            className="scale-50"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
          </svg>
        ) : (
          <svg
            className="scale-50"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        )}
        {t("კატეგორიები")}
      </button>
      {isOpen && (
        <div className="absolute top-0 mt-12 bg-white w-96 shadow-lg rounded-lg">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {t("მსხვ_ტექ")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {t("წვრ_ტექ")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {t("კომპ_ტექ")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {t("მობ_ტექ")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {t("თავის_მოვლა")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
