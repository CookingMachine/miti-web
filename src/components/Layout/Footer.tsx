import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

interface Props {
    
}

const Footer = ({}: Props) => {
    return (
    <div className="footer">
       <Container>
           <Row>
                <Link className="logo" to="/">Make·It·Taste·It</Link>
           </Row>
       </Container>
    </div>
    )
}

export default Footer;