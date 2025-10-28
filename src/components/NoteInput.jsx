import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyInputEventHandler = this.onBodyInputEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({ title: event.target.value });
  }

  onBodyInputEventHandler(event) {
    this.setState({ body: event.target.innerHTML });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
        <input
          className="add-new-page__input__title"
          placeholder="Judul Catatan"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder="Isi catatan..."
          contentEditable="true"
          onInput={this.onBodyInputEventHandler}
        />
        <div className="add-new-page__action">
          {/* Menggunakan tag <img> untuk ikon */}
          <button type="submit" className="action" title="Simpan">
            <img src="/icons/save.svg" alt="Simpan" />
          </button>
        </div>
      </form>
    );
  }
}

export default NoteInput;