/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap-v5";
import { KTSVG } from "../../../../../_start/helpers";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../../../../setup";
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import {uploadExternalLinksInfo, deleteExternalLinksInfo, modifyExternalLinksInfo} from "../../../../modules/auth/redux/AuthCRUD"
import { textSpanContainsTextSpan } from "typescript";
// --------------------------------------------------------------------------------------------
type Props = {
  show: boolean;
  handleClose: () => void;
  type: string;
  boothNumber: any
};

const initialValues = {
  firstname: "",
};


const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required")
});

// --------------------------------------------------------------------------------------------

const ExternalLinkModal: React.FC<Props> = ({ show, handleClose, type, boothNumber:boothNum }) => {
  console.log(type)
  const exhibition : any = useSelector<RootState>((state) => state.auth.exhibition)
  console.log(exhibition)
  const stateLinks = boothNum !== null ? exhibition.booths[boothNum].boothExternalLinks : exhibition.externalLinks.links.data
  const [links, setLinks] = useState<any>(stateLinks)
  console.log('from state...', links)
  // const [links, setLinks] = useState<any>(exhibition.externalLinks.links.data)
  const [link, setLink] = useState<any>('');
  const [hasError, setHasError] = useState(false);

  const [loading, setLoading] = useState(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const contactsSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  });
  const initialValues = {
    email: "admin@demo.com",
    phoneNumber:"000-0000-0000"
  };
  const formik = useFormik({
    initialValues,
    validationSchema: contactsSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      // setHasErrors(undefined);
    },
  });

  const setDefaultLinksArray = () => {
    const linksToSet = [
      ...links,
      {
        link:'hello',
        linkType: type.toLowerCase()
      }
    ]
    setLinks(linksToSet)
    return
  }

  const cloudClicked = (externalLinkId:any, code:any, boothNum:any, link:any) => {
    console.log('console parameters...', externalLinkId, code, boothNum, link)
    externalLinkId.externalLinkId ? 
    modifyExternalLinksInfo(
      externalLinkId,
      link,
    ) : uploadExternalLinksInfo(
      code,
      boothNum,
      link
    )
  }

  const submit = () => {
    window.location.reload();
  };
  let tableIndex = 0
  // function increaseTableIndex = () => {
  //   tableIndex = tableIndex + 1
  // }
  return (
    <Modal
      id="kt_modal_create_app"
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog-centered mw-600px h-auto"
      show={show}
      onHide={handleClose}
    >
      <div className="container px-7 py-7">
        <div className="modal-header py-2 d-flex justify-content-end border-0">
          {/* begin::Close */}
          <div
            className="btn btn-icon btn-sm btn-light-primary"
            onClick={handleClose}
          >
            <KTSVG
              className="svg-icon-2"
              path="/media/icons/duotone/Navigation/Close.svg"
            />
          </div>
          {/* end::Close */}
        </div>

        <div className="modal-body">
          <div className="pb-5 pb-lg-10">
            <h3 className="fw-bolder text-dark display-6">
              External Link
            </h3>
          </div>
          <table
            className="table align-middle border-gray-100"
            id="kt_advance_table_widget_4"
          >
            <thead>
              <tr className="text-start text-muted fw-bolder text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                <td className="ps-0 w-30px py-5">
                  #
                </td>
                <td className="ps-0 min-w-250px py-5">Order id</td>
                
                <td className="min-w-100px pe-0 text-end py-5">Action</td>
              </tr>
            </thead>
            <tbody>
              {links.map((link:any, index:number) => {
                  // setInputFields({...inputFileds, index: ''})
                  return (
                    (type.toLowerCase() === link.linkType) && (tableIndex+=1) ? <tr>
                      <td className="ps-0 py-6">
                        <span className="fw-bolder text-primary">{tableIndex}</span>
                      </td>
                      <td className="ps-0">
                        <input
                          type="text"
                          placeholder=""
                          autoComplete="off"
                          name={'' + index}
                          value={link.link}
                          onChange={e => {
                            // setLinks({...inputFileds, [e.target.name]: e.target.value})
                            setLinks(
                              links.map((link:any, i:any) => {
                                return i === index 
                                  ? {...link, link: e.target.value}
                                  : link 
                              }))
                          }}
                          className={clsx(
                            "form-control form-control-lg form-control-solid",
                            { "is-invalid": formik.touched.phoneNumber && formik.errors.phoneNumber },
                            {
                              "is-valid": formik.touched.phoneNumber && !formik.errors.phoneNumber,
                            }
                          )}
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.phoneNumber}</div>
                          </div>
                        )}
                      </td>
                      
                      <td className="pe-0 text-end">
                        <a
                          href="#"
                          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-1"
                          onClick={() => {
                            console.log(link)
                            const newlyCreating = (link._id === undefined)
                            cloudClicked(
                              {externalLinkId:link._id},
                              {code: exhibition.code},
                              {boothNum},
                              {
                                link: link.link,
                                linkType: type.toLowerCase()
                              }
                            )
                          }}
                        >
                          <KTSVG
                            className="svg-icon-4"
                            path="/media/svg/avatars/cloud-upload-alt-solid.svg"
                          />
                        </a>
                        <a
                          href="#"
                          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-1"
                          onClick={()=>{
                            deleteExternalLinksInfo({externalLinkId:link._id})
                            const linksToSet = links.filter((linkState:any) => {
                              return linkState._id !== link._id
                            })
                            setLinks(linksToSet)
                          }}
                        >
                          <KTSVG
                            className="svg-icon-4"
                            path="/media/icons/duotone/General/Trash.svg"
                          />
                        </a>
                        <a
                          href="#"
                          className="btn btn-icon btn-bg-light  btn-color-muted btn-active-color-primary btn-sm mx-1"
                          onClick={() => {
                            const linksToSet = [
                              ...links,
                              {
                                link:'hello',
                                linkType: type.toLowerCase()
                              }
                            ]
                            setLinks(linksToSet)
                            console.log(links)
                            
                          }}
                        >
                          <KTSVG
                            className="svg-icon-4"
                            path="/media/icons/duotone/Interface/Plus-Square.svg" />
                        </a>
                      </td>
                    </tr> :<></>
                    )
                
              })}
              {tableIndex === 0 && setDefaultLinksArray()}
              
            </tbody>
          </table>
          
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
            data-kt-stepper-action="submit"
            onClick={submit}
          >
            Submit{" "}
            <KTSVG
              path="/media/icons/duotone/Navigation/Right-2.svg"
              className="svg-icon-3 ms-2"
            />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { ExternalLinkModal };
