import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InsideCard({ filteredMovies }) {
  const [liked, setLiked] = useState(false);
  const { insideCard } = useParams();
  const selectedMovie = filteredMovies.find(movie => movie.original_title === decodeURIComponent(insideCard));

  useEffect(() => {
    console.log("Selected movie:", selectedMovie);
    if (selectedMovie) {
      const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
      const isLiked = likedMovies.some(movie => movie.original_title === selectedMovie.original_title);
      setLiked(isLiked);
    }
  }, [selectedMovie]);

  const toggleLike = () => {
    setLiked(!liked);
    if (!liked) {
      const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
      localStorage.setItem('likedMovies', JSON.stringify([...likedMovies, selectedMovie]));
    } else {
      const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
      const updatedLikedMovies = likedMovies.filter(movie => movie.original_title !== selectedMovie.original_title);
      localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies));
    }
  };

  if (!selectedMovie) {
    console.log("Movie not found for title:", insideCard);
    return <div className='Movie-not-found'>Movie not found</div>;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'fixed',
    filter: 'blur(15px)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

  return (
    <div className="insideCard">
      <div style={backgroundImageStyle}></div>
          <div className="top-inside">
            <div className="img-inside">
              <img
                className="background-image"
                src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
              />
            </div>
            <div className="tytel-inside">
              <div className='info'>
                <div>{selectedMovie.title}</div>
                <h2>Overview: {selectedMovie.overview}</h2>
              </div>
            </div>
          </div>
          <div className="bootem">
            <h1>gfegf</h1>
          </div>
      {/* <div className={`like ${liked ? 'liked' : ''}`} onClick={toggleLike}>
        <FontAwesomeIcon icon={faHeart} />
      </div> */}
    </div>
  );
}

export default InsideCard;