import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/actions';
import User from '../User/User';

function UserList() {

  const { userDetails, error, isLoading, pagination } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(pagination)); 
  }, []);
  console.log("user details",userDetails,"error", error,"isLoading", isLoading,"pagination", pagination)

  return (
    <>
    <h1>{userDetails}, {error}, {isLoading}, {pagination}</h1>
      {/* <div className='title'>
      <div className='name'>Name</div>
      <div className='status'>Status</div>
      <div className='access'>Access</div>
    </div>
      <div className='user-list-container'>
      { userDetails?.map((user) => {
      const {id} = user
      return(
        <User key={ id } user={ user } />        
      )
    })}
      </div> */}
    </>
  )
}

export default UserList;