import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function DetailPage({ onDelete, onArchive }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <p>Catatan tidak ditemukan!</p>;
  }

  function onDeleteHandler() {
    onDelete(id);
    navigate('/');
  }

  function onArchiveHandler() {
    onArchive(id, note.archived);
    navigate(note.archived ? '/' : '/archives');
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{note.body}</div>
      <div className="detail-page__action">
        {/* Menggunakan tag <img> untuk ikon */}
        <button className="action" type="button" title={note.archived ? 'Pindahkan' : 'Arsipkan'} onClick={onArchiveHandler}>
          {note.archived 
            ? <img src="/icons/unarchive.svg" alt="Pindahkan" /> 
            : <img src="/icons/archive.svg" alt="Arsipkan" />}
        </button>
        <button className="action" type="button" title="Hapus" onClick={onDeleteHandler}>
          <img src="/icons/delete.svg" alt="Hapus" />
        </button>
      </div>
    </section>
  );
}

export default DetailPage;