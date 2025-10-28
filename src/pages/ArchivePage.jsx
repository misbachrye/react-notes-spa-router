import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function ArchivePage({ notes, onDelete, onArchive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  function onKeywordChangeHandler(keyword) {
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} onDelete={onDelete} onArchive={onArchive} />
    </section>
  );
}

export default ArchivePage;