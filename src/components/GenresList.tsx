import React from 'react';
import { FilmType } from '../mocks/films';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeGenre, takeFilms } from '../store/action';

interface GenresListProps {
  filmsList: FilmType[];
}

export const GenresList: React.FC<GenresListProps> = ({ filmsList }) => {
  const currentGenre = useAppSelector((state) => state.genre);

  const genres: Set<string> = new Set();
  filmsList.forEach((item) => {
    if (Array.isArray(item.genre)) {
      for (const i of item.genre) {
        genres.add(i);
      }
    } else {
      genres.add(item.genre);
    }
  });
  const genresArr: Array<string> = [];
  for (const item of genres) {
    genresArr.push(item);
  }

  const dispatch = useAppDispatch();
  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${
          currentGenre === 'All genres' ? 'catalog__genres-item--active' : ''
        }`}
        onClick={() => {
          dispatch(changeGenre('All genres'));
          dispatch(takeFilms());
        }}
      >
        <a className="catalog__genres-link">All genres</a>
      </li>
      {genresArr.map((value: string) => (
        <li
          className={`catalog__genres-item ${
            currentGenre === value ? 'catalog__genres-item--active' : ''
          }`}
          key={value}
          onClick={() => {
            dispatch(changeGenre(value));
            dispatch(takeFilms());
          }}
        >
          <a className="catalog__genres-link">{value}</a>
        </li>
      ))}
    </ul>
  );
};
