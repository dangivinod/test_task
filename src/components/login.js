import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector } from "react-redux";

import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const LoginView = () => {
	const [validated, setValidated] = useState(false);

	const login = useSelector(state => state);


	const handleSubmit = event => {
		const form = event.currentTarget;
		debugger
    if (form.checkValidity() === false) {
      event.preventDefault();	
      event.stopPropagation();
    }

    setValidated(true);
  };


	return(
		<Container>
			<Row>
			<Col></Col>
			<Col xs={5}>
				<h3>
					Login View
				</h3>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control required type="email" placeholder="Enter username" />
					<Form.Text className="text-muted">
						We'll never share your username with anyone else.
					</Form.Text>
					<Form.Control.Feedback type="invalid">
            Please provide username.
          </Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control required type="password" placeholder="Password" />
					<Form.Control.Feedback type="invalid">
            Please provide password.
          </Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			</Col>
			<Col></Col>
			</Row>
		</Container>
	)
}

const mapStateToProps = state => ({
		login: state.LoginReducer
})


export default LoginView;
