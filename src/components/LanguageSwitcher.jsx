import { useState, useEffect } from "react";
import i18next from "i18next";

import { Select, ConfigProvider } from "antd";

const languages = [
  {
    value: "en",
    label: "ENG",
    country_code: "en",
  },
  {
    value: "ge",
    label: "GEO",
    country_code: "ge",
  },
];

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

  const handleChangeLanguage = (value) => {
    i18next.changeLanguage(value);
    setSelectedLanguage(value);
  };

  useEffect(() => {
    setSelectedLanguage(i18next.language);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeight: 40,
          borderRadius: 8,
          colorPrimary: "rgb(85, 255, 0)",
          colorPrimaryHover: "rgb(208, 240, 192)",
          controlOutline: "rgb(208, 240, 192)",
        },
      }}
    >
      <Select
        defaultValue={selectedLanguage}
        style={{ width: 70 }}
        options={languages}
        onChange={handleChangeLanguage}
      />
    </ConfigProvider>
  );
};
