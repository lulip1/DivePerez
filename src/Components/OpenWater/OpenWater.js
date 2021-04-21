import React from 'react'
import { Button, Item, ItemDescription } from 'semantic-ui-react'
import Contador from '../../Components/Contador/Contador';
import buzoisla from '../../Components/Imagenes/buzoisla.jpg'



const OpenWater = () => (
    <Item.Group relaxed>
        <Item>
            <Item.Image size='medium' className="imagen" src={buzoisla} />

            <Item.Content verticalAlign='middle'>
                <Item.Header>Curso de PADI Open Water </Item.Header>
                <Item.Description> En el curso PADI Open Water Diver, aprenderás a utilizar el equipo básico de buceo, incluyendo una máscara, tubo, aletas, regulador, dispositivo de control de la flotabilidad y una botella. El equipo que llevarás varía,
             dependiendo de si vas a bucear en aguas tropicales, templadas o en aguas frías. </Item.Description>
                <Item.Description>
                    Requisitos:
            <ul>
                        <li>10 años o más</li>
                        <li>Capaz de nadar</li>
                        <li>Médicamente apto para el buceo</li>
                        <li>Compromiso de tiempo: Aproximadamente 8-15 horas</li>
                    </ul>
                </Item.Description>
                <ItemDescription>
                    Precio: $12.000
                </ItemDescription>


                <Item.Extra>
                    <Button floated='right'>Agregar</Button>
                    <Contador />
                </Item.Extra>
            </Item.Content>
        </Item>


    </Item.Group>
)

export default OpenWater