import React, { useRef, useEffect, useContext, useState } from "react";
import { SidebarGeneral, SidebarShop, SidebarUser } from "../../partials";
import { useTheme } from "../core";
import ToggleContext from '../../../app/context/toggle/ToggleContext';
import {
  ElementAnimateUtil,
  ElementStyleUtil,
} from "../../assets/ts/_utils";

const BG_COLORS = ['bg-white' , 'bg-info'];


export function Sidebar() {
  const toggleContext = useContext(ToggleContext)
  const {showSideBar, boothNumber} = toggleContext
  const { config, classes } = useTheme();
  const sidebarCSSClass = classes.sidebar;
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  const [onDisplay, setOnDisplay] = useState(true)
  
  useEffect(() => {
    if (sideBarRef.current) {
      console.log(showSideBar)
      if(showSideBar) {
        
        ElementStyleUtil.set(
          sideBarRef.current,
          "animationDuration",
          "1s"
        );
        ElementAnimateUtil.animateClass(
          sideBarRef.current,
          "animate__animated animate__slideInRight"
        );

      } else{

        ElementStyleUtil.set(
          sideBarRef.current,
          "animationDuration",
          "1s"
        );
        ElementAnimateUtil.animateClass(
          sideBarRef.current,
          "animate__animated animate__slideOutRight"
        );

      }
      
    }
    

    if (!sidebarCSSClass) {
      return;
    }

    BG_COLORS.forEach(cssClass => {
      sideBarRef.current?.classList.remove(cssClass);
    })

    sidebarCSSClass.forEach(cssClass => {
      sideBarRef.current?.classList.add(cssClass);
    })
   
  }, [sidebarCSSClass, showSideBar]);


  return (
    <>
      {config.sidebar.display && showSideBar && config.sidebar.content === "shop" && (
          <div
            ref={sideBarRef}
            id="kt_sidebar"
            className="sidebar"
            data-kt-drawer="true"
            data-kt-drawer-name="sidebar"
            data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="{default:'200px', '350px': '300px'}"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_sidebar_toggler"
          >
            {/* begin::Sidebar Content */}
            <div className="d-flex flex-column sidebar-body">
              {/* {config.sidebar.content === "general" && <SidebarGeneral />}
              {config.sidebar.content === "shop" && (
                <SidebarShop sidebarRef={sideBarRef} />
              )}
              {config.sidebar.content === "user" && <SidebarUser />} */}
              <SidebarShop sidebarRef={sideBarRef}/>
            </div>
            {/* end::Sidebar Content */}
          </div>
        
      )}
    </>
  );
}
