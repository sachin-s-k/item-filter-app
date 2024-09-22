import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
    filteredItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.allItems = action.payload;
    },
    filterItems: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      state.filteredItems = allItems.filter(
        (item) => item.name.toLowerCase() === searchQuery
      );
    },
  },
});
export const { filterItems, addItem } = ItemSlice.actions;
export default ItemSlice.reducer;
