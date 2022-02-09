import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_start/helpers";
import {
  EngageWidget1,
  EngageWidget2,
} from "../../../../../_start/partials/widgets";

export function Shop2() {
  return (
    <div className="card">
      <div className="card-body">
        {/* <EngageWidget1
          className="mb-5 mb-xxl-8"
          bgHex="#F3F6F9"
          lg="true"
          bgImage="svg/illustrations/copy.svg"
        /> */}

        {/*begin::Section*/}
        <div className="row g-5 g-xxl-8">
          {/* <div className="col-md-8 col-lg-12 col-xxl-8">
            <EngageWidget2
              className="mb-5 mb-xxl-8"
              color="primary"
              imagePath={toAbsoluteUrl("/media/products/13.png")}
            />
            <EngageWidget2
              className="mb-0 mb-md-5 mb-lg-0 mb-xxl-8"
              color="danger"
              imagePath={toAbsoluteUrl("/media/products/12.png")}
            />
          </div> */}

          <div className="col-md-4 col-lg-12 col-xxl-4">
            {/*begin::Featured Product*/}
            <div className="card card-custom card-stretch mb-5 mb-xxl-8">
              <div className="card-body d-flex flex-column rounded bg-light-success justify-content-between">
                <div className="rounded text-center mb-7 pt-7">
                  <img
                    src={toAbsoluteUrl("/media/products/14.png")}
                    className="mw-100 w-200px"
                    alt="img"
                    style={{ transform: "scale(1.4)" }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="fs-2x">
                    <Link
                      to="/shop/product/1"
                      className="text-dark text-hover-primary fw-bolder"
                    >
                      Kanken
                    </Link>
                  </h3>
                  <div className="fs-3 text-success">Amazing Backpack</div>
                </div>
              </div>
            </div>
            {/*end::Featured Product*/}
          </div>
        </div>
        {/*end::Section*/}

        {/*begin::Section*/}
        <div className="row g-5 g-xxl-8">
          {/*begin::Product*/}
          <div className="col-md-4 col-lg-12 col-xxl-4 ">
            <div className="card card-custom h-100">
              <div className="card-body d-flex flex-column rounded bg-light justify-content-between">
                <div className="text-center rounded mb-7">
                  <img
                    src={toAbsoluteUrl("/media/products/gogh.jpeg")}
                    className="mw-100 w-200px"
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <h4 className="fs-4">
                    <Link
                      to="/shop/product/1"
                      className="text-gray-800 text-hover-primary fw-bolder"
                    >
                      고흐 작품
                    </Link>
                  </h4>
                  <div className="fs-6 text-muted fw-bolder">100일 남음</div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Product*/}

          {/*begin::Product*/}
          <div className="col-md-4 col-lg-12 col-xxl-4">
            <div className="card card-custom h-100">
              <div className="card-body d-flex flex-column rounded bg-light   justify-content-between">
                <div className="text-center rounded mb-7">
                  <img
                    src={toAbsoluteUrl("/media/products/hexa.png")}
                    className="mw-100 w-200px"
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <h4 className="fs-4">
                    <Link
                      to="/shop/product/1"
                      className="text-gray-800 text-hover-primary fw-bolder"
                    >
                      Amazon Bip Home
                    </Link>
                  </h4>
                  <div className="fs-6 text-muted fw-bolder">$370.00</div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Product*/}

          {/*begin::Product*/}
          <div className="col-md-4 col-lg-12 col-xxl-4">
            <div className="card card-custom h-100">
              <div className="card-body d-flex flex-column rounded bg-light   justify-content-between">
                <div className="text-center rounded mb-7">
                  <img
                    src={toAbsoluteUrl("/media/products/dragon.jpeg")}
                    className="mw-100 w-200px"
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <h4 className="fs-4">
                    <Link
                      to="/shop/product/1"
                      className="text-gray-800 text-hover-primary fw-bolder"
                    >
                      Black & White Vases
                    </Link>
                  </h4>
                  <div className="fs-6 text-muted fw-bolder">$370.00</div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Product*/}

          {/*begin::Product*/}
          <div className="col-md-4 col-lg-12 col-xxl-4">
            <div className="card card-custom h-100">
              <div className="card-body d-flex flex-column rounded bg-light   justify-content-between">
                <div className="text-center rounded mb-7">
                  <img
                    src={toAbsoluteUrl("/media/products/GHIBLI.jpeg")}
                    className="mw-100 w-200px"
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <h4 className="fs-4">
                    <Link
                      to="/shop/product/1"
                      className="text-gray-800 text-hover-primary fw-bolder"
                    >
                      Spine Friendly Chair
                    </Link>
                  </h4>
                  <div className="fs-6 text-muted fw-bolder">$370.00</div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Product*/}

          {/*begin::Product*/}
          <div className="col-md-4 col-lg-12 col-xxl-4">
            <div className="card card-custom h-100">
              <div className="card-body d-flex flex-column rounded bg-light   justify-content-between">
                <div className="text-center rounded mb-7">
                  <img
                    src={toAbsoluteUrl("/media/products/19.png")}
                    className="mw-100 w-200px"
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <h4 className="fs-4">
                    <Link
                      to="/shop/product/1"
                      className="text-gray-800 text-hover-primary fw-bolder"
                    >
                      Yellow Kettle
                    </Link>
                  </h4>
                  <div className="fs-6 text-muted fw-bolder">$370.00</div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Product*/}

          {/*begin::Product*/}
          <div className="col-md-4 col-lg-12 col-xxl-4">
            <div className="card card-custom h-100">
              <div className="card-body d-flex flex-column rounded bg-light   justify-content-between">
                <div className="text-center rounded mb-7">
                  <img
                    src={toAbsoluteUrl("/media/products/20.png")}
                    className="mw-100 w-200px"
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <h4 className="fs-4">
                    <Link
                      to="/shop/product/1"
                      className="text-gray-800 text-hover-primary fw-bolder"
                    >
                      Amazing Mats
                    </Link>
                  </h4>
                  <div className="fs-6 text-muted fw-bolder">$370.00</div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Product*/}
        </div>
        {/*end::Section*/}
      </div>
    </div>
  );
}
