/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import ToggleContext from '../../../../app/context/toggle/ToggleContext';
import EditContext from '../../../../app/context/edit/EditContext';
import { updateBoothInfo } from "../../../../app/modules/auth/redux/AuthCRUD";
import { useSelector } from 'react-redux'
import { RootState } from "../../../../setup";
import axios from 'axios';

type Props = {
  createProductFormWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
  discardCreateProductRef: React.MutableRefObject<HTMLButtonElement | null>;
  // showProductsFilterForm: () => void;
};

const NewArtistForm: React.FC<Props> = ({
  createProductFormWrapperRef,
  discardCreateProductRef,
  // showProductsFilterForm
}) => {

  const exhibitionsObj : any = useSelector<RootState>((state) => state.auth.user?.exhibitions)
  const exhibitions = exhibitionsObj.data
  
  const editContext = useContext(EditContext)
  const {exhibitionIndex} = editContext
  const exhibition = exhibitions[exhibitionIndex]
  const {booths, exhibitionCode} = exhibition
  
  
  const toggleContext = useContext(ToggleContext)
  const {toggleSideBar, boothNumber} = toggleContext
  





  const boothNumberParsed = boothNumber ? parseInt(boothNumber) : 0
  const {      
    artist_name,
    artist_detail,
    piece_name,
    piece_detail,
    material,
    size,
    owner,
    createdDate
  } = booths[boothNumberParsed].informations
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
    axios.post(`https://api.dtype.360xcon.com/admin/exhibition/${exhibitionCode}/profile`, formData);
  };

  return (
    <div
      // className="d-none"
      ref={createProductFormWrapperRef}
      id="kt_sidebar_shop_new_form"
    >
      {/* begin::Heading */}
      <div className="d-flex flex-column text-center mb-10">
        <h3 className="fs-2 fw-bolder mb-2">Change Artist Info</h3>
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
            ></div>
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
          <div className="separator separator-dashed my-10"></div>
          
          <button
            type="button"
            className="btn btn-primary fw-bolder me-2 px-8"
            onClick={() => {
              updateBoothInfo({
                boothNumber,
                // exhibitionCode: exhibition.exhibitionCode
                exhibitionCode: "Gogh"
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
    </div>
  );
};

export { NewArtistForm };
