import test from "../images/testimonials.png"
import work from "../images/work-steps.png"
import image from "../images/images.jfif"
import rocket from "../images/rocket.jpg"
import pdf from "../images/pdf.png"
import Table from "./Table"

function Dashboard() {
    return(
        <div className="dash">
        <h2 className="main-title">Dashboard</h2>
        <div className="container">
                <div className="box box-one" style={{padding: "0"}}>
                    <div className="image">
                        <div className="title">
                            <h3>welcome</h3>
                            <span>elzero</span>
                        </div>
                        <div className="holder">
                            <img src={work} alt="" />
                        </div>
                    </div>
                    <img src={test} alt="" />
                    <div className="data">
                        <div className="text">
                            <div className="one">
                                <p>osama elzero</p>
                                <span>developer</span>
                            </div>
                            <div className="two">
                                <p>80</p>
                                <span>projects</span>
                            </div>
                            <div className="three">
                                <p>$5800</p>
                                <span>earned</span>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <span className="btn">profile</span>
                    </div>
                </div>
                <div className="box-two box">
                    <h3 style={{marginBottom: "0"}}>quik draft</h3>
                    <p>write a draft for your idea</p>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Your Thougt" rows="15"></textarea>
                    <div className="button" style={{padding: 0, margin: 0}}>
                        <span className="btn">save</span>
                    </div>
                </div>
                <div className="box-three box">
                    <h3>yearly target</h3>
                    <p>targets of the year with progress</p>
                    <div className="prog">
                        <div className="icon">
                            <i className="fa-solid fa-dollar-sign"></i>
                        </div>
                        <div className="value">
                            <p>money</p>
                            <span>$20.000</span>
                            <div className="the" data-size="40%">
                                <span style={{width: "40%"}}></span>
                            </div>
                        </div>
                    </div>
                    <div className="prog-one">
                        <div className="icon">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <div className="value">
                            <p>projects</p>
                            <span>24</span>
                            <div className="the" data-size="55%">
                                <span style={{width: "55%"}}></span>
                            </div>
                        </div>
                    </div>
                    <div className="prog-two">
                        <div className="icon">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="value">
                            <p>team</p>
                            <span>12</span>
                            <div className="the" data-size="75%">
                                <span style={{width: "75%"}}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box box-four">
                    <h3>tickets statistecs</h3>
                    <p>evrey thing about support tickets</p>
                    <div className="state">
                        <div className="card">
                            <i className="fa-regular fa-credit-card fa-2x" style={{color: "#ff9800"}}></i>
                            <span>2500</span>
                            <p>total</p>
                        </div>
                        <div className="card">
                            <i className="fa-solid fa-spinner fa-2x" style={{color: '#2196f3'}}></i>
                            <span>500</span>
                            <p>pending</p>
                        </div>
                        <div className="card">
                            <i className="fa-regular fa-circle-check fa-2x" style={{color: "#009688"}}></i>
                            <span>1900</span>
                            <p>closed</p>
                        </div>
                        <div className="card">
                            <i className="fa-regular fa-circle-xmark fa-2x" style={{color: "#ff5722"}}></i>
                            <span>100</span>
                            <p>deleted</p>
                        </div>
                    </div>
                </div>
                <div className="box box-five">
                    <h3>latest news</h3>
                    <div className="content">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <div className="text">
                            <h4>created sass section</h4>
                            <p>new sass exampels & tutorials</p>
                            <span>3 days ago</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <div className="text">
                            <h4>created sass section</h4>
                            <p>new sass exampels & tutorials</p>
                            <span>3 days ago</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <div className="text">
                            <h4>created sass section</h4>
                            <p>new sass exampels & tutorials</p>
                            <span>3 days ago</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <div className="text">
                            <h4>created sass section</h4>
                            <p>new sass exampels & tutorials</p>
                            <span>3 days ago</span>
                        </div>
                    </div>
                </div>
                <div className="box box-six">
                    <h3>latest tasks</h3>
                    <div className="content flex-1">
                        <div className="text">
                            <h4>record new video</h4>
                            <p>record paython create exe project</p>
                        </div>
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                    <div className="content flex-1">
                        <div className="text">
                            <h4>record new video</h4>
                            <p>record paython create exe project</p>
                        </div>
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                    <div className="content flex-1">
                        <div className="text">
                            <h4>record new video</h4>
                            <p>record paython create exe project</p>
                        </div>
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                    <div className="content flex-1">
                        <div className="text">
                            <h4>record new video</h4>
                            <p>record paython create exe project</p>
                        </div>
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div className="box box-seven">
                    <h3>top search items</h3>
                    <div className="text flex-1">
                        <h5>keyword</h5>
                        <h5>search count</h5>
                    </div>            
                    <div className="text flex-1">
                        <p>programing</p>
                        <span>220</span>
                    </div>
                    <div className="text flex-1">
                        <p>javascript</p>
                        <span>180</span>
                    </div>
                    <div className="text flex-1">
                        <p>php</p>
                        <span>160</span>
                    </div>
                    <div className="text flex-1">
                        <p>code</p>
                        <span>145</span>
                    </div>
                    <div className="text flex-1">
                        <p>design</p>
                        <span>110</span>
                    </div>
                    <div className="text flex-1">
                        <p>logic</p>
                        <span>95</span>
                    </div>
                </div>
                <div className="box box-twe">
                    <h3>latest news</h3>
                    <div className="content">
                        <div className="image">
                            <img src={pdf} alt="" />
                        </div>
                        <div className="text" style={{marginLeft: "0"}}>
                            <h4>my-pdf-file.pdf</h4>
                            <p>elzero</p>
                            <span>2.9mb</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={pdf} alt="" />
                        </div>
                        <div className="text" style={{marginLeft: "0"}}>
                            <h4>my-pdf-file.pdf</h4>
                            <p>elzero</p>
                            <span>2.9mb</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={pdf} alt="" />
                        </div>
                        <div className="text" style={{marginLeft: "0"}}>
                            <h4>my-pdf-file.pdf</h4>
                            <p>elzero</p>
                            <span>2.9mb</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={pdf} alt="" />
                        </div>
                        <div className="text" style={{marginLeft: "0"}}>
                            <h4>my-pdf-file.pdf</h4>
                            <p>elzero</p>
                            <span>2.9mb</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={pdf} alt="" />
                        </div>
                        <div className="text" style={{marginLeft: "0"}}>
                            <h4>my-pdf-file.pdf</h4>
                            <p>elzero</p>
                            <span>2.9mb</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={pdf} alt="" />
                        </div>
                        <div className="text" style={{marginLeft: "0"}}>
                            <h4>my-pdf-file.pdf</h4>
                            <p>elzero</p>
                            <span>2.9mb</span>
                        </div>
                    </div>
                </div>
                <div className="box box-eight">
                    <h3>current progects progress</h3>
                    <div className="content">
                        <ul>
                            <li>got the project</li>
                            <li>started the project</li>
                            <li>the project about to finish</li>
                            <li>test the project</li>
                            <li>finish the project & get the money</li>
                        </ul>
                    </div>
                    <img src={rocket} alt="" />
                </div>
                <div className="box box-nine">
                    <h3>reminders</h3>
                    <ul>
                        <li style={{borderColor: "#2196f3"}} className="a">
                            <p>check my tasks list</p>
                            <span>28/9/2022 - 12:00am</span>
                        </li>
                        <li style={{borderColor: "#009688"}} className="b">
                            <p>check my projects list</p>
                            <span>28/9/2022 - 12:00am</span>
                        </li>
                        <li style={{borderColor: "#ff9800"}} className="c">
                            <p>call all my clients</p>
                            <span>28/9/2022 - 12:00am</span>
                        </li>
                        <li style={{borderColor: "#ff5722"}} className="d">
                            <p>finish the development workshop</p>
                            <span>28/9/2022 - 12:00am</span>
                        </li>
                    </ul>
                </div>
                <div className="box box-ten">
                    <h3>latest post</h3>
                    <div className="content">
                        <div className="user">
                            <img src={test} alt="" />
                            <div className="text">
                                <p>osama elzero</p>
                                <span>about 3 hours ago</span>
                            </div>
                        </div>
                        <div className="post">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptatem nulla reprehenderit atque
                            , distinctio, corrupti nihil voluptates incidunt fugit provident ut nemo quam minima molestiae sed aliquid assumenda repellendus obcaecati?</p>
                        </div>
                        <div className="icon">
                            <span>
                                <i className="fa-regular fa-heart"></i>
                                1.8k
                            </span>
                            <span>
                                <i className="fa-regular fa-comments"></i>
                                550
                            </span>
                        </div>
                    </div>
                </div>
                <div className="box box-ele">
                    <h3>social media stats</h3>
                    <ul>
                        <li style={{backgroundColor: "#1da0f28a"}}>
                            <div className="icon" style={{color: "#1da0f28a"}}>
                                <i className="fa-brands fa-twitter fa-2x" style={{backgroundColor: "#1da1f2"}}></i>
                                90K followers
                            </div>
                            <span style={{backgroundColor: "#1da1f2"}}>follow</span> 
                        </li>
                        <li style={{backgroundColor: "#1876f28a"}}>
                            <div className="icon" style={{color: "#1876f28a"}}>
                                <i className="fa-brands fa-facebook-f fa-2x" style={{backgroundColor: "#1877f2"}}></i>        
                                2M like
                            </div>
                            <span style={{backgroundColor: "#1877f2"}}>like</span>
                        </li>
                        <li style={{backgroundColor: "#ff00008a"}}>
                            <div className="icon" style={{color: "#ff00008a"}}>
                                <i className="fa-brands fa-youtube fa-2x" style={{backgroundColor: "#ff0000"}}></i>     
                                1M subs
                            </div>
                            <span style={{backgroundColor: '#ff0000'}}>subscripe</span>
                        </li>
                        <li style={{backgroundColor: "#2195f38a"}}>
                            <div className="icon" style={{color: "#2196f38a"}}>
                                <i className="fa-brands fa-linkedin fa-2x" style={{backgroundColor: "#2196f3"}}></i>  
                                70K followers
                            </div>
                            <span style={{backgroundColor: "#2196f3"}}>follow</span>
                        </li>
                    </ul>
                </div>
        </div>
        <Table />
    </div>
    )
}

export default Dashboard