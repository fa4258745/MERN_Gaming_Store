import { createSlice } from "@reduxjs/toolkit";
const favouriteSlice = createSlice({
  name: "myfavourite",

  initialState: {
    favourite: [],
  },
  reducers: {
    addtoFavourite: (state, actions) => {
      const data = state.favourite.filter(
        (key) => key.id == actions.payload.id
      );
      if (data.length >= 1) {
        alert("Product aleready added!");
      } else {
        state.favourite.push(actions.payload);
      }
    },

    dataIncrease: (state, actions) => {
      for (var i = 0; i < state.favourite.length; i++) {
        if (state.favourite[i].id == actions.payload.id) {
          state.favourite[i].qnty++;
        }
      }
    },
    dataDecrease: (state, actions) => {
      for (var i = 0; i < state.favourite.length; i++) {
        if (state.favourite[i].id == actions.payload.id) {
          state.favourite[i].qnty--;
        }
      }
    },

    removeFromFavourites: (state, action) => {
      state.favourite = state.favourite.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
 removeFromFavourites,
  addtoFavourite,
  dataIncrease,
  dataDecrease,
} = favouriteSlice.actions;
export default favouriteSlice.reducer;
