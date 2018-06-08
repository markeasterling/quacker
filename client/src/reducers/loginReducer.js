import { LOGIN_IS_LOADING, LOGIN_HAS_ERRORED, LOGIN_SUCCESS, loginUserIsLoading, loginUserHasErrored, loginUserSuccess } from '../actions';
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

export function loginUserSuccessReducer(state = [], action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.token;
  }
}

export function loginFetchToken(email, password) {
  return (dispatch) => {
  console.log(email)
    console.log(`{"auth":{"email": "${email}", "password": "${password}"}}`)
    dispatch(loginUserIsLoading(true));

    fetch('http://localhost:3001/user_token', { 
        method: "POST",
        body: `{"auth":{"email": "${email}", "password": "${password}"}}`,
        headers: {"Content-Type": "application/json"} 
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(loginUserIsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((token) => console.log(token))

  }
}

