import React from "react";

const Card = (movie) => {
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className="Movie"> {/* Changed to match the class in style.css */}
                <img src={img_path + movie.info.poster_path} className="poster" alt="movie poster" />
                <div className="Movie-details">
                    <div className="Box">
                        <h4 className="Title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>Overview</h1>
                        {movie.info.overview}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
