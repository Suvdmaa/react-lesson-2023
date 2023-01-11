import userList from "../data/data";
import { useState } from "react";


export default function User(){

    const [index, setIndex] = useState(0); 
    const [memo, setMemo] = useState('')
    let user = userList[index];
    return (
        <div>
            <button onClick={()=> {setMemo(userList[index + 1].name)
            setIndex(index + 1)}}>
                Next
            </button>
            <p>{user.name}</p>
            <input value={memo}></input>
        </div>
    )
}

