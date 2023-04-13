import axios from "axios"

export const mouseEnter = (user) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      user,
    }
  }
}
export const mouseLeave = (user) => {
  return {
    type: 'MOUSE_LEAVE',
    payload: {
      user,
    }
  }
}
export const requestFulFilled=(data)=> {
  return { 
    type: "REQUEST_FULLFILLED", 
    payload: data 
  }
}
export const requestRejected=(error)=> {
  return { 
    type: "REQUEST_REJECTED", 
    error: error 
  }
}
export const requestPending=()=> {
  return { 
    type: "REQUEST_PENDING" 
  }
}

export const getUserData = (pageNo) => {
  return async (dispatch) => {
    dispatch(requestPending());
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNo}`);
      dispatch(requestFulFilled(response.data.amount));
    } catch (error) {
      dispatch(requestRejected(error.message));
    }
  };
};



// export const getUserData=(pageNo)=> {
//   return ()=>async (dispatch) => {
//     try {
//       dispatch(requestPending());
//       const { data } = await axios.get(`https://reqres.in/api/users?page=${pageNo}`);
//       dispatch(requestFulFilled(data.amount));
//     } catch (error) {
//       dispatch(requestRejected(error.message));
//     }
//   };
// }

// export const requestUsers = (pageNo) => {
//   const url = ;
//   return (dispatch) => {
//     dispatch(fetchUserRequest());
//     const { CancelToken } = axios;
//     const source = CancelToken.source();
//     axios.get(url, {cancelToken: source.token})
//       .then((response) => {
//         const users = response.data
//         dispatch(fetchUserSuccess(users))
//       })
//       .catch((thrown) => {
//         if (axios.isCancel(thrown)) {
//           console.log('Request canceled', thrown.message);
//         } else {
//           const errorMsg = thrown.message
//           dispatch(fetchUserFailure(errorMsg))
//         }
//       });
//   }
// }