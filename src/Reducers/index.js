import { combineReducers } from 'redux'
import user from './SignUpReducer'
import story from './StoryReducer'

export default combineReducers({
  user,
  story
});