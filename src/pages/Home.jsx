import React, { useContext } from 'react'
import Tests from '../components/Tests'
import "../styles/Home.css"
import { NumberQuestionsContext } from '../components/App';
import NumberForm from '../components/NumberForm';

export default function Home(props) {
  const { resetNumberTest } = props;
  const numberQuestions = useContext(NumberQuestionsContext)
  
  return (
    <main className="home-container">
      {numberQuestions === 0 ? (
        <div className="form-container">
          <h1 className="title">Please select number of questions</h1>
          <NumberForm set={props.resetNumberTest} />
        </div>
      ) : (
        <Tests resetNumQst={resetNumberTest} />
      )}
    </main>
  );
}