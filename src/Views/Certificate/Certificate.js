import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import OpenWater from '../../Components/OpenWater/OpenWater'
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
    <OpenWater />





        </div>

        
    )
}

export default Certificate
