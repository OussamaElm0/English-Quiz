import React, { useState } from 'react'

export default function Test(props) {
    const { question, answers, rightAnswerId, updateScore, onNext} = props
    const [answerSelected, setAnswerSelected] = useState("")
    const [isClicked, setClicked] = useState(null)

    const handleClick = e => {
      const {target: {value}} = e
      setAnswerSelected(value)
      setClicked(value)
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
          <h1 className="test-question">{question}</h1>
          <div className="answers">
            {answers.map((a) => {
              return (
                <button
                  key={a.idA}
                  className="btn btn-quiz"
                  onClick={(e) => handleClick(e)}
                  value={a.idA}
                  disabled={a.idA === isClicked ? true : false}
                >
                  {a.answer}
                </button>
              );
            })}
          </div>
          <button className="btn btn-next" onClick={valideAnswer}>
            Next
          </button>
          <h4 className='question-num text-dark'>{props.id}</h4>
        </div>
      </>
    );
}