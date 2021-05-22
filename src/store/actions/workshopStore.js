import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const changeToEditPage = (state) => {
  return { type: actionTypes.EDIT_PAGE };
};

export const addNewItemData = (newItemData) => {
  return (dispatch)=> {
    console.log("here")
    axios
      .post("/orderData.json", newItemData)
      .then((response) => {
        console.log(response)
        dispatch(initItemData())
      })
      .catch((error) => {
        console.log(error)
      });
  }
}

export const removeItem = (itemId) => {
  return (dispatch)=> {
    console.log(itemId);
    axios
      .delete("/orderData/" + itemId)
      .then((response) => {
          console.log(response)
      })
      .catch((error) => dispatch(fetchItemDataFailed(error)));
  };
};

export const fetchItemDataFailed = () => {
  return {
    type: actionTypes.FETCH_ITEM_DATA_FAILED,
  };
};

export const setItemData = (itemData) => {
  return {
    type: actionTypes.SET_ITEM_DATA,
    itemData: itemData,
  };
};

export const initItemData = () => {
  return (dispatch) => {
    axios
      .get("/orderData.json")
      .then((response) => {
        dispatch(setItemData(response.data));
      })
      .catch((error) => {
        dispatch(fetchItemDataFailed(error));
      });
  };
};
