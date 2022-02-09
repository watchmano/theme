/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_start/helpers";
import { EngageWidget1 } from "../../../../../_start/partials/widgets";

export function Shop1() {
  return (
    <div className="card">
      <div className="card-body">
        <EngageWidget1
          className="mb-12"
          bgColor="light-primary"
          bgImage="svg/illustrations/progress.svg"
        />

        {/*begin::Section*/}
        <div className="mb-10">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">Smart Devices</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/1.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Smart Watches
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            {/*begin::Product*/}
            <div className="col-md-4 col-lg-12 col-xxl-4">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/2.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Headphones
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            {/*begin::Product*/}
            <div className="col-md-4 col-lg-12 col-xxl-4">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/3.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Smart Drones
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}

        {/*begin::Section*/}
        <div className="mb-10">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">Best Wines</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/4.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Jerry Kane
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            {/*begin::Product*/}
            <div className="col-md-4 col-lg-12 col-xxl-4">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/5.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Shiraz
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            {/*begin::Product*/}
            <div className="col-md-4 col-lg-12 col-xxl-4">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/6.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Chardonnay
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}

        {/*begin::Section*/}
        <div className="mb-0">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">Popular Jackets</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/7.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Tommy Hilfiger
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Smart Watches
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            {/*begin::Product*/}
            <div className="col-md-4 col-lg-12 col-xxl-4">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/8.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Hugo Boss
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            {/*begin::Product*/}
            <div className="col-md-4 col-lg-12 col-xxl-4">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                      <img
                        src={toAbsoluteUrl("/media/products/9.png")}
                        alt=""
                        className="mw-100 w-200px"
                      />
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        Quick View
                      </Link>
                      <Link
                        to="/shop/product/1"
                        className="btn fw-bolder btn-sm btn-light-primary"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      Armani
                    </Link>
                    <span className="fs-6">Outlines keep poorly thought</span>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Product*/}
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}
      </div>
    </div>
  );
}
