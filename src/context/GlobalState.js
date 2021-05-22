import React, { useEffect, useReducer } from "react";

import WorkshopContext from "./workshop-context";

import {
  workshopReducer,
  SET_ITEM_DATA,
  EDIT_PAGE,
  FETCH_ITEM_DATA_FAILED,
} from "./reducers";
import axios from "../axios-orders";

const GlobalState = (props) => {
  const [globalState, dispatch] = useReducer(workshopReducer, {
    edit_page: false,
    error: false,
    items: null,
  });


  /// Reducer Dispatch \/
  const changeToEditPage = () => {
    return dispatch({ type: EDIT_PAGE });
  };

  const fetchItemDataFailed = () => {
    console.log("error");
    dispatch({ type: FETCH_ITEM_DATA_FAILED });
  };

  const setItemData = (itemData) => {
    console.log(itemData);
    dispatch({ type: SET_ITEM_DATA, itemData: itemData });
  };
  //// Reducer Dispatch ^

  const addNewItemData = (newItemData) => {
      console.log("here");
      axios
        .post("/orderData.json", newItemData)
        .then((response) => {
          console.log(response);
          initItemData();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  const removeItem = (itemId) => {
      console.log(itemId);
      axios
        .delete("/orderData/" + itemId)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => fetchItemDataFailed(error));
    };


  const initItemData = async () => {
    try {
      await axios.get("/orderData.json").then((response) => {
        console.log("response on axios", response);
        setItemData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <WorkshopContext.Provider
      value={{
        edit_page: globalState.edit_page,
        items: globalState.items,
        addNewItemData: addNewItemData,
        removeItem: removeItem,
        changeToEditPage: changeToEditPage,
        initItemData: initItemData,
      }}
    >
      {props.children}
    </WorkshopContext.Provider>
  );
};

export default GlobalState;
