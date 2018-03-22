'use strict';

import React from 'react';

import NoteForm from '../note-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p>
      </section>
    ) 
  }
}

export default NoteItem;