import React, { Component } from 'react'
import './ItemDetail.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Imagendosbuzos from '../Imagenes/dosbuzos.jpg'
import Imagenisla2 from '../Imagenes/isla2.jpg'
import Imagenpez2 from '../Imagenes/pez2.jpg'


export default class ItemDetail extends Component {
    render() {
        return (
            <div className="cursos">
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src= {Imagenisla2} />
                    <Card.Body>
                        <Card.Title>Explorá</Card.Title>
                        <Card.Text>
                        Atrevete a conocer el mundo submarino. ¡Hay miles de destinos esperándore! ¡No te pierdas de esta oportunidad! 
                        </Card.Text>
                        <Button variant="primary">Ver</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src= {Imagenpez2} />
                    <Card.Body>
                        <Card.Title>Conservación</Card.Title>
                        <Card.Text>
                        La visión de PADI es alcanzar un equilibrio entre los seres humanos y los océanos. Te invitamos a conocer como podes aportar.
                        </Card.Text>
                        <Button variant="primary">Ver</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src= {Imagendosbuzos} />
                    <Card.Body>
                        <Card.Title>Certificate</Card.Title>
                        <Card.Text>
                        Encontrá el curso que se adapte a tu nivel. Desde principiantes hasta nivel profesional. ¿Qué estás esperando?
                        </Card.Text>
                        <Button variant="primary">Ver</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
