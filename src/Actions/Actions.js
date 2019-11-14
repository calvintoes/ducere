
// Action Types

export const ADD_NEW_USER_STARTED = 'ADD_NEW_USER_STARTED';
export const ADD_NEW_USER_FAILURE = 'ADD_NEW_USER_FAILURE';
export const ADD_NEW_USER_SUCCESS = 'ADD_NEW_USER_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCESS';
export const FETCH_TOKEN_STARTED = 'FETCH_TOKEN_STARTED';
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';

const fetchTokenStarted = () => {
  return {
    type: FETCH_TOKEN_STARTED,
  }
}

const fetchTokenSuccess = (csrf) => {
  return{
    type: FETCH_TOKEN_SUCCESS,
    payload: csrf,
  }
}

const fetchTokenFailure = (error) => {
  return {
    type: FETCH_TOKEN_FAILURE,
    payload: {
      error
    }
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



// Action Creators
const fetchToken = () => {
  return dispatch => {
    dispatch(fetchTokenStarted());
    return fetch('/getToken')
    .then(res => res.json())
    .then(json => dispatch(fetchTokenSuccess()))
    .catch( err => {
      dispatch(fetchTokenFailure());
    })
  }
}

const postAddNewUser = (user) => {
  return (dispatch, getState) => {
    dispatch(addNewUserStarted());
    const state = getState();
    const token = state.currentUser.token
    return fetch('/signup',{
      method: "POST",
      headers: {
        'X-CSRF-TOKEN': `Bearer ${token}`
      },
    })
    .then(res => res.json())
    .then(json => dispatch(addNewUserSuccess(json)))
    .catch(err => {
      dispatch(addNewUserFailure(err.message));
    })
  }
}




export default { 
  postAddNewUser,
  fetchToken 
};


