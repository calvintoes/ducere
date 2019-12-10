import {
  ADD_NEW_USER_FAILURE,
  ADD_NEW_USER_STARTED,
  ADD_NEW_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  FETCH_TOKEN_STARTED,
  FETCH_TOKEN_FAILURE,
  FETCH_TOKEN_SUCCESS,
  MESSAGE_CARDS_FAILURE,
  MESSAGE_CARDS_STARTED,
  MESSAGE_CARDS_SUCCESS,
  CREATE_POST_CARDS_FAILURE,
  CREATE_POST_CARDS_STARTED,
  CREATE_POST_CARDS_SUCCESS,
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_STARTED,
  FETCH_USER_DATA_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_STARTED,
  CHANGE_PASSWORD_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_STARTED,
  LOGOUT_SUCCESS,
  SET_FULL_NAME_FAILURE,
  SET_FULL_NAME_STARTED,
  SET_FULL_NAME_SUCCESS,
  LOAD_ALL_CARDS_FAILURE,
  LOAD_ALL_CARDS_STARTED,
  LOAD_ALL_CARDS_SUCCESS
} from '../Actions/Actions'

const initialState = {
  loading: false,
  login: null,
  currentUser: null,
  error: null,
  token:'',
  type: null,
  messageCards: [],
};

const rootReducer = (state, action) => {
  if(action.type === LOGOUT_SUCCESS){
    return {
      initialState
    }
  }

  return SignUpReducer(state, action)
}

const SignUpReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_NEW_USER_STARTED:
      return {
        ...state,
        type: action.type,
        loading: true,
      };
    case ADD_NEW_USER_FAILURE:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      };
    case ADD_NEW_USER_SUCCESS:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: null,
        user: action.payload
      }
    case FETCH_TOKEN_STARTED:
      return{
        ...state,
        type: action.type,
        loading:true,
      }
    case FETCH_TOKEN_FAILURE:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_TOKEN_SUCCESS:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: null,
        token: action.payload.csrfToken
      }
    case LOGIN_STARTED:
      return{
        ...state,
        type: action.type,
        loading:true,
      }
    case LOGIN_FAILURE:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      };
    case LOGIN_SUCCESS:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: null,
        currentUser: action.payload.username
      }
    case MESSAGE_CARDS_STARTED:
      return{
        ...state,
        type: action.type,
        loading:true,
      }
    case MESSAGE_CARDS_FAILURE:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      };
    case MESSAGE_CARDS_SUCCESS:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: null,
        messageCards: action.payload
      }
    case CREATE_POST_CARDS_STARTED:
      return{
        ...state,
        type: action.type,
        loading:true,
      }
    case CREATE_POST_CARDS_FAILURE:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      };
    case CREATE_POST_CARDS_SUCCESS:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: null,
        messageCards: [...state.messageCards, action.payload]
      }
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      }
    case FETCH_USER_DATA_STARTED:
      return {
        ...state,
        type: action.type,
        loading: true,
      }
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: null,
        currentUser: action.payload.docs
      }
    case CHANGE_PASSWORD_FAILURE:
        return {
          ...state,
          type: action.type,
          loading: false,
          error: action.payload.error,
        }
    case CHANGE_PASSWORD_STARTED:
      return {
        ...state,
        type: action.type,
        loading: true,
      }
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: null,
      } 
    case LOGOUT_STARTED:
      return{
        ...state,
        type: action.type,
        loading:true,
      }
    case LOGOUT_FAILURE:
      return{
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState
      }
    case SET_FULL_NAME_FAILURE:
        return {
          ...state,
          type: action.type,
          loading: false,
          error: action.payload.error,
        }
    case SET_FULL_NAME_STARTED:
      return {
        ...state,
        type: action.type,
        loading: true,
      }
    case SET_FULL_NAME_SUCCESS:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: null,
      } 
    case LOAD_ALL_CARDS_FAILURE:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: action.payload.error,
      }
    case LOAD_ALL_CARDS_STARTED:
      return {
        ...state,
        type: action.type,
        loading: true,
      }
    case LOAD_ALL_CARDS_SUCCESS:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: null,
        messageCards: action.payload
      } 
    default:
      return state;
  }
}

export default rootReducer;