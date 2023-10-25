import React from 'react'

export default function Score(props) {
    const {score} = props
    
    return (
        <>
            Your previous score was {score}
        </>
    )
}