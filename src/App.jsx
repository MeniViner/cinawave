import React, { useState, useEffect } from 'react';
import getAllTrendingMovies from "./database";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Top from './top';
import Card from "./card";
import InsideCard from "./insideCard";
import './App.css';
import './top.css';
import './card.css';
import './insideCard.css';

function App() {
  const [originalMovies, setOriginalMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getAllTrendingMovies();
      setOriginalMovies(result);
      setFilteredMovies(result);
    };

    fetchMovies();
  }, []);

  const handleSearch = (searchQuery) => {
    if (!originalMovies || !Array.isArray(originalMovies)) {
      // Handle the case where originalMovies is not defined or not an array
      return;
    }

    if (searchQuery.trim() === "") {
      // If searchQuery is empty, reset to the original list
      setFilteredMovies(originalMovies);
    } else {
      // Use the searchQuery to filter movies
      const filtered = originalMovies.filter(movie =>
        movie.original_title && movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Update the filteredMovies state
      setFilteredMovies(filtered);
    }
  };

  return (
    <Router>
      <div className="Main">
        <div><Top onSearch={handleSearch} /></div>
        <Routes>
          <Route path="/" element={<Home filteredMovies={filteredMovies} />} />
          <Route path="/card/:insideCard" element={<InsideCard filteredMovies={filteredMovies} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ filteredMovies }) {
  return (
    <div className="main-cards">
      {filteredMovies.map((movie) => (
        <Link key={movie.id} to={`/card/${encodeURIComponent(movie.title)}`}>
          <Card movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default App;
