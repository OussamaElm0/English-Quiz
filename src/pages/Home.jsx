import React from 'react'
import Tests from '../components/Tests'
import "../styles/Home.css"

export default function Home(props) {
  const { numberQuestions, resetNumberTest } = props;
  
  return (
    <div className="home-container">
      {numberQuestions === 0 ? (
        <h1 className='title'>Please select number of questions</h1>
      ) : (
        <Tests
          resetNumQst={resetNumberTest}
          nbrQst={numberQuestions}
        />
      )}
    </div>
  );
}