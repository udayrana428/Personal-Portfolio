import React,{useEffect, useRef, useState, useContext} from 'react'
import "../assets/styles/pageStyles/home.css"
import Navbar from "../components/Navbar"
import AdminDropdown from '../components/AdminDropdown';
import ToggleNavbar from '../components/ToggleNavbar';
import MyContext from '../ContextApi/globalContext';
import Profile from "../assets/images/profile3.png"



const Home = () => {
    const { selectedProject, setSelectedProject, setShowCreateModal, setShowDeleteModal, setShowUpdateModal, showCreateModal, showDeleteModal, showUpdateModal, fetchProjects, openCreateModal, projects, } = useContext(MyContext)
    useEffect(()=>{
        const fetchData = async () => {
            try {
              await fetchProjects();
            } catch (error) {
              console.error("Error fetching projects:", error);
            }
          };
      
          fetchData();
    },[])
    return (
        <>
            <main className="home-main">
                <ToggleNavbar/>
                <AdminDropdown/>
                <Navbar/>
                <div className="side-wall"></div>
                <div className="home-main-container">
                    <div className="profile-container">
                        <img src={Profile} alt="eergfeger" srcSet="" />
                    </div>
                    <div className="profile-detail-container">
                        <div className="detail-header" >I'M UDAY RANA.<br/>
                            <div className="role">Full Stack Web Developer</div></div>
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