import { createReducer } from '@reduxjs/toolkit';
import { filmsList } from '../mocks/films';
import { changeGenre, takeFilms } from './action';

const initialState = {
  genre: 'All genres',
  filmList: filmsList,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(takeFilms, (state) => {
      if (state.genre !== 'All genres') {
        state.filmList = filmsList.filter((item) =>
          item.genre.includes(state.genre)
        );
      } else {
        state.filmList = filmsList;
      }
    });
});
export { reducer };
