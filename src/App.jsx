import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card from './card';
import InsideCard from './insideCard';
import getAllTrendingMovies from './database';
import MyList from './myList';
import Top from './top';
import './App.css';
import './top.css';
import './card.css';
import './insideCard.css';
import './MyList.css';



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
    console.log("Search query:", searchQuery);
    
    if (!originalMovies || !Array.isArray(originalMovies)) {
      return;
    }

    if (searchQuery.trim() === "") {
      setFilteredMovies(originalMovies);
    } else {
      const filtered = originalMovies.filter(movie =>
        movie.original_title && movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered movies:", filtered);
      setFilteredMovies(filtered);
    }
  };

  return (
    <Router>
      <div className="Main">
        <Top onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home filteredMovies={filteredMovies} />} />
          <Route path="/card/:insideCard" element={<InsideCard filteredMovies={filteredMovies} />} />
          <Route path="/my-list" element={<MyList filteredMovies={filteredMovies} />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </div>
    </Router>
  );
}

function Series() {
  return <h2>This is Page 2</h2>;
}

function Home({ filteredMovies }) {
  return (
    <div className="main-cards">
      {filteredMovies.map((movie, index) => (
        <Link key={index} to={`/card/${encodeURIComponent(movie.original_title)}`}>
          <Card movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default App;
