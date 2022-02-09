import React from "react";
import { AsideMenuItem } from "./AsideMenuItem";

import { useSelector } from 'react-redux'
import { RootState } from "../../../../setup";
export function AsideMenuStatistics() {
  const exhibitionsObj : any = useSelector<RootState>((state) => state.auth.user?.exhibitions)
  const exhibitions = exhibitionsObj.data
  return (
    <>
      {" "}
      <>
        <>
          <div className="menu-item">
            <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
              Statistics
            </h4>
          </div>
          
          {exhibitions && exhibitions.map((exhibition:any, i:any) => (
            <AsideMenuItem to="#" title={exhibition.title} />
                    
          ))}
        </>


        
      </>
    </>
  );
}
