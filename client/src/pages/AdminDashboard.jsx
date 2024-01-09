// DashboardPage.js
import React, { useState, useEffect, useContext } from 'react';
import "../assets/styles/pageStyles/admindashboard.css"
import Navbar from '../components/Navbar';
import AdminProjectCard from '../components/AdminProjectCard';
import AdminDropdown from '../components/AdminDropdown';
import MyContext from '../ContextApi/globalContext';
import CreateProjectModal from '../components/Modals/CreateProjectModal';
import ToggleNavbar from '../components/ToggleNavbar';


const DashboardPage = () => {

  const { selectedProject, setSelectedProject, setShowCreateModal, setShowDeleteModal, setShowUpdateModal, showCreateModal, showDeleteModal, showUpdateModal, fetchProjects, openCreateModal, projects } = useContext(MyContext)
  const [allProjects, setallProjects] = useState(null)


  // Fetch projects on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProjects();
        setallProjects(projects); // Assuming response.data is an array
        console.log(allProjects)
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, [allProjects]);


  // console.log(projects)

  return (
    <>
      {console.log(projects)}
      <div className="admin-main">
        <ToggleNavbar/>
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
            {allProjects && allProjects.map((e) => {
              console.log("i am uday")
              return <AdminProjectCard key={e.id} />;
            })}

            {/* <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard />
            <AdminProjectCard /> */}
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
