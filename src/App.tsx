import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './components/Layout';
import MoviePage from './pages/MoviePage';
import List from './pages/List';
import SignIn from './pages/SignIn';
import LayoutFilms from './components/LayoutFilms';
import Page404 from './pages/Page404';
import Review from './pages/Review';
import { FilmType, filmsList } from './mocks/films';
import { useCallback, useEffect, useState } from 'react';
import Player from './pages/Player';
function App(): JSX.Element {
  const [currentFilm, setCurrentFilm] = useState(filmsList[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickHandler = useCallback((item: FilmType) => {
    setCurrentFilm(item);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Main
                film={currentFilm}
                filmsList={filmsList}
                onClickHandler={onClickHandler}
              />
            }
          />
          <Route path="login" element={<SignIn />} />
          <Route
            path="myList"
            element={
              <List filmsList={filmsList} onClickHandler={onClickHandler} />
            }
          />
          <Route path="films/" element={<LayoutFilms />}>
            <Route
              path=":id/"
              element={
                <MoviePage
                  film={currentFilm}
                  filmsList={filmsList}
                  onClickHandler={onClickHandler}
                />
              }
            />
            <Route path=":id/reviews" element={<Review film={currentFilm} />} />
          </Route>
          <Route
            path="/player/:id"
            element={<Player poster={currentFilm.promo} videoSrc={''} />}
          />
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
