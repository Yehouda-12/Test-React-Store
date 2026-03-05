import { readFile } from 'fs/promises';

export const getMovies = async (req, res) => {
    try {
        const [moviesData, seatsData] = await Promise.all([
            readFile('./data/movies.json', 'utf-8'),
            readFile('./data/seats.json', 'utf-8')
        ]);

        const movies = JSON.parse(moviesData);
        const seatsStore = JSON.parse(seatsData);

        const moviesWithAvailableCount = movies.map(movie => {
          
            const movieSeats = seatsStore[movie.imdbID] || [];
  
            const availableSeatsCount = movieSeats.filter(seat => !seat.isTaken).length;

            return {
                ...movie,
                availableSeats: availableSeatsCount
            };
        });

        res.json(moviesWithAvailableCount);
    } catch (error) {
        console.error( error);
        res.status(500).json({ message: "Error" });
    }
};