import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
        const data = await response.json();
        setMovies(data.Search || []);
    };

    return (
        <div>
            <h1>Movie Search</h1>
            <form onSubmit={searchMovies}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {movies.map(movie => (
                    <div key={movie.imdbID}>
                        <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
