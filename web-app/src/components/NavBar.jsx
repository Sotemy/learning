import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'


export const NavBar = () => {

    let content = (<p>1</p>);

    if (!localStorage.getItem("token")) {
        content = (<>
        <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
        </LinkContainer></>)
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">

                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    {content}

                </Nav>
            </Container>
        </Navbar>
    )
}
