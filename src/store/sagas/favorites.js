import { call, put, select } from "redux-saga/effects";

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

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(addFavoritesError("O Repositório já existe"));
    } else {
      yield put(addFavoritesSuccess(response.data));
    }
  } catch (err) {
    yield put(addFavoritesError("O Repositório não existe"));
  }
}
