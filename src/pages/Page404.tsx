import { Link } from 'react-router-dom';

const Page404 = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to={'/'} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">Page not found</h1>
    </header>

    <div className="sign-in user-page__content">
      <Link className="sign-in__btn" to="/" style={{ textDecoration: 0 }}>
        Go to main page
      </Link>
    </div>

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
);

export default Page404;
