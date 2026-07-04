const TrailerModal = ({
  seeTrailer,
  setSeeTrailer,
  trailerUrl,
  setTrailerUrl,
  movie,
  onWatchlistToggle,
  isAdded,
}) => {
  if (seeTrailer === false || !movie) return null;

  // Custom modal close handler taaki background sound band ho sake
  const handleClose = () => {
    setTrailerUrl(""); // Clear video url
    setSeeTrailer(false); // Close Modal window
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      style={{
        backgroundColor: "rgba(7, 10, 19, 0.85)",
        backdropFilter: "blur(8px)",
        zIndex: "2000",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content border-0 text-white"
          style={{ backgroundColor: "#151f32", borderRadius: "16px" }}
        >
          {/* Header controls layout */}
          <div className="model-header border-0 pb-0 d-flex justify-content-between p-3">
            <h6 className="modal-title fw-bold text-uppercase">
              Watch Trailer: {movie.title || movie.name}
            </h6>
            <button
              onClick={handleClose}
              type="button"
              className="btn-close btn-close-white shadow-none"
            ></button>
          </div>

          {/* Dynamic Video Element Box */}
          <div className="modal-body p-3">
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-dark mb-3">
              {trailerUrl ? (
                <iframe
                  src={trailerUrl}
                  title="Movie Trailer"
                  allowFullScreen
                  style={{ border: "0" }}
                ></iframe>
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center text-secondary py-5">
                  <span className="fs-1">⚠️</span>
                  <span className="small fw-semibold mt-2">
                    Official Trailer Unavailable on YouTube
                  </span>
                </div>
              )}
            </div>

            {/* Dynamic Meta content explanations info */}
            <div className="text-start px-1">
              <h5 className="fw-bold text-white mb-1">
                {movie.title || movie.name}
              </h5>
              <p className="small mb-2 text-info">
                Release Date: {movie.release_date || "N/A"} | Rating: ⭐{" "}
                {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}
              </p>
              <p className="text-secondary small lh-base mb-3">
                {movie.overview ||
                  "No overview description available for this content structure."}
              </p>
              <button
                onClick={onWatchlistToggle}
                className="btn w-100 fw-bold py-2 text-white border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  borderRadius: "10px",
                }}
              >
                {isAdded
                  ? "Remove From watchlist Collection"
                  : "Add to watchlist Collection"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
