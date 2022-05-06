import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavbarMenu = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#!">
                    Dinamic <b>Form</b>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as:
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer"> Vanessa Sanchez</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarMenu