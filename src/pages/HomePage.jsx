import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function HomePage({ notes, onDelete, onArchive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  function onKeywordChangeHandler(keyword) {
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} onDelete={onDelete} onArchive={onArchive} />
      <div className="homepage__action">
        <Link to="/notes/new"><button className="action" type="button" title="Tambah">+</button></Link>
      </div>
    </section>
  );
}

export default HomePage;