import React, {useContext} from "react";
import { AsideMenuItem } from "./AsideMenuItem";
import { KTSVG } from "../../../../_start/helpers";
import { useSelector } from 'react-redux'
import { RootState } from "../../../../setup";
import EditContext from '../../../../app/context/edit/EditContext';
export function AsideMenuCreate() {

  const editContext = useContext(EditContext)
  const {startEditMode, editMode, exhibitionIndex} = editContext
  const exhibitionsObj : any = useSelector<RootState>((state) => state.auth.user?.exhibitions)
  const exhibitions = exhibitionsObj.data
  const {booths} = exhibitions[exhibitionIndex]
  // const exhibition : any = useSelector<RootState>((state) => state.auth.exhibition)
  // const {booths} = exhibition
  
  return (
    
    <>
      
      <>
        <div className="menu-item">
          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
            1st ~ 7th
          </h4>
        </div>
        {/*begin::Accordion*/}
        <div className="accordion" id="accordionExample2">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                부스 펼치기
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
              <div className="accordion-body">
                {booths && booths.map((booth:any, i:any) => (
                  i >= 0 && i <=6 ?  
                    <div>
                      <button className="btn btn-color-gray-600 btn-active-light-primary">
                        {booths && booths[i].informations.piece_name}
                      </button>
                      
                    </div>:
                  <div></div>
                ))}
                {/* className="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3" */}
              </div>
            </div>
          </div>
        </div>
        {/*end::Accordion*/}
      </>
      <div className="separator separator-dashed my-10"></div>
      <>
        <div className="menu-item">
          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
            8th ~ 14th
          </h4>
        </div>
        {/*begin::Accordion*/}
        <div className="accordion" id="accordionExample3">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                부스 펼치기
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
              <div className="accordion-body">
                {booths && booths.map((booth:any, i:any) => (
                  i >= 7 && i <=13 ?  
                  <div>
                    <div>
                    <button className="btn btn-color-gray-600 btn-active-light-primary">
                        {booths && booths[i].informations.piece_name}
                      </button></div>
                    <div className="border-bottom w-100 mb-5 mt-5"></div>
                  </div> :
                  <div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*end::Accordion*/}
      </>
      <div className="separator separator-dashed my-10"></div>
      <>
        <div className="menu-item">
          <h4 className="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase">
            15th ~ 20th
          </h4>
        </div>
        {/*begin::Accordion*/}
        <div className="accordion" id="accordionExample4">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                부스 펼치기
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample4">
              <div className="accordion-body">
                {booths && booths.map((booth:any, i:any) => (
                  i >= 14 && i <=19 ?  
                  <div>
                    <div>
                    <button className="btn btn-color-gray-600 btn-active-light-primary">
                        {booths && booths[i].informations.piece_name}
                      </button></div>
                    <div className="border-bottom w-100 mb-5 mt-5"></div>
                  </div> :
                  <div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*end::Accordion*/}
      </>

      

      
    </>
    
  );
}
