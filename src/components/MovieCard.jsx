function MovieCard({ movie, onDetails }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.image?.medium ||
          "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.name}
      />

      <div className="movie-info">
        <h3>{movie.name}</h3>

        <p>
          {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}
        </p>

        <p>
          ⭐ {movie.rating?.average || "N/A"}
        </p>

        <button onClick={() => onDetails(movie)}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;