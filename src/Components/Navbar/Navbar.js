import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import './Navbar.css'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Dive Source</Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto estilo">
                            <Nav.Link href="#link">Inicio</Nav.Link>
                            <NavDropdown title="Cursos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Open Water</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Adavanced Open Water</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rescue Diver</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Explorá</Nav.Link>
                            <Nav.Link href="#link">Conservación</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}