import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container, Input } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import ModalAuth from 'components/Layout/ModalAuth';

interface Props {
    
}

const Header = ({}: Props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    <Col xs={3}>
                        <Link className="logo" to="/">Make·It·Taste·It</Link>
                    </Col>
                    <Col xs={4}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                   <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.76055 1.76056C0.625242 2.89587 0 4.40533 0 6.01087C0 7.61641 0.625242 9.12587 1.76055 10.2612C2.89584 11.3964 4.4053 12.0217 6.01081 12.0217C7.47871 12.0217 8.86607 11.4988 9.96084 10.5415L13.2991 13.8797C13.4594 14.0401 13.7194 14.0401 13.8797 13.8797C13.9599 13.7996 14 13.6945 14 13.5894C14 13.4844 13.9599 13.3793 13.8797 13.2991L10.5415 9.96089C11.4987 8.86613 12.0217 7.47876 12.0217 6.01087C12.0217 4.4053 11.3964 2.8959 10.2611 1.76059C9.12584 0.625301 7.61638 5.98431e-05 6.01084 5.98431e-05C4.4053 5.98431e-05 2.89584 0.625274 1.76055 1.76056ZM9.68048 2.34123C11.7039 4.36469 11.7039 7.65702 9.68048 9.68048C7.65704 11.7039 4.36466 11.7039 2.34123 9.68048C1.3294 8.66865 0.823648 7.33997 0.823648 6.01084C0.823648 4.68205 1.32964 3.35281 2.34123 2.3412C4.36464 0.317821 7.65702 0.317821 9.68048 2.34123Z" fill="#9A9A9A"/>
                                    </svg> 
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input className="searchInput" placeholder="Введите название блюда или ингредиента "/>
                        </InputGroup>
                    </Col>
                    <Col xs={2}>
                        <div className="buttonsAuth">
                            <Link to="/login">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 5.83333L6.33333 7L8.5 9.16667H0V10.8333H8.5L6.33333 13L7.5 14.1667L11.6667 10L7.5 5.83333ZM15 15.8333H8.33333V17.5H15C15.9167 17.5 16.6667 16.75 16.6667 15.8333V4.16667C16.6667 3.25 15.9167 2.5 15 2.5H8.33333V4.16667H15V15.8333Z" fill="#E92222"/>
                                </svg>  Вход</Link>
                            <span> / </span>
                            <Link to="#">Регистрация</Link>
                        </div>
                    </Col>
                    <Col xs="auto">
                        <Button className="button" color="primary">Добавить рецепт</Button>
                    </Col>  
                </Row>
            </Container>
         </div>
    )
}

export default Header;