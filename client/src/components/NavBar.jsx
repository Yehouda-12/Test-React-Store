

import { useMovieStore } from '../store/useStore';

const Navbar = () => {

  const { searchQuery, setSearchQuery } = useMovieStore();

  return (
    <nav className="main-navbar">
      <div className="navbar-brand">
        <h1>Movie Night</h1>
        <p>Search movie and pick youtr seats</p>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="nav-search-input"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;