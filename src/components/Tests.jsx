import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Test from './Test';
import { Score } from './App';

export default function Tests(props) {
    const { nbrQst,  resetNumQst } = props;
    const score = useContext(Score);
    const [questions, setQuestions] = useState([])
    const [nextQuestion, setNextQuestion] = useState(0);
    const API_URL = "http://localhost:4000/test?nbrQst=";
    const [countScore, setCountScore] = useState(score);
    const [pourcentage, setPourcentage] = useState(0)
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const result = await axios.get(`${API_URL}${nbrQst}`);
                setQuestions(result.data)
            } catch (e) {
                console.log(`Cannot make request: ${e.message}`);
            }
        }
        fetchQuestions();
        setCountScore(0)
        return () => {
            setQuestions([]);
            setNextQuestion(false)
        }
    },[nbrQst])

    useEffect(() => {
      setCountScore(0)
    },[])

    useEffect(() => {
      setPourcentage(Math.round((countScore / nbrQst) * 100));
    },[nextQuestion])

   
    return (
      <>
        <div className="questions">
          {questions.map((qst, index) => {
            const { id, question, answers, rightAnswerId } = qst;
            return (
              <div
                style={{ display: nextQuestion == index ? "block" : "none" }}
                key={id}
                className="question-div"
              >
                <Test
                  question={question}
                  answers={answers}
                  rightAnswerId={rightAnswerId}
                  key={id}
                  updateScore={setCountScore}
                  onNext={setNextQuestion}
                  reset={resetNumQst}
                />
              </div>
            );
          })}
        </div>
        <p className={`score ${pourcentage < 50 ? "not-valide" : "valide"}`}>
          Your score is: {countScore}/{nbrQst}{" "} ({pourcentage}%)
        </p>
      </>
    );
}