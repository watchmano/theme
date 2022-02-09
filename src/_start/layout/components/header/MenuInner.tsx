import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export function MenuInner() {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Dashboards</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <MenuItem to="/dashboard" title="Start" />
            </li>
            <li className="menu-item">
              <MenuItem to="/extended" title="Extended" />
            </li>
            <li className="menu-item">
              <MenuItem to="/light" title="Light" />
            </li>
            <li className="menu-item">
              <MenuItem to="/compact" title="Compact" />
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Apps</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <MenuItem to="/exhibition" title="Exhibition" />
            </li>
            <li className="menu-item">
              <MenuItem to="/chat" title="Chat" />
            </li>
            {/* <li className="menu-item">
              <MenuItem to="/mail" title="Inbox" />
            </li> */}
            <li className="menu-item">
              <MenuItem to="/shop/shop-1" title="Shop 1" />
            </li>
            <li className="menu-item">
              <MenuItem to="/shop/shop-2" title="Shop 2" />
            </li>
            <li className="menu-item">
              <MenuItem to="/shop/product/1" title="Shop Product" />
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">General</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <MenuItem to="/general/faq" title="FAQ" />
            </li>
            <li className="menu-item">
              <MenuItem to="/general/pricing" title="Pricing" />
            </li>
            <li className="menu-item">
              <MenuItem to="/general/invoice" title="Invoice" />
            </li>
            <li className="menu-item">
              <MenuItem to="/auth/login" title="Login" />
            </li>
            <li className="menu-item">
              <MenuItem to="/general/wizard" title="Wizard" />
            </li>
            <li className="menu-item">
              <MenuItem to="/error/404" title="Error" />
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Profile</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/profile/overview">
                Overview
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/profile/account" className="menu-link ps-0 py-2">
                Account
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/profile/settings">
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="fw-bolder mb-5">Resources</h3>
          <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/docs/getting-started">
                Documentation
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/builder">
                Layout Builder
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link ps-0 py-2" to="/docs/changelog">
                Changelog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
