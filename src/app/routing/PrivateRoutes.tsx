import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FallbackView } from "../../_start/partials";
import { ExtendedDashboardWrapper } from "../pages/dashboards/extended-dashboard/ExtendedDashboardWrapper";
import { LightDashboardWrapper } from "../pages/dashboards/light-dashboard/LightDashboardWrapper";
import { CompactDashboardWrapper } from "../pages/dashboards/compact-dashboard/CompactDashboardWrapper";
import { StartDashboardWrapper } from "../pages/dashboards/start-dashboard/StartDashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(
    () => import("../pages/layout-builder/BuilderPageWrapper")
  );
  const ProfilePageWrapper = lazy(
    () => import("../modules/profile/ProfilePageWrapper")
  );
  const ChagePage = lazy(() => import("../modules/apps/chat/ChatPageWrapper"));
  const ShopPageWrapper = lazy(
    () => import("../modules/apps/shop/ShopPageWrapper")
  );
  const GeneralPageWrapper = lazy(
    () => import("../modules/general/GeneralPageWrapper")
  );
  const DocsPageWrapper = lazy(() => import("../modules/docs/DocsPageWrapper"));
  
  //const PersonalProfileWrapper = lazy(() => import("../modules/apps/exhibition/PersonalProfile"));
  const ExhibitionWrapper = lazy(() => import("../modules/apps/exhibition/ExhibitionWrapper"));
  //const ExhibitionStatWrapper = lazy(() => import("../modules/apps/shop/ExhibitionStat"));

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path="/dashboard" component={StartDashboardWrapper} />
        <Route path="/extended" component={ExtendedDashboardWrapper} />
        <Route path="/light" component={LightDashboardWrapper} />
        <Route path="/compact" component={CompactDashboardWrapper} />
        <Route path="/builder" component={BuilderPageWrapper} />
        <Route path="/general" component={GeneralPageWrapper} />
        <Route path="/chat" component={ChagePage} />
        <Route path="/shop" component={ShopPageWrapper} />
        <Route path="/profile" component={ProfilePageWrapper} />
        <Route path="/menu-test" component={MenuTestPage} />
        <Route path="/exhibition" component={ExhibitionWrapper} />
        
        <Route path="/docs" component={DocsPageWrapper} />
        <Redirect from="/auth" to="/profile/account" />
        <Redirect exact from="/" to="/profile/account" />
        <Redirect to="error/404" />
      </Switch>
    </Suspense>
  );
}
