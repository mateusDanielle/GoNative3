export const addFavoritesRequest = repoName => ({
  type: "ADD_FAVORITE_REQUEST",
  payload: {
    repoName
  }
});
export const addFavoritesSuccess = repository => ({
  type: "ADD_FAVORITE_SUCCESS",
  payload: {
    repository
  }
});
