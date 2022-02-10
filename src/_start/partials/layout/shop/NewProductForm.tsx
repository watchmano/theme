/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import ToggleContext from '../../../../app/context/toggle/ToggleContext';
import EditContext from '../../../../app/context/edit/EditContext';
import { updateBoothInfo } from "../../../../app/modules/auth/redux/AuthCRUD";
import { useSelector } from 'react-redux'
import { RootState } from "../../../../setup";
import axios from 'axios';
import { ExternalLinkModal } from "../../../../app/pages/dashboards/_modals/create-app-stepper/ExternalLinkModal";
import { ContactsModal } from "../../../../app/pages/dashboards/_modals/create-app-stepper/ContactsModal";
type Props = {
  createProductFormWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
  discardCreateProductRef: React.MutableRefObject<HTMLButtonElement | null>;
  // showProductsFilterForm: () => void;
};

const NewProductForm: React.FC<Props> = ({
  createProductFormWrapperRef,
  discardCreateProductRef,
  // showProductsFilterForm
}) => {

  // const exhibitionsObj : any = useSelector<RootState>((state) => state.auth.user?.exhibitions)
  const exhibition : any = useSelector<RootState>((state) => state.auth.exhibition)
  // const exhibitions = exhibitionsObj.data
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  const [showContactsModal, setShowContactsModal] = useState(false);
  const [contactType, setContactType] = useState('');
  const editContext = useContext(EditContext)
  const {exhibitionIndex} = editContext
  // const exhibition = exhibitions[exhibitionIndex]
  const {booths, code:exhibitionCode, exhibitionType} = exhibition
  
  const [linkType, setLinkType] = useState('');
  const toggleContext = useContext(ToggleContext)
  const {toggleSideBar, boothNumber} = toggleContext
  
  const boothNumberParsed = boothNumber ? parseInt(boothNumber) : 0
  const {      
    informations,
    assetId,
    assetUrl
  } = booths[boothNumberParsed]

  const {      
    artist_name,
    artist_detail,
    piece_name,
    piece_detail,
    material,
    size,
    owner,
    createdDate
  } = informations
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [boothInfo, setBoothInfo] = useState<any>(
    {
      artist_name,
      artist_detail,
      piece_name,
      piece_detail,
      material,
      size,
      owner,
      createdDate
    }
  );
  const [selectedFile, setSelectedFile] = useState<any>({});
  
  const getAssetUrl = (assetId:string) => `https://xconimages.blob.core.windows.net/dtype-dev/${assetId}` 
  // On file select (from the pop up)
  const onFileChange = (event:any) => {
    console.log(event.target.files[0])
    const {size, name, type} = event.target.files[0]    
    if(type === 'video/mp4' && size > 10000000) {
      alert('다음을 확인해 주세요. \n 지원되는 형식 : mp4 \n 용량 제한 : 10MB')
      return
    }
    // Update the state
    // setSelectedFile({ selectedFile: event.target.files[0] });
    setSelectedFile(event.target.files[0]);
	  const activimg = document.getElementsByClassName("img-preview");
    const url = URL.createObjectURL(event.target.files[0]);
    
    if(activimg){
      activimg[0].innerHTML=`<img class="output" height="100%" src="${url}" alt="img" >`;
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
    axios.post(`https://api.dtype.360xcon.com/admin/exhibition/${exhibition.code}/booth/${boothNumberParsed} /asset`, formData);
    // axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/dataking3/booth/0/asset`, formData);
  };

  return (
    <div
      // className="d-none"
      ref={createProductFormWrapperRef}
      id="kt_sidebar_shop_new_form"
    >
      {/* begin::Heading */}
      <div className="d-flex flex-column text-center mb-10">
        <h3 className="fs-2 fw-bolder mb-2">Add New Pieces</h3>
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
              {assetUrl.includes('video') ? <video style={{ 
                  width: "100%"
                }} controls>
                  <source src={assetUrl} type="video/mp4" />
                </video> : <img className="output" height="100%" src={assetUrl} alt="img" ></img>
              }
              
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
            
                Upload File
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

        {/* begin::Product Info*/}
        <div className="mt-5">
          <div className="mb-4 fw-bolder fs-6">Piece Info</div>
          {/* begin::Input*/}
          <div className="mb-8">
            <label className="fw-bolder">작품명</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder={piece_name}
              value={boothInfo.piece_name}
              onChange={(e) => setBoothInfo({
                ...boothInfo,
                piece_name: e.target.value
              })}
            />
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="mb-8">
            <label className="fw-bolder">작품 사이즈</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder={size}
              value={boothInfo.size}
              onChange={(e) => setBoothInfo({
                ...boothInfo,
                size: e.target.value
              })}
            />
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="mb-8">
            <label className="fw-bolder">작품 재료</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder={material}
              value={boothInfo.material}
              onChange={(e) => setBoothInfo({
                ...boothInfo,
                material: e.target.value
              })}
            />
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="mb-8">
            <label className="fw-bolder">작품설명</label>
            <textarea
              className="form-control form-control-solid form-control-lg"
              rows={3}
              
              value={boothInfo.piece_detail}
              onChange={(e) => setBoothInfo({
                ...boothInfo,
                piece_detail: e.target.value
              })}
              placeholder={piece_detail}
            ></textarea>
            
            {/* <select
              className="form-select form-select-solid form-select-lg"
              data-control="select2"
              data-placeholder="Select Size..."
              data-hide-search="true"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select> */}
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="mb-8">
            <label className="fw-bolder">작가명</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder={artist_name}
              value={boothInfo.artist_name}
              onChange={(e) => setBoothInfo({
                ...boothInfo,
                artist_name: e.target.value
              })}
            />
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="mb-8">
            <label className="fw-bolder">작가설명</label>
            <textarea
              className="form-control form-control-solid form-control-lg"
              rows={3}
              value={boothInfo.artist_detail}
              onChange={(e) => setBoothInfo({
                ...boothInfo,
                artist_detail: e.target.value
              })}
              placeholder={artist_detail}
            ></textarea>
            
          </div>
          <div className="separator separator-dashed my-10"></div>
          <div className="mb-8">
            <label className="fw-bolder">작품 오너</label>
            <input
              type="text"
              className="form-control form-control-solid form-control-lg"
              placeholder={owner}
              value={boothInfo.owner}
              onChange={(e) => setBoothInfo({
                ...boothInfo,
                owner: e.target.value
              })}
            />
          </div>
          
          <div className="separator separator-dashed my-10"></div>
          {exhibitionType === 'group' ? (
            <>
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
              
            </div></>) : <></>
          } 
          
            
          



          <button
            type="button"
            className="btn btn-primary fw-bolder me-2 px-8"
            onClick={() => {
              console.log(exhibitionCode, 'from sidebar.....')
              updateBoothInfo({
                boothNumber,
                exhibitionCode
                // exhibitionCode: "Gogh"
              }, {...boothInfo}
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
          {/* end::Input*/}
        </div>
        {/* end::Product Info*/}
      </form>
      {/* end::Form*/}

      <ExternalLinkModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
        type={linkType}
        boothNumber = {boothNumberParsed}
      />

      <ContactsModal
        show={showContactsModal}
        handleClose={() => setShowContactsModal(false)}
        type={contactType}
        boothNumber = {boothNumberParsed}
      />
    </div>
  );
};

export { NewProductForm };
