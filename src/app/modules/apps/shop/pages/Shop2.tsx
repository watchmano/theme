import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_start/helpers";
import {
  EngageWidget1,
  EngageWidget2,
} from "../../../../../_start/partials/widgets";
import axios from "axios";
import { useSelector } from 'react-redux'
import { RootState } from "../../../../../setup";
export function Shop2() {
  const exhibitionsObj : any = useSelector<RootState>((state) => state.auth.user?.exhibitions)
  const exhibitions = exhibitionsObj.data

  const [exhibitionThumbnails, setExhibitionThumbnails] = useState<any>({})

  useEffect(() => {
    console.log(exhibitions[1].exhibitionCode)
    const cycleNum = exhibitions.length
    exhibitions.map((exhibition:any, index:number) => {
      console.log(exhibition.exhibitionCode)
      axios.get(`https://dev-api.dtype.360xcon.com/admin/exhibition/${exhibition.exhibitionCode}`)
        .then((result) => {
          console.log(result.data.thumbnailAssetId)
          const thumbnailAssetId = result.data.thumbnailAssetId
          const thumbnailUrl = `https://xconimages.blob.core.windows.net/dtype-dev/${thumbnailAssetId}`
          
          setExhibitionThumbnails((prevState:any) => {
            return {
              ...prevState,
              [exhibition.exhibitionCode]: thumbnailUrl
            }
          })
          console.log(exhibitionThumbnails)
        })
    })
    
  }, [exhibitionsObj])



  const getThumbnailsOrWhat = async (exhibitionCode:any, index:any) => {
    const request = await axios.get(`https://dev-api.dtype.360xcon.com/admin/exhibition/${exhibitionCode}`)
    const thumbnailAssetId = request.data.thumbnailAssetId
    console.log(request)
    setExhibitionThumbnails({...exhibitionThumbnails, [index]: `https://xconimages.blob.core.windows.net/dtype-dev/${thumbnailAssetId}`})
  }
  // exhibitions.map((exhibition:any, index:number) => {
  //   console.log(1)
  //   getThumbnailsOrWhat(exhibition.exhibitionCode, index)
  // })
  const addDefaultSrc = (ev:any) => {
    ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Image_needed%2C_please_upload_to_commons.wikimedia.org.jpg'
  }
  


  return (
    <div className="card">
      <div className="card-body">
        <EngageWidget1
          className="mb-5 mb-xxl-8"
          bgHex="#F3F6F9"
          lg="true"
          bgImage="svg/illustrations/copy.svg"
        />

        

        {/*begin::Section*/}
        <div className="row g-5 g-xxl-8">
          {/*begin::Product*/}
          {exhibitions && exhibitions.map((exhibition:any, i:any) => (
            <div className="col-md-4 col-lg-12 col-xxl-4 ">
                <div className="card card-custom h-100">
                  <div className="card-body d-flex flex-column rounded bg-light justify-content-between">
                    <div className="text-center rounded mb-7">
                      <img
                        // src={exhibitionThumbnails[i]}
                        src={'https://upload.wikimedia.org/wikipedia/commons/c/c0/Image_needed%2C_please_upload_to_commons.wikimedia.org.jpg'}
                        className="mw-100 w-200px"
                        onError={addDefaultSrc}
                        alt="img"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="fs-4">
                        <Link
                          to="/shop/product/1"
                          className="text-gray-800 text-hover-primary fw-bolder"
                        >
                          {exhibition.title}
                        </Link>
                      </h4>
                      
                    </div>
                  </div>
                </div>
              </div>
                    
          ))}
          
          {/*end::Product*/}

          

        </div>
        {/*end::Section*/}
      </div>
    </div>
  );
}
