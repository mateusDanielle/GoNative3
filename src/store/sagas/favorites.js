import { call, put } from "redux-saga/effects";

import githubApi from "~/services/githubApi";

import {
  addFavoritesSuccess,
  addFavoritesError
} from "~/store/actions/favorites";

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(
      githubApi.get,
      `/repos/${action.payload.repoName}`
    );

    yield put(addFavoritesSuccess(response.data));
  } catch (err) {
    yield put(addFavoritesError("O Repositório não existe"));
  }
}
