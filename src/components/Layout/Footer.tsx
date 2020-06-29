import * as React from 'react';
import { Row, Col } from 'reactstrap';
import logo from './logo.png';

interface Props {
    
}

const Footer = ({}: Props) => {
    return (
    <div className="footer-box">
       <Row className="footer">
           <Col md={4}>
           <img src={logo}/>
           </Col>
           <Col md={4}>

           </Col>
           <Col md={4}>
          
           </Col>
       </Row>
    </div>
    )
}

export default Footer;