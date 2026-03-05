import { create } from 'zustand'

export const useMovieStore = create((set) => ({
  movies: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  seatSelections: {},


  fetchMovies: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('http://localhost:3001/api/movies');
      if (!response.ok) throw new Error('not could to fetch');
      
      const data = await response.json();
      
      set({ movies: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false, movies: [] });
    }
  },

  setSearchQuery: (value) => set({ searchQuery: value }),


  selectSeat: (imdbID, seatId) => set((state) => {
    const newSelections = {
      ...state.seatSelections,
      [imdbID]: seatId
    };
    localStorage.setItem('movie_seats', JSON.stringify(newSelections));
    return { seatSelections: newSelections };
  }),

  loadSavedSeats: () => {
    const saved = localStorage.getItem('movie_seats');
    if (saved) {
      try {
        set({ seatSelections: JSON.parse(saved) });
      } catch (e) {
        console.error("Erreur de lecture du localStorage", e);
      }
    }
  }
}));