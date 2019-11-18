

// Action Types

export const ADD_NEW_USER_STARTED = 'ADD_NEW_USER_STARTED';
export const ADD_NEW_USER_FAILURE = 'ADD_NEW_USER_FAILURE';
export const ADD_NEW_USER_SUCCESS = 'ADD_NEW_USER_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FETCH_TOKEN_STARTED = 'FETCH_TOKEN_STARTED';
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
export const MESSAGE_CARDS_STARTED = 'MESSAGE_CARDS_STARTED';
export const MESSAGE_CARDS_SUCCESS = 'MESSAGE_CARDS_SUCCESS';
export const MESSAGE_CARDS_FAILURE = 'MESSAGE_CARDS_FAILURE';

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




// Action Creators
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
   console.log(user)
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




export default { 
  postAddNewUser,
  fetchToken,
  loginUser ,
  loadMessageCards
};


