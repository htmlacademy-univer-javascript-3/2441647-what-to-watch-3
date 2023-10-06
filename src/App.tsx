
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './components/Layout';
import MoviePage from './pages/MoviePage';
import List from './pages/List';
import SignIn from './pages/SignIn';
import LayoutFilms from './components/LayoutFilms';
import Page404 from './pages/Page404';
import Review from './pages/Review';
type MainProps = {
  filmName: string;
  genre: string;
  year: number;
  promo: string;
};
function App(mainProps: MainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Main
                filmName={mainProps.filmName}
                year={mainProps.year}
                genre={mainProps.genre}
                promo={mainProps.promo}
              />
            }
          />
          <Route path="login" element={<SignIn />} />
          <Route path="myList" element={<List />} />
          <Route path="films/" element={<LayoutFilms />}>
            <Route path=":id/" element={<MoviePage />}></Route>
            <Route path=":id/reviews" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
