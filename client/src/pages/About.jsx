import React from 'react'
import "../assets/styles/pageStyles/about.css"
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
            <main className="about-main">
                <Navbar />
                <div className="about-main-container">
                    <div className="about-header-container">
                        <div className="transp-sec">
                            RESUME
                        </div>
                        <div className="head">
                            ABOUT <span>ME</span>
                        </div>
                    </div>
                    <section className="personal-info-container">
                        <div className="personal-info-left">
                            <div className="info-head sub-heading">PERSONAL INFOS</div>
                            <div className="info-container">
                                <div className="info-key-value">
                                    <div className="info-key">First Name:</div>
                                    <div className="info-value">Uday</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Last Name:</div>
                                    <div className="info-value">Rana</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Age:</div>
                                    <div className="info-value">22</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Nationality:</div>
                                    <div className="info-value">Indian</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Freelance:</div>
                                    <div className="info-value">Available</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Language:</div>
                                    <div className="info-value">English, Hindi</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Address:</div>
                                    <div className="info-value">Mangalmurthi square, Nagpur 440016, Maharashtra</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Phone:</div>
                                    <div className="info-value">+9834183296</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Email:</div>
                                    <div className="info-value">udayrana428@gmail.com</div>
                                </div>
                                <div className="info-key-value">
                                    <div className="info-key">Linkedin:</div>
                                    <div className="info-value">linkedin.com/in/uday-rana-678879193</div>
                                </div>
                            </div>
                            <button type="button" className="download-btn">
                                Download cv
                            </button>
                        </div>
                        <div className="personal-info-right">
                            <div class="count-container">
                                <h1>12+</h1>
                                <h2>YEARS OF</h2>
                                <h2>EXPERIENCE</h2>
                            </div>
                            <div class="count-container">
                                <h1>12+</h1>
                                <h2>YEARS OF</h2>
                                <h2>EXPERIENCE</h2>
                            </div>
                            <div class="count-container">
                                <h1>12+</h1>
                                <h2>YEARS OF</h2>
                                <h2>EXPERIENCE</h2>
                            </div>
                            <div class="count-container">
                                <h1>12+</h1>
                                <h2>YEARS OF</h2>
                                <h2>EXPERIENCE</h2>
                            </div>
                        </div>
                    </section>
                    <hr className="dash-line" />
                    <div className="skills-head sub-heading">My Skills</div>
                    <section className="skills-container">
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                        <div className="skill-box">
                            <div class="radialProgressBar progress-10">
                                <div class="overlay">10</div>
                            </div>
                            <div className="skill-name">
                                HTML
                            </div>
                        </div>
                    </section>
                    <hr className="dash-line" />
                    <div className="exp-edu-head sub-heading">Experience & Education</div>
                    <section className="exp-edu-container">
                        <div className="exp-container">
                            <div className="exp-box">
                                <i class="fa fa-code edu-exp-logo" />

                                <div className="time-period">
                                    2020 - present
                                </div>
                                <div className="role">Web developer -<span className="company"> Amazon</span></div>
                                <p className="job-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, necessitatibus!</p>
                            </div>
                            <div className="exp-box">
                                <i class="fa fa-code edu-exp-logo" />

                                <div className="time-period">
                                    2020 - present
                                </div>
                                <div className="role">Web developer -<span className="company"> Amazon</span></div>
                                <p className="job-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, necessitatibus!</p>
                            </div>
                            <div className="exp-box">
                                <i class="fa fa-code edu-exp-logo" />

                                <div className="time-period">
                                    2020 - present
                                </div>
                                <div className="role">Web developer -<span className="company"> Amazon</span></div>
                                <p className="job-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, necessitatibus!</p>
                            </div>
                        </div>
                        <div className="edu-container">
                            <div className="edu-box">
                                <i class="fa fa-graduation-cap edu-exp-logo"></i>

                                <div className="time-period">
                                    2020 - present
                                </div>
                                <div className="course">MCA -<span className="college"> RCOEM</span></div>
                                <p className="edu-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, necessitatibus!</p>
                            </div>
                            <div className="edu-box">
                                <i class="fa fa-graduation-cap edu-exp-logo"></i>

                                <div className="time-period">
                                    2020 - present
                                </div>
                                <div className="course">MCA -<span className="college"> RCOEM</span></div>
                                <p className="edu-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, necessitatibus!</p>
                            </div>
                            <div className="edu-box">
                                <i class="fa fa-graduation-cap edu-exp-logo"></i>

                                <div className="time-period">
                                    2020 - present
                                </div>
                                <div className="course">MCA -<span className="college"> RCOEM</span></div>
                                <p className="edu-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, necessitatibus!</p>
                            </div>
                            
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}

export default About