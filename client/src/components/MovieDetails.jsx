
import { useParams, useLocation, useNavigate } from 'react-router';


const MovieDetail = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

 
  const movie = location.state?.movie;


 

  return (
    <div className="details-page-wrapper">
      <button onClick={() => navigate('/')}>
        ← Back to Movie Night
      </button>

      <div className="movie-detail-card">
        <div >
          <img src={movie.Poster} alt={movie.Title} className="detail-img" />
        </div>

        <div >
          <h1 >{movie.Title}</h1>
          
          <div>
            <div className="stat-item"><strong>Year:</strong> {movie.Year}</div>
            <div className="stat-item"><strong>Runtime:</strong> {movie.Runtime}</div>
            <div className="stat-item"><strong>Rating:</strong> ⭐ {movie.imdbRating}/10</div>
            <div className="stat-item"><strong>Genres:</strong> {movie.Genre}</div>
          </div>

          <div >
            <h3>Description</h3>
            <p>{movie.Plot}</p>
          </div>

          <div>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
          </div>

      
          <button 
           
            onClick={() => navigate(`/seats/${imdbID}`, { state: { movie } })}
          >
            Choose Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;