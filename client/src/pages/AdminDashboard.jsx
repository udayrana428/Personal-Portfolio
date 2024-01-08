// DashboardPage.js
import React, { useState, useEffect, useContext } from 'react';
import "../assets/styles/pageStyles/admindashboard.css"
import Navbar from '../components/Navbar';
import AdminProjectCard from '../components/AdminProjectCard';
import AdminDropdown from '../components/AdminDropdown';
import MyContext from '../ContextApi/globalContext';
import CreateProjectModal from '../components/Modals/CreateProjectModal';


const DashboardPage = () => {
  const [projects, setProjects] = useState([]);

  const { selectedProject, setSelectedProject, setShowCreateModal, setShowDeleteModal, setShowUpdateModal, showCreateModal, showDeleteModal, showUpdateModal, fetchProjects, openCreateModal } = useContext(MyContext)


  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className="admin-main">
        <AdminDropdown />
        <Navbar />
        <div className="admin-main-container">
          <div className="admin-header-container">
            <div className="transp-sec">
              DASHBOARD
            </div>
            <div className="head">
              AD<span>MIN</span>
            </div>
          </div>
          <button type="button" className='create-project-btn' onClick={() => openCreateModal()}>
            New Project
            <i class="fa fa-plus"></i>
          </button>


          <div className="projects-container">
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
          </div>

          {showCreateModal && (
            <CreateProjectModal onClose={() => setShowCreateModal(false)} />
          )}

          {/* {showUpdateModal && (
            <Modal onClose={() => setShowUpdateModal(false)}>
            </Modal>
          )}

          {showDeleteModal && (
            <Modal onClose={() => setShowDeleteModal(false)}>
              <p>Are you sure you want to delete the project?</p>
              <button onClick={handleDeleteProject}>Yes</button>
              <button onClick={() => setShowDeleteModal(false)}>No</button>
            </Modal>
          )} */}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
