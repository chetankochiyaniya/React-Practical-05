import { MOUSE_ENTER,MOUSE_LEAVE,REQUEST_PENDING, REQUEST_FULLFILLED, REQUEST_REJECTED, API, CHANGE_PAGE } from '../constant'

export const mouseEnter = (user) => {
  return {
    type: MOUSE_ENTER,
    payload: {
      user,
    }
  }
}
export const mouseLeave = (user) => {
  return {
    type: MOUSE_LEAVE,
    payload: {
      user,
    }
  }
}
export const handlePagination = (pageNumber) => {
  return {
    type: CHANGE_PAGE,
    payload: {
      pagination: pageNumber,
    },
  };
};

export const getUserData = (pageNum) => async (dispatch) => {
  dispatch({ type: REQUEST_PENDING });
  try {
    const response = await fetch(`${API}?page=${pageNum}`);
    const data = await response.json();

    dispatch({ type: REQUEST_FULLFILLED, payload: data.data });
  } catch (error) {
    dispatch({ type: REQUEST_REJECTED, error: error.message });
  }
};