import React, { useRef, useEffect, useContext } from "react";
import { AsideMenuDocs } from "./AsideMenuDocs";
import { AsideMenuMain } from "./AsideMenuMain";
import { AsideMenuStatistics } from "./AsideMenuStatistics";
import { AsideMenuPerson } from "./AsideMenuPerson";
import { AsideMenuCreate } from "./AsideMenuCreate";
import { AsideMenuExhibitions } from "./AsideMenuExhibitions";
import EditContext from '../../../../app/context/edit/EditContext';
type Props = {
  menuType: any;
  asidePrimaryDisplay: boolean;
};

const AsideMenu: React.FC<Props> = ({ menuType, asidePrimaryDisplay }) => {


  const editContext = useContext(EditContext)
  const {startEditMode, editMode} = editContext

  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    if (!asidePrimaryDisplay){
      scrollRef.current.setAttribute('data-kt-scroll-dependencies', '#kt_aside_logo')
    } else {
      scrollRef.current.removeAttribute('data-kt-scroll-dependencies');
    }

  }, [asidePrimaryDisplay]);
  return (
    <div
      className="menu menu-column menu-rounded menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6"
      data-kt-menu="true"
    >
      <div
        ref={scrollRef}
        className="hover-scroll-y pe-4 pe-lg-5"
        id="kt_aside_menu_scroll"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"        
        data-kt-scroll-wrappers="#kt_aside_wordspace"
        data-kt-scroll-offset="10px"
      >
        <div className="menu-wrapper menu-column menu-fit">
          {/* {editMode === true || menuType === "create" && <AsideMenuCreate />} */}
          
          {menuType === "main" && <AsideMenuMain />}
          {menuType === "person" && <AsideMenuPerson />}
          {menuType === "statistics" && <AsideMenuStatistics />}
          {menuType === "create" && <AsideMenuCreate />}
          {menuType === "exhibitions" && <AsideMenuExhibitions/>}
          {menuType === "documentation" && <AsideMenuDocs />}
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export { AsideMenu };
