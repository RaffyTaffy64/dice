import { useState } from 'react'

const BrokenCounter = () => {
    const [number, setNumber] = useState(0)

    const handleAddThree = () => {
        setNumber((n) => {
            return n + 1
        })
        setNumber((n) => {
            return n + 1
        })
        setNumber((n) => {
            return n + 1
        })
    }
    return (
        <div>
            <h3 onClick={handleAddThree}>{number}</h3>
        </div>
    )
}

export default BrokenCounter