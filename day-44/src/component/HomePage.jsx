import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div>
            <h1>It is a Home Page</h1>
            <Link to={'/'}>Back</Link>
        </div>
    )
}