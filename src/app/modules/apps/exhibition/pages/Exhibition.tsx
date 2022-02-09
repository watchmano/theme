/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_start/helpers";
import { EngageWidget1 } from "../../../../../_start/partials/widgets";
import ToggleContext from '../../../../context/toggle/ToggleContext'
import EditContext from '../../../../context/edit/EditContext'
import {getExternalLinksInfo, getContactsInfo} from '../../../auth/redux/AuthCRUD'
import * as auth from "../../../auth/redux/AuthRedux";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../../../../setup";
import  { Redirect, useHistory } from 'react-router-dom'

export const Exhibition = () => {
  const exhibition : any = useSelector<RootState>((state) => state.auth.exhibition)
  const toggleContext = useContext(ToggleContext)
  const {toggleSideBar} = toggleContext
  
  const editContext = useContext(EditContext)
  const {exhibitionIndex} = editContext
  const dispatch = useDispatch();
  const history = useHistory();
  if (!exhibition) {
    const oldTab = document.getElementById('kt_aside_tab_5');
    oldTab?.classList.remove("show", "active")
    const newTab = document.getElementById('kt_aside_tab_4');
    newTab?.classList.add("show", "active")
  //   history.push({
  //     pathname:  "/profile/account"
  //  });
    return <Redirect to='/shop/shop-2'  />
  }

  // const exhibitionsObj : any = useSelector<RootState>((state) => state.auth.user?.exhibitions)
  
  
  

  // const exhibitions = exhibitionsObj.data
  // const {booths} = exhibitions[exhibitionIndex]

  const {booths, thumbnailAssetId, title, code} = exhibition
  const thumbnailAssetUrl = `https://xconimages.blob.core.windows.net/dtype-dev/${thumbnailAssetId}` 
  
  const getAssetUrl = (assetId:string) => `https://xconimages.blob.core.windows.net/dtype-dev/${assetId}` 
  // const getAssetUrl = (assetId:string) =>`https://dev-api.dtype.360xcon.com/admin/asset/${assetId}/url`
  const addDefaultSrc = (ev:any) => {
    ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Image_needed%2C_please_upload_to_commons.wikimedia.org.jpg'
  }
  
  return (
    <div className="card">
      <div className="card-body">
        

        {/*begin::Section*/}
        <div className="mb-10">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">전시 정보 편집</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                    {thumbnailAssetId ? 
                      <img
                        src={getAssetUrl(thumbnailAssetId)}
                        alt=""
                        className="mw-100 w-200px"
                      /> : 
                      <img
                        src={toAbsoluteUrl("/media/products/GHIBLI.jpeg")}
                        alt=""
                        className="mw-100 w-200px"
                      />}
                      
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="#"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        위치확인
                      </Link>
                      <Link
                        to="#"
                        className="btn fw-bolder btn-sm btn-light-primary"
                        onClick={()=> toggleSideBar(null, 'exhibition')}
                      >
                        수정하기
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      {title}
                    </Link>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}


        {/*begin::Section*/}
        <div className="mb-10">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">작가 정보 편집</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              <div className="card card-custom shadow-none">
                <div className="card-body p-0">
                  {/*begin::Image*/}
                  <div className="overlay rounded overflow-hidden">
                    <div className="overlay-wrapper rounded bg-light   text-center">
                    {thumbnailAssetUrl ? 
                      <img
                        src={getAssetUrl(thumbnailAssetId)}
                        alt=""
                        className="mw-100 w-200px"
                      /> : 
                      <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/c/c0/Image_needed%2C_please_upload_to_commons.wikimedia.org.jpg'}
                        alt=""
                        className="mw-100 w-200px"
                      />}
                      
                    </div>
                    <div className="overlay-layer">
                      <Link
                        to="#"
                        className="btn fw-bolder btn-sm btn-primary me-2"
                      >
                        위치확인
                      </Link>
                      <Link
                        to="#"
                        className="btn fw-bolder btn-sm btn-light-primary"
                        onClick={()=> toggleSideBar(null, 'artist')}
                      >
                        수정하기
                      </Link>
                    </div>
                  </div>
                  {/*end::Image*/}

                  {/*begin::Details*/}
                  <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <Link
                      to="/shop/product/1"
                      className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                    >
                      {title}
                    </Link>
                  </div>
                  {/*end::Details*/}
                </div>
              </div>
              
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}

        {/*begin::Section*/}
        <div className="mb-10">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">1st ~ 7th Booths Edit</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              {booths && booths.map((booth:any, i:any) => (
                i >= 0 && i <=6 ?  
                <div className="card card-custom shadow-none">
                  <div className="card-body p-0">
                    {/*begin::Image*/}
                    <div className="overlay rounded overflow-hidden">
                      <div className="overlay-wrapper rounded bg-light   text-center">
                      
                        <img
                          // src={toAbsoluteUrl("/media/products/1.png")}
                          src={getAssetUrl(booth.assetId)}
                          // alt="https://upload.wikimedia.org/wikipedia/commons/c/c0/Image_needed%2C_please_upload_to_commons.wikimedia.org.jpg"
                          onError={addDefaultSrc}
                          className="mw-100 w-200px"
                        />
                      </div>
                      <div className="overlay-layer">
                        <Link
                          to="#"
                          className="btn fw-bolder btn-sm btn-primary me-2"
                        >
                          위치확인
                        </Link>
                        <Link
                          to="#"
                          className="btn fw-bolder btn-sm btn-light-primary"
                          onClick={async ()=> {
                            console.log(i)

                            const contactsResult = await getContactsInfo(code, i)
                            const boothContacts = contactsResult.data.data
                            dispatch(auth.actions.fulfillBoothContacts(boothContacts, i));
                            const linksResult = await getExternalLinksInfo({code, boothNum:i})
                            const boothExternalLinks = linksResult.data.data
                            dispatch(auth.actions.fulfillBoothExternalLinks(boothExternalLinks, i));
                            
                            
                            console.log('from authCRUD' ,contactsResult)
                            toggleSideBar(i, 'booth')
                            
                          }}
                        >
                          수정하기
                        </Link>
                      </div>
                    </div>
                    {/*end::Image*/}

                    {/*begin::Details*/}
                    <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                      <Link
                        to="/shop/product/1"
                        className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                      >
                        {booth.informations.artist_name}
                      </Link>
                      {getAssetUrl(booth.assetId)}
                      <span className="fs-6">{booth.informations.piece_name}</span>
                    </div>
                    {/*end::Details*/}
                  </div>
                </div> :
                <div></div>
              ))}
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            

            
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}

        {/*begin::Section*/}
        <div className="mb-0">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">8th ~ 14th Booths Edit</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              {booths && booths.map((booth:any, i:any) => (
                i >= 7 && i <= 13 ?  
                <div className="card card-custom shadow-none">
                  <div className="card-body p-0">
                    {/*begin::Image*/}
                    <div className="overlay rounded overflow-hidden">
                      <div className="overlay-wrapper rounded bg-light   text-center">
                        <img
                          // src={toAbsoluteUrl("/media/products/1.png")}
                          src={getAssetUrl(booth.assetId)}
                          alt=""
                          onError={addDefaultSrc}
                          className="mw-100 w-200px"
                        />
                      </div>
                      <div className="overlay-layer">
                        <Link
                          to="#"
                          className="btn fw-bolder btn-sm btn-primary me-2"
                        >
                          위치확인
                        </Link>
                        <Link
                          to="#"
                          className="btn fw-bolder btn-sm btn-light-primary"
                          onClick={async ()=> {
                            console.log(i)

                            const contactsResult = await getContactsInfo(code, i)
                            const boothContacts = contactsResult.data.data
                            dispatch(auth.actions.fulfillBoothContacts(boothContacts, i));
                            const linksResult = await getExternalLinksInfo({code, boothNum:i})
                            const boothExternalLinks = linksResult.data.data
                            dispatch(auth.actions.fulfillBoothExternalLinks(boothExternalLinks, i));
                            
                            
                            console.log('from authCRUD' ,contactsResult)
                            toggleSideBar(i, 'booth')
                            
                          }}
                        >
                          수정하기
                        </Link>
                      </div>
                    </div>
                    {/*end::Image*/}

                    {/*begin::Details*/}
                    <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                      <Link
                        to="/shop/product/1"
                        className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                      >
                        {booth.informations.artist_name}
                      </Link>
                      <span className="fs-6">{booth.informations.piece_name}</span>
                    </div>
                    {/*end::Details*/}
                  </div>
                </div> :
                <div></div>
              ))}
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}
        {/*begin::Section*/}
        <div className="mb-0">
          {/*begin::Heading*/}
          <div className="d-flex justify-content-between align-items-center mb-7">
            <h2 className="fw-bolder text-dark fs-2 mb-0">15th ~ 20th Booths Edit</h2>
            <a href="#" className="btn btn-light-primary btn-sm fw-bolder">
              View All
            </a>
          </div>
          {/*end::Heading*/}

          {/*begin::Products*/}
          <div className="row g-5 g-xxl-8">
            {/*begin::Product*/}
            <div className="col-md-4 col-xxl-4 col-lg-12">
              {/*begin::Card*/}
              {booths && booths.map((booth:any, i:any) => (
                i >= 14 && i <= 19 ?  
                <div className="card card-custom shadow-none">
                  <div className="card-body p-0">
                    {/*begin::Image*/}
                    <div className="overlay rounded overflow-hidden">
                      <div className="overlay-wrapper rounded bg-light   text-center">
                        <img
                          // src={toAbsoluteUrl("/media/products/1.png")}
                          src={getAssetUrl(booth.assetId)}
                          alt=""
                          onError={addDefaultSrc}
                          className="mw-100 w-200px"
                        />
                      </div>
                      <div className="overlay-layer">
                        <Link
                          to="#"
                          className="btn fw-bolder btn-sm btn-primary me-2"
                        >
                          위치확인
                        </Link>
                        <Link
                          to="#"
                          className="btn fw-bolder btn-sm btn-light-primary"
                          onClick={async ()=> {
                            console.log(i)

                            const contactsResult = await getContactsInfo(code, i)
                            const boothContacts = contactsResult.data.data
                            dispatch(auth.actions.fulfillBoothContacts(boothContacts, i));
                            const linksResult = await getExternalLinksInfo({code, boothNum:i})
                            const boothExternalLinks = linksResult.data.data
                            dispatch(auth.actions.fulfillBoothExternalLinks(boothExternalLinks, i));
                            
                            
                            console.log('from authCRUD' ,contactsResult)
                            toggleSideBar(i, 'booth')
                            
                          }}
                        >
                          수정하기
                        </Link>
                      </div>
                    </div>
                    {/*end::Image*/}

                    {/*begin::Details*/}
                    <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                      <Link
                        to="/shop/product/1"
                        className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1"
                      >
                        {booth.informations.artist_name}
                      </Link>
                      <span className="fs-6">{booth.informations.piece_name}</span>
                    </div>
                    {/*end::Details*/}
                  </div>
                </div> :
                <div></div>
              ))}
              {/*end::Card*/}
            </div>
            {/*end::Product*/}

            
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Section*/}
      </div>
    </div>
  );
}
