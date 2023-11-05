import React from 'react';
import { FilmType } from '../mocks/films';
import { Link } from 'react-router-dom';
import { VideoPlayer } from './VideoPlayer';

interface MovieCardProps {
  filmId: number;
  filmName: string;
  film: FilmType;
  promo: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClickHandler: (item: FilmType) => void;
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
    <VideoPlayer
      videoSrc={
        'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
      }
      poster={promo}
    />

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
