import { useEffect, useReducer, useState } from "react";
import FeaturedHero from "./components/FeaturedHero";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import Sidebar from "./components/Sidebar";
import TrailerModal from "./components/TrailerModal";
import Footer from "./components/Footer";
import Watchlist from "./components/Watchlist";

function App() {
  const [selectPage, setSelcetPage] = useState("Home");
  const [seeTrailer, setSeeTrailer] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [inputMovies, setInputMoives] = useState("");
  const [onSearch, setOnsearch] = useState("");
  const [showMovie, setShowMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedMoiveForTrailer, setSelectedMovieForTrailer] = useState(null);
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("movie_watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("movie_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [trendingResponse, topratedResponse, actionResponse] =
          await Promise.all([
            fetch(
              "https://api.themoviedb.org/3/trending/movie/day?api_key=b907cc202fe674b640f2d6c2e820f36d",
            ),
            fetch(
              "https://api.themoviedb.org/3/movie/top_rated?api_key=b907cc202fe674b640f2d6c2e820f36d",
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=b907cc202fe674b640f2d6c2e820f36d&with_genres=28,53&sort_by=popularity.desc",
            ),
          ]);

        const trendingData = await trendingResponse.json();
        const topratedData = await topratedResponse.json();
        const actionData = await actionResponse.json();

        setTrendingMovies(trendingData.results);
        setTopratedMovies(topratedData.results);
        setActionMovies(actionData.results);

        if (
          !onSearch &&
          trendingData.results &&
          trendingData.results.length > 0
        ) {
          setShowMovie(trendingData.results[0]);
        }
      } catch (error) {
        alert("Some Technical error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!onSearch.trim()) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=b907cc202fe674b640f2d6c2e820f36d&query=${encodeURIComponent(onSearch)}`,
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setShowMovie(data.results[0]);
        } else {
          alert("please Enter correct movie name!");
        }
      } catch (error) {
        alert("some technical error", error);
      }
      setSelcetPage("Home");
    };
    fetchData();
  }, [onSearch]);

  const fetchMovieTrailer = async (movie) => {
    if (!movie || !movie.id) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=b907cc202fe674b640f2d6c2e820f36d`,
      );
      const data = await response.json();

      const trailer = data.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );

      setSelectedMovieForTrailer(movie);

      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      } else {
        setTrailerUrl("");
      }

      setSeeTrailer(true);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleWatchlist = (movie) => {
    if (!movie) return;

    const isExist = watchlist.some((item) => item.id === movie.id);

    if (isExist) {
      setWatchlist(watchlist.filter((item) => item.id !== movie.id));
    } else {
      setWatchlist([movie, ...watchlist]);
    }
  };

  return (
    <div
      className="d-flex min-vh-100  overflow-x-hidden"
      style={{
        backgroundColor: "#0b0f19",
        width: "100%",
        color: "#f8fafc",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/*1.  global sidebar */}
      <Sidebar setSelcetPage={setSelcetPage} selectPage={selectPage} />
      {/*2. Main Right Container  */}
      <div
        className="flex-grow-1 d-flex flex-column min-vh-100 pb-5 pb-md-0 overflow-hidden"
        style={{
          paddingLeft: "0px",
        }}
      >
        {/* custom responsive spacing logic */}
        <style>{`
          @media (min-width: 768px){
            div.flex-grow-1 { 
              margin-left: 220px !important; 
              max-width: calc(100% - 220px) !important; 
            }
          }
        `}</style>

        {/* 3. global fixed header */}
        <Header
          inputMovies={inputMovies}
          setInputMoives={setInputMoives}
          setOnsearch={setOnsearch}
        />

        {/* scrollable Dynamic content Body */}
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ minHeight: "50vh" }}
          >
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <main className="px-3 px-md-4 pb-5">
            {/* VIEW A: HOME DASHBOARD */}
            {selectPage != "Watchlist" && (
              <>
                <FeaturedHero
                  onWatchTrailer={() => fetchMovieTrailer(showMovie)}
                  showMovie={showMovie}
                  onWatchlistToggle={() => toggleWatchlist(showMovie)}
                  isAdded={watchlist.some((item) => item.id === showMovie?.id)}
                />
                <div className="container-fluid overflow-hidden">
                  <MovieRow
                    movies={trendingMovies}
                    title="Trending Movies"
                    id={"trending-section"}
                    onCardClick={fetchMovieTrailer}
                    watchlist={watchlist}
                    toggleWatchlist={toggleWatchlist}
                  />
                  <MovieRow
                    movies={topratedMovies}
                    title="Top Rated"
                    id={"toprated-section"}
                    onCardClick={fetchMovieTrailer}
                    watchlist={watchlist}
                    toggleWatchlist={toggleWatchlist}
                  />
                  <MovieRow
                    movies={actionMovies}
                    title="Action Thrillers"
                    onCardClick={fetchMovieTrailer}
                    watchlist={watchlist}
                    toggleWatchlist={toggleWatchlist}
                  />
                </div>
              </>
            )}
            {selectPage == "Watchlist" && (
              <Watchlist
                watchlist={watchlist}
                onCardClick={fetchMovieTrailer}
                toggleWatchlist={toggleWatchlist}
              />
            )}

            <Footer />
          </main>
        )}
      </div>
      <TrailerModal
        setSeeTrailer={setSeeTrailer}
        seeTrailer={seeTrailer}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        movie={selectedMoiveForTrailer}
        onWatchlistToggle={() => toggleWatchlist(selectedMoiveForTrailer)}
        isAdded={watchlist.some(
          (item) => item.id === selectedMoiveForTrailer?.id,
        )}
      />
    </div>
  );
}

export default App;
