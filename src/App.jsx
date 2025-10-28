import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { getAllNotes, addNote, deleteNote, archiveNote, unarchiveNote } from './utils/local-data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getAllNotes() });
  }

  onArchiveHandler(id, isArchived) {
    if (isArchived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    this.setState({ notes: getAllNotes() });
  }

  onAddNoteHandler({ title, body }) {
    addNote({ title, body });
    this.setState({ notes: getAllNotes() });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);

    return (
      <div className="app-container">
        <header>
          <h1><Link to="/">Aplikasi Catatan</Link></h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />} />
            <Route path="/archives" element={<ArchivePage notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />} />
            <Route path="/notes/new" element={<AddPage onAddNote={this.onAddNoteHandler} />} />
            <Route path="/notes/:id" element={<DetailPage onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;