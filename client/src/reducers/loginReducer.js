import { 
  LOGIN_IS_LOADING, 
  LOGIN_HAS_ERRORED, 
  LOGIN_SUCCESS,
  GET_CURRENT_USER_LOADING,
  GET_CURRENT_USER_ERROR,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FEED_LOADING,
  GET_CURRENT_USER_FEED_ERROR,
  GET_CURRENT_USER_FEED_SUCCESS,
  loginUserIsLoading,
  loginUserHasErrored,
  loginUserSuccess,
  getCurrentUserLoading,
  getCurrentUserError,
  getCurrentUserSuccess,
  getCurrentUserFeedLoading,
  getCurrentUserFeedError,
  getCurrentUserFeedSuccess
} from '../actions';
import { push } from 'react-router-redux';
import { history } from '../store/store';

export function loginUserIsLoadingReducer(state = false, action) {
  switch (action.type) {
    case LOGIN_IS_LOADING:
      return action.loginIsLoading;

    default:
      return state;
  }
}

export function loginUserHasErroredReducer(state = false, action) {
  switch (action.type) {
    case LOGIN_HAS_ERRORED:
      return action.loginHasErrored;

    default:
      return state
  }
}

export function loginUserSuccessReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.token;
    default:
      return state
  }
}

export function getCurrentUserLoadingReducer(state = false, action) {
  switch (action.type) {
    case GET_CURRENT_USER_LOADING:
      return action.currentUserIsLoading;

    default:
      return state;
  }
}

export function getCurrentUserHasErroredReducer(state = false, action) {
  switch (action.type) {
    case GET_CURRENT_USER_ERROR:
      return action.currentUserHasErrored;

    default:
      return state
  }
}

export function getCurrentUserSuccessReducer(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return action.user;
    default:
      return state
  }
}

export function getCurrentUserFeedLoadingReducer(state = false, action) {
  switch (action.type) {
    case GET_CURRENT_USER_FEED_LOADING:
      return action.feedIsLoading
    default:
      return state
  }
}

export function getCurrentUserFeedErrorReducer(state = false, action) {
  switch (action.type) {
    case GET_CURRENT_USER_FEED_ERROR:
      return action.feedHasErrored
    default:
      return state
  }
}

export function getCurrentUserFeedSuccessReducer(state = [], action) {
  switch (action.type) {
    case GET_CURRENT_USER_FEED_SUCCESS:
      return action.feed
    default:
      return state
  }
}

export function loginLoadCurrentUser(email, password) {
  return (dispatch, getState) => {
    return dispatch(getToken(email, password)).then(() => {
      return dispatch(getCurrentUser()).then(() => {
        return dispatch(getCurrentUserPosts()).then(() => {
          // return history.push('/feed')
        })
      })
    })
  }
}

export function getToken(email, password) {
  return (dispatch) => {
    dispatch(loginUserIsLoading(true));
    return fetch('http://localhost:3001/user_token', { 
        method: 'POST',
        body: `{"auth":{"email": "${email}", "password": "${password}"}}`,
        headers: {"Content-Type": "application/json"} 
    })
      .then((response) => {
        dispatch(loginUserIsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem('token', response.jwt)
        dispatch(loginUserSuccess(response))
      })
      .catch(() => dispatch(loginUserHasErrored(true)))
  }
}

export function getCurrentUser() {
  return (dispatch) => {
    dispatch(getCurrentUserLoading(true))
    return fetch('http://localhost:3001/users/current', {
      method: 'GET',
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`}
    })
      .then((response) => {
        dispatch(getCurrentUserLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((response) => dispatch(getCurrentUserSuccess(response)))
      .catch(() => dispatch(getCurrentUserError(true)))
  }
}

export function getCurrentUserPosts() {
  return (dispatch, getState) => {
    dispatch(getCurrentUserFeedLoading(true))
    const {currentUser} = getState();
    return fetch(`http://localhost:3001/users/${currentUser.id}/post_feed`, {
      method: 'GET',
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`}
    })
      .then((response) => {
        dispatch(getCurrentUserFeedLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((response) => dispatch(getCurrentUserFeedSuccess(response)))
      .catch(() => dispatch(getCurrentUserFeedError(true)))

  }
}

