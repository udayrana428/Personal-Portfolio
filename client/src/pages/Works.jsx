import React, { useEffect } from 'react'
import "../assets/styles/pageStyles/works.css"
import Navbar from '../components/Navbar'
import { useState, useContext } from 'react'
import AdminDropdown from '../components/AdminDropdown'
import ToggleNavbar from '../components/ToggleNavbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyContext from '../ContextApi/globalContext'

const Works = () => {
    const { projects, fetchProjects } = useContext(MyContext)
    const [allProjects, setallProjects] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
              await fetchProjects();
            } catch (error) {
              console.error("Error fetching projects:", error);
            }
          };
      
          fetchData();
    }, [])

    return (
        <>
            <main className="works-main">
                <ToggleNavbar />
                <AdminDropdown />
                <Navbar />
                <div className="works-main-container">
                    <div className="works-header-container">
                        <div className="transp-sec">
                            WORKS
                        </div>
                        <div className="head">
                            MY <span>PORTFOLIO</span>
                        </div>
                    </div>
                    <section className="portfolio-container">
                        {projects && projects.map((e) => {
                            console.log("i am uday")
                            return (<Card className='project-card'>
                                <Card.Img variant="top" src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg" style={{ width: "100%" }} />
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title'>{e.title}</Card.Title>
                                    <div className="buttons-container">
                                        <i className="fa fa-eye" ></i>
                                    </div>
                                </Card.Body>
                            </Card>);
                        })}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Works