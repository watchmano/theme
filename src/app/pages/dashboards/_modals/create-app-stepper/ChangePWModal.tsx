/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap-v5";
import { StepperComponent } from "../../../../../_start/assets/ts/components";
import { KTSVG } from "../../../../../_start/helpers";
import { defaultCreateAppData, ICreateAppData } from "./IAppModels";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
// --------------------------------------------------------------------------------------------
type Props = {
  show: boolean;
  handleClose: () => void;
};

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};


const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Last name is required"),
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

// --------------------------------------------------------------------------------------------

const ChangePWModal: React.FC<Props> = ({ show, handleClose }) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData);
  const [hasError, setHasError] = useState(false);

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      return
    },
  });

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    );
  };

  const updateData = (fieldsToUpdate: Partial<ICreateAppData>) => {
    const updatedData = { ...data, ...fieldsToUpdate };
    setData(updatedData);
  };

  const checkAppBasic = (): boolean => {
    if (!data.appBasic.appName || !data.appBasic.appType) {
      return false;
    }
    return true;
  };

  const checkAppDataBase = (): boolean => {
    if (!data.appDatabase.databaseName || !data.appDatabase.databaseSolution) {
      return false;
    }

    return true;
  };

  const prevStep = () => {
    if (!stepper.current) {
      return;
    }

    stepper.current.goPrev();
  };

  const nextStep = () => {
    setHasError(false);
    if (!stepper.current) {
      return;
    }

    if (stepper.current.getCurrentStepIndex() === 1) {
      if (!checkAppBasic()) {
        setHasError(true);
        return;
      }
    }

    if (stepper.current.getCurrentStepIndex() === 3) {
      if (!checkAppDataBase()) {
        setHasError(true);
        return;
      }
    }

    stepper.current.goNext();
  };

  const submit = () => {
    window.location.reload();
  };

  return (
    <Modal
      id="kt_modal_create_app"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog-centered mw-600px h-auto"
      show={show}
      onHide={handleClose}
      onEntered={loadStepper}
    >
      <div className="container px-7 py-7">
        <div className="modal-header py-2 d-flex justify-content-end border-0">
          {/* begin::Close */}
          <div
            className="btn btn-icon btn-sm btn-light-primary"
            onClick={handleClose}
          >
            <KTSVG
              className="svg-icon-2"
              path="/media/icons/duotone/Navigation/Close.svg"
            />
          </div>
          {/* end::Close */}
        </div>

        <div className="modal-body">
          {/*begin::Stepper */}
          <div
            ref={stepperRef}
            className="stepper stepper-1 d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_app_stepper"
          >
            {/*begin::Aside */}
            
            {/*begin::Aside */}

            {/*begin::Content */}
            <div className="d-flex flex-row-fluid justify-content-center">
              {/*begin::Form */}
              <form
                className="pb-5 w-100 w-md-400px w-xl-500px"
                noValidate
                id="kt_modal_create_app_form"
              >
                {/*begin::Step 1 */}
                <div className="pb-5 current" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Heading */}
                    <div className="pb-5 pb-lg-10">
                      <h3 className="fw-bolder text-dark display-6">
                        App Basics
                      </h3>
                    </div>
                    {/*begin::Heading */}

                    {/*begin::Form Group */}
                    <div className="fv-row mb-12">
                      <label className="fs-6 fw-bolder text-dark form-label">
                        Your App Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        name="appname"
                        placeholder=""
                        value={data.appBasic.appName}
                        onChange={(e) =>
                          updateData({
                            appBasic: {
                              appName: e.target.value,
                              appType: data.appBasic.appType,
                            },
                          })
                        }
                      />
                      {!data.appBasic.appName && hasError && (
                        <div className="fv-plugins-message-container">
                          <div
                            data-field="appname"
                            data-validator="notEmpty"
                            className="fv-help-block"
                          >
                            App name is required
                          </div>
                        </div>
                      )}
                    </div>
                    {/*end::Form Group */}

                    {/*begin::Form Group */}
                    <div className="fv-row">
                      
                    </div>
                    {/*end::Form Group */}
                  </div>
                </div>
                {/*end::Step 1 */}

                

                

                {/*begin::Actions */}
                <div className="d-flex justify-content-between pt-10">
                  <div className="mr-2">
                    <button
                      type="button"
                      className="btn btn-lg btn-light-primary fw-bolder py-4 pe-8 me-3"
                      data-kt-stepper-action="previous"
                      onClick={prevStep}
                    >
                      <KTSVG
                        path="/media/icons/duotone/Navigation/Left-2.svg"
                        className="svg-icon-3 me-1"
                      />{" "}
                      Previous
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="submit"
                      onClick={submit}
                    >
                      Submit{" "}
                      <KTSVG
                        path="/media/icons/duotone/Navigation/Right-2.svg"
                        className="svg-icon-3 ms-2"
                      />
                    </button>

                    <button
                      type="button"
                      className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="next"
                      onClick={nextStep}
                    >
                      Next Step{" "}
                      <KTSVG
                        path="/media/icons/duotone/Navigation/Right-2.svg"
                        className="svg-icon-3 ms-1"
                      />
                    </button>
                  </div>
                </div>
                {/*end::Actions */}
              </form>
              {/*end::Form */}
            </div>
            {/*end::Content */}
          </div>
          {/* end::Stepper */}
        </div>
      </div>
    </Modal>
  );
};

export { ChangePWModal };
