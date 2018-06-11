import {
  GET_RELATIONSHIPS_LOADING, 
  GET_RELATIONSHIPS_ERROR, 
  GET_RELATIONSHIPS_SUCCESS,
  getRelationshipsLoading,
  getRelationshipsError,
  getRelationshipsSuccess
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