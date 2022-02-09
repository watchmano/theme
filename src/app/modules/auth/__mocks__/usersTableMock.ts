import { toAbsoluteUrl } from "../../../../_start/helpers";
import { UserModel } from "../models/UserModel";

export class UsersTableMock {
  public static table: Array<UserModel> = [
    {
      id: 1,
      username: "admin",
      // password: "demo",
      // email: "admin@demo.com",
      password: "hellohello",
      email: "hello@dataking.co.kr",
      auth: {
        accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
        refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa",
      },
      roles: [1], // Administrator
      pic: toAbsoluteUrl("/media/avatars/150-2.jpg"),
      fullname: "Sean S",
      firstname: "Sean",
      lastname: "Stark",
      occupation: "CEO",
      companyName: "Keenthemes",
      phone: "456669067890",
      language: "en",
      timeZone: "International Date Line West",
      website: "https://keenthemes.com",
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutStartOnPartnerProductsAndOtherServices: true,
          tipsOnStartBusinessProducts: true,
        },
      },
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      address: {
        addressLine: "L-12-20 Vertex, Cybersquare",
        city: "San Francisco",
        state: "California",
        postCode: "45000",
      },
      socialNetworks: {
        linkedIn: "https://linkedin.com/admin",
        facebook: "https://facebook.com/admin",
        twitter: "https://twitter.com/admin",
        instagram: "https://instagram.com/admin",
      },
      exhibitions: [{
        _id:"61c2adddcd38e406f56b9f21",
        ver: 0,
        code: "Gogh",
        title: "Vincent Van Gogh",
        environmentId: null,
        thumbnailAssetId: "6188d7d9bdabae54ad5f6026",
        thumbnailAssetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
        profileAssetId: "618ca59701938b1a9d957ea2",
        links: [{
          link: "www.daum.net",
          type: "exhibition"
        }],
        contact: '010-1111-1111',
        environment: null,
        channelPluginKey: null,
        createdAt: "2021-11-08T07:50:17.627Z",
        updatedAt: "2021-11-19T07:28:38.070Z",
        description: "",
        priceType: "standard",
        exhibitionType: "individual",
        booths: [{
          _id: "616000347491ab44442310b1",
          ver: 0,
          type: 0,
          number: 0,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b2",
          ver: 0,
          type: 0,
          number: 1,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b3",
          ver: 0,
          type: 0,
          number: 2,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b4",
          ver: 0,
          type: 0,
          number: 3,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b5",
          ver: 0,
          type: 0,
          number: 4,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b6",
          ver: 0,
          type: 0,
          number: 5,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b7",
          ver: 0,
          type: 0,
          number: 6,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b8",
          ver: 0,
          type: 0,
          number: 7,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab44442310b9",
          ver: 0,
          type: 0,
          number: 8,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231010",
          ver: 0,
          type: 0,
          number: 9,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231011",
          ver: 0,
          type: 0,
          number: 10,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231012",
          ver: 0,
          type: 0,
          number: 11,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231013",
          ver: 0,
          type: 0,
          number: 12,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231014",
          ver: 0,
          type: 0,
          number: 13,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231015",
          ver: 0,
          type: 0,
          number: 14,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231016",
          ver: 0,
          type: 0,
          number: 15,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231017",
          ver: 0,
          type: 0,
          number: 16,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231018",
          ver: 0,
          type: 0,
          number: 17,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231019",
          ver: 0,
          type: 0,
          number: 18,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        },
        {
          _id: "616000347491ab4444231020",
          ver: 0,
          type: 0,
          number: 19,
          assetId: "61651a61f13e67220b7bdad9",
          assetUrl: "https://thumb.mt.co.kr/06/2020/10/2020101717268259432_1.jpg/dims/optimize/",
          informations: {
            artist_name: "Vincent van Gogh",
            artist_detail: "Vincent Willem van Gogh (1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art.",
            piece_name: "별이 빛나는 밤",
            piece_detail: "제작년도 : 1889작품재료 : 캔버스에 유채작품크기 : 73x92cm소장위치 : 뉴욕 현대 미술관",
            createdDate: "2021-12-22T07:10:59.291Z",
            material: "",
            owner: "",
            size: ""
          }
        }]
      }]
    },
    
  ];
}
