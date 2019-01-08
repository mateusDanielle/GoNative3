import { call, put, select } from "redux-saga/effects";

import githubApi from "~/services/githubApi";

import { Creators as FavoriteActions } from "~/store/ducks/favorites";

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(
      githubApi.get,
      `/repos/${action.payload.repoName}`
    );

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(FavoriteActions.addFavoritesError("O Repositório já existe"));
    } else {
      yield put(FavoriteActions.addFavoritesSuccess(response.data));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoritesError("O Repositório não existe"));
  }
}
