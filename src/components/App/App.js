import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ArticleContainer from '../ArticleContainer/ArticleContainer';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          exact path='/'
          element={<ArticleContainer />}
        />
        <Route
          exact path='/:section'
          element={<ArticleContainer />}
        />
      </Routes>
    </div>
  );
}

export default App;
