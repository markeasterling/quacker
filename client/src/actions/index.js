export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING';
export const LOGIN_HAS_ERRORED = 'LOGIN_HAS_ERRORED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_CURRENT_USER_LOADING = 'GET_CURRENT_USER_LOADING';
export const GET_CURRENT_USER_ERROR = 'GET_CURRENT_USER_ERROR';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FEED_LOADING = 'GET_CURRENT_USER_FEED_LOADING';
export const GET_CURRENT_USER_FEED_ERROR = 'GET_CURRENT_USER_FEED_ERROR';
export const GET_CURRENT_USER_FEED_SUCCESS = 'GET_CURRENT_USER_FEED_SUCCESS';
export const GET_USER_POSTS_LOADING = 'GET_USER_POSTS_LOADING';
export const GET_USER_POSTS_ERROR = 'GET_USER_POSTS_ERROR';
export const GET_USER_POSTS_SUCCESS = 'GET_USER_POSTS_SUCCESS';


export function loginUserIsLoading(boolean) {
  return {
    type: LOGIN_IS_LOADING,
    loginIsLoading: boolean
  }
}

export function loginUserHasErrored(boolean) {
  return {
    type: LOGIN_HAS_ERRORED,
    loginHasErrored: boolean
  }
}

export function loginUserSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token: token
  }
}

export function getCurrentUserLoading(boolean) {
  return {
    type: GET_CURRENT_USER_LOADING,
    currentUserIsLoading: boolean
  }
}

export function getCurrentUserError(boolean) {
  return {
    type: GET_CURRENT_USER_ERROR,
    currentUserHasErrored: boolean
  }
}

export function getCurrentUserSuccess(user) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    user: user
  }
}

export function getCurrentUserFeedLoading(boolean) {
  return {
    type: GET_CURRENT_USER_FEED_LOADING,
    feedIsLoading: boolean
  }
}

export function getCurrentUserFeedError(boolean) {
  return {
    type: GET_CURRENT_USER_FEED_ERROR,
    feedHasErrored: boolean
  }
}

export function getCurrentUserFeedSuccess(feed) {
  return {
    type: GET_CURRENT_USER_FEED_SUCCESS,
    feed: feed
  }
}

export function getUserPostsLoading(boolean) {
  return {
    type: GET_USER_POSTS_LOADING,
    postsAreLoading: boolean
  }
}

export function getUserPostsError(boolean) {
  return {
    type: GET_USER_POSTS_ERROR,
    postsHaveErrored: boolean
  }
}

export function getUserPostsSuccess(posts) {
  return {
    type: GET_USER_POSTS_SUCCESS,
    postsAreLoading: posts
  }
}





