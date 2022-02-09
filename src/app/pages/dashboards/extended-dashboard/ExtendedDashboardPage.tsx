/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG } from "../../../../_start/helpers";
import {
  StatsWidget1,
  StatsWidget2,
  StatsWidget3,
  StatsWidget4,
  StatsWidget5,
  StatsWidget6,
  StatsWidget7,
  StatsWidget8,
  StatsWidget9,
  TablesWidget2,
} from "../../../../_start/partials/widgets";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const ExtendedDashboardPage: React.FC = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  return (
    <>
      

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4">
          <StatsWidget1 className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-8">
          <StatsWidget2 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      

      

      {/* begin::Modals */}
      <CreateAppModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      />
      {/* end::Modals */}
    </>
  );
};
