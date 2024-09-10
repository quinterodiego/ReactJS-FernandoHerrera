import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: (state, /* action */ ) => {
      state.isLoading = true;
    },
  }
});


// Action creators are generated for each case reducer function
export const { increment } = pokemonSlice.actions;