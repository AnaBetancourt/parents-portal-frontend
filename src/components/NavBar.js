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
                    <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/meetups'>Meetups</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/forum'>Forum</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}