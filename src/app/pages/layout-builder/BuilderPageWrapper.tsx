import React from "react";
import {
  PageDataContainer,
  PageDescription,
  PageLink,
  PageTitle,
} from "../../../_start/layout/core";
import { BuilderPage } from "./BuilderPage";

const builderBreadCrumbs: Array<PageLink> = [
  {
    title: "Home",
    path: "/",
    isActive: false,
  },
  {
    title: "Resources",
    path: "",
    isActive: false,
  },
];

const BuilderPageWrapper: React.FC = () => {
  return (
    <>
      <PageDataContainer breadcrumbs={builderBreadCrumbs} submenu={[]} />
      <PageTitle>Layout Builder</PageTitle>
      <PageDescription>
        real-time layout options preview and export
      </PageDescription>
      <BuilderPage />
    </>
  );
};

export default BuilderPageWrapper;
