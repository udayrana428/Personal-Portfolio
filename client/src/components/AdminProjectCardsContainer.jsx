import React,{useState,useContext, useEffect} from 'react'
import MyContext from '../ContextApi/globalContext';
import AdminProjectCard from './AdminProjectCard';

const AdminProjectCardsContainer = () => {
    const { projects, fetchProjects } = useContext(MyContext)
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
            {projects && projects.map((e) => {
                return <AdminProjectCard key={e._id} title={e.title}/>;
            })}
        </>
    )
}

export default AdminProjectCardsContainer