import { createSelector } from "@reduxjs/toolkit";

const selectItems = state => state.items;
const selectFiltered = state => state.filtered;

export const selectProducts = createSelector([selectItems, selectFiltered], (items, filtered) => {
  console.log(items, filtered);
  return { items, filtered };
});