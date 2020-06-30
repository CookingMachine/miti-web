import * as React from 'react';
import { Row, Col } from 'reactstrap';
import logo from './logo.png';

interface Props {
    
}

const Header = ({}: Props) => {
    return (
       <Row className="header">
            <Col md={4}>
            <a href="/"> <img src={logo}/></a>
            </Col>
            <Col md={4}>
            </Col>
            <Col md={4}>
                <div className="headerLinks">
                    <a href="" className="mapLink">  {/* TODO u use link instead of teg 'a' MAKE IT TODAY */}
                        Карта сайта
                    </a>
                    <a href="" className="feddbackLink">
                        Обратная связь
                    </a>
                </div>
            </Col>           
       </Row>
    )
}

export default Header;