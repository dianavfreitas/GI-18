import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3338d798e614564912c7dce6e7df7a93&query=`);
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
