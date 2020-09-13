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

export {
  notes,
  keys,
  getRomanNumeral
}
