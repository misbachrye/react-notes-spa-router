import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </section>
  );
}

export default NoteList;