/* eslint-disable react/prop-types */
import AddReviewForm from '../components/AddReviewForm';
import { FilmType } from '../mocks/films';
import HeadGuest from './HeadGuest';

interface ReviewProps {
  film: FilmType;
}

const Review: React.FC<ReviewProps> = ({ film }) => (
  <section className="film-card film-card--full">
    <div className="film-card__header">
      <div className="film-card__bg">
        <img src={film.promo} alt={film.filmName} />
      </div>

      <HeadGuest breadcrumbs filmName={film.filmName} filmId={film.id} />

      <div className="film-card__poster film-card__poster--small">
        <img src={film.poster} alt={film.filmName} width="218" height="327" />
      </div>
    </div>

    <div className="add-review">
      <AddReviewForm />
    </div>
  </section>
);

export default Review;
