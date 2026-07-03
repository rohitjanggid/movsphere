import { IoMdHome } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";

const Sidebar = ({ selectPage, setSelcetPage }) => {
  return (
    <aside className="sidebar">
      {/* for desktop design */}
      <aside
        className="d-none d-md-flex flex-column position-fixed start-0 top-0 vh-100 p-4 shadow-lg gap-2"
        style={{
          width: "220px",
          backgroundColor: "#0f172a",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          zIndex: "1050",
        }}
      >
        <div className="mb-5 d-flex align-items-center justify-content-center gap-2">
          <a
            href="/"
            className="fw-bold text-white tracking-wider mb-0 text-decoration-none fs-4"
          >
            🎬 MovSphere
          </a>
        </div>
        <ul className="nav nav-pills flex-column mb-auto gap-2">
          <li className="nav-item" onClick={() => setSelcetPage("Home")}>
            <a
              href="#"
              className={`nav-link text-white ${selectPage == "Home" ? "active" : ""}`}
            >
              <IoMdHome /> Home
            </a>
          </li>
          <li className="nav-item" onClick={() => setSelcetPage("Trending")}>
            <a
              href="#trending-section"
              className={`nav-link text-white ${selectPage == "Trending" ? "active" : ""}`}
            >
              <IoMdTrendingUp /> Trending
            </a>
          </li>
          <li className="nav-item" onClick={() => setSelcetPage("Rated")}>
            <a
              href="#toprated-section"
              className={`nav-link text-white ${selectPage == "Rated" ? "active" : ""}`}
            >
              <MdWorkspacePremium /> Top Rated
            </a>
          </li>
          <li className="nav-item" onClick={() => setSelcetPage("Watchlist")}>
            <a
              href="#"
              className={`nav-link text-white ${selectPage == "Watchlist" ? "active" : ""}`}
            >
              <FaFolderOpen /> My Watchlist
            </a>
          </li>
        </ul>

        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none  dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
        </div>
      </aside>

      {/* for mobile design */}
      <nav
        className="d-flex d-md-none position-fixed bottom-0 start-0 w-100 justify-content-around align-items-center bg-dark p-2"
        style={{
          height: "60px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          zIndex: "1050",
        }}
      >
        <a
          href="#"
          onClick={() => setSelcetPage("Home")}
          className={`d-flex flex-column align-items-center text-secondary text-decoration-none fs-3 ${selectPage == "Home" ? "text-white" : "text-secondary"}`}
        >
          <IoMdHome />
        </a>
        <a
          href="#trending-section"
          onClick={() => setSelcetPage("Trending")}
          className={`d-flex flex-column align-items-center text-secondary text-decoration-none fs-3 ${selectPage == "Trending" ? "text-white" : "text-secondary"}`}
        >
          <IoMdTrendingUp />
        </a>
        <a
          href="#toprated-section"
          onClick={() => setSelcetPage("Rated")}
          className={`d-flex flex-column align-items-center text-secondary text-decoration-none fs-3 ${selectPage == "Rated" ? "text-white" : "text-secondary"}`}
        >
          <MdWorkspacePremium />
        </a>
        <a
          href="#"
          onClick={() => setSelcetPage("Watchlist")}
          className={`d-flex flex-column align-items-center text-secondary  text-decoration-none fs-3 ${selectPage == "Watchlist" ? "text-white" : "text-secondary"}`}
        >
          <FaFolderOpen />
        </a>
        <a
          href="#"
          className="d-flex flex-column align-items-center text-secondary text-decoration-none"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="28"
            height="28"
            className="rounded-circle me-2"
          />
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
