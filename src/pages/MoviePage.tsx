/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FilmType } from '../mocks/films';
import HeadGuest from './HeadGuest';
import Tabs from '../components/Tabs';
import MovieCard from '../components/MovieCard';

interface MoviePageProps {
  film: FilmType;
  filmsList: FilmType[];
  onClickHandler: (item: FilmType) => void;
}

const MoviePage: React.FC<MoviePageProps> = ({
  film,
  filmsList,
  onClickHandler,
}) => {
  const props = {
    id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    name: 'The Grand Budapest Hotel',
    posterImage: 'https://url-to-image/image.jpg',
    backgroundImage: 'https://url-to-image/image.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://url-to-video/video.jpg',
    description:
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave"s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  };
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.promo} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeadGuest />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${film.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  to={'/myList'}
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                <Link
                  to={`/films/${film.id}/reviews`}
                  onClick={() => onClickHandler(film)}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.poster}
                alt={film.filmName}
                width="218"
                height="327"
              />
            </div>

            <Tabs
              description={props.description}
              rating={props.rating}
              scoresCount={props.scoresCount}
              director={props.director}
              starring={props.starring}
              genre={props.genre}
              runTime={props.runTime}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {filmsList.map((item) => {
            film.genre.forEach((genre) => {
              if (item.genre.includes(genre)) {
                return (
                  <MovieCard
                    key={item.id}
                    filmId={item.id}
                    filmName={item.filmName}
                    promo={item.promo}
                    film={item}
                    //onMouseEnter={() => setActiveCard(item.id)}
                    //onMouseLeave={() => setActiveCard(-1)}
                    onClickHandler={() => 0}
                  />
                );
              }
            });

            return '';
          })}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={'/'} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2023 What to watch by Ostroweb.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MoviePage;
