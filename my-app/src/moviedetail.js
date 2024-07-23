import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=YOUR_API_KEY`);
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
