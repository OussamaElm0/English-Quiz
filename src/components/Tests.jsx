import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Test from './Test';

export default function Tests(props) {
    const { nbrQst, handleScore, resetNumQst } = props;
    const [questions, setQuestions] = useState([])
    const [nextQuestion, setNextQuestion] = useState(false);
    const API_URL = "http://localhost:4000/test?nbrQst=";

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const result = await axios.get(`${API_URL}${nbrQst}`);
                setQuestions(result.data)
                console.log(result.data);
            } catch (e) {
                console.log(`Cannot make request: ${e.message}`);
            }
        }
        fetchQuestions();
        console.log(nbrQst);
        return () => {
            setQuestions([]);
            setNextQuestion(false)
        }
    },[nbrQst])
    useEffect(() => {
      handleScore(0)
    },[])
   
    return (
      <>
        <div className="questions">
          {questions.map((qst, index) => {
            const { id, question, answers, rightAnswerId } = qst;
            return (
              <div
                style={{ display: nextQuestion == index ? "block" : "none" }}
                key={id}
              >
                <Test
                  question={question}
                  answers={answers}
                  rightAnswerId={rightAnswerId}
                  key={id}
                  updateScore={handleScore}
                  onNext={setNextQuestion}
                  reset={resetNumQst}
                />
              </div>
            );
          })}
        </div>
      </>
    );
}