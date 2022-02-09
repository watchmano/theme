/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import * as auth from "../redux/AuthRedux";
import { register } from "../redux/AuthCRUD";
import { Link } from "react-router-dom";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const initialValues = {
  fullname: "",
  // lastname: "",
  email: "",
  phone: "",
  company: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Full name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Wrong phone number format")
    .min(3, "Minimum 11 symbols")
    .max(50, "Maximum 15 symbols")
    .required("Phone number is required"),
  company: Yup.string()
    .min(3, "Minimum 1 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Company name is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  changepassword: Yup.string()
    .required("Password confirmation is required")
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
    }),
  acceptTerms: Yup.bool().required("You must accept the terms and conditions"),
});

export function Registration() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values.email,
        values.fullname,
        // values.lastname,
        values.password)
        
      setLoading(true);
      setTimeout(() => {
        register(
          values.fullname,
          values.email,
          values.phone,
          values.company,
          values.password,
        )
          .then(({ data: { accessToken } }) => {
            setLoading(false);
            // dispatch(auth.actions.login(accessToken));
            alert('회원가입을 축하드립니다.')
          })
          .catch(() => {
            setLoading(false);
            setSubmitting(false);
            setStatus("Registration process has broken");
          });
      }, 1000);
    },
  });

  return (
    <form
      className="form w-100"
      noValidate
      id="kt_login_signup_form"
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Title */}
      <div className="pb-5 pb-lg-15">
        <h3 className="fw-bolder text-dark display-6">Sign Up</h3>
        <p className="text-muted fw-bold fs-3">
          Enter your details to create your account
        </p>
      </div>
      {/* end::Title */}

      {formik.status && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      )}

      {/* begin::Form group Firstname */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Full name
        </label>
        <input
          placeholder="Full name"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("fullname")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.fullname && formik.errors.fullname,
            },
            {
              "is-valid": formik.touched.fullname && !formik.errors.fullname,
            }
          )}
        />
        {formik.touched.fullname && formik.errors.fullname && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.fullname}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Email */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Email
        </label>
        <input
          placeholder="Email"
          type="email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.email}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Phone */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Phone number
        </label>
        <input
          placeholder="Phone number"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("phone")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.phone && formik.errors.phone,
            },
            {
              "is-valid": formik.touched.phone && !formik.errors.phone,
            }
          )}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.phone}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Lastname */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Company name
        </label>
        <input
          placeholder="Company name"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("company")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.company && formik.errors.company,
            },
            {
              "is-valid": formik.touched.company && !formik.errors.company,
            }
          )}
        />
        {formik.touched.company && formik.errors.company && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.company}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.password && formik.errors.password,
            },
            {
              "is-valid": formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.password}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className="fv-row mb-10">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Password confirmation"
          autoComplete="off"
          {...formik.getFieldProps("changepassword")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid":
                formik.touched.changepassword && formik.errors.changepassword,
            },
            {
              "is-valid":
                formik.touched.changepassword && !formik.errors.changepassword,
            }
          )}
        />
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.changepassword}</div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-10">
        <div className="form-check form-check-custom form-check-solid mb-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="kt_login_toc_agree"
            {...formik.getFieldProps("acceptTerms")}
          />
          <label
            className="form-check-label fw-bold text-gray-600"
            htmlFor="kt_login_toc_agree"
          >
            가입 후 전시를 생성하려면 데이터킹에 직접 연락주셔야 하는거 아시죠?
            {/* I Agree the{" "} */}
            {/* <Link to="/auth/terms" className="ms-1">
              terms and conditions
            </Link> */}
            
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.acceptTerms}</div>
            </div>
          )}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="d-flex flex-wrap pb-lg-0 pb-5">
        <button
          type="submit"
          id="kt_login_signup_form_submit_button"
          className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-4"
          disabled={
            formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms
          }
        >
          {!loading && <span className="indicator-label">Submit</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...{" "}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
        <Link to="/auth/login">
          <button
            type="button"
            id="kt_login_signup_form_cancel_button"
            className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3"
          >
            Cancel
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  );
}
