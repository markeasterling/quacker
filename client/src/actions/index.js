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
export const GET_RELATIONSHIPS_LOADING = 'GET_RELATIONSHIPS_LOADING';
export const GET_RELATIONSHIPS_ERROR = 'GET_RELATIONSHIPS_ERROR';
export const GET_RELATIONSHIPS_SUCCESS = 'GET_RELATIONSHIPS_SUCCESS';
export const GET_CURRENT_USER_RELATIONSHIPS_LOADING = 'GET_CURRENT_USER_RELATIONSHIPS_LOADING';
export const GET_CURRENT_USER_RELATIONSHIPS_ERROR = 'GET_CURRENT_USER_RELATIONSHIPS_ERROR';
export const GET_CURRENT_USER_RELATIONSHIPS_SUCCESS = 'GET_CURRENT_USER_RELATIONSHIPS_SUCCESS';



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
    token
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
    user
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
    feed
  }
}

export function getUserPostsLoading(boolean) {
  return {
    type: GET_USER_POSTS_LOADING,
    postsLoading: boolean
  }
}

export function getUserPostsError(boolean) {
  return {
    type: GET_USER_POSTS_ERROR,
    postsErrored: boolean
  }
}

export function getUserPostsSuccess(posts) {
  return {
    type: GET_USER_POSTS_SUCCESS,
    posts
  }
}

export const getRelationshipsLoading = (boolean) => ({
  type: GET_RELATIONSHIPS_LOADING,
  relationshipsAreLoading: boolean
})

export const getRelationshipsError = (boolean) => ({
  type: GET_RELATIONSHIPS_ERROR,
  relationshipsHasErrored: boolean
})

export const getRelationshipsSuccess = (relationships) => ({
  type: GET_RELATIONSHIPS_SUCCESS,
  relationships
})

export const getCurrentUserRelationshipsLoading = (boolean) => ({
  type: GET_CURRENT_USER_RELATIONSHIPS_LOADING,
  currentUserRelationshipsLoading: boolean
})

export const getCurrentUserRelationshipsError = (boolean) => ({
  type: GET_CURRENT_USER_RELATIONSHIPS_ERROR,
  currentUserRelationshipsErrored: boolean
})

export const getCurrentUserRelationshipsSuccess = (currentUserRelationships) => ({
  type: GET_CURRENT_USER_RELATIONSHIPS_SUCCESS,
  currentUserRelationships
})







