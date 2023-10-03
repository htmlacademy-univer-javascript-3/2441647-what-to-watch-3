import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const mainProps = {
  filmName: 'The Grand Budapest Hotel',
  year: 2014,
  genre: 'Drama',
  promo: 'img/avatar.jpg',
};
root.render(
  <React.StrictMode>
    <App
      filmName={mainProps.filmName}
      year={mainProps.year}
      genre={mainProps.genre}
      promo={mainProps.promo}
    />
  </React.StrictMode>
);
