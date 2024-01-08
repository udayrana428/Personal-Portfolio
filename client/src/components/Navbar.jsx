import { React, useContext } from 'react'
import globalContext from "../ContextApi/globalContext.js";
import "../assets/styles/componentStyles/navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const context = useContext(globalContext)
    const { value } = context
    return (
        <>
            {/* <!-- Header Starts --> */}
            <header className="header-container ">
                <div className="menu-container">
                    <ul id="primary-menu" className="menu-list-container">
                        <li id="menu-item-264" className="menu-item home-menu active">
                            <Link to="/" aria-current="page">
                                <span>Home</span>
                                <i className="_mi _before fa fa-home" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item about-menu active">
                            <Link to="/about" aria-current="page">
                                <span>About</span>
                                <i className="_mi _before fa fa-user" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item works-menu
                            active">
                            <Link to="/works" aria-current="page">
                                <span>Works</span>
                                <i className="_mi _before fa fa-briefcase" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item contact-menu active">
                            <Link to="/contact" aria-current="page">
                                <span>Contact</span>
                                <i className="_mi _before fa fa-envelope" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item blog-menu active">
                            <Link to="/" aria-current="page">
                                <span>Blog</span>
                                <i className="_mi _before fa fa-weixin" aria-hidden="true"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            {/* <!-- Header Ends --> */}
        </>
    )
}

export default Navbar