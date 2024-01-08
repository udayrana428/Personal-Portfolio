import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../assets/styles/componentStyles/admindropdown.css"
import { Link } from 'react-router-dom';

const AdminDropdown = () => {
    return (
        <>
            <div className="admindropdown-container">
                <DropdownButton id="dropdown-item-button"
                    className='drop-btn-toggle'
                    title="Admin">
                    <Dropdown.ItemText>Admin Profile</Dropdown.ItemText>
                    <Link to='/'>
                        <Dropdown.Item as="button">Home</Dropdown.Item>
                    </Link>
                    <Link to='/admindashboard'>
                        <Dropdown.Item as="button">Dashboard</Dropdown.Item>
                    </Link>
                    <Link to='/signup'>
                        <Dropdown.Item as="button">Sign Up</Dropdown.Item>
                    </Link>
                    <Link to='/login'>
                        <Dropdown.Item as="button">Login</Dropdown.Item>
                    </Link>
                    <Dropdown.Item as="button">Logout</Dropdown.Item>
                </DropdownButton>
            </div>
        </>
    )
}

export default AdminDropdown