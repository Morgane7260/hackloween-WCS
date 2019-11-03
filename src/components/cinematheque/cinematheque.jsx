import React from 'react';
import './css/cinematheque.css';

function Cinematheque({ movie }) {
    return (
        <div className="cinematheque">
            <img className="movies" src={movie.posterUrl} alt={movie.title} />
            <div className="infos">
                <h3 className="h3cine"> {movie.title} </h3>
                <cite className="director">Director: {movie.director} </cite>
                <cite className="country"> Country :{movie.country} </cite>
                <cite className="release"> Release :{movie.year} </cite>
            </div>
        </div>
    );
}

export default Cinematheque;