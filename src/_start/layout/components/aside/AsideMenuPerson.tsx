import React from "react";
import { AsideMenuItem } from "./AsideMenuItem";
import { useSelector } from 'react-redux'
import { RootState } from "../../../../setup";

export function AsideMenuPerson() {
  const auth : any = useSelector<RootState>((state) => state.auth)

  
  return (
    <>
      {" "}
      <>
        <>
          <div className="menu-item">
            <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
              Information
              <div>{auth.user.id}</div>
            </h4>
          </div>
          <AsideMenuItem to="#" title="전시갯수" hasBullet="true" status="true"/>
        </>

        
      </>
    </>
  );
}
