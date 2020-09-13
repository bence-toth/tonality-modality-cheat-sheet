import React from 'react'

import {getRomanNumeral} from '../../App.utility'

const SignSelector = () => (
  <select>
    <option></option>
    <option>♯</option>
    <option>♭</option>
    <option>♮</option>
  </select>
)

const ChordNotation = () => (
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
            <SignSelector />
          </td>
        </tr>
        <tr>
          <td>
            <input type="number" />
          </td>
          <td>
            <SignSelector />
          </td>
        </tr>
        <tr>
          <td>
            <input type="number" />
          </td>
          <td>
            <SignSelector />
          </td>
        </tr>
        <tr>
          <td>
            <SignSelector />
          </td>
          <td colSpan="2"></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default ChordNotation
