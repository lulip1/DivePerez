import React, { Component } from 'react'
import './ItemDetail.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Imagenchica from '../Imagenes/chica.jpg'
import Imagendosbuzos from '../Imagenes/dosbuzos.jpg'
import Imagenrescue from '../Imagenes/rescue.jpg'



export default class ItemDetail extends Component {
    render() {
        return (
            <div className="cursos">
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src= {Imagendosbuzos} />
                    <Card.Body>
                        <Card.Title>Open Water</Card.Title>
                        <Card.Text>
                        Curso inicial de buceo. Con este certificado podrás sumergirte hasta 18 metros.
                        </Card.Text>
                        <Card.Text>
                        Precio: $1500
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src= {Imagenchica} />
                    <Card.Body>
                        <Card.Title>Advanced Open Water</Card.Title>
                        <Card.Text>
                        Seguí mejorando tus habilidades con este certificado. Podrás sumergirte hasta 30 metros.
                        </Card.Text>
                        <Card.Text>
                        Precio: $2500
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src= {Imagenrescue} />
                    <Card.Body>
                        <Card.Title>Rescue Diver</Card.Title>
                        <Card.Text>
                        Aprende las habilidades para enfrentarte a emergencias de buceo.
                        </Card.Text>
                        <Card.Text>
                        Precio: $3000
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
