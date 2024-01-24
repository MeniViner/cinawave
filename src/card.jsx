import React from "react";
// import Button from "./Button/Button";

function Card({ movie }) {
    return (
        <div className="cards">        
            <div className="img-card">
            <img className="movie-img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            </div>
            <div className="movie-description">
                <div id="main-info-movie">
                    <div className="cube-info">
                        <h1 className="cube-text">{movie.vote_average}</h1>
                    </div>
                    <div className="cube-info">
                        <h1 className="cube-text">{movie.vote_count}</h1>
                    </div>
                </div>
                <h1 className="movie-name">{movie.original_title}</h1>
            </div>
        </div>
    );
}

export default Card;
