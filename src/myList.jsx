import React, { useEffect, useState } from 'react';
import Card from './card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function MyList() {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const storedLikedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
    setLikedMovies(storedLikedMovies);
  }, []);

  return (
    <div className="main-cards">
      {likedMovies.map((movie, index) => (
        <Link key={index} to={`/card/${encodeURIComponent(movie.original_title)}`}> {/* Use Link to wrap the Card component */}
          <Card movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MyList;
