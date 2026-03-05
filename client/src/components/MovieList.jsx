import{ useEffect } from 'react';

import { useMovieStore } from '../store/useStore';
import { useDebounce } from '../hooks/useDebounce';
import { useNavigate } from 'react-router';

const MovieList = () => {
    const navigate = useNavigate()

    const { movies, fetchMovies, isLoading, searchQuery } = useMovieStore();


    const debouncedSearch = useDebounce(searchQuery, 500);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);


    const filteredMovies = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    if (isLoading) return <div className="status-msg">Loading movies...</div>;

    return (
        <main className="movie-container">
            <div className="movie-grid">
                {filteredMovies.map((movie) => (
                    <div key={movie.imdbID} className="movie-card">
                        <img src={movie.Poster} alt={movie.Title} className="card-img" />
                        <div className="card-body">
                            <h3 className="movie-title">{movie.Title}</h3>

                            <div className="movie-meta-row">
                                <span className="meta-label">Year:</span>
                                <span>{movie.Year}</span>
                            </div>
                            <div className="movie-meta-row">
                                <span className="meta-label">Runtime:</span>
                                <span>{movie.Runtime}</span>
                            </div>
                            <div className="movie-meta-row">
                                <span className="meta-label">Genre:</span>
                                <span>{movie.Genre}</span>
                            </div>
                            <div className="movie-meta-row">
                                <span className="meta-label">Language:</span>
                                <span>{movie.Language}</span>
                            </div>

                            <button className="btn-select" onClick={()=>navigate(`/movie/${movie.imdbID}`,{state:{movie}})}>Select Seats</button>
                        </div>
                    </div>

                ))}
            </div>

            
        </main>
    );
};

export default MovieList;