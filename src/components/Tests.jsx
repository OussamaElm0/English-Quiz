import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Test from './Test';
import { Score } from './App';
import { motion } from "framer-motion";
import { NumberQuestionsContext } from './App';

export default function Tests(props) {
    const { resetNumQst } = props;
    const score = useContext(Score);
    const nbrQst = useContext(NumberQuestionsContext)
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="questions"
        >
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
                  updateScore={setCountScore}
                  onNext={setNextQuestion}
                  reset={resetNumQst}
                  id={index + 1}
                />
              </div>
            );
          })}
        </motion.div>
        <p className={`score ${pourcentage < 50 ? "not-valide" : "valide"}`}>
          Your score is: {countScore}/{nbrQst} ({pourcentage}%)
        </p>
      </>
    );
}