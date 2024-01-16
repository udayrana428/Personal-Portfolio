import React, { useContext, useEffect } from 'react'
import ImageCarousels from '../components/ImageCarousels'
import "../assets/styles/pageStyles/projectpage.css"
import MyContext from '../ContextApi/globalContext'
import ToggleNavbar from '../components/ToggleNavbar'
import Navbar from '../components/Navbar'

const ProjectPage = () => {
    const { singleProject,showLoader, setshowLoader } = useContext(MyContext)
    useEffect(() => {
        setshowLoader(false)
        console.log(singleProject)
    }, [])


    return (
        <>
            <div className="projectpage-main">
                <Navbar />
                <ToggleNavbar />
                <div className="projectpage-main-container">

                    <ImageCarousels singleProject={singleProject}/>
                    <div className="details-container">
                        <h2 className="project-title">{singleProject.title}</h2>
                        <ul>
                            <li className="key">Type :<span className="value">{singleProject.type}</span></li>
                            <li className="key">Client :<span className="value">{singleProject.client}</span></li>
                            <li className="key">Languages :<span className="value">{singleProject.languages}</span></li>
                            <li className="key">Project Repo :<span className="value"><a href={singleProject.projectLink} target='_blank'>{singleProject.projectLink}</a></span></li>
                            <li className="key">Demo Url :<span className="value"><a href={singleProject.demoLink} target='_blank'>{singleProject.demoLink}</a></span></li>
                            <li className="key">Description :<span className="value">{singleProject.description}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage