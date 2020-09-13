import React, {useState} from 'react';
import './App.css';

const notes = [
  'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'
];


const getRomanNumeral = number => (
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][number - 1]
)

const twoOctaves = [...notes, ...notes];

const keys = [
  {
    id: 'major',
    name: 'Major',
    notes: [0, 2, 4, 5, 7, 9, 11]
  },
  {
    id: 'naturalMinor',
    name: 'Natural Minor',
    notes: [0, 2, 3, 5, 7, 8, 10]
  },
]

const getDegrees = ({octave, key}) => {
  let degreeCounter = 1;
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      return getRomanNumeral(degreeCounter++)
    }
    return null
  })
}

const tonicDegrees = [1, 3, 6];
const getTonicDegrees = ({octave, key}) => {
  let degreeCounter = 1;
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      if (tonicDegrees.includes(degreeCounter++)) {
        return true
      }
    }
    return false
  })
}

const dominantDegrees = [3, 5, 7];
const getDominantDegrees = ({octave, key}) => {
  let degreeCounter = 1;
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      if (dominantDegrees.includes(degreeCounter++)) {
        return true
      }
    }
    return false
  })
}

const subdominantDegrees = [2, 4, 6];
const getSubdominantDegrees = ({octave, key}) => {
  let degreeCounter = 1;
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      if (subdominantDegrees.includes(degreeCounter++)) {
        return true
      }
    }
    return false
  })
}

const App = () => {
  const [base, onUpdateBase] = useState(notes[0]);
  const [key, onUpdateKey] = useState(keys[0].id);

  const scaleStart = twoOctaves.findIndex(note => note === base);
  const scaleOctave = twoOctaves.slice(scaleStart, scaleStart + 12);

  return (
    <>
      <div>
        <select
          value={base}
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
          value={key.id}
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
      <div>
        <table>
          <thead>
            <tr>
              <td />
              {scaleOctave.map(note => (
                <th key={note}>{note}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Degree</th>
              {getDegrees({
                octave: scaleOctave,
                key
              }).map((degree, degreeIndex) => (
                <td key={degreeIndex}>{degree}</td>
              ))}
            </tr>
            <tr>
              <th>Tonic</th>
              {getTonicDegrees({
                octave: scaleOctave,
                key
              }).map((isIncluded, degreeIndex) => (
                <td
                  key={degreeIndex}
                  className={isIncluded ? 'highlighted' : ''}
                />
              ))}
            </tr>
            <tr>
              <th>Dominant</th>
              {getDominantDegrees({
                octave: scaleOctave,
                key
              }).map((isIncluded, degreeIndex) => (
                <td
                  key={degreeIndex}
                  className={isIncluded ? 'highlighted' : ''}
                />
              ))}
            </tr>
            <tr>
              <th>Subdominant</th>
              {getSubdominantDegrees({
                octave: scaleOctave,
                key
              }).map((isIncluded, degreeIndex) => (
                <td
                  key={degreeIndex}
                  className={isIncluded ? 'highlighted' : ''}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div>
        <table>
          <tbody>
            <tr>
              <td rowSpan="3">
                <select className="big">
                  <option>I</option>
                  <option>II</option>
                  <option>III</option>
                  <option>IV</option>
                  <option>V</option>
                  <option>VI</option>
                  <option>VII</option>
                </select>
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <select>
                  <option></option>
                  <option>♯</option>
                  <option>♭</option>
                  <option>♮</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" />
              </td>
              <td>
                <select>
                  <option></option>
                  <option>♯</option>
                  <option>♭</option>
                  <option>♮</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" />
              </td>
              <td>
                <select>
                  <option></option>
                  <option>♯</option>
                  <option>♭</option>
                  <option>♮</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <select>
                  <option></option>
                  <option>♯</option>
                  <option>♭</option>
                  <option>♮</option>
                </select>
              </td>
              <td colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
}

export default App;
