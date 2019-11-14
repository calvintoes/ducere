import {
  ADD_NEW_USER_FAILURE,
  ADD_NEW_USER_STARTED,
  ADD_NEW_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  FETCH_TOKEN_STARTED,
  FETCH_TOKEN_FAILURE,
  FETCH_TOKEN_SUCCESS
} from '../Actions/Actions'

const initialState = {
  loading: false,
  user: '',
  error: null,
  token:''
};

export default function SignUpReducer( state = initialState, action ){
  switch (action.type) {
    case ADD_NEW_USER_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_NEW_USER_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ADD_NEW_USER_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
        user: action.payload
      }
    case FETCH_TOKEN_STARTED:
      return{
        ...state,
        loading:true,
      }
    case FETCH_TOKEN_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_TOKEN_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
        token: action.payload
      }
    default:
      return state;
  }
}

