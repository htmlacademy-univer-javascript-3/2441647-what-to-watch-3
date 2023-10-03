import Main from './pages/Main';
type MainProps = {
  filmName: string;
  genre: string;
  year: number;
  promo: string;
};
function App(mainProps: MainProps): JSX.Element {
  return (
    <Main
      filmName={mainProps.filmName}
      year={mainProps.year}
      genre={mainProps.genre}
      promo={mainProps.promo}
    />
  );
}

export default App;
