import { ALL_BOOK, APPLY_SEARCH, FEATURED_BOOK } from "./actionTypes";

const initialState = {
  featureList: [],
  featureStatus: false,
  searchKeyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATURED_BOOK:
      return {
        ...state,
        featureStatus: true,
      };
    case ALL_BOOK:
      return {
        ...state,
        featureStatus: false,
      };
    case APPLY_SEARCH:
      return {
        ...state,
        searchKeyword: action.payload,
      };
    default:
      return state;
  }
};
export default filterReducer;
