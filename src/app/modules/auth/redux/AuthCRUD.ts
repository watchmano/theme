import axios from "axios";
import { AnySchema } from "yup";
import { CodeBlock } from "../../../../_start/partials";
import { AuthModel } from "../models/AuthModel";
import { UserModel } from "../models/UserModel";

const API_URL = process.env.REACT_APP_API_URL || "api";

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`;
export const GET_USER_INFO = `${API_URL}/auth/forgot-password`;
export const UPDATE_BOOTH_INFO = `http://23.101.14.138:8080/admin/exhibition/:code/booth/:number/informations`;

// Server should return AuthModel
export function login(email: string, password: string) {
  // return axios.post(LOGIN_URL, { email, password });
  return axios.post('https://dev-auth.dtype.360xcon.com/api/v1/auth/user/login', { email, password });
}



// Server should return AuthModel
export function register(
    name: string,
    email: string,
    phone: string,
    company: string,
    password: string
  ) {
      return axios.post<AuthModel>('https://dev-auth.dtype.360xcon.com/api/v1/auth/user/', {
        name,
        email,
        phone,
        company,
        password,  
      });
    }

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  // return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL);
  return axios.get<UserModel>('https://dev-auth.dtype.360xcon.com/api/v1/auth/user');
}

export function getAllExhibitions() {
  return axios.get<UserModel>('https://dev-auth.dtype.360xcon.com/api/v1/auth/user/exhibition');
}

// /admin/exhibition/:code
export function getExhibition(code:any) {
  return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}`);
}

export function getExhibitionIntro(code:any) {
  return axios.get<AnySchema>(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/intro`);
}

export function getAllBooths(code:string) {
  return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/booths/all-informations`);
  // return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/Gogh/booths/all-informations`);
}

export function getExternalLink(code:string) {
  return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/externalLink`);
  // return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/Gogh/booths/all-informations`);
}

export function getThumbnails(code:string) {
  return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/externalLink`);
  // return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/Gogh/booths/all-informations`);
}

export function getContacts(code:string) {
  return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/contact`);
  // return axios.get<UserModel>(`https://dev-api.dtype.360xcon.com/admin/exhibition/Gogh/booths/all-informations`);
}





// Server should return AuthModel
export function updateBoothInfo(
  params:
  {
    exhibitionCode: string,
    boothNumber: string
  },
  body:
  {
    artist_name: string,
    artist_detail:string,
    piece_name:string,
    piece_detail:string,
    material:string,
    size:string,
    owner:string,
    createdDate: string
  }) {
    
    const {exhibitionCode: code, boothNumber: number} = params
    const {
      artist_name,
      artist_detail,
      piece_name,
      piece_detail,
      material,
      size,
      owner,
      createdDate
    } = body
  return axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/booth/${number}/informations`, {
    artist_name,
    artist_detail,
    piece_name,
    piece_detail,
    material,
    size,
    owner,
    createdDate
  });
  // return axios.post('http://23.101.14.138:8080/api/v1/auth/user/login', { email, password });
}

// title	string (Required)	전시 제목
// description	string (Optional)	전시 설명
// exhibitionType
// Server should return AuthModel

export function updateExhibitionInfo(
  params:
  {
    exhibitionCode: string
  },
  body:
  {
    title: string,
    description:string,
    exhibitionType:string
  }) {
    
    const {exhibitionCode: code} = params
    const {
      title,
      description,
      exhibitionType
    } = body
  return axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}`, {
    title,
    description,
    exhibitionType,
  });
}


export function updateContactsInfo(
  params:
  {
    contactId: any
  },
  body:
  {
    data: any,
    dataType:any,
  }) {
    const {contactId} = params
    const {
      data,
      dataType
    } = body
    console.log(params, '업데이트')
    console.log(body, '업데이트')
  console.log(params, 'update contactd!')
  const request = axios.put(
    `https://dev-api.dtype.360xcon.com/admin/contact/${contactId}`,
    {
      data,
      dataType
    }
  )
  console.log(request)
  return request
}

export function uploadContactsInfo(
  params:
  {
    code: any
  },
  queries:
  {
    boothNum: any
  },
  body:
  {
    data: any,
    dataType:any,
  }) {
    
    const {code} = params
    const {boothNum} = queries
    const {
      data,
      dataType
    } = body
    console.log(code, boothNum, body, 'from uploadContacts...')
  const request = (boothNum || boothNum === 0 ?
                    axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/contact?boothNum=${boothNum}`, {
                    data,
                    dataType
                    }) : 
                    (axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/contact`, {
                      data,
                      dataType
                    })))
  console.log(request)
  return request
}
export function uploadExternalLinksInfo(
  params:
  {
    code: any
  },
  queries:
  {
    boothNum: any
  },
  body:
  {
    link: any,
    linkType:any,
  }) {
    
    const {code} = params
    const {boothNum} = queries
    const {
      link,
      linkType
    } = body
    
  const request = (boothNum || boothNum === 0 ?
                    axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/externalLink?boothNum=${boothNum}`, {
                    link,
                    linkType
                    }) : 
                    (axios.post(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/externalLink`, {
                      link,
                      linkType
                    })))
  console.log(request)
  return request
}

export function modifyExternalLinksInfo(
  params:
  {
    externalLinkId: any
  },
  body:
  {
    link: any,
    linkType:any,
  }) {
    console.log('modify...', params, body)
    const {externalLinkId} = params
    const {
      link,
      linkType
    } = body
    
  const request = axios.put(
    `https://dev-api.dtype.360xcon.com/admin/externalLink/${externalLinkId}`,
    {
      link,
      linkType
    }
  )
  console.log(request)
  return request
}

export function deleteExternalLinksInfo(
  params:
  {
    externalLinkId: any
  }) {
    
    const {externalLinkId} = params
    
    
  const request = axios.delete(`https://dev-api.dtype.360xcon.com/admin/externalLink/${externalLinkId}`)
  console.log(request)
  return request
}

export function getExternalLinksInfo(
  params:
  {
    code: any
    boothNum?: any
  },) {
    
  const {code, boothNum} = params
  const request = boothNum || boothNum === 0 ? axios.get(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/externalLink?boothNum=${boothNum}`) : 
    axios.get(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/externalLink`)
  return request
}

export function getContactsInfo(
  code:string, boothNum?:any,) {
    
  
  const request = boothNum || boothNum === 0 ? axios.get(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/contact?boothNum=${boothNum}`) : 
    axios.get(`https://dev-api.dtype.360xcon.com/admin/exhibition/${code}/contact`)
  return request
}

