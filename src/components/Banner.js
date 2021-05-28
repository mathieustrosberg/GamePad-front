import LogoLarge from "./LogoLarge";
import iconSearch from "../img/icon-search.png";

const Banner = () => {
  return (
    <div className="layout">
      <LogoLarge />
      <div className="container-searchbar">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for a game..."
          />

          <img className="icon-search" src={iconSearch} alt="iconSearch" />
        </div>
      </div>
      <div className="total-games">Search 2349 595 games</div>
    </div>
  );
};

export default Banner;
