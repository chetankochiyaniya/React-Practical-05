import { MOUSE_ENTER,MOUSE_LEAVE,REQUEST_PENDING, REQUEST_FULLFILLED, REQUEST_REJECTED, CHANGE_PAGE } from '../constant'

const initialState = {
  userDetails: [],
  isLoading: false,
  error: '',
  userProfile: [],
  pagination: 1,
}

const userListReducer = (state = initialState, action) => {
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