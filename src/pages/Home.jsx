import React, { useState, useContext } from 'react'
import Tests from '../components/Tests'
import "../styles/Home.css"
import Score from '../components/Score'
import { NumberQuestionsContext } from '../components/App'

export default function Home(props) {
  const { resetNumberTest } = props;
  const [score, setScore] = useState(null)
  const numberQuestions = useContext(NumberQuestionsContext)
  
  return (
    <div className="home-container">
      {numberQuestions === 0 ? (
        <h1>Please select number of questions</h1>
      ) : (
        <Tests
          resetNumQst={resetNumberTest}
          nbrQst={numberQuestions}
          handleScore={setScore}
        />
      )}
      {score === null ? null : <Score score={score} />}
    </div>
  );
}