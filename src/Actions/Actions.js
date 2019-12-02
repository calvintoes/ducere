

// Action Types

export const ADD_NEW_USER_STARTED = 'ADD_NEW_USER_STARTED';
export const ADD_NEW_USER_FAILURE = 'ADD_NEW_USER_FAILURE';
export const ADD_NEW_USER_SUCCESS = 'ADD_NEW_USER_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_STARTED = 'LOGOUT_STARTED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_TOKEN_STARTED = 'FETCH_TOKEN_STARTED';
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
export const MESSAGE_CARDS_STARTED = 'MESSAGE_CARDS_STARTED';
export const MESSAGE_CARDS_SUCCESS = 'MESSAGE_CARDS_SUCCESS';
export const MESSAGE_CARDS_FAILURE = 'MESSAGE_CARDS_FAILURE';
export const CREATE_POST_CARDS_STARTED = 'CREATE_POST_CARDS_STARTED';
export const CREATE_POST_CARDS_SUCCESS = 'CREATE_POST_CARDS_SUCCESS';
export const CREATE_POST_CARDS_FAILURE = 'CREATE_POST_CARDS_FAILURE';
export const FETCH_USER_DATA_STARTED = 'FETCH_USER_DATA_STARTED'
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS'
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE'
export const CHANGE_PASSWORD_STARTED = 'CHANGE_PASSWORD_STARTED'
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE'
export const SET_FULL_NAME_STARTED = 'SET_FULL_NAME_STARTED'
export const SET_FULL_NAME_SUCCESS = 'SET_FULL_NAME_SUCCESS'
export const SET_FULL_NAME_FAILURE = 'SET_FULL_NAME_FAILURE'

// Dispatches
const fetchTokenStarted = () => {
  return {
    type: FETCH_TOKEN_STARTED,
  }
}

const fetchTokenSuccess = (token) => {
  return{
    type: FETCH_TOKEN_SUCCESS,
    payload: token,
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
    payload: error
    
  }
}

const loginStarted = () => {
  return {
    type: LOGIN_STARTED
  }
}

const loginSuccess = (path) => {
  return {
    type: LOGIN_SUCCESS,
    payload: path
  }
}

const loginFailure = (error) => {
  return {
    type:LOGIN_FAILURE,
    payload: { error }
  }
}

const messageCardsStarted = () => {
  return {
    type:  MESSAGE_CARDS_STARTED
  }
}

const messageCardsSuccess = (cards) => {
  return {
    type:  MESSAGE_CARDS_SUCCESS,
    payload: cards
  }
}

const messageCardsFailure = (error) => {
  return {
    type: MESSAGE_CARDS_FAILURE,
    payload: { error }
  }
}

const createPostCardsStarted = () => {
  return {
    type: CREATE_POST_CARDS_STARTED
  }
}

const createPostCardsSuccess = (cards) => {
  return {
    type: CREATE_POST_CARDS_SUCCESS,
    payload: cards
  }
}

const createPostCardsFailure = (error) => {
  return {
    type: CREATE_POST_CARDS_FAILURE,
    payload: { error }
  }
}

const fetchUserDataStarted = () => {
  return {
    type: FETCH_USER_DATA_STARTED
  }
}

const fetchUserDataSuccess = (user) => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: user
  }
}

const fetchUserDataFailure = (error) => {
  return {
    type: FETCH_USER_DATA_FAILURE,
    payload: { error }
  }
}

const changePasswordStarted = () => {
  return {
    type: CHANGE_PASSWORD_STARTED
  }
}

const changePasswordSuccess = (data) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data
  }
}

const changePasswordFailure = (error) => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: { error }
  }
}

const setFullNameStarted = () => {
  return {
    type: SET_FULL_NAME_STARTED
  }
}

const setFullNameSuccess = (data) => {
  return {
    type: SET_FULL_NAME_SUCCESS,
    payload: data
  }
}

const setFullNameFailure = (error) => {
  return {
    type: SET_FULL_NAME_FAILURE,
    payload: { error }
  }
}

const logoutStarted = () => {
  return {
    type: LOGOUT_STARTED
  }
}

const logoutSuccess = (data) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: data
  }
}

const logoutFailure = (error) => {
  return {
    type: LOGOUT_FAILURE,
    payload: { error }
  }
}


//  === Action Creators ===
const fetchToken = () => {
  return dispatch => {
    dispatch(fetchTokenStarted());
    return fetch('/getToken')
    .then(res => res.json())
    .then(json => dispatch(fetchTokenSuccess(json)))
    .catch( err => {
      dispatch(fetchTokenFailure(err));
    })
  }
}

const postAddNewUser = (user, token) => {
  return (dispatch) => {
    dispatch(addNewUserStarted());
    return fetch('/signup',{
      method: "POST",
      headers: {
        'X-CSRF-TOKEN': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(json => dispatch(addNewUserSuccess(json)))
    .catch(err => {
      dispatch(addNewUserFailure(err.message));
    })
  }
}

const loginUser = (user) => {
  return (dispatch) => {
    dispatch(loginStarted());
    return fetch('/login',{
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(json => dispatch(loginSuccess(json)))
    .catch(err => {
      dispatch(loginFailure(err.message));
    })
  }
}

const loadMessageCards = () => {
  return dispatch => {
    dispatch(messageCardsStarted());
    return fetch('/loadDash')
    .then(res => res.json())
    .then(json => dispatch(messageCardsSuccess(json)))
    .catch( err => {
      dispatch(messageCardsFailure(err));
    })
  }
}

const createPostCards = (data) => {
  return (dispatch) => {
    dispatch(createPostCardsStarted());
    return fetch('/makeCards',{
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(json => dispatch(createPostCardsSuccess(json)))
    .catch(err => {
      dispatch(createPostCardsFailure(err.message));
    })
  }
}

const fetchUserData = (token) => {
  return dispatch => {
    dispatch(fetchUserDataStarted());
    return fetch('/fetchUserData',{
      headers: {
        'X-CSRF-TOKEN': token,
      },
    })
    .then(res => res.json())
    .then(json => dispatch(fetchUserDataSuccess(json)))
    .catch(err => {
      dispatch(fetchUserDataFailure(err.message));
    })
  }
}

const setNewPassword = (data) => {
  return (dispatch) => {
    dispatch(changePasswordStarted());
    return fetch('/changePwd',{
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(json => dispatch(changePasswordSuccess(json)))
    .catch(err => {
      dispatch(changePasswordFailure(err.message));
    })
  }
}

const logout = () => {
  return dispatch => {
    dispatch(logoutStarted());
    return fetch('/logout')
    .then(res => res.json())
    .then(json => dispatch(logoutSuccess(json)))
    .catch(err => {
      dispatch(logoutFailure(err.message));
    })
  }
}

const setFullName = (data) => {
  return (dispatch) => {
    dispatch(setFullNameStarted());
    return fetch('/setName',{
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(json => dispatch(setFullNameSuccess(json)))
    .catch(err => {
      dispatch(setFullNameFailure(err.message));
    })
  }
}


export default { 
  postAddNewUser,
  fetchToken,
  loginUser ,
  loadMessageCards,
  createPostCards,
  fetchUserData,
  setNewPassword,
  logout,
  setFullName
};


