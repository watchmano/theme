/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  IThemeConfig,
  useTheme,
  getConfig,
  PageTitle,
} from "../../../../_start/layout/core";
import { ExtendedDashboardPage } from "./ExtendedDashboardPage";

const defaultPageConfig = getConfig();
const dashboardPageConfig: Partial<IThemeConfig> = {
  aside: {
    ...defaultPageConfig.aside,
    display: true,
    primaryDisplay: true,
    secondaryDisplay: true,
    toggle: true,
    content: "menu",
  },
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: false,
  },
  sidebar: {
    ...defaultPageConfig.sidebar,
    display: false,
  },
};

export function ExtendedDashboardWrapper() {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(dashboardPageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return (
    <>
      <ExtendedDashboardPage />
      <PageTitle>Extended Dashboard</PageTitle>
    </>
  );
}
