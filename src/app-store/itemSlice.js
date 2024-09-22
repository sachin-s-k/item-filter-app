import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
    filteredItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.filteredItems = action.payload;
      state.allItems = action.payload;
    },
    filterItems: (state, action) => {
      const searchQuery = action.payload;
      state.filteredItems = state.allItems.filter((item) =>
        item.info.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
});
export const { filterItems, addItem } = ItemSlice.actions;
export default ItemSlice.reducer;
