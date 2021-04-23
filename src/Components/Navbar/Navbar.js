import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import './Navbar.css'
import Shop from '../Imagenes/shopping.png'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Dive Source</Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto estilo">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <NavDropdown title="Certificate" id="basic-nav-dropdown">
                                <NavDropdown.Item href="Certificate/openwater">Open Water</NavDropdown.Item>
                                <NavDropdown.Item href="Certificate/advanced">Adavanced Open Water</NavDropdown.Item>
                                <NavDropdown.Item href="Certificate/rescue">Rescue Diver</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/Cursos">Cursos</Nav.Link>
                            <Nav.Link href="/Explora">Explorá</Nav.Link>
                            <Nav.Link href="/Conservacion">Conservación</Nav.Link>
                            <Nav.Link href="/Contacto">Contacto</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                            <img src={Shop} className="shop"/>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
               

            </div>
        )
    }
}