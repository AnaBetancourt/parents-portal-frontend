import React from 'react' 
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


export default function NavBar(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand >Parents Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/meetups'>Meetups</Nav.Link>
                    <Nav.Link as={NavLink} to='/forum'>Forum</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}