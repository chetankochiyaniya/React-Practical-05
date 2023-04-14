import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/actions';
import User from '../User/User';

function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(1));
  }, [dispatch]);

  const userDetails = useSelector((state) => state.userDetails);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='title'>
            <div className='name'>Name</div>
            <div className='status'>Status</div>
            <div className='access'>Access</div>
          </div>
          <div className='user-list-container'>
            {userDetails?.map((user) => {
              const { id } = user;
              return <User key={id} user={user} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default UserList;
