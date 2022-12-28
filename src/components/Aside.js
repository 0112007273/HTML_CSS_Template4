import {Link} from "react-router-dom"
function Aside() {
    return(
        <div className="aside">
        <h3>Elzero</h3>
        <ul>
            <li className="active">
                <Link to="/">
                    <i className="fa-solid fa-chart-bar"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/settings">
                    <i className="fa-solid fa-gear"></i>
                    <span>settings</span>
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    <i className="fa-regular fa-user"></i>
                    <span>profile</span>
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    <i className="fa-solid fa-diagram-project"></i>
                    <span>progects</span>
                </Link>
            </li>
            <li>
                <Link to="/courses">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span>courses</span>
                </Link>
            </li>
            <li>
                <Link to="/freinds">
                    <i className="fa-regular fa-circle-user"></i>
                    <span>friends</span>
                </Link>
            </li>
            <li>
                <Link to="/files">
                    <i className="fa-regular fa-file"></i>
                    <span>files</span>
                </Link>
            </li>
            <li>
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