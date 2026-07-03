import { IoPlayCircle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

const FeaturedHero = ({
  onWatchTrailer,
  showMovie,
  onWatchlistToggle,
  isAdded,
}) => {
  return (
    <section
      className="position-relative text-white rounded-4 overflow-hidden mb-4 shadow-lg p-4 p-md-5 d-flex align-items-center"
      style={{
        minHeight: "400px",
        backgroundImage: showMovie.backdrop_path
          ? ` url(https://image.tmdb.org/t/p/w500${showMovie.backdrop_path})`
          : showMovie.poster_path
            ? ` url(https://image.tmdb.org/t/p/w500${showMovie.backdrop_path})`
            : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&q=80",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to right, rgba(11, 15, 25, 0.95) 30%, rgba(11, 15, 25, 0.4) 70%, rgba(11, 15, 25, 0.8) 100%)",
          zIndex: "1",
        }}
      >
        {/* main grid content */}
        <div
          className="position-relative w-100 container-fluid p-0"
          style={{ zIndex: "2" }}
        >
          <div className="row p-3">
            <div
              className="col-12 col-md-8 col-poster_path
            lg-7 text-start"
            >
              <h1 className="display-4 fw-bold mb-2 tracking-tight text-white">
                {showMovie.title}
              </h1>
              <div className="d-flex align-items-center gap-2 mb-1 text-warning font-monospace">
                <span>Rating : </span>
                <span className="text-secondary small">
                  {showMovie?.vote_average
                    ? showMovie.vote_average.toFixed(1)
                    : "0.0"}
                </span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-1 text-info font-monospace">
                <span>release Date : </span>
                <span className="text-secondary small">
                  {showMovie.release_date}
                </span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-3 text-success font-monospace">
                <span>Total Vote : </span>
                <span className="text-secondary small">
                  {showMovie.vote_count}
                </span>
              </div>
              <p
                className="text-secondary mb-4 col-12 col-lg-10 lh-phase"
                style={{ fontSize: "14px" }}
              >
                {showMovie.overview}
              </p>
              {/* CTA Buttons Layout */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  onClick={onWatchTrailer}
                  className="btn d-flex align-items-center gap2 text-white px-3 py-2 border-0 shadow-lg fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7)",
                    borderRadius: "12px",
                    fontSize: "14px",
                  }}
                >
                  <IoPlayCircle /> Watch Trailer
                </button>
                <button
                onClick={onWatchlistToggle}
                  className="btn d-flex align-items-center gap-2 text-info px-3 py-2 fw-semibold"
                  style={{
                    border: "1px solid #38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.05)",
                    borderRadius: "12px",
                    fontSize: "14px",
                  }}
                >
                  <MdAdd />
                  {isAdded ? "Remove From Watchlist" : "Add to Watchlist"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHero;
