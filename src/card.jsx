import React  from "react";
import {faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card({ movie }) {
    return (
        <div className="cards">        
            <div className="img-card">
            <img className="movie-img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            </div>
            <div className="like" >
                    <FontAwesomeIcon icon={faHeart} />
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
                <h1 className="movie-name">{movie.title}</h1>

            </div>
        </div>
    );
}

export default Card;
