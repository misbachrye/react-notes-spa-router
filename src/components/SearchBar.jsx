import React from 'react';

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;