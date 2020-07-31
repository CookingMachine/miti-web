import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";
import urls from "urls";

interface Props extends RouteComponentProps {

}

const LoginPage = ({history}: Props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // FIXME Call api
        history.push(urls.adminHome);
    }

    return (
        <div className='login-page'>
            <div>
                <Form>
                    <FormGroup row>
                        <Label md={2} for='login'>Login</Label>
                        <Col md={10}>
                            <Input id='login' value={login} onChange={(e) => setLogin(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} for='password'>Password</Label>
                        <Col md={10}>
                            <Input id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default withRouter(LoginPage);