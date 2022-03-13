import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Ball from '../images/ball.png'

export default function Mensaje(){
   return( <div className="Mensaje">
        
        <h1>
           Just Keep Swimming!
        </h1>

<Container>
    <Row style={{
        display:"flex",
        allignCotent: 'center',
        justifyContent: 'center',
    }}>
        <Col>
        <img src= {Ball} style={{height:'100px',
    marginTop: "6rem"}}/>
        </Col>
        <Col>
        <p style={{marginTop: "6rem"}}> Tienes un 
        gran potencial, y ahora que estas creciendo 
        tendras mas y mas responsabilidades. </p>
        </Col>
    </Row>

</Container>







        
        
        </div>);
}