import { call, put } from "redux-saga/effects";

import githubApi from "~/services/githubApi";

import { addFavoritesSuccess } from "~/store/actions/favorites";

export function* addFavoriteRequest(action) {
  const response = yield call(
    githubApi.get,
    `/repos/${action.payload.repoName}`
  );

  yield put(addFavoritesSuccess(response.data));

  console.tron.log(response);
}
