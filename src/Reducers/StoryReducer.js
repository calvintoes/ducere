import {
  POST_STORY_FAILURE,
  POST_STORY_STARTED,
  POST_STORY_SUCCESS,
  LOAD_STORY_FAILURE,
  LOAD_STORY_STARTED,
  LOAD_STORY_SUCCESS,
} from '../Actions/Actions';

const initialStoryState = {
  loading: false,
  error: null,
  type: null,
  stories: [],
  success: null
};

const StoryReducer = ( state = initialStoryState, action ) => {
  switch (action.type) {
    case POST_STORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        type: action.type,
        loading: false,
      }
    case POST_STORY_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type,
      }
    case POST_STORY_SUCCESS:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: null,
        success: action.payload
      }
    case LOAD_STORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        type: action.type,
        loading: false,
      }
    case LOAD_STORY_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type,
      }
    case LOAD_STORY_SUCCESS:
      return {
        ...state,
        type: action.type,
        loading: false,
        error: null,
        stories: action.payload.stories
      }
    default:
      return state;
  }
}

export default StoryReducer;