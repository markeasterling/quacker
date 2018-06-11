import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { 
  loginUserIsLoadingReducer,
  loginUserHasErroredReducer,
  loginUserSuccessReducer,
  getCurrentUserLoadingReducer,
  getCurrentUserHasErroredReducer,
  getCurrentUserSuccessReducer,
  getCurrentUserFeedLoadingReducer,
  getCurrentUserFeedErrorReducer,
  getCurrentUserFeedSuccessReducer
} from './loginReducer'

import { 
  getRelationshipsLoadingReducer,
  getRelationshipsErrorReducer,
  getRelationshipsSuccessReducer 
} from './relationships'

export default combineReducers({
  routing: routerReducer,
  userAuthToken: loginUserSuccessReducer,
  currentUser: getCurrentUserSuccessReducer,
  currentUserFeed: getCurrentUserFeedSuccessReducer,
  relationships: getRelationshipsSuccessReducer,
  loginUserIsLoading: loginUserIsLoadingReducer,
  loginUserHasErrored: loginUserHasErroredReducer,
  currentUserIsLoading: getCurrentUserLoadingReducer,
  currentUserHasErrored: getCurrentUserHasErroredReducer,
  currentUserFeedIsLoading: getCurrentUserFeedLoadingReducer,
  currentUserFeedHasErrored: getCurrentUserFeedErrorReducer,
  relationshipsAreLoading: getRelationshipsLoadingReducer,
  relationshipsHasErrored: getRelationshipsErrorReducer,

})