import MovieCard from "./MovieCard";

const MovieRow = ({
  title,
  id,
  movies,
  onCardClick,
  watchlist,
  setWatchlist,
  toggleWatchlist
}) => {
  return (
    <div
      className="mb-4 position-relative w-100 px-0"
      style={{ zIndex: 1 }}
      id={id}
    >
      <h5
        className="fw-bold text-white mb-1 tracking-wide text-uppercase text-start"
        style={{ fontSize: "18px", color: "#94a3b8" }}
      >
        {title}
      </h5>

      {/* Horizontal scroll rail track block setup */}
      <div
        className="d-flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden py-4 px-2 hide-scrollbar w-100"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onCardClick(movie)}
            isAdded={watchlist?.some((item) => item.id === movie?.id)}
            setWatchlist={setWatchlist}
            onWatchlistToggle={() => toggleWatchlist(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
