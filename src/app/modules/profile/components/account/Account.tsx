/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { defaultAccount, IAccount } from "./AccountModel";
import {
  ListsWidget2,
} from "../../../../../_start/partials/widgets";

import { useSelector } from 'react-redux'
import { RootState } from "../../../../../setup";
import { ChangePWModal } from "../../../../pages/dashboards/_modals/create-app-stepper/ChangePWModal";

export function Account() {
  const [data, setData] = useState<IAccount>(defaultAccount);
  //const [hasError, setHasError] = useState(false);
  const userObj : any = useSelector<RootState>((state) => state.auth.user)
  const {email, name} = userObj.data
  console.log(userObj)
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  const updateData = (fieldsToUpdate: Partial<IAccount>) => {
    const updatedData = { ...data, ...fieldsToUpdate };
    setData(updatedData);
  };

  return (
    <>
      <div className="card">
        {/* begin::Form */}
        <form className="form d-flex flex-center">
          <div className="card-body mw-800px py-20">
            {/* begin::Form row */}
            <div className="row mb-8">
              <label className="col-lg-3 col-form-label">Username</label>
              <div className="col-lg-9">
                <div className="spinner spinner-sm spinner-primary spinner-right">
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    value={name}
                    onChange={(e) => updateData({ username: e.target.value })}
                    disabled
                    placeholder={name}
                  />
                </div>
              </div>
            </div>
            {/* end::Form row */}

            {/* begin::Form row */}
            <div className="row mb-8">
              <label className="col-lg-3 col-form-label">Email Address</label>
              <div className="col-lg-9">
                <div className="input-group input-group-lg input-group-solid">
                  <span className="input-group-text pe-0">
                    <i className="la la-at fs-4"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder={email}
                    value={email}
                    onChange={(e) => updateData({ email: e.target.value })}
                    disabled
                  />
                </div>
                <div className="form-text">
                  Email will not be publicly displayed.{" "}
                  .
                </div>
              </div>
            </div>
            {/* end::Form row */}
            {/* begin::Form row */}
            <div className="row mb-8">
              <label className="col-lg-3 col-form-label">
              Password reset
              </label>
              <div className="col-lg-9">
                <button
                  type="button"
                  className="btn btn-light-primary fw-bold btn-sm"
                  onClick={() => setShowCreateAppModal(true)}
                >
                  Reset
                </button>
                <div className="form-text">
                  비밀번호 재설정은 전시장 입장코드 재설정과 다릅니다.
                  <a href="#" className="fw-bold">
                    전시 코드 변경
                  </a>
                  .
                </div>
              </div>
            </div>
            {/* end::Form row */}

            <div className="separator separator-dashed my-10"></div>

            


            {/* begin::Form row */}
            <div className="row">
              <label className="col-lg-3 col-form-label"></label>
              <div className="col-lg-9">
                <button
                  type="reset"
                  className="btn btn-primary fw-bolder px-6 py-3 me-3"
                >
                  Save Changes
                </button>
                <button
                  type="reset"
                  className="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3"
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* end::Form row */}
          </div>
        </form>
        {/* end::Form */}
      </div>


      <div className="card mt-7">
      <div className="row g-5 g-xxl-8">
        <div className="col-xl-12">
          <ListsWidget2 className="mb-5 mb-xxl-8" />
        </div>
      </div>
      </div>

      {/* begin::Modals */}
      <ChangePWModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      />
      {/* end::Modals */}
    </>
    
  );
}
