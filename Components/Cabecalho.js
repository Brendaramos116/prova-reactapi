import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Animes</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/animes/">Animes</Nav.Link>
                        <Nav.Link href="/generos/">Genêros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho