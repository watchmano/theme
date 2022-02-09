// import { useParams } from "react-router-dom";

import {
  EngageWidget3,
  TablesWidget4,
} from "../../../../../_start/partials/widgets";

export function ShopProduct() {
  // const { id } = useParams<{ id: string }>();
  return (
    <div className="flex-row-fluid">
      {/* begin::Section */}
      <EngageWidget3 className="mb-5 mb-xxl-8" color="white" />
      {/* end::Section */}

      {/* begin::Section */}
      <TablesWidget4 className="" color="success" />
      {/* end::Section */}
    </div>
  );
}
