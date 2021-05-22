import React from "react";

export default React.createContext({
  items: null,
  edit_page: false,
  error: false,
  addNewItemData: (newItemData) => {},
  removeItem: (itemId) => {},
  changeToEditPage: () => {},
  initItemData: () => {}
});
