import React, { useEffect } from 'react';
import { User } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/actions';

function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(1));
  }, [dispatch]);
  const userDetails = useSelector((state) => state.userDetails);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);


  console.log("userDetails", userDetails)
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className='title'>
            <div className='name'>Name</div>
            <div className='status'>Status</div>
            <div className='access'>Access</div>
          </div>
          <div className='user-list-container'>
            {userDetails && userDetails.map((user) => {
              const { id } = user
              return (
                <User key={id} user={user} />
              )
            })}
          </div>
        </>
      )}
    </>
  );
}


export default UserList;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserData } from '../../redux/actions';
// import User from '../User/User';

// function UserList() {

//   const dispatch = useDispatch();
//   const userDetails = useSelector((state) => state.userDetails);
//   const isLoading = useSelector((state) => state.isLoading);
//   const error = useSelector((state) => state.isError);

//   useEffect(() => {
//     dispatch(getUserData(1));
//   }, [dispatch]);

//   console.log("user details",userDetails,"error", error,"isLoading", isLoading)

//   return (
//     <>
//     <h1>{userDetails}, {error}, {isLoading}</h1>
//       {/* <div className='title'>
//       <div className='name'>Name</div>
//       <div className='status'>Status</div>
//       <div className='access'>Access</div>
//     </div>
//       <div className='user-list-container'>
//       { userDetails?.map((user) => {
//       const {id} = user
//       return(
//         <User key={ id } user={ user } />        
//       )
//     })}
//       </div> */}
//     </>
//   )
// }

// export default UserList;