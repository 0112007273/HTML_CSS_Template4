function Settings() {
    return(
        <div className="setting">
        <h2 className="main-title">settings</h2>
        <div className="container">
            <div className="box box-1">
                    <h3>site the control</h3>
                    <p>control the website if there is maintenence</p>
                    <div className="flex-1">
                        <div className="text" style={{flexBasis: "75%"}}>
                            <h4>website control</h4>
                            <p>open/close website and type the reason</p>
                        </div>
                            <label className="test">
                                <input type="checkbox" />
                                <div className="switch-icon"></div>
                            </label>
                    </div>
                        <textarea rows="10" placeholder="Close Message Content"></textarea>
                </div>
                <div className="box box-2">
                    <h3>general info</h3>
                    <p>general information aboyt your acount</p>
                    <div className="form">
                        <label>first name</label>
                        <input type="text" placeholder="Frist Name" />
                        <label>last name</label>
                        <input type="text" placeholder="Last Name" />
                        <div className="flex-1">
                            <div className="email">
                                <label>email</label>
                                <input type="email" value="Hazem333@.com" disabled />
                            </div>
                            <span>change</span>
                        </div>
                    </div>
                </div>
                <div className="box box-3">
                    <h3>security info</h3>
                    <p>security information about your acount</p>
                    <div className="flex-1">
                        <div className="text">
                            <h4>password</h4>
                            <p>last change on 1/1/2022</p>
                        </div>
                        <span>change</span>
                    </div>
                    <div className="flex-1">
                        <div className="text">
                            <h4>two-factor authentication</h4>
                            <p>last change on 1/1/2022</p>
                        </div>
                        <label className="test">
                            <input type="checkbox" />
                            <div className="switch-icon"></div>
                        </label>
                    </div>
                    <div className="flex-1">
                        <div className="text">
                            <h4>devices</h4>
                            <p>check the login devices list</p>
                        </div>
                        <span style={{backgroundColor: '#ddd', color: "#000"}}>devices</span>
                    </div>
                </div>
                <div className="box box-4">
                    <h3>social info</h3>
                    <p>socila media info</p>
                    <ul>
                        <li>
                            <i className="fa-brands fa-twitter fa-2x"></i>
                            <span>twitter username</span>
                        </li>
                        <li>
                            <i className="fa-brands fa-facebook-f fa-2x"></i>      
                            <span>facebook username</span>
                        </li>
                        <li>
                            <i className="fa-brands fa-youtube fa-2x"></i>     
                            <span>youtube username</span>
                        </li>
                        <li>
                            <i className="fa-brands fa-linkedin fa-2x"></i>  
                            <span>linkedin username</span>
                        </li>
                    </ul>
                </div>
                <div className="box box-5">
                    <h3>widgets cotrols</h3>
                    <p>hide/show widgets</p>
                    <div className="form">
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <label>quick drafts</label>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <label>yearly targets</label>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <label>tickets statistics</label>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <label>latest news</label>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <label>latest tasks</label>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <label>top search items</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box box-6">
                    <h3>backup manager</h3>
                    <p>control backub data and location</p>
                    <div className="form">
                        <ul>
                            <li>
                                <input type="radio" />
                                <label>daily</label>
                            </li>
                            <li>
                                <input type="radio" />
                                <label>weekily</label>
                            </li>
                            <li>
                                <input type="radio" />
                                <label>monthly</label>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex-1" style={{gap: "10px"}}>
                        <li>
                            <i className="fa-solid fa-bars-progress"></i>
                            <span>megaman</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-bars-progress"></i>
                            <span>zero</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-bars-progress"></i>
                            <span>segma</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Settings