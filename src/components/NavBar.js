import React from 'react' 
import {Navbar, Nav} from 'react-bootstrap'


export default function NavBar(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand >Parents Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/meetups'>Meetups</Nav.Link>
                    <Nav.Link href='/forum'>Forum</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}