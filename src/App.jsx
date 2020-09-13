import React, {useState} from 'react'
import './App.css'

import {
  notes,
  keys,
  getOctave,
  getDegrees,
  getTonicNotes,
  getDominantNotes,
  getSubdominantNotes,
  getRomanNumeral
} from './App.utility'

import KeyAndBaseSelector from './components/KeyAndBaseSelector/KeyAndBaseSelector'

const App = () => {
  const [base, onUpdateBase] = useState(notes[0])
  const [key, onUpdateKey] = useState(keys[0].id)

  const octave = getOctave(base)

  return (
    <>
      <KeyAndBaseSelector
        selectedBase={base}
        selectedKey={key}
        onUpdateBase={onUpdateBase}
        onUpdateKey={onUpdateKey}
      />
      <div>
        <table>
          <thead>
            <tr>
              <td />
              {octave.map(note => (
                <th key={note}>{note}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Degree</th>
              {getDegrees({
                octave,
                key
              }).map((degree, degreeIndex) => (
                <td key={degreeIndex}>{degree}</td>
              ))}
            </tr>
            <tr>
              <th>Tonic</th>
              {getTonicNotes({
                octave,
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
              {getDominantNotes({
                octave,
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
              {getSubdominantNotes({
                octave,
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
      <div>
        <table>
          <tbody>
            <tr>
              <td rowSpan="3">
                <select className="big">
                  {[1, 2, 3, 4, 5, 6, 7].map(number => (
                    <option
                      key={number}
                      value={number}
                    >
                      {getRomanNumeral(number)}
                    </option>
                  ))}
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
      </div>
    </>
  )
}

export default App
