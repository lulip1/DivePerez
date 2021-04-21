import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './Certificate.css'

function Certificate() {
    return (
        <div>
            <Jumbotron fluid>
    <Container>
    <h1>Aprendé de la mano de los mejores Instructores</h1>
    <p>
    Empezá tu certificación de buceo con PADI Open Water Diver o encontrá el curso que se adapte a vos
    </p>
    </Container>
    </Jumbotron>


    <Card className="item" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Curso Open Water</Card.Title>
    <Card.Text>
    Curso inicial de buceo. Con este certificado podrás sumergirte hasta 18 metros. 2 sesiones en pileta y 4 buceos en aguas abiertas.
    </Card.Text>
    <Card.Text>
    Costo: $12.000
    </Card.Text>
    <Card.Link href="#">Calendario</Card.Link>
    <Card.Link href="#">Comprar</Card.Link>
  </Card.Body>
</Card>


        </div>

        
    )
}

export default Certificate
