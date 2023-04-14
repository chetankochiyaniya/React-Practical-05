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
export const requestFulFilled=(users)=> {
  return { 
    type: "REQUEST_FULLFILLED", 
    payload: users
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

export const getUserData = (page) => {
  return (dispatch) => {
    dispatch(requestPending());
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        const users = response.data.data;
        // console.log("response data:", response.data);
        // console.log("users:", users);
        dispatch(requestFulFilled(users));
      })
      .catch((error) => {
        // console.log("error:", error);
        dispatch(requestRejected(error.message));
      });
  };
};


// export const getUserData = (page) => {
//   return (dispatch) => {
//     dispatch(requestPending());
//     axios
//       .get(`https://reqres.in/api/users?page=${page}`)
//       .then((response) => {
//         const users = response.data.data
//         console.log("users",users)
//         dispatch(requestFulFilled(users))
//       })
//       .catch((error) => {
//         dispatch(requestRejected(error.message))
//       });
//   };
// };
