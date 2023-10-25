import React, { useState } from 'react'

export default function Test(props) {
    const {id, question, answers, rightAnswerId, updateScore, onNext} = props
    const [answerSelected, setAnswerSelected] = useState("")

    const handleClick = e => {
      const {target: {value}} = e
      setAnswerSelected(value)
    }
    const valideAnswer = () => {
      updateScore( prev => {
        return rightAnswerId === answerSelected ? prev + 1 : prev
      })
      onNext(prev => prev + 1)
    }

    return (
      <>
        <div className="test">
          <h1>{question}</h1>
          <div className="answers">
            {answers.map((a) => {
              return (
                <button
                  key={a.idA}
                  className="btn btn-quiz"
                  onClick={(e) => handleClick(e)}
                  value={a.idA}
                >
                  {a.answer}
                </button>
              );
            })}
          </div>
          <button 
            className="btn btn-next" 
            onClick={valideAnswer}
          >
            Next
          </button>
        </div>
      </>
    );
}