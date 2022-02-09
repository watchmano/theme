import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PageTitle } from "../../../../_start/layout/core";
import { Shop1 } from "./pages/Shop1";
import { Shop2 } from "./pages/Shop2";
import { ShopProduct } from "./pages/ShopProduct";

export function ShopPage() {
  return (
    <Switch>
      <Route path="/shop/shop-1">
        <>
          <PageTitle>Shop 1</PageTitle>
          <Shop1 />
        </>
      </Route>
      <Route path="/shop/shop-2">
        <>
          <PageTitle>Exhibitions List</PageTitle>
          <Shop2 />
        </>
      </Route>
      <Route path="/shop/product/:id">
        <>
          <PageTitle>Shop Product</PageTitle>
          <ShopProduct />
        </>
      </Route>
      <Redirect from="/shop" exact={true} to="/shop/shop-2" />
      <Redirect to="/shop/shop-1" />
    </Switch>
  );
}
