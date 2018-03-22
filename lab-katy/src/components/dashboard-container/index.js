'use strict';

import './_dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../note-form';
import NoteList from '../note-list-container';


class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    this.props.app.setState( state => ({
      notes: [...state.notes, note]
    }));
  }

  deleteNote(note) {
    //need help here. maybe find index by note.id then splice()?
  }

  render() {
    return (
      <div className='dashboard-container'>
        <NoteForm handleAddNote={this.addNote} />
        <NoteList fuckMe={this.props.app.state.notes} />
      </div>
    )
  }
}

export default DashboardContainer;