import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_start/helpers";

const ErrorsPage: React.FC = () => {
  return (
    <div
      className="d-flex flex-column flex-column-fluid position-relative"
      style={{ backgroundColor: "#EAF9FC" }}
    >
      {/* begin::Background */}
      <div
        className="bgi-size-contain bgi-position-x-end bgi-position-y-bottom bgi-no-repeat position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url('${toAbsoluteUrl(
            "/media/illustrations/404-hd.png"
          )}')`,
        }}
      ></div>
      {/* end::Background */}

      {/* begin::Content */}
      <div className="px-10 px-md-20 pt-10 pt-md-14 z-index-1">
        <Link to="/">
          <img
            alt="Logo"
            src={toAbsoluteUrl("/media/logos/logo-default.svg")}
            className="h-75px"
          />
        </Link>
      </div>
      <div className="px-10 px-md-20 py-10 py-md-0 d-flex flex-column justify-content-md-center align-items-start flex-root w-md-700px z-index-1">
        <p className="display-6 fw-bolder text-gray-800 mb-8">
          Something went wrong..
        </p>
        <p className="fs-6 mb-8">
          Some plugins may ask a purchase code registration activation once
          installed, however, you can simply ignore these messages bundled
          plugins do not require activation or registration
        </p>
        <Link
          to="/"
          className="btn btn-primary fs-6 fw-bolder py-4 px-6 me-auto"
        >
          Return Home
        </Link>
      </div>
      {/* end::Content */}
    </div>
  );
};

export { ErrorsPage };
