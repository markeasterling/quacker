import {
  GET_RELATIONSHIPS_LOADING, 
  GET_RELATIONSHIPS_ERROR, 
  GET_RELATIONSHIPS_SUCCESS,
  GET_CURRENT_USER_RELATIONSHIPS_LOADING, 
  GET_CURRENT_USER_RELATIONSHIPS_ERROR, 
  GET_CURRENT_USER_RELATIONSHIPS_SUCCESS,
  getRelationshipsLoading,
  getRelationshipsError,
  getRelationshipsSuccess,
  getCurrentUserRelationshipsLoading,
  getCurrentUserRelationshipsError,
  getCurrentUserRelationshipsSuccess
} from '../actions';

export function getRelationshipsLoadingReducer(state = false, action) {
  switch (action.type) {
    case GET_RELATIONSHIPS_LOADING:
      return action.relationshipsAreLoading;

    default:
      return state;
  }
}

export function getRelationshipsErrorReducer(state = false, action) {
  switch (action.type) {
    case GET_RELATIONSHIPS_ERROR:
      return action.relationshipsHasErrored;

    default:
      return state;
  }
}

export function getRelationshipsSuccessReducer(state = [], action) {
  switch (action.type) {
    case GET_RELATIONSHIPS_SUCCESS:
      return action.relationships;

    default:
      return state;
  }
}

export function getCurrentUserRelationshipsLoadingReducer(state = false, action) {
  switch (action.type) {
    case GET_CURRENT_USER_RELATIONSHIPS_LOADING:
      return action.currentUserRelationshipsLoading;

    default:
      return state;
  }
}

export function getCurrentUserRelationshipsErrorReducer(state = false, action) {
  switch (action.type) {
    case GET_CURRENT_USER_RELATIONSHIPS_ERROR:
      return action.currentUserRelationshipsHasErrored;

    default:
      return state;
  }
}

export function getCurrentUserRelationshipsSuccessReducer(state = [], action) {
  switch (action.type) {
    case GET_CURRENT_USER_RELATIONSHIPS_SUCCESS:
      return action.currentUserRelationships;

    default:
      return state;
  }
}

export function getCurrentUserRelationships(userId) {
  return (dispatch) => {
    dispatch(getCurrentUserRelationshipsLoading(true));
    return fetch(`http://localhost:3001/users/${userId}/relationships`, {
      method: 'GET',
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`}
    })
      .then((response) => {
        dispatch(getCurrentUserRelationshipsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((response) => dispatch(getCurrentUserRelationshipsSuccess(response)))
      .catch(() => dispatch(getCurrentUserRelationshipsError(true)))
  }
}

export function getRelationships(userId) {
  return (dispatch) => {
    dispatch(getRelationshipsLoading(true));
    return fetch(`http://localhost:3001/users/${userId}/relationships`, {
      method: 'GET',
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`}
    })
      .then((response) => {
        dispatch(getRelationshipsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((response) => dispatch(getRelationshipsSuccess(response)))
      .catch(() => dispatch(getRelationshipsError(true)))
  }
}