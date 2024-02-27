import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faPlay, faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';
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
    filter: 'blur(5px)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    boxShadow: 'inset 500px 0 400px -50px rgba(0, 0, 0, 1), inset 0 -300px 200px -50px rgba(0, 0, 0, 1)'
  };

  const releaseDate  = selectedMovie.release_date
  const year = (new Date(releaseDate)).getFullYear(); 

  return (
    <div className="insideCard">
      <div style={backgroundImageStyle}></div>
          <div className="top-inside">
            
            <div className="inside-info">
                <div className="name-inside">{selectedMovie.title}</div>
 
                <div className="movie-inside-description">
                  
                  <div className="mis-year">{year}</div>
                  <div className="circle-inside"><FontAwesomeIcon icon={faCircle}/></div>
                  <div className="mis-length">{selectedMovie.omdbDetails.Runtime}</div>
                  <div className="circle-inside"><FontAwesomeIcon icon={faCircle}/></div>
                  <div className="mis-format">MP4</div>

                </div>

                <div className="movie-inside-genre">
                  {/* {selectedMovie.genres.map(genre => genre.name).join(', ')} */}
                  {selectedMovie.genre_ids}
                </div>

                <div className="text-description">Overview: {selectedMovie.overview}</div>

                <div className="movie-inside-buttons">

                  <div>
                    <button className="mib-play-btn">
                      <plBt><FontAwesomeIcon icon={faPlay}/></plBt>
                      <txt>Watch now</txt>
                    </button>
                  </div>
            
                  <div>
                    <button className="add-favorite-btn"> 
                      <div className="like" onClick={toggleLike}>
                        <FontAwesomeIcon icon={liked ? faCheck : faPlus}/>
                      </div>
                    </button>
                  </div> 
                </div>
                
              

            </div>
          </div>
      
      
    </div>
  );
}

export default InsideCard;
