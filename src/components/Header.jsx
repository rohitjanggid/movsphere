import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const Header = ({ inputMovies, setInputMoives, setOnsearch }) => {
  const handleSubmitButton = (e) => {
    e.preventDefault();
    setOnsearch(inputMovies);
    setInputMoives("")
  };

  return (
    <header
      className="d-flex align-items-center justify-content-between py-3 px-3 px-md-4 mb-4 sticky-top w-100"
      style={{
        backgroundColor: "rgba(11, 15, 25, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        zIndex: "1020",
      }}
    >
      {/* Left Spacer: To balance the notification icon and keep the form perfectly centered */}
      <div style={{ width: "40px" }} className="d-none d-md-block"></div>

      {/* Movies Search Input (Centered & Responsive) */}
      <form
        onSubmit={handleSubmitButton}
        className="mx-auto w-100"
        style={{ maxWidth: "600px" }}
      >
        <div
          className="input-group rounded-pill px-3 py-1"
          style={{
            backgroundColor: "#1e293b",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <input
            type="text"
            value={inputMovies}
            onChange={(e) => setInputMoives(e.target.value)}
            className="form-control bg-transparent border-0 text-white placeholder-secondary p-1 shadow-none movie-input"
            placeholder="Search Movies"
          />
          <button className="input-group-text bg-transparent border-0 text-white p-0 pe-2">
            <IoSearchSharp />
          </button>
        </div>
      </form>

      {/* Notification Icon */}
      <div className="d-flex align-items-center" style={{ width: "40px" }}>
        <button className="btn bg-transparent border-0 position-relative text-white fs-4 p-1 ms-auto">
          <IoIosNotifications />
        </button>
      </div>
    </header>
  );
};

export default Header;
