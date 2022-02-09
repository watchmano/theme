import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PageTitle } from "../../../../_start/layout/core";
import { Exhibition } from "./pages/Exhibition";

export function ExhibitionPage() {
  return (
    <Switch>
      <Route path="/exhibition/exhibition-1">
        <>
          <Exhibition />
        </>
      </Route>
      <Redirect from="/exhibition" exact={true} to="/exhibition/exhibition-1" />
      <Redirect to="/exhibition/exhibition-1" />
    </Switch>
  );
}
