
// Action Types

export const ADD_NEW_USER_STARTED = 'ADD_NEW_USER_STARTED';
export const ADD_NEW_USER_FAILURE = 'ADD_NEW_USER_FAILURE';
export const ADD_NEW_USER_SUCCESS = 'ADD_NEW_USER_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCESS';



// Action Creators
const postAddNewUser = (user) => {
  return dispatch => {
    dispatch(addNewUserStarted());
    return fetch('/signup')
    .then(res => res.json())
    .then(json => dispatch(addNewUserSuccess(json)))
    .catch(err => {
      dispatch(addNewUserFailure(err.message));
    })
  }
}



const addNewUserStarted = () => {
  return {
    type: ADD_NEW_USER_STARTED,
  }
}

const addNewUserSuccess = (user) => {
  return{
    type: ADD_NEW_USER_SUCCESS,
    payload: {
      ...user
    }
  }
}

const addNewUserFailure = (error) => {
  return {
    type: ADD_NEW_USER_FAILURE,
    payload: {
      error
    }
  }
}


export default postAddNewUser;
