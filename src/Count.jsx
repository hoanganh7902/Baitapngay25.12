import React, { useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0)
    
    function handleIncreaseCounter() {
        return (
            setCounter(counter + 1)
        )
    }

    function handleDecreasecounter() {
        return (
            setCounter(counter - 1)
        )
    }

    function handleResetCounter() {
        return (
            setCounter(0)
        )
    }


    return (
        <div>
            <header>Create a functional component called Counter</header>
            <main>
                <h1>Counter App</h1>
                <div>{counter}</div>
                <button style={{ margin: "10px", backgroundColor: 'green', border: 'none', padding: "10px" }}
                    onClick={(e) => handleIncreaseCounter(e)}
                >
                    Increment
                </button>
                <button style={{ margin: "10px", backgroundColor: 'red', border: 'none', padding: "10px" }}
                    onClick={handleDecreasecounter}
                >
                    Decrease
                </button>
                <button style={{ margin: "10px", backgroundColor: 'gray', border: 'none', padding: "10px" }}
                    onClick={handleResetCounter}
                >Reset</button>
            </main>
        </div>
    )
}
