import React, { useContext, useEffect, useState} from 'react'
import { NumberQuestionsContext } from './App'
import axios from 'axios';

export default function NumberForm(props) {
    const { initNumber } = props;
    const numFinal = useContext(NumberQuestionsContext)
    const [currentNum, setCurrentNum] = useState(numFinal);
    const [ maxNum, setMaxNum] = useState()
    const API_URL = "http://localhost:4000/test?nbrQst=";


    const handleChange = e => {
        const { target: {value} } = e
        setCurrentNum(value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(currentNum);
        initNumber(currentNum);
    }

    useEffect(async () => {
       try {
         const result = await axios.get(API_URL);
         setMaxNum((result.data).length);
       } catch (e) {
         console.log(`Cannot make request: ${e.message}`);
       }
    },[])

    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="form-number">
          <div className="input-group">
            <label className="input-group-text bg-success" htmlFor="number">
              Number
            </label>
            <input
              type="number"
              min={0}
              className="form-control"
              value={currentNum}
              id='number'
              max={maxNum || null}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-group">
            <button
              type="submit"
              className="btn text-light select-number bg-success"
            >
              Select
            </button>
          </div>
        </form>
      </div>
    );
}