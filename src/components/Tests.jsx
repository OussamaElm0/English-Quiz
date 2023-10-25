import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Test from './Test';

export default function Tests(props) {
    const {nbrQst} = props
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)
    // const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex])
    const [questionIndex, setIndex] = useState(0)
    const [nextQuestion, setNextQuestion] = useState(false);
    const API_URL = "http://localhost:4000/test?nbrQst=";

    const handleClick = () => {
        setIndex(prev => prev + 1)
    }

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
        return () => {
            setQuestions([]);
        }
    },[nbrQst])

    useEffect(() => {
        console.log(score);
    },[score])
   
    return (
        <>
            <div className='questions'>
                {questions.map((qst, index) => {
                    const {id, question, answers, rightAnswerId} = qst
                    return (
                      <div style={{display: nextQuestion == index ? "block" : "none" }}>
                        <Test
                          id={id}
                          question={question}
                          answers={answers}
                          rightAnswerId={rightAnswerId}
                          key={id}
                          updateScore={setScore}
                          onNext={setNextQuestion}
                        />
                      </div>
                    );
                })}
                
            </div>
        </>
    )
}