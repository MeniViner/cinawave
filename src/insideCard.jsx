import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faHeart, faPlay, faBookmark, faVideo, faDownload, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "./Button/Button";


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
    filter: 'blur(5px)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    boxShadow: 'inset 500px 0 200px -50px rgba(0, 0, 0, 1), inset 0 -300px 200px -50px rgba(0, 0, 0, 1)'
  };

  return (
    <div className="insideCard">
      <div style={backgroundImageStyle}></div>
          <div className="top-inside">
            
            <div className="inside-info">
                <div className="name-inside">{selectedMovie.title}</div>
 
                <div className="movie-inside-description">
                  <div className="mis-year">{selectedMovie.release_date}</div>
                  <div className="mis-length">1h 31m</div>
                  <div className="mis-format">MP4</div>

                </div>

                <div className="movie-inside-genre">
                  {/* {selectedMovie.genres.map(genre => genre.name).join(', ')} */}
                  {selectedMovie.genre_ids}
                </div>

                <div className="movie-inside-buttons">

                  <div className="mib-play">
                    <button className="mib-play-bt">
                      <FontAwesomeIcon icon={faPlay}/>
                      <txt>Play</txt>
                    </button>
                  </div>
            
                  <div className="mib-favorite">
                    <FontAwesomeIcon icon={faBookmark}/>
                  </div> 

                </div>
                
                <div className="text-description">Overview: {selectedMovie.overview}</div>

            </div>
          </div>
          <div className="bottom">
          {/* <div className={`like ${liked ? 'liked' : ''}`} onClick={toggleLike}>
            <FontAwesomeIcon icon={faHeart} />
          </div> */}
            
          </div>
      
    </div>
  );
}

export default InsideCard;