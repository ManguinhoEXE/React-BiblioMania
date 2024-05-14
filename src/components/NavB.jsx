import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

const NavB = () => {
    return (
        <Navbar bg='dark' data-bs-theme="dark" expand="lg" className="bg-body-tertiary dark navb">
            <Container fluid style={{ paddingInline: "2%" }} className='container-nav-item'>
                <Navbar.Brand style={{ color: "#ebb24d" }} className='navText' href="#home">BiblioMania</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link style={{ color: "#ebb24d" }} to="/" className='seccion navText'>Inico</Link>
                        <Link style={{ color: "#ebb24d" }} to="/QuienesSomos" className='seccion navText'>Quienes Somos</Link>
                        <Link style={{ color: "#ebb24d" }} to="/Mensaje" className='seccion navText'>Mensaje</Link>
                        <Link style={{ color: "#ebb24d" }} to="/Prestamo" className='seccion navText'>Prestamo</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavB