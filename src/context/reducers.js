
export const SET_ITEM_DATA = "SET_ITEM_DATA";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_PAGE = "EDIT_PAGE";
export const FETCH_ITEM_DATA_FAILED = "FETCH_ITEM_DATA_FAILED";

const changeToEditPage = (state) => {
  console.log(state)
  return { ...state, edit_page: !state.edit_page }
};

const fetchItemDataFailed = (error, state) => {
  return {
    ...state, error: true
  };
};

const setItemData = (itemData, state) => {
  console.log(itemData)
  console.log(state)
  return {
    ...state,
    items: itemData,
  };
};

export const workshopReducer = (state, action) => {
  switch (action.type) {
    case SET_ITEM_DATA:
      return setItemData(action.itemData, state);

    case EDIT_PAGE:
      return changeToEditPage(state);

    case FETCH_ITEM_DATA_FAILED:
      return fetchItemDataFailed(state);

    default:
      return state;
  }
};
