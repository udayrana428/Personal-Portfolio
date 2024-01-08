import React, { useState } from "react"
import GlobalContext from "./globalContext";
import axios from 'axios';



const PortfolioState = (props) => {
    const [value, newValue] = useState("uday")


    // For Modals
    // All states 
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

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
          const response = await axios.get('http://localhost:3001/projects');
          setProjects(response.data);
        } catch (error) {
          console.error('Error fetching projects:', error.response ? error.response.data : error.message);
        }
      };

    const handleCreateProject = async (newProjectData) => {
        try {
          await axios.post('http://localhost:3001/projects', newProjectData);
          fetchProjects();
          setShowCreateModal(false);
        } catch (error) {
          console.error('Error creating project:', error.response ? error.response.data : error.message);
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
        <GlobalContext.Provider value={{ selectedProject,setSelectedProject,setShowCreateModal, setShowDeleteModal, setShowUpdateModal,showCreateModal, showDeleteModal, showUpdateModal ,openCreateModal, openDeleteModal, openUpdateModal, handleCreateProject, fetchProjects
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default PortfolioState