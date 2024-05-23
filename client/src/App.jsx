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
import TastePage from './pages/TastePage.jsx';
import MoodPage from './pages/MoodPage.jsx';
import ExpreriencePage from './pages/ExpreriencePage.jsx';
function App() {

  const location = useLocation();

  const excludedPaths = ['/login', '/register', '/','/moodPage','/expreriencePage'];

  const showMainNavBar = !excludedPaths.includes(location.pathname);
  const showFooter = !excludedPaths.includes(location.pathname);

  return (
    <>
      {showMainNavBar ? <Nav /> : null}
      <Routes location={location}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<TastePage/>} />
        <Route exact path="/moodPage" element={<MoodPage/>} />
        <Route exact path="/expreriencePage" element={<ExpreriencePage/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/watchlistPage" element={<WatchlistPage />} />
        <Route path="/singleMoviePage" element={<SingleMoviePage />} />
        <Route path="/search" element={<SerachResult />} />
        <Route path="/curatedPage" element={<CuratedPage />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
      </Routes>
      {showFooter ? <Footer /> : null}
    </>
  );
}

export default App;
