import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../assets/styles/componentStyles/togglenavbar.css"
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const ToggleNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="togglenavbar-container">
                <Button variant="primary" onClick={handleShow}>
                    <i className="fa fa-bars"></i>
                </Button>

                <Offcanvas className="to-nav-offcanvas" show={show} onHide={handleClose}>
                    <Offcanvas.Header className='close-btn' closeButton>
                        <Offcanvas.Title>Portfolio</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='offcanvas-body'>
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to='/about'>
                            About
                        </Link>
                        <Link to='/works'>
                            Works
                        </Link>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default ToggleNavbar