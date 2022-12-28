import test from "../images/testimonials.png"

function NavBar() {
    return(
        <div className="nav">
        <div className="container flex-1">
            <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search Keyword" />
            </div>
            <div className="image">
                <a href="/#">
                    <i className="fa-regular fa-bell"></i>
                </a>
                <img src={test} alt="" />
            </div>
        </div>
    </div>
    )
}

export default NavBar