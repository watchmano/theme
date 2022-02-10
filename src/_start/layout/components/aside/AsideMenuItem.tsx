import React, {useEffect, useContext} from "react";
import clsx from "clsx";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { checkIsActive } from "../../../helpers";
import EditContext from '../../../../app/context/edit/EditContext';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../../../setup";
import { getExhibition, getContacts, getAllBooths } from "../../../../app/modules/auth/redux/AuthCRUD";
import * as auth from "../../../../app/modules/auth/redux/AuthRedux";
import SideMenuContext from '../../../../app/context/sideMenu/SideMenuContext';

type Props = {
  to: string;
  title: string;
  hasBullet?: string;
  status?: string;
  button?: string;
  index?: any;
};

const AsideMenuItem: React.FC<Props> = ({
  children,
  to,
  title,
  hasBullet = false,
  status = false,
  button = false,
  index = 0
}) => {
  const history = useHistory();
  const exhibitionsObj : any = useSelector<RootState>((state) => state.auth.user?.exhibitions)
  
  const sideMenuContext = useContext(SideMenuContext)
  const {switchSideMenu} = sideMenuContext
  
  const exhibitions = exhibitionsObj.data
  const dispatch = useDispatch();

  const editContext = useContext(EditContext)
  const {selectExhibition, exhibitionIndex, startEditMode} = editContext

  const { pathname } = useLocation();
  return (
    <div
      className={clsx("menu-item", {
        here: checkIsActive(pathname, to),
      })}
    >
      <Link className="menu-link py-2" to={to}>
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        <span className="menu-title">{title}</span>
        {button && <button
                onClick={ () => {
                  const code = exhibitions[index].exhibitionCode
                  
                  selectExhibition(index)
                  // startEditMode(true)
                  getExhibition(code)
                  .then(async ({ data: exhibition }) => {
                    // item.classList.remove("showing");
                    // item.classList.add("show");
                    // switchSideMenu('create')
                    // setLoading(false);
                    // dispatch(auth.actions.login(accessToken));
                    console.log('fromAside...', exhibition)
                    const boothsResult = await getAllBooths(code)
                    const {booths}:any = boothsResult.data
                    exhibition.booths = booths
                    dispatch(auth.actions.fulfillExhibition(exhibition));
                    const oldTab = document.getElementById('kt_aside_tab_4');
                    oldTab?.classList.remove("show", "active")
                    const newTab = document.getElementById('kt_aside_tab_5');
                    newTab?.classList.add("show", "active")
                    // switchSideMenu('create')
                    history.push({
                      pathname:  "/exhibition/exhibition-1"
                   });

                  })
                  .catch(() => {
                    // setLoading(false);
                    // setSubmitting(false);
                    // setStatus("Loading exhibition process has broken");
                    return
                  });
                  

                }}
                type="reset"
                className="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3"
              >
                Edit
              </button>}  
        {status && <span>{exhibitions.length} 개</span>}
      </Link>
      {children}
    </div>
  );
};

export { AsideMenuItem };
