import React, {useState} from 'react'
import './App.css'

import {
  notes,
  keys
} from './App.utility'

import KeyAndBaseSelector from './components/KeyAndBaseSelector/KeyAndBaseSelector'
import NotesTable from './components/NotesTable/NotesTable'
import ChordNotation from './components/ChordNotation/ChordNotation'

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
      <ChordNotation />
    </>
  )
}

export default App
