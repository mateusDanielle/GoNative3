const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "ADD_FAVORITE_SUCCESS":
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        error: null
      };
    case "ADD_FAVORITE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };
    default:
      return state;
  }
}
