/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import FilmsList from '../components/FilmsList';
import { FilmType } from '../mocks/films';
import SignIn from './SignIn';
interface ListProps {
  filmsList: FilmType[];
  onClickHandler: (item: FilmType) => void;
}
const List: React.FC<ListProps> = ({ filmsList, onClickHandler }) => {
  const isAuthorized = true;
  return isAuthorized ? (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={'/'} href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={'/login'} className="user-block__link">
              Sign out
            </Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList filmsList={filmsList} onClickHandler={onClickHandler} />
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
  ) : (
    <SignIn />
  );
};

export default List;
