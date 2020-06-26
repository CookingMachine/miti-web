import * as React from 'react';
import { Row, Col } from 'reactstrap';

interface Props {
    
}

const Header = ({}: Props) => {
    return (
       <Row className="header">
            <Col md={4}>
                <div className="logo">
                    <p>
                        Here will logo!
                    </p>
                </div>
            </Col>
            <Col md={4}>
            </Col>
            <Col md={4}>
                <div className="headerLinks">
                    <a href="" className="mapLink">  {/* TODO u use link instead of teg 'a' */}
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