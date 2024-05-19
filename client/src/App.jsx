import Home from './pages/Home.jsx';
import "./style.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';
import SingleMoviePage from './pages/SingleMoviePage.jsx';
import { CuratedPage } from './pages/CuratedPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import SerachResult from './pages/SearchResult.jsx';
import { useState } from 'react';


function App() {

  const [query, setQuery] = useState('thor');





  const location = useLocation();

  const showMainNavBar = location.pathname !== '/login' && location.pathname !== '/register';
  const showFooter = location.pathname !== '/login' && location.pathname !== '/register';



  
  return (
    <>
      {showMainNavBar ? <Nav  setQuery={setQuery} /> : null}
      <Routes location={location}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/WatchlistPage" element={<WatchlistPage />} />
        <Route path="/SingleMoviePage" element={<SingleMoviePage />} />
        <Route path="/search" element={<SerachResult query={query} />} />
        <Route path="/CuratedPage" element={<CuratedPage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
      </Routes>
      {showFooter ? <Footer /> : null}
    </>
  );
}

export default App;
