import React, { useContext } from 'react'
import Tests from '../components/Tests'
import "../styles/Home.css"
import { NumberQuestionsContext } from '../components/App';

export default function Home(props) {
  const { resetNumberTest } = props;
  const numberQuestions = useContext(NumberQuestionsContext)
  
  return (
    <div className="home-container">
      {numberQuestions === 0 ? (
        <h1 className='title'>Please select number of questions</h1>
      ) : (
        <Tests
          resetNumQst={resetNumberTest}
        />
      )}
    </div>
  );
}