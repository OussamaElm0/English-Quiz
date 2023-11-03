import React, { useContext, useState} from 'react'
import { NumberQuestionsContext } from './App'

export default function NumberForm(props) {
    const {  set } = props
    const num = useContext(NumberQuestionsContext)
    const [n, setN] = useState(num)

    const handleChange = e => {
        const { target: {value} } = e
        setN(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(n);
        set(n)
    }

    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="form-number">
          <div className="input-group">
            <label className="input-group-text bg-success" htmlFor="numbers">
              Number
            </label>
            <input
              type="number"
              min={0}
              className="form-control"
              value={n}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='input-group'>
            <button type="submit" className="btn text-light select-number bg-success">
              Select
            </button>
          </div>
        </form>
      </div>
    );
}