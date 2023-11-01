/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FilmType } from '../mocks/films';
import MovieCard from './MovieCard';
interface FilmsListProps {
  filmsList: FilmType[];
  onClickHandler: (item: FilmType) => void;
}
const FilmsList: React.FC<FilmsListProps> = ({ filmsList, onClickHandler }) => {
  const [activeCard, setActiveCard] = useState(-1);
  return (
    <div className="catalog__films-list">
      {filmsList.map((item) => (
        <MovieCard
          key={item.id}
          filmId={item.id}
          filmName={item.filmName}
          promo={item.promo}
          film={item}
          onMouseEnter={() => setActiveCard(item.id)}
          onMouseLeave={() => setActiveCard(-1)}
        />
      ))}
    </div>
  );
};

export default FilmsList;
