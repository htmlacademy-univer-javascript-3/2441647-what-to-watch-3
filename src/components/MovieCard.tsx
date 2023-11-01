import React from 'react';
import { FilmType } from '../mocks/films';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  filmId: number;
  filmName: string;
  film: FilmType;
  promo: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClickHandler?: (item: FilmType) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  filmName,
  promo,
  onClickHandler,
  film,
  filmId,
  ...others
}) => (
  <article className="small-film-card catalog__films-card" {...others}>
    <div className="small-film-card__image">
      <img src={promo} alt={filmName} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <Link
        to={`/films/${filmId}`}
        className="small-film-card__link"
        onClick={() => onClickHandler(film)}
      >
        {filmName}
      </Link>
    </h3>
  </article>
);

export default MovieCard;
