import { 
  GET_USER_POSTS_LOADING,
  GET_USER_POSTS_ERROR,
  GET_USER_POSTS_SUCCESS,
  getUserPostsLoading,
  getUserPostsError,
  getUserPostsSuccess
} from '../actions';

import { push } from 'react-router-redux';
import { history } from '../store/store';

export function getUserPostsLoadingReducer(state = false, action) {
  switch (action.type) { 
   case GET_USER_POSTS_LOADING:
      return action.postsLoading
    default:
      return state
  }
}

export function getUserPostsErrorReducer(state = false, action) {
  switch (action.type) {
    case GET_USER_POSTS_ERROR:
      return action.postsError
    default:
      return state
  }
}

export function getUserPostsSuccessReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}

export function getUserPosts(userId) {
  return (dispatch) => {
    dispatch(getUserPostsLoading(true))
    return fetch(`http://localhost:3001/users/${userId}/posts`, {
      method: 'GET',
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`}
  })
    .then((response) => {
      dispatch(getUserPostsLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((response) => dispatch(getUserPostsSuccess(response)))
    .then(history.push('/userpage'))
  }
}


