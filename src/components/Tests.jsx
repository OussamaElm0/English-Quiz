import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Test from './Test';

export default function Tests() {

    const [questions, setQuestions] = useState([
      {
        id: 1,
        answers: [1,2,3,4,5,6],
        question: "Any question"
      }
    ])

    useEffect(async () => {
        try {
            const result = await axios.get("http://localhost:4000/1?select=20");
            setQuestions(result.data)
            console.log(questions);
        } catch (e) {
          console.log(`Cannot make request: ${e.message}`);
        }
        console.log(questions);
    }, [])

    return (
      <>
        {questions.map(q => {
          return (
            <Test
              nbrOfQuestions={q.answers.length}
              title={q.question}
              key={q.id}
            />
          );
        })}
      </>
    );
}