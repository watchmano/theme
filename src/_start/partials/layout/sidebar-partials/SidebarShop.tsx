import React, { useRef, useContext } from "react";
import {
  ElementAnimateUtil,
  ElementStyleUtil,
} from "../../../assets/ts/_utils";
import { NewProductForm } from "../shop/NewProductForm";
import { NewExhibitionForm } from "../shop/NewExhibitionForm";
import { NewArtistForm } from "../shop/NewArtistForm";
import { ProductFilterForm } from "../shop/ProductFilterForm";
import ToggleContext from '../../../../app/context/toggle/ToggleContext';
type Props = {
  sidebarRef: React.MutableRefObject<HTMLDivElement | null>;
};

const SidebarShop: React.FC<Props> = ({ sidebarRef }) => {
  const createProductBtnRef = useRef<HTMLButtonElement | null>(null);
  const discardCreateProductRef = useRef<HTMLButtonElement | null>(null);
  const createProductFormWrapperRef = useRef<HTMLDivElement | null>(null);
  const filterFormWrapperRef = useRef<HTMLDivElement | null>(null);
  const toggleContext = useContext(ToggleContext)
  const {toggleSideBar, boothNumber, type} = toggleContext

  const renderSwitch = (type:any) => {
    switch(type) {
      case 'exhibition':
        return (<NewExhibitionForm
                discardCreateProductRef={discardCreateProductRef}
                createProductFormWrapperRef={createProductFormWrapperRef}
              />);
      case 'artist':
        return (<NewArtistForm
                discardCreateProductRef={discardCreateProductRef}
                createProductFormWrapperRef={createProductFormWrapperRef}
              />);
      case 'booth':
        return (<NewProductForm
                discardCreateProductRef={discardCreateProductRef}
                createProductFormWrapperRef={createProductFormWrapperRef}
              />);
      default:
        return 'foo';
    }
  }
  const showProductAddForm = () => {



    if (!createProductFormWrapperRef.current) {
      return;
    }

    createProductFormWrapperRef.current?.classList.remove("d-none");
    filterFormWrapperRef.current?.classList.add("d-none");
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }

    if (createProductFormWrapperRef.current) {
      ElementStyleUtil.set(
        createProductFormWrapperRef.current,
        "animationDuration",
        "0.3s"
      );
      ElementAnimateUtil.animateClass(
        createProductFormWrapperRef.current,
        "animate__animated animate__slideInRight"
      );
    }
  };

  return (
    <div id="kt_sidebar_content" className="py-10 px-7 px-lg-12">
      <div
        className="hover-scroll-y me-lg-n7 pe-lg-5"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-offset="10px"
        data-kt-scroll-wrappers="#kt_sidebar_content"
        style={{
          height: "800px",
          // overflow: "visible"
        }}
      >
        {renderSwitch(type)}
      </div>
    </div>
  );
};

export { SidebarShop };
