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
g
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getAllTrendingMovies();
      setFilteredMovies(result);
    };

    fetchMovies();
  }, []);

  const handleSearch = (searchQuery) => {
    if (!filteredMovies || !Array.isArray(filteredMovies)) {
        // Handle the case where filteredMovies is not defined or not an array
        return;
    }

    // Use the searchQuery to filter movies
    const filtered = filteredMovies.filter(movie =>
        movie.original_title && movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the filteredMovies state
    setFilteredMovies(filtered);
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




// {
//   "adult": false,
//   "backdrop_path": "/ruKNVJFViAyR4jguVboFXTskMOe.jpg",

//   "id": 1028703,
//   "original_language": "en",
//   "original_title": "The OctoGames",
//   "overview": "8 contestants compete in 8 deadly, classic children's games. They seek fame beyond their wildest dreams, competing for the chance to take over the YouTube channel of the famous yet elusive masked YouTuber known only as \"JaxPro\".",
//   "popularity": 960.836,
//   "poster_path": "/qGz5rffXhegQH5PGUDiObqoOt06.jpg",
//   "release_date": "2022-10-07",
//   "title": "The OctoGames",
//   "video": false,
//   "vote_average": 4.261,
//   "vote_count": 23
// }