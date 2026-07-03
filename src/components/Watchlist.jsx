import MovieRow from "./MovieRow";

const Watchlist = ({ watchlist, onCardClick, toggleWatchlist }) => {
  return (
    <>
      {watchlist.length == 0 ? (
        <div className="d-flex justify-content-center p-5">
          <h5 className="text-secondary"> Movie Not available!</h5>
        </div>
      ) : (
        <MovieRow
          movies={watchlist}
          title="Watchlist Movies"
          id={"watchlist-section"}
          onCardClick={onCardClick}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      )}
    </>
  );
};

export default Watchlist;
