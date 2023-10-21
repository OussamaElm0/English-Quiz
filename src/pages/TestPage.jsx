import React from 'react'
import { useParams } from 'react-router-dom'

export default function TestPage() {

    const {id} = useParams()

    return (
        <>
            Test num {id}
        </>
    )
}