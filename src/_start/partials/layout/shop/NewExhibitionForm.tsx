/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import ToggleContext from '../../../../app/context/toggle/ToggleContext';
import EditContext from '../../../../app/context/edit/EditContext';
import { updateExhibitionInfo, getExternalLink, getContacts } from "../../../../app/modules/auth/redux/AuthCRUD";
import * as auth from "../../../../app/modules/auth/redux/AuthRedux";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../../../setup";
import axios from 'axios';
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import { ExternalLinkModal } from "../../../../app/pages/dashboards/_modals/create-app-stepper/ExternalLinkModal";
import { ContactsModal } from "../../../../app/pages/dashboards/_modals/create-app-stepper/ContactsModal";
type Props = {
  createProductFormWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
  discardCreateProductRef: React.MutableRefObject<HTMLButtonElement | null>;
  
};

const NewExhibitionForm: React.FC<Props> = ({
  createProductFormWrapperRef,
  discardCreateProductRef,
}) => {


  const dispatch = useDispatch();


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
  
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const formik = useFormik({
    initialValues,
    validationSchema: contactsSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setHasErrors(undefined);
    },
  });
  const getAssetUrl = (assetId:string) => `https://xconimages.blob.core.windows.net/dtype-dev/${assetId}` 
  const exhibition : any = useSelector<RootState>((state) => state.auth.exhibition)
  
  
  const editContext = useContext(EditContext)
  const {exhibitionIndex} = editContext
  
  
  const toggleContext = useContext(ToggleContext)
  const {toggleSideBar, boothNumber} = toggleContext
  


  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  const [linkType, setLinkType] = useState('');

  const [showContactsModal, setShowContactsModal] = useState(false);
  const [contactType, setContactType] = useState('');

  const boothNumberParsed = boothNumber ? parseInt(boothNumber) : 0
  const {      
    title,
    description,
    exhibitionType,
    code,
    thumbnailAssetId

  } = exhibition
  
  const [category, setCategory] = useState(exhibitionType);


  const [exhibitionInfo, setExhibitionInfo] = useState<any>(
    {
    title,
    description,
    exhibitionType,
    code,
    
    }
  );

  
  const [selectedFile, setSelectedFile] = useState<any>({});
  

  // On file select (from the pop up)
  const onFileChange = (event:any) => {
    
    // Update the state
    // setSelectedFile({ selectedFile: event.target.files[0] });
    setSelectedFile(event.target.files[0]);
	  const activimg = document.getElementsByClassName("img-preview");
    const url = URL.createObjectURL(event.target.files[0]);
    
    if(activimg){
      activimg[0].innerHTML=`<img class="output" width="100%" src="${url}" alt="img" >`;
    }
    
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
        "image",
        selectedFile,
        selectedFile.name
    );

    // Details of the uploaded file
    

    // Request made to the backend api
    // Send formData object
    // axios.post(`http://23.101.14.138:8080/admin/exhibition/${exhibition.code}/booth/${boothNumberParsed} /asset`, formData);
    axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/thumbnail`, formData);
  };

  return (
    <div
      // className="d-none"
      ref={createProductFormWrapperRef}
      id="kt_sidebar_shop_new_form"
    >
      {/* begin::Heading */}
      <div className="d-flex flex-column text-center mb-10">
        <h3 className="fs-2 fw-bolder mb-2">Change Exhibitions Info</h3>
        <span className="text-muted fs-6 fw-bolder">Quick Create Form</span>
      </div>
      {/* end::Heading*/}

      {/* begin::Form*/}
      <form className="form" method="post">
        {/* begin::Product images*/}
        <div className="d-flex mb-8 justify-content-between">
          {/* begin::Symbol*/}
          <div className="overlay symbol symbol-160px me-4 bg-light">
            <div
              className="overlay-wrapper symbol-label img-preview"
            >
              <img className="output" height="100%" src={getAssetUrl(thumbnailAssetId)} alt="img" ></img>
            </div>
            <label
              htmlFor="file-upload"
              // type="button"
              className="overlay-layer btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active border-primary px-6 py-7 text-start w-100 min-w-150px"
            >
              <KTSVG
                className="svg-icon-2x ms-n1"
                path="/media/icons/duotone/Files/Media.svg"
              />{" "}
              <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
            
                Upload Thumbnail
              </span>
              <input
                id="file-upload"
                type="file"
                style={{
                  display:'none'
                }}
                name="image"
                onChange={onFileChange}
              />
            </label>
            
          </div>
          {/* end::Symbol*/}

          
        </div>
        <button
            type="button"
            className="btn-sm btn btn-primary fw-bolder me-2 px-8"
            onClick={() => {
              onFileUpload()
            }}
          >
            Upload
        </button>

        {/* end::Product images*/}
        <div className="separator separator-dashed my-10"></div>
        {/* begin::Product Info*/}
        <div className="mt-5">
          <div className="mb-4 fw-bolder fs-6">Piece Info</div>
          {/* begin::Input*/}
          <div className="mb-8">
            <label className="fw-bolder">전시 타이틀</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder={title}
              value={exhibitionInfo.title}
              onChange={(e) => setExhibitionInfo({
                ...exhibitionInfo,
                title: e.target.value
              })}
            />
          </div>
          
          <div className="mb-8">
            <label className="fw-bolder">전시 설명</label>
            <textarea
              className="form-control form-control-solid form-control-lg"
              rows={3}
              
              value={exhibitionInfo.description}
              onChange={(e) => setExhibitionInfo({
                ...exhibitionInfo,
                description: e.target.value
              })}
              placeholder={description}
            ></textarea>
            
          </div>
          
          <div className="mb-8">
            <label className="fw-bolder">전시 타입</label>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="form-options"
                checked={category === "individual"}
                
                value="individual"
                id="kt_form_options_1"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label
                className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ${
                  category === "individual" ? "active" : ""
                }`}
                htmlFor="kt_form_options_1"
              >
                <KTSVG
                  path="/media/icons/duotone/Files/User-solid.svg"
                  className="svg-icon-1x me-1"
                />
                
                <span className="text-gray-800 fw-bold">Individual</span>
              </label>

              <input
                type="radio"
                className="btn-check"
                name="form-options"
                value="group"
                id="kt_form_options_2"
                checked={category === "group"}
                onChange={(e) => setCategory(e.target.value)}
                
              />
              <label
                className={`col btn btn-lg btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active py-5 px-4 m-2 min-w-125px ${
                  category === "group" ? "active" : ""
                }`}
                htmlFor="kt_form_options_2"
              >
                <KTSVG
                  path="/media/icons/duotone/Files/Users-solid.svg"
                  className="svg-icon-2x me-1"
                />
                <span className="text-gray-800 fw-bold">Group</span>
              </label>
            </div>
            
          </div>
        </div>
        <div className="separator separator-dashed my-10"></div>
        <div className="mb-8">
          <label className="fw-bolder">외부 링크</label>
          <div className="mt-3">
            <a
              href="#"
              className="btn btn-icon btn-light-google me-5"
              onClick={() => {
                setLinkType('Homepage')
                setShowCreateAppModal(true)
              }}
            >
                <i className="las la-home fs-2x"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-light-facebook me-5 "
              onClick={() => {
                setLinkType('Shop')
                setShowCreateAppModal(true)
              }}
            >
              <i className="las la-shopping-bag fs-2x"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-light-instagram me-5 "
              onClick={() => {
                setLinkType('SNS')
                setShowCreateAppModal(true)
              }}
            >
              <i className="las la-sms fs-2x"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-light-twitter me-5 "
              onClick={() => {
                setLinkType('etc')
                setShowCreateAppModal(true)
              }}
            >
              <i className="las la-glass-martini-alt fs-2x"></i>
            </a>
            
          </div>
        </div>
        
        <div className="mb-8">
          <label className="fw-bolder">연락처</label>
          <div className="mt-3">
            <a
              href="#"
              className="btn btn-icon btn-light-google me-5 "
              onClick={() => {
                setContactType('Email')
                setShowContactsModal(true)
              }}
            >
              <i className="las la-envelope fs-2x"></i>
            </a>
            
            <a
              href="#"
              className="btn btn-icon btn-light-facebook me-5 "
              onClick={() => {
                setContactType('Phone')
                setShowContactsModal(true)
              }}
            >
              <i className="las la-phone-alt fs-2x"></i>
            </a>
          </div>
          
        </div>
        {/* end::Input*/}
        <div className="separator separator-dashed my-10"></div>
        <div className="mt-8">
            <button
              type="button"
              className="btn btn-primary fw-bolder me-2 px-8"
              onClick={() => {
                updateExhibitionInfo({
                  // exhibitionCode: "Gogh"
                  exhibitionCode: exhibitionInfo.code
                }, {...exhibitionInfo, exhibitionType: category}
                )
              }}
            >
              Save
            </button>
            <button
              ref={discardCreateProductRef}
              onClick={() => {
                toggleSideBar()
              }}
              type="reset"
              id="kt_sidebar_shop_filter_form_btn"
              className="btn  btn-color-gray-600 btn-active-light-primary fw-bolder px-8"
            >
              Discard
            </button>
          </div>
            
          
        {/* end::Product Info*/}
      </form>
      {/* end::Form*/}
      {/* begin::Modal*/}
      
      <ExternalLinkModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
        type={linkType}
        boothNumber = {null}
      />

      <ContactsModal
        show={showContactsModal}
        handleClose={() => setShowContactsModal(false)}
        type={contactType}
        boothNumber = {null}
      />
      


      {/* end::Modal*/}
    </div>
  );
};

export { NewExhibitionForm };
