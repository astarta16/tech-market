import { Select, ConfigProvider } from "antd";

export const LanguageSwitcher = () => {
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
        defaultValue="ge"
        style={{ width: 70 }}
        options={[
          { value: "en", label: "ENG" },
          { value: "ge", label: "GEO" },
        ]}
      />
    </ConfigProvider>
  );
};
