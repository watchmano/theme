/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap-v5";
import { KTSVG } from "../../../../../_start/helpers";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import {updateContactsInfo, uploadContactsInfo} from "../../../../modules/auth/redux/AuthCRUD"

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../../../../setup";
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

const ContactsModal: React.FC<Props> = ({ show, handleClose, type, boothNumber:boothNum }) => {
  const exhibition : any = useSelector<RootState>((state) => state.auth.exhibition)
  console.log(type)
  const stateContacts = boothNum !== null ? exhibition.booths[boothNum].boothContacts : exhibition.contacts.contacts.data
  const [contacts, setContacts] = useState<any>(stateContacts)
  const [link, setLink] = useState<any>('');
  
  const [hasError, setHasError] = useState(false);
  const [inputFileds, setInputFields] = useState<any>({});

  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const submit = () => {
    window.location.reload();
  };
  const appendContacts = () => {
    setContacts([...contacts, 4])
  }

  const setDefaultContactsArray = () => {
    const contactsToSet = [
      ...contacts,
      {
        data:'hello',
        dataType: type.toLowerCase()
      }
    ]
    setContacts(contactsToSet)
    console.log(contacts)
    return
  }

  const popContacts = (index:number) => {
    setContacts(contacts.filter((contact:any, i:number)=> i !== index))
  }

  const cloudClicked = (contact:any, code:any, boothNum:any, contactInfo:any) => {
    contact.contactId ? 
    updateContactsInfo(
      contact,
      contactInfo,
    ) : uploadContactsInfo(
      code,
      boothNum,
      contactInfo
    )
  }
  const contactsLength = contacts.length
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
      setHasErrors(undefined);
    },
  });
  let tableIndex = 0
  let isEmptyArray = true
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
              Contacts : {type}
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

              {contacts.map((contact:any, index:number) => {

                return (
                  (type.toLowerCase() === contact.dataType) && (tableIndex+=1) ?
                    <tr>
                      <td className="ps-0 py-6">
                        <span className="fw-bolder text-primary">{tableIndex}</span>
                      </td>
                      <td className="ps-0">
                        <input
                          type="text"
                          placeholder=""
                          autoComplete="off"
                          name={'' + index}
                          value={contact.data}
                          onChange={e => {
                            // setLinks({...inputFileds, [e.target.name]: e.target.value})
                            setContacts(
                              contacts.map((contact:any, i:any) => {
                                return i === index 
                                  ? {...contact, data: e.target.value}
                                  : contact 
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
                            cloudClicked(
                              {contactId: contact._id},
                              {code: exhibition.code},
                              {boothNum},
                              {
                                data: contact.data,
                                dataType: type.toLowerCase()
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
                          onClick={()=>{popContacts(index)}}
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
                            const contactsToSet = [
                              ...contacts,
                              {
                                data:'hello',
                                dataType: type.toLowerCase()
                              }
                            ]
                            setContacts(contactsToSet)
                            console.log(contacts)
                            
                          }}
                        >
                          <KTSVG
                            className="svg-icon-4"
                            path="/media/icons/duotone/Interface/Plus-Square.svg" />
                        </a>
                      </td>
                    </tr> : <></>
                )
              
              })}
              {tableIndex === 0 && setDefaultContactsArray()}
              
              
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

export { ContactsModal };
