import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
import { useMovieStore } from '../store/useStore';

const SeatPage = () => {
  const { imdbID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const movie = location.state?.movie;

  const { selectSeat, seatSelections } = useMovieStore();
  const currentSeat = seatSelections[imdbID];

  const chairs = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="seats-container">
      <div className="seats-header">
        <div className="header-top">
          <h2>Choose your seats</h2>
          <div className="status-indicators">
             <span ><span className="dot red"></span> Available</span>
             <span ><span className="dot green"></span> Taken</span>
             <button onClick={() => navigate('/')} className="btn-back">Back</button>
          </div>
        </div>
        <p className="movie-subtitle">Movie details</p>
        <p >Movie ID: {imdbID}</p>
      </div>

      <div className="seats-card">
        <div className="screen-line">SCREEN</div>

        <div className="seats-grid">
          {chairs.map((num) => (
            <div 
              key={num}
              className={`seat-box ${currentSeat === num ? 'selected' : ''}`}
              onClick={() => selectSeat(imdbID, num)}
            >
              {num}
            </div>
          ))}
        </div>

        <p className="instruction">Click on available seat to reserve it.</p>
        
        {currentSeat && (
          <div className="summary-box">
            Selected Seat: <strong>{currentSeat}</strong> for {movie?.Title}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatPage;