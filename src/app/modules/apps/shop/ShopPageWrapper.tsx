/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { ScrollComponent } from "../../../../_start/assets/ts/components";
import {
  getConfig,
  IThemeConfig,
  PageDataContainer,
  PageLink,
  useTheme,
} from "../../../../_start/layout/core";
import { appsSubmenu } from "../AppsData";
import { ShopPage } from "./ShopPage";

const shopBreadCrumbs: Array<PageLink> = [
  {
    title: "Home",
    path: "/",
    isActive: false,
  },
  {
    title: "Apps",
    path: "",
    isActive: false,
  },
];

const defaultPageConfig = getConfig();
const shopPageConfig: Partial<IThemeConfig> = {
  sidebar: {
    ...defaultPageConfig.sidebar,
    content: "shop",
    bgColor: 'bg-white'
  },
};


const ShopPageWrapper: React.FC = () => {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(shopPageConfig);
    setTimeout(() => {
      ScrollComponent.reinitialization();
    }, 100);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return (
    <>
      <PageDataContainer breadcrumbs={shopBreadCrumbs} submenu={appsSubmenu} />
      <ShopPage />
    </>
  );
};

export default ShopPageWrapper;
