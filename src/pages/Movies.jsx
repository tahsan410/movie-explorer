import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Footer from "../components/Footer";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }

        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (!searchText.trim()) {
      return;
    }

    setLoading(true);
    setError("");

    fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
        searchText
      )}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Search failed");
        }

        return res.json();
      })
      .then((data) => {
        const results = data.map((item) => item.show);

        setMovies(results);
        setSearched(true);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />

      <main className="container movies-section">
        <div className="movie-search">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        <h2>
          {searched ? `Search Results for "${searchText}"` : "All Movies"}
        </h2>

        {loading && <p>Loading movies...</p>}

        {!loading && error && <p>{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <p>No movies found.</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </main>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </>
  );
}

export default Movies;