import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie, onClick, isAdded, onWatchlistToggle }) => {
  return (
    <div
      key={movie.key}
      onClick={onClick}
      className="card border-0 bg-transparent text-white flex-shrink-0 card-hover-effect ms-1"
      style={{ width: "165px", cursor: "pointer" }}
    >
      {/* content thumbnails image block frames */}
      <div className="position-relative overflow-hidden rounded-3 shadow mb-2">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&q=80"
          }
          alt="movie thumnail"
          className="card-img-top"
          style={{ height: "235px", objectFit: "cover" }}
        />
        {/* floating Hearts status absolute placement badge */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWatchlistToggle();
          }}
          className={`position-absolute top-0 end-0 m-2 badge bg-dark bg-opacity-65 p-2 rounded-circle border border-secondary border-opacity-25`}
        >
          {isAdded ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      {/* movies meta content strings details */}
      <h6
        className="fw-bold mb-1 text-truncate text-start"
        style={{ fontSize: "14px" }}
      >
        {movie.title}
      </h6>
      <div className="text-start">
        <small className="text-warning font-monospace">
          ⭐ {movie.vote_average.toFixed(1)}
        </small>
      </div>
    </div>
  );
};

export default MovieCard;
