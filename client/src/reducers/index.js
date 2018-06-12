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
  getRelationshipsSuccessReducer,
  getCurrentUserRelationshipsLoadingReducer,
  getCurrentUserRelationshipsErrorReducer,
  getCurrentUserRelationshipsSuccessReducer
} from './relationships'

import {
  getUserPostsLoadingReducer,
  getUserPostsErrorReducer,
  getUserPostsSuccessReducer
} from './userReducer'

export default combineReducers({
  routing: routerReducer,
  userAuthToken: loginUserSuccessReducer,
  currentUser: getCurrentUserSuccessReducer,
  currentUserFeed: getCurrentUserFeedSuccessReducer,
  currentUserRelationships: getCurrentUserRelationshipsSuccessReducer,
  userPosts: getUserPostsSuccessReducer,
  relationships: getRelationshipsSuccessReducer,
  loginUserIsLoading: loginUserIsLoadingReducer,
  loginUserHasErrored: loginUserHasErroredReducer,
  currentUserIsLoading: getCurrentUserLoadingReducer,
  currentUserHasErrored: getCurrentUserHasErroredReducer,
  currentUserFeedIsLoading: getCurrentUserFeedLoadingReducer,
  currentUserFeedHasErrored: getCurrentUserFeedErrorReducer,
  currentUserRelationshipsLoading: getCurrentUserRelationshipsLoadingReducer,
  currentUserRelationshipsError: getCurrentUserRelationshipsErrorReducer,
  relationshipsAreLoading: getRelationshipsLoadingReducer,
  relationshipsHasErrored: getRelationshipsErrorReducer,
  postsLoading: getUserPostsLoadingReducer,
  postsError: getUserPostsErrorReducer
})