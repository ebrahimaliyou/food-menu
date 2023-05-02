import { useGlobalContext } from "../context";
import "../App.css";

const Search = () => {
  const {
    handleSurpriseMeBtn,
    searchResults,
    handleInputChange,
    handleSelectResult,
    handleSearchBtn,
  } = useGlobalContext();
  return (
    <div className="search-container ">
      {/* <input type="text" value={} /> */}
      <div className="form-div">
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()} >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search-input"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            id="search-btn"
            onClick={handleSearchBtn}
          >
            Search
          </button>
        </form>
        <ul className="list-group">
          {searchResults
            ? searchResults.map((result) => (
                <li
                  className="list-group-item"
                  key={result.idMeal}
                  onClick={() => handleSelectResult(result.idMeal)}
                >
                  {result.strMeal}
                </li>
              ))
            : null}
        </ul>
      </div>
      <div>
        <button
          className="btn btn-outline-success"
          id="surpriseMe-btn"
          onClick={handleSurpriseMeBtn}
        >
          Surprise Me!
        </button>
      </div>
    </div>
  );
};

export default Search;
