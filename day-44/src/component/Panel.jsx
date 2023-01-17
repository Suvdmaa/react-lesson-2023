import { useState } from "react"


export default function Panel({title, children}){

    const [isActive, setIsActive] = useState(false)

    function eventHandler(e) {
        e.preventDefault()
        setIsActive(true)
    }

    return (
        <div>
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button onClick={eventHandler}>Show</button>}
        </div>
    )
}