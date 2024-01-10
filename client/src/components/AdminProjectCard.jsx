import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyContext from '../ContextApi/globalContext';


const AdminProjectCard = (props) => {
    const {openCreateModal}=useContext(MyContext)
    const {title}=props
    return (
        <>
        
            <Card className='admin-project-card'>
                <Card.Img variant="top" src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg" style={{width: "100%"}}/>
                <Card.Body>
                    <Card.Title className='admin-card-title'>{title}</Card.Title>
                    <div className="buttons-container">
                        <i className="fa fa-eye" onClick={()=>openCreateModal()}></i>
                        <i className="fa fa-pen"></i>
                        <i className="fa fa-trash"></i>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default AdminProjectCard