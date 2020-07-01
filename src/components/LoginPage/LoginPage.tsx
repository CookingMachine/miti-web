import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";

interface Props {

}

const LoginPage = ({}: any) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

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
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage;