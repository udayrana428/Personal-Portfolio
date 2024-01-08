import React from 'react'
import Navbar from '../components/Navbar'
import "../assets/styles/pageStyles/contact.css"
import AdminDropdown from '../components/AdminDropdown'

const Contact = () => {
    return (
        <>
            <main className="contact-main">
                <AdminDropdown/>
                <Navbar />
                <div className="contact-main-container">
                    <div className="contact-header-container">
                        <div className="transp-sec">
                            CONTACT
                        </div>
                        <div className="head">
                            GET IN <span>TOUCH</span>
                        </div>
                    </div>
                    <section className="contact-container">
                        <div className="contact-info-container">
                            <div className="sub-heading">
                                DON'T BE SHY!
                            </div>
                            <p className="contact-para">
                                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className="mail-container">
                                <i class="fas fa-envelope-open"></i>
                                <div className="">
                                    <span class="d-block">Mail me</span><br /><a href="">udayrana428@gmail.com </a>
                                </div>
                            </div>
                            <div className="mail-container">
                                <i class="fas fa-phone-square"></i>
                                <div className="">
                                    <span class="d-block">Call me</span><br /><a href="">+919834183296</a>
                                </div>
                            </div>
                            <div className="social-media-container">
                                <a title="facebook" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a title="Twitter" href="#"><i class="fab fa-twitter"></i></a>
                                <a title="Twitter" href="#"><i class="fab fa-twitter"></i></a>
                                <a title="Twitter" href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <form action="" className="contact-form">
                                <input type="text" name="name" id="" placeholder='Yourname'/>
                                <input type="email" name="email" id="" placeholder='Your email'/>
                                <input type="text" name="subject" id="" placeholder='Subject'/>
                                <textarea placeholder='Your message'></textarea>
                                <button type="submit">SEND MESSAGE<i class="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Contact