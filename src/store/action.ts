import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('changeGenre', (value: string) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));
export const takeFilms = createAction('takeFilms');
