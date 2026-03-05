import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/NavBar';
import MovieList from './components/MovieList';
import SeatPage from './components/SeatPage';
import "./App.css"
import MovieDetail from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
      
        
        <Routes>
       
          <Route path="/" element={<><Navbar /> <MovieList />   </>} />
          <Route path="/movie/:imbdID"  element={<MovieDetail />} />
        
          <Route path="/seats/:imdbID" element={<SeatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
