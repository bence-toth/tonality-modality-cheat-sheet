const notes = [
  'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'
]

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

const getRomanNumeral = number => (
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][number - 1]
)

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
  notes,
  keys,
  getRomanNumeral,
  getOctave,
  getDegrees,
  getTonicNotes,
  getDominantNotes,
  getSubdominantNotes
}