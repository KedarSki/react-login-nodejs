import React from "react";
import {Form,Button,ButtonGroup} from "react-bootstrap";
import "./EmailForm.css";

const EmailForm = () => {
    return (
        <Form className="form">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <ButtonGroup aria-label="Basic example">
                <Button variant="primary" className={'signIn'}>Sign In</Button>
                <Button variant="primary" className={'signUp'}>Sign Up</Button>
            </ButtonGroup>
        </Form>
        );

};

export default EmailForm;