import React from 'react'

import {
  notes,
  keys
} from '../../App.utility'

const KeyAndBaseSelector = ({
  selectedBase,
  selectedKey,
  onUpdateBase,
  onUpdateKey
}) => (
  <div>
    <select
      value={selectedBase}
      onChange={event => {
        onUpdateBase(event.target.value)
      }}
    >
      {notes.map(noteIterator => (
        <option
          key={noteIterator}
          value={noteIterator}
        >
          {noteIterator}
        </option>
      ))}
    </select>
    <select
      value={selectedKey}
      onChange={event => {
        onUpdateKey(event.target.value)
      }}
    >
      {keys.map(keyIterator => (
        <option
          key={keyIterator.id}
          value={keyIterator.id}
        >
          {keyIterator.name}
        </option>
      ))}
    </select>
  </div>
)

export default KeyAndBaseSelector
