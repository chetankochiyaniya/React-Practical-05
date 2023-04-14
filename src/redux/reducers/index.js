import { MOUSE_ENTER,MOUSE_LEAVE,REQUEST_PENDING, REQUEST_FULLFILLED, REQUEST_REJECTED, CHANGE_PAGE } from '../constant'

const initialState = {
  userDetails: [],
  isLoading: false,
  error: '',
  userProfile: [],
  pagination: 1,
}
// const initialState = {
//   userDetails: [ 
//     {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg","clicksReviewed":"3000","monthlyClicks":"5000","isUserActive":true},
//     {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg","clicksReviewed":"1000","monthlyClicks":"3000","isUserActive":false},
//     {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg","clicksReviewed":"3000","monthlyClicks":"6000","isUserActive":false},
//     {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg","clicksReviewed":"2000","monthlyClicks":"5000","isUserActive":false},
//     {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg","clicksReviewed":"1500","monthlyClicks":"3000","isUserActive":false},
//     {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg","clicksReviewed":"5000","monthlyClicks":"5000","isUserActive":false},
//   ],
//   userProfile: [],
// };

const userListReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case MOUSE_ENTER:
      return {
        ...state,
        userProfile: [
          {
            user: action.payload.user
          }
        ]
      }
    case MOUSE_LEAVE:
      return {
        ...state,
        userProfile: []
      }

      case REQUEST_PENDING:
        return {
          ...state,
          isLoading: true,
          userDetails: [],
          error: null,
        };
      case REQUEST_FULLFILLED:
        const userDetails = action.payload.map((userDetail) => {
          if (userDetail.id === 1) {
            return {
              ...userDetail,
              isUserActive: true,
              userAccess: 'Owner',
            };
          } else {
            return {
              ...userDetail,
              isUserActive: false,
              userAccess: 'Manager',
            };
          }
        });
        return {
          ...state,
          isLoading: false,
          userDetails,
        };
      case REQUEST_REJECTED:
        return {
          ...state,
          isLoading: false,
          userDetails: [],
          error: action.error,
        };
      case CHANGE_PAGE:
          return {
            ...state,
            pagination: action.payload.pagination,
          };
    default: return state;
  }
}

export default userListReducer;