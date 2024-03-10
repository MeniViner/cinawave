import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faPlay, faPlus, faCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
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

  // year formating
  const releaseDate  = selectedMovie.release_date
  const year = (new Date(releaseDate)).getFullYear(); 


  // Function to format movie length
  function formatMovieLength(length) {
    const hours = Math.floor(length / 60);
    const minutes = length % 60;
    return `${hours}h ${minutes}m`;
  }

  const movieLength = selectedMovie.omdbDetails.Runtime;
  const lengthInMinutes = parseInt(movieLength);
  const formattedLength = formatMovieLength(lengthInMinutes);


  // Extract language code from languages string
  function extractLanguageCode(languages) {
    const languageList = languages.split(",").map(lang => lang.trim());
    const firstLanguage = languageList[0];
    const languageCode = firstLanguage.substring(0, 2).toLowerCase();
    return languageCode;
  }

  const languages = "English, Turkish, Spanish";
  const languageCode = extractLanguageCode(languages); // Output: "en"


  // format genres
  const genres = selectedMovie.omdbDetails.Genre;
  const formattedGenres = genres.split(",").map(genre => genre.trim());  
  


  return (
    <div className="insideCard">
      <div style={backgroundImageStyle}></div>
        <div className="top-inside">
          <div className="inside-info">
            <div className="name-inside">{selectedMovie.title}</div>
            <div className="movie-inside-description">
              <div className="mis-year">{year}</div>
              <div className="circle-inside"><FontAwesomeIcon icon={faCircle}/></div>
              <div className="mis-length">{formattedLength}</div>
              <div className="circle-inside"><FontAwesomeIcon icon={faCircle}/></div>
              <div className="mis-Language">{languageCode}</div>
            </div> 
            <div className="movie-inside-genre">
              {formattedGenres.map((genre, index) => (
                <div key={index} className="genre">{genre}</div>
              ))}
            </div>
            <div className="text-description">{selectedMovie.omdbDetails.Plot}</div>
            <div className="movie-inside-buttons">
              <div>
                <button className="mib-play-btn">
                  <plBt><FontAwesomeIcon icon={faPlay}/></plBt>
                  <txt>Watch now</txt>
                </button>
              </div>
              <div>
                <button className="add-favorite-btn" onClick={toggleLike}> 
                  <div className="like" >
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
