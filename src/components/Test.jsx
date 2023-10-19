import React from 'react'
import { CiPlay1 } from "react-icons/ci";

export default function Test(props) {
    const {title, nbrOfQuestions} = props
    
    return (
      <>
        <div className="test">
          <h2>{title}</h2>
          <p>{nbrOfQuestions} questions</p>
          <div className='play'>
            <button className="btn">
              <CiPlay1 />
            </button>
          </div>
        </div>
      </>
    );
}