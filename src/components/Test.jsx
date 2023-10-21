import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';

export default function Test(props) {
    const {title, nbrOfQuestions, handleClick} = props
  
    
    return (
      <>
        <div className="test">
          <h2>{title}</h2>
          <p>{nbrOfQuestions} questions</p>
          <div className='play'>
            <Link className="btn btn-quiz" to="test/2" >
              <CiPlay1 className='play-icon' />
            </Link>
          </div>
        </div>
      </>
    );
}