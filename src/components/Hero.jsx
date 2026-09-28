function Hero({ searchText, setSearchText, onSearch, onReset }) {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Find Your Favorite Movies</h1>

        <p>
          Explore thousands of movies and TV shows and discover something
          new to watch.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch();
              }
            }}
          />

          <button onClick={onSearch}>Search</button>

          {searchText && (
            <button onClick={onReset}>Clear</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;