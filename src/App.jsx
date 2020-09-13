import React, {useState} from 'react'
import './App.css'

import {
  notes,
  keys,
  getRomanNumeral
} from './App.utility'

import KeyAndBaseSelector from './components/KeyAndBaseSelector/KeyAndBaseSelector'
import NotesTable from './components/NotesTable/NotesTable'

const App = () => {
  const [base, onUpdateBase] = useState(notes[0])
  const [key, onUpdateKey] = useState(keys[0].id)


  return (
    <>
      <KeyAndBaseSelector
        selectedBase={base}
        selectedKey={key}
        onUpdateBase={onUpdateBase}
        onUpdateKey={onUpdateKey}
      />
      <NotesTable
        selectedBase={base}
        selectedKey={key}
      />
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
