import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import movies from "./moviesData";

function InsideCard() {
  const [like, setLike] = useState(0);
  const [disLike, setDislike] = useState(0);
  const { insideCard } = useParams();
  const selectedMovie = movies.find(movie => movie.name === decodeURIComponent(insideCard));

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="insideCard">
          <img className="background-image"
                src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
                alt={selectedMovie.title}
            />
        <div className='info'>   
            <h1>{selectedMovie.name}</h1>
            <h2>Overview: {selectedMovie.overview}</h2>
            <p>{selectedMovie.genres}</p>
            <p>{selectedMovie.country}</p>
            <p>{selectedMovie.duration}</p>
            <p>{selectedMovie.production}</p>
            <p>{selectedMovie.release}</p>
            <p>IMDB: {selectedMovie.imdb}</p>
            <br></br><br></br><br></br><br></br>
            <div className="likes">
                <img
                    src="/images/like.png"
                    alt="Like"
                    className="like-img"
                    onClick={() => setLike(like + 1)}
                />
                <div className="text-like">{like}</div>
                <div>
                <img
                    src="/images/dislike.png"
                    alt="disLike"
                    className="like-img"
                    onClick={() => setDislike(disLike + 1)}
                />
                </div>
                <div className="text-like">{disLike}</div>
            </div>
        </div>
            
    </div>
  );
}

export default InsideCard;
