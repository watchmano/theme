import { Action } from "@reduxjs/toolkit";
import { userInfo } from "os";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest, call } from "redux-saga/effects";
import { UserModel } from "../models/UserModel";
import { getThumbnails, getUserByToken, getAllExhibitions, getAllBooths, getExhibition, getExternalLink, getContacts } from "./AuthCRUD";

export interface ActionWithPayload<T> extends Action {
  payload?: T;
} 

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
  ExhibitionsRequested: "[Request Exhibitions] Auth API",
  ExhibitionRequested: "[Request Exhibition] Auth API",
  ExhibitionsLoaded: "[Load Exhibitions] Auth API",
  ExhibitionLoaded: "[Load Exhibition] Auth API",
  externalLinksLoaded: "[Load externalLinks] Auth API",
  boothExternalLinksLoaded: "[Load boothExternalLinks] Auth API",
  contactsLoaded: "[Load contacts] Auth API",
  boothContactsLoaded: "[Load boothContacts] Auth API",
};

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
  exhibitions: undefined,
  exhibition: undefined,
  externalLinks: undefined,
  boothIndex: undefined,
  contacts: undefined,
  boothExternalLinks: undefined,
};

export interface IAuthState {
  user?: UserModel;
  accessToken?: string;
  exhibitions?: any;
  exhibition?: any;
  externalLinks?: any;
  boothIndex?: any;
  contacts?: any;
  boothExternalLinks?: any;
}

export const reducer = persistReducer(
  { storage, key: "v100-demo1-auth", whitelist: ["user", "accessToken"] },
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken;
        return { accessToken, user: undefined };
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken;
        return { accessToken, user: undefined };
      }

      case actionTypes.Logout: {
        return initialAuthState;
      }

      case actionTypes.UserRequested: {
        return { ...state, user: undefined };
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user;
        return { ...state, user };
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user;
        return { ...state, user };
      }

      // case actionTypes.LinksLoaded: {
      //   const user = action.payload?.user;
      //   return { ...state, user };
      // }

      case actionTypes.ExhibitionsLoaded: {
        const exhibitions = action.payload?.exhibitions;
        // console.log(exhibitions)
        // return { ...state, user:{...state.user, exhibitions} };
        return { ...state, exhibitions};
      }

      case actionTypes.ExhibitionLoaded: {
        const exhibition = action.payload?.exhibition;
        
        // return { ...state, user:{...state.user, exhibitions} };
        return { ...state, exhibition};
      }

      case actionTypes.externalLinksLoaded: {
        const exhibition = {...state.exhibition, externalLinks: action.payload}
        // const externalLinks = action.payload
        // return { ...state, user:{...state.user, exhibitions} };
        return { ...state, exhibition};
      }
      case actionTypes.contactsLoaded: {
        const exhibition = {...state.exhibition, contacts: action.payload}
        // const externalLinks = action.payload
        // return { ...state, user:{...state.user, exhibitions} };
        return { ...state, exhibition};
      }
      case actionTypes.boothExternalLinksLoaded: {
        // console.log('from caseSwitch', action.payload)
        state.exhibition.booths[action.payload?.boothIndex].boothExternalLinks = action.payload?.boothExternalLinks
        
        return { ...state};
      }
      case actionTypes.boothContactsLoaded: {
        console.log('from caseSwitch', action.payload?.contacts)
        state.exhibition.booths[action.payload?.boothIndex].boothContacts = action.payload?.contacts
        
        return { ...state};
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (accessToken: string) => ({ type: actionTypes.Login, payload: { accessToken } }),
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: { accessToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: () => ({
    type: actionTypes.UserRequested
  }),
  fulfillUser: (user: UserModel) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  setUser: (user: UserModel) => ({ type: actionTypes.SetUser, payload: { user } }),
  requestExhibitions: () => ({ type: actionTypes.ExhibitionsRequested }),
  fulfillExhibition: (exhibition:any) => ({ type: actionTypes.ExhibitionLoaded, payload: {exhibition} }),
  fulfillExhibitions: (exhibitions: UserModel) => ({ type: actionTypes.ExhibitionsLoaded, payload: { exhibitions }}),
  fulfillExternalLinks: (links: any) => ({ type: actionTypes.externalLinksLoaded, payload: { links }}),
  fulfillBoothExternalLinks: (boothExternalLinks: any, boothIndex: any) => ({ type: actionTypes.boothExternalLinksLoaded, payload: { boothExternalLinks, boothIndex }}),
  fulfillContacts: (contacts: any) => ({ type: actionTypes.contactsLoaded, payload: { contacts }}),
  fulfillBoothContacts: (contacts: any, boothIndex: any) => ({ type: actionTypes.boothContactsLoaded, payload: { contacts, boothIndex }}),
  
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga(data) {
    yield put(actions.requestUser());
    
  });

  yield takeLatest(actionTypes.ExhibitionLoaded, function* exhibitionRequested(data:any) {
    const code = data.payload?.exhibition.code
    console.log(data, 'from listening the latest')
    const {data:externalLinks} = yield getExternalLink(code);
    yield put(actions.fulfillExternalLinks(externalLinks));
    
    console.log(externalLinks)
    const {data:contacts} = yield getContacts(code);
    console.log('contacts filling', contacts)
    yield put(actions.fulfillContacts(contacts));
  });


  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });
  
  // yield takeLatest(actionTypes.ExhibitionsLoaded, function* thumbnailSaga(action:any) {
  //   const exhibitions = action.payload?.exhibitions
  //   exhibitions.map(async (exhibition:any)=> {
  //     const res = call(getThumbnails, action.data)
  //     console.log('from saga...', res)
  //   })
    
    
  // });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    
    const { data: user } = yield getUserByToken();
    const { data: exhibitions } = yield getAllExhibitions();
    
    const { data: booths } = yield getAllBooths(exhibitions.data[0].exhibitionCode)
    exhibitions.data[0].booths = booths.booths
    
    yield put(actions.fulfillUser({...user, exhibitions}));
    // console.log('hello')
    // yield put(actions.requestExhibitions());
  });

  yield takeLatest(actionTypes.ExhibitionsRequested, function* exhibitionsRequested() {

    const { data: exhibitions } = yield getAllExhibitions();
    yield put(actions.fulfillExhibitions(exhibitions));
    
  });


  // const weatherData = yield call(fetchWeather, action.cityName);
  // ...and finally inside request:
  
  // export const fetchWeather = async (cityName) => {
  //   console.log(cityName); // will log entered city name
  // };
  

  yield takeLatest(actionTypes.ExhibitionRequested, function* exhibitionRequested(action:any):any {
    const weatherData = yield call(getExhibition, action.code)
    // const { data: exhibitions } = yield getExhibition();
    // yield put(actions.fulfillExhibitions(exhibitions));
    
  });
}
// const actionCreator=()=>({
//   type: 'MY_ACTION',
//   status:true
// })

//  function* updatePorts(action) {
//   console.log(action.status)
// }

// function* watchUpdatePorts() {
//   yield* takeEvery('MY_ACTION', updatePorts)
// }