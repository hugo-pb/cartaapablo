import React from "react";
import "../styles/Intro.css";
import {Row, Col, Container} from 'react-bootstrap';
import Jim from "../images/jimmy.png";
export default function Intro() {
return (<div className="Intro">
    
    <Container>
    <Row>
    <Col>
<p>El motivo de esta carta es que me gustaria felicitarte por el 
    exelente trabajo que haces en el departamento de audio y video. 
     </p>

</Col>
<Col>
<img src={Jim} alt="jimmy" /> 
</Col>

</Row>
</Container>
</div>

);

}



