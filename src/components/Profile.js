import test from "../images/testimonials.png"
import image from "../images/images.jfif"

function Profile() {
    return(
        <div className="profile">
        <h2 className="main-title">profile</h2>
        <div className="container">
            <div className="box box-pro">
                <div className="image">
                    <div className="hold">
                        <img src={test} alt="" />
                        <h3>hazem ali</h3>
                        <p>level 1</p>
                        <div className="prog">
                            <span></span>
                        </div>
                        <div className="icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <p>1 rating</p>
                    </div>
                </div>
                <div className="info">
                    <div className="content">
                        <h4>general informathion</h4>
                        <div className="text flex-1">
                            <p>full name: <span>hazem ali</span></p>
                            <p>gender: <span>male</span></p>
                            <p>country: <span>eygpt</span></p>
                        </div>
                        <label className="test">
                            <input type="checkbox" />
                            <div className="switch-icon"></div>
                        </label>
                    </div>
                    <div className="content">
                        <h4>general informathion</h4>
                        <div className="text flex-1">
                            <p>full name: <span>hazem ali</span></p>
                            <p>gender: <span>male</span></p>
                            <p>country: <span>eygpt</span></p>
                        </div>
                        <label className="test">
                            <input type="checkbox" />
                            <div className="switch-icon"></div>
                        </label>
                    </div>
                    <div className="content">
                        <h4>general informathion</h4>
                        <div className="text flex-1">
                            <p>full name: <span>hazem ali</span></p>
                            <p>gender: <span>male</span></p>
                            <p>country: <span>eygpt</span></p>
                        </div>
                        <label className="test">
                            <input type="checkbox" />
                            <div className="switch-icon"></div>
                        </label>
                    </div>
                    <div className="content">
                        <h4>general informathion</h4>
                        <div className="text flex-1">
                            <p>full name: <span>hazem ali</span></p>
                            <p>gender: <span>male</span></p>
                            <p>country: <span>eygpt</span></p>
                        </div>
                        <label className="test">
                            <input type="checkbox" />
                            <div className="switch-icon"></div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="box box-skill">
                    <h3>my skills</h3>
                    <p>complate skills list</p>
                    <ul>
                        <li>
                            <span>html</span>
                            <span>pugjs</span>
                            <span>haml</span>
                        </li>
                        <li>
                            <span>css</span>
                            <span>sass</span>
                            <span>stylus</span>
                        </li>
                        <li>
                            <span>javscript</span>
                            <span>typescript</span>
                        </li>
                        <li>
                            <span>vuejs</span>
                            <span>reactjs</span>
                        </li>
                        <li>
                            <span>jest</span>
                            <span>jasmine</span>
                        </li>
                        <li>
                            <span>php</span>
                            <span>laravel</span>
                        </li>
                        <li>
                            <span>paython</span>
                            <span>django</span>
                        </li>
                    </ul>
                </div>
                <div className="box activete">
                        <h3>latest activities</h3>
                        <p>latest activities done by the user</p>
                        <div className="flex-1">
                            <div className="image">
                                <img src={image} alt="" />
                                <div className="text">
                                    <span>store</span>
                                    <p>bought the mastring paython course</p>
                                </div>
                            </div>
                            <div className="date">
                                <span>18:05</span>
                                <p>yesterday</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="image">
                            <img src={image} alt="" />
                                <div className="text">
                                    <span>store</span>
                                    <p>bought the mastring paython course</p>
                                </div>
                            </div>
                            <div className="date">
                                <span>18:05</span>
                                <p>yesterday</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="image">
                            <img src={image} alt="" />
                                <div className="text">
                                    <span>store</span>
                                    <p>bought the mastring paython course</p>
                                </div>
                            </div>
                            <div className="date">
                                <span>18:05</span>
                                <p>yesterday</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="image">
                            <img src={image} alt="" />
                                <div className="text">
                                    <span>store</span>
                                    <p>bought the mastring paython course</p>
                                </div>
                            </div>
                            <div className="date">
                                <span>18:05</span>
                                <p>yesterday</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile