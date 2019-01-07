import { call } from "redux-saga/effects";

import githubApi from "~/services/githubApi";

export function* addFavoriteRequest(action) {
  const response = yield call(
    githubApi.get,
    `/repos/${action.payload.repoName}`
  );

  console.tron.log(response);
}
