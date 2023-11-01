/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

interface HeadGuestProps {
  breadcrumbs?: boolean;
  filmName?: string;
  filmId?: number;
}
const HeadGuest: React.FC<HeadGuestProps> = ({
  breadcrumbs,
  filmName,
  filmId,
}) => (
  <header className="page-header film-card__head">
    <div className="logo">
      <Link className="logo__link" to={'/'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
    {breadcrumbs ? (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`/films/${filmId}`} className="breadcrumbs__link">
              {filmName}
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to={`/films/${filmId}/reviews`} className="breadcrumbs__link">
              Add review
            </Link>
          </li>
        </ul>
      </nav>
    ) : null}
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to={'/login'} className="user-block__link">
          Sign out
        </Link>
      </li>
    </ul>
  </header>
);

export default HeadGuest;
