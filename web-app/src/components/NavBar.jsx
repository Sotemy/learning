import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'


export const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">

                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    {localStorage.getItem("token") === false ? (        
                    <><LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer><LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer></>):(
                        <LinkContainer to="/">
                            <Nav.Link>User</Nav.Link>
                        </LinkContainer>
                    )}

                </Nav>
            </Container>
        </Navbar>
    )
}
