import React,{useEffect, useRef, useState} from 'react'
import "../assets/styles/pageStyles/home.css"
import Navbar from "../components/Navbar"
import { gsap, Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
import AdminDropdown from '../components/AdminDropdown';


const Home = () => {

    const [detailHeader, setdetailHeader] = useState("I'M UDAY RANA.")
    // gsap
    let t1=new gsap.timeline()
     let ease=Power3.easeOut()  
    let header=useRef(null);

    useEffect(()=>{
        t1.from(header.children,1,{
            opacity: 1,
            y:"100",
            skewY:10,
            stagger:{
                amount: .4
            }
        },"-=1")    
    })
    return (
        <>
            <main className="home-main">
                <AdminDropdown/>
                <Navbar/>
                <div className="side-wall"></div>
                <div className="home-main-container">
                    <div className="profile-container">
                        <img src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/img-mobile.jpg" alt="" srcSet="" />
                    </div>
                    <div className="profile-detail-container">
                        <div className="detail-header" ref={el=>header=el}>I'M UDAY RANA.<br/>
                           <span>Full Stack Web Developer</span></div>
                        <div className="detail-content">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. </div>
                        <div className="button-container">
                            <button type="button" className="more-about-btn">More About Me <i class="fa fa-angle-right btns"></i></button>
                            <button type="button" className="download-resume-btn"><a href="https://docs.google.com/document/d/1Pd4_w20nrLHMqeaAvx-bMSxZj1dvbg4kr4CU1Pot1s0/edit?usp=drive_link" target='_blank'>Download cv <i class="fa fa-download btns"></i></a></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home