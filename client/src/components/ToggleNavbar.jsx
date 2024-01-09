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
                    <i class="fa fa-bars"></i>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Dropdown.ItemText></Dropdown.ItemText>
                        <Link to='/'>
                            <Dropdown.Item as="button">Home</Dropdown.Item>
                        </Link>
                        <Link to='/about'>
                            <Dropdown.Item as="button">About</Dropdown.Item>
                        </Link>
                        <Link to='/works'>
                            <Dropdown.Item as="button">Works</Dropdown.Item>
                        </Link>
                        <Link to='/contact'>
                            <Dropdown.Item as="button">Contact</Dropdown.Item>
                        </Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default ToggleNavbar