/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  PageDataContainer,
  PageLink,
  PageTitle,
} from "../../../../_start/layout/core";
import { appsSubmenu } from "../AppsData";
import { ChatPage } from "./ChatPage";


const chatBreadCrumbs: Array<PageLink> = [
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

const ChatPageWrapper = () => {
  return (
    <>
      <PageDataContainer breadcrumbs={chatBreadCrumbs} submenu={appsSubmenu} />
      <PageTitle>Chat</PageTitle>
      <ChatPage />
    </>
  );
};

export default ChatPageWrapper;
