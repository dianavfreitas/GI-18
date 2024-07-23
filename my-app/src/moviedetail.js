import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3338d798e614564912c7dce6e7df7a93&query=${id}`);
            const data = await response.json();
            setMovie(data);
        };
        fetchMovie();
    }, [id]);

    return (
        <div>
            {movie ? (
                <div>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetail;
