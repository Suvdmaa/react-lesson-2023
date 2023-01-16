import { Outlet } from "react-router-dom"

export default function About(){
    return (
        <div className="about-page">
            <p>It is about page</p>
            <a href="/about/suvd">Suvd</a>
            <a href="/about/shur">Shur</a>
            <Outlet />
        </div>
    )
}