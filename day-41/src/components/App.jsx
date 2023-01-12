import { useState } from "react"


function Button() {
    const [counter, setCounter] = useState(0)
    const [inputText, setInputText] = useState("")

    function handleClick() {
        setCounter(counter + 1)
    }

    const handleInput = function (event) {
        console.log(event.target.value)
        setInputText(event.target.value)
    }

    return (
        <div>
            <div>
                <p>{counter}</p>
                <button onClick={() => { handleClick() }}>
                    Click me {counter}
                </button>
            </div>
            <div>
                <p>{inputText}</p>
                <input value={inputText} onChange={(e) => { handleInput(e) }}></input>
            </div>

        </div>
    )
}







export { Button}