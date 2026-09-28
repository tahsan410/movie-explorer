function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
        />

        <div className="modal-info">
          <h2>{movie.name}</h2>

          <p>
            <strong>Rating:</strong>{" "}
            {movie.rating?.average || "N/A"}
          </p>

          <p>
            <strong>Release Date:</strong>{" "}
            {movie.premiered || "N/A"}
          </p>

          <p>
            <strong>Genre:</strong>{" "}
            {movie.genres?.join(", ") || "N/A"}
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No summary available.",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieModal;