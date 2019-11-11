import {
  ADD_NEW_USER_FAILURE,
  ADD_NEW_USER_STARTED,
  ADD_NEW_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_STARTED,
  LOGIN_SUCCESS
} from '../Actions/Actions'

const initialState = {
  loading: false,
  user: '',
  error: null,
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
    default:
      return state;
  }
}

