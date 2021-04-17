import React, { Component } from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel'
import ImagenPortada1 from '../Imagenes/portada2.jpg'
import ImagenPortada2 from '../Imagenes/equipobuceo.jpg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImagenPortada1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Conocenos</h3>
              <p>Descubri el fantastico mundo submarino</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImagenPortada2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Certificate</h3>
              <p>Realiza los cursos PADI</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
