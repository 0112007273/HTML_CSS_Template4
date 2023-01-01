import { useEffect } from "react"
import {Link} from "react-router-dom"
function Aside() {
    useEffect(() => {
        let lis = document.querySelectorAll(".aside li")
        lis.forEach((ele) => {
            let hr = window.location.pathname
            if (ele.className === hr) {
                console.log(true)
                lis.forEach(e => e.classList.remove("active"))
                ele.classList.add("active")
            }
            ele.addEventListener("click", (e) => {
                lis.forEach(e => e.classList.remove("active"))
                e.currentTarget.classList.add("active")
            })
        })
    })
    return(
        <div className="aside">
        <h3>Elzero</h3>
        <ul>
            <li className="/">
                <Link to="/">
                    <i className="fa-solid fa-chart-bar"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li className="/settings">
                <Link to="/settings">
                    <i className="fa-solid fa-gear"></i>
                    <span>settings</span>
                </Link>
            </li>
            <li className="/profile">
                <Link to="/profile">
                    <i className="fa-regular fa-user"></i>
                    <span>profile</span>
                </Link>
            </li>
            <li className="/projects">
                <Link to="/projects">
                    <i className="fa-solid fa-diagram-project"></i>
                    <span>progects</span>
                </Link>
            </li>
            <li className="/courses">
                <Link to="/courses">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span>courses</span>
                </Link>
            </li>
            <li className="/freinds">
                <Link to="/freinds">
                    <i className="fa-regular fa-circle-user"></i>
                    <span>friends</span>
                </Link>
            </li>
            <li className="/files">
                <Link to="/files">
                    <i className="fa-regular fa-file"></i>
                    <span>files</span>
                </Link>
            </li>
            <li className="/plans">
                <Link to="/plans">
                    <i className="fa-regular fa-credit-card"></i>
                    <span>plans</span>
                </Link>
            </li>
        </ul>
    </div>
    )
}

export default Aside