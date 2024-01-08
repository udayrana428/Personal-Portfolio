import React from 'react'
import "../assets/styles/pageStyles/login.css"
import AdminDropdown from '../components/AdminDropdown'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <main className="login-main">
                <AdminDropdown />
                <Navbar />
                <div className="login-main-container">
                    <section className="container forms">
                        {/* Login form */}
                        <div className="form login">
                            <div className="form-content">
                                <header className='login-header'>Login</header>
                                <form action="#">
                                    <div className="field input-field">
                                        <input type="email" placeholder="Email" className="input" />
                                    </div>
                                    <div className="field input-field">
                                        <input type="password" placeholder="Password" className="password" />
                                        <i className='bx bx-hide eye-icon'></i>
                                    </div>
                                    <div className="form-link">
                                        <a href="#" className="forgot-pass">Forgot password?</a>
                                    </div>
                                    <div className="field button-field">
                                        <button>Login</button>
                                    </div>
                                </form>
                                <div className="form-link">
                                    <span>Don't have an account? <Link to='/signup' className="link signup-link">Signup</Link></span>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="media-options">
                                <a href="#" className="field facebook">
                                    <i className='bx bxl-facebook facebook-icon'></i>
                                    <span>Login with Facebook</span>
                                </a>
                            </div>
                            <div className="media-options">
                                <a href="#" className="field google">
                                    <img src="#" alt="" className="google-img" />
                                    <span>Login with Google</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Login