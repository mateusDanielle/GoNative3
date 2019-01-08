export const Types = {
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SUCCESS",
  ADD_FAILURE: "favorites/ADD_FAILURE"
};

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        error: null
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };
    default:
      return state;
  }
}

export const Creators = {
  addFavoritesRequest: repoName => ({
    type: Types.ADD_REQUEST,
    payload: {
      repoName
    }
  }),
  addFavoritesSuccess: repository => ({
    type: Types.ADD_SUCCESS,
    payload: {
      repository
    }
  }),
  addFavoritesError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message
    }
  })
};
