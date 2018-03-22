'use strict';

import React from 'react';

import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>notes.</h1>
        <ul> 
          {this.props.fuckMe.map((note, i) => {
            return (
              <li key={i}>
                <NoteItem note={note} />
              </li>
            )
          })}
        </ul>
    </section>
    )
  }
}

export default NoteList;
