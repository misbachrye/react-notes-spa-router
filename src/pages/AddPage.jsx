import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';

function AddPage({ onAddNote }) {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    onAddNote(note);
    navigate('/');
  }

  return (
    <section className="add-new-page">
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;