import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { BTT } from "./components/BottomToTop/BTT";

// TMDB API
const apiKey = "api_key=4f0bf640389e8445a0c625b325c1607e";
const baseURL = "https://api.themoviedb.org/3";
const apiURL = baseURL + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const searchApi = baseURL + "/search/movie?&" + apiKey + "&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [value_, setValue_] = useState("");

  const getMovies = async (url) => {
    const response = await fetch(apiURL);
    const promise = await response.json();

    console.log(promise);
    setMovies(promise.results);
  };

  useEffect(() => {
    getMovies(apiURL);
  }, []);

  const onSubmit_ = async (e) => {
    e.preventDefault();

    if (value_) {
      const response = await fetch(searchApi + value_);
      const promise = await response.json();

      setMovies(promise.results);
      setValue_("");
    }
  };

  const onChange_ = (e) => {
    setValue_(e.target.value);
  };

  const refresh = () => {
    window.location.reload(false);
  };

  // Date
  const year = new Date().getFullYear();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex flex-column text-center"
            onClick={refresh}
          >
            MoviesInf.
          </a>
          <form className="d-flex" onSubmit={onSubmit_}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={value_}
              onChange={onChange_}
            />
            <button className="btn btn-outline-dark" type="submit">
              <SearchOutlinedIcon />
            </button>
          </form>
        </div>
      </nav>
      <div className="App">
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
      <BTT />
      <footer class="text-center text-light">
        Copyright &copy; Aryesh | {year}
      </footer>
    </>
  );
}

export default App;
