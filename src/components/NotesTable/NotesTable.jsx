import React from 'react'

import {
  getOctave,
  getDegrees,
  getTonicNotes,
  getDominantNotes,
  getSubdominantNotes
} from './NotesTable.utility'

const NotesRow = ({octave}) => (
  <tr>
    <td />
    {octave.map(note => (
      <th key={note}>{note}</th>
    ))}
  </tr>
)

const DegreesRow = ({
  octave,
  selectedKey
}) => (
  <tr>
    <th>Degree</th>
    {getDegrees({
      octave,
      key: selectedKey
    }).map((degree, degreeIndex) => (
      <td key={degreeIndex}>{degree}</td>
    ))}
  </tr>
)

const FunctionRow = ({
  octave,
  selectedKey,
  getFunctionNotes,
  heading
}) => (
  <tr>
    <th>{heading}</th>
    {getFunctionNotes({
      octave,
      key: selectedKey
    }).map((isIncluded, degreeIndex) => (
      <td
        key={degreeIndex}
        className={isIncluded ? 'highlighted' : ''}
      />
    ))}
  </tr>
)

const NotesTable = ({
  selectedBase,
  selectedKey
}) => {
  const octave = getOctave(selectedBase)
  return (
    <div>
      <table>
        <thead>
          <NotesRow
            octave={octave}
          />
        </thead>
        <tbody>
          <DegreesRow
            octave={octave}
            selectedKey={selectedKey}
          />
          <FunctionRow
            heading='Tonic'
            octave={octave}
            selectedKey={selectedKey}
            getFunctionNotes={getTonicNotes}
          />
          <FunctionRow
            heading='Dominant'
            octave={octave}
            selectedKey={selectedKey}
            getFunctionNotes={getDominantNotes}
          />
          <FunctionRow
            heading='Subdominant'
            octave={octave}
            selectedKey={selectedKey}
            getFunctionNotes={getSubdominantNotes}
          />
        </tbody>
      </table>
    </div>
  )
}

export default NotesTable
