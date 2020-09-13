import {
  notes,
  keys,
  getRomanNumeral
} from '../../App.utility'

const twoOctaves = [...notes, ...notes]

const getOctave = base => {
  const scaleStart = twoOctaves.findIndex(note => note === base)
  return twoOctaves.slice(scaleStart, scaleStart + 12)
}

const getDegrees = ({octave, key}) => {
  let degreeCounter = 1
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      return getRomanNumeral(degreeCounter++)
    }
    return null
  })
}

const tonicDegrees = [1, 3, 6]
const getTonicNotes = ({octave, key}) => {
  let degreeCounter = 1
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      if (tonicDegrees.includes(degreeCounter++)) {
        return true
      }
    }
    return false
  })
}

const dominantDegrees = [3, 5, 7]
const getDominantNotes = ({octave, key}) => {
  let degreeCounter = 1
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      if (dominantDegrees.includes(degreeCounter++)) {
        return true
      }
    }
    return false
  })
}

const subdominantDegrees = [2, 4, 6]
const getSubdominantNotes = ({octave, key}) => {
  let degreeCounter = 1
  return octave.map((_, noteIndex) => {
    if (keys.find(keyIterator => keyIterator.id === key).notes.includes(noteIndex)) {
      if (subdominantDegrees.includes(degreeCounter++)) {
        return true
      }
    }
    return false
  })
}

export {
  getOctave,
  getDegrees,
  getTonicNotes,
  getDominantNotes,
  getSubdominantNotes
}
