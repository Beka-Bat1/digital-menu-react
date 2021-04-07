import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: null,
  edit_page: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: action.newItemValues,
      };

    case actionTypes.SET_ITEM_DATA:
      return {
        ...state,
        items: action.itemData,
        error: false,
      };

    case actionTypes.EDIT_PAGE:
      return {
        ...state,
        edit_page: !state.edit_page,
      };

    case actionTypes.FETCH_ITEM_DATA_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
