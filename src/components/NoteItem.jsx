import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
      <div className="note-item__action">
        {/* Mengembalikan tombol di card menjadi teks */}
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
        <button className="note-item__archive-button" onClick={() => onArchive(id, archived)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </article>
  );
}

export default NoteItem;