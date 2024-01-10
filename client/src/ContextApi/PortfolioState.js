import React, { useState } from "react"
import GlobalContext from "./globalContext";
import axios from 'axios';



const PortfolioState = (props) => {


    // For Modals
    // All states 
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [yourAccessToken, setyourAccessToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTliMDExNjEzYjE4YTEwYjg4NWZmOGIiLCJpYXQiOjE3MDQ2NjE4MDN9._Qoy5EiqJ3SrRGoLy7ChqVla6AMcuY5aB8ZxlitvkJc')

    // All Functions
    const openCreateModal = () => {
        console.log("updating showCreateModal")
        setShowCreateModal(true);
        console.log("updated showCreateModal")
    };

    const openUpdateModal = (project) => {
        setSelectedProject(project);
        setShowUpdateModal(true);
    };

    const openDeleteModal = (project) => {
        setSelectedProject(project);
        setShowDeleteModal(true);
    };

    const fetchProjects = async () => {
        try {
          const response = await axios.get('https://silly-moccasins-dove.cyclic.app/projects/fetchAllProjects');
          console.log("fetched data")
          console.log("setting projects")
          // console.log(response)
          setProjects(response.data);
          // console.log(projects)

        } catch (error) {
          console.error('Error fetching projects:', error.response ? error.response.data : error.message);
        }
      };
    
      const handleUpdateProject = async (updatedProjectData) => {
        try {
          await axios.put(`http://localhost:3001/projects/updateProject/${selectedProject._id}`, updatedProjectData);
          fetchProjects();
          setShowUpdateModal(false);
        } catch (error) {
          console.error('Error updating project:', error.response ? error.response.data : error.message);
        }
      };
    
      const handleDeleteProject = async () => {
        try {
          await axios.delete(`http://localhost:3001/projects/deleteProject/${selectedProject._id}`);
          fetchProjects();
          setShowDeleteModal(false);
        } catch (error) {
          console.error('Error deleting project:', error.response ? error.response.data : error.message);
        }
      };

    return (
        <GlobalContext.Provider value={{ selectedProject,setSelectedProject,setShowCreateModal, setShowDeleteModal, setShowUpdateModal,showCreateModal, showDeleteModal, showUpdateModal ,openCreateModal, openDeleteModal, openUpdateModal, fetchProjects, projects, setProjects, yourAccessToken
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default PortfolioState