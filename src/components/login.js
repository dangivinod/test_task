import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector } from "react-redux";

import { Form, Button, Row, Col, Container } from 'react-bootstrap';

class LoginView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false
		}
	}

	handleSubmit = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.stopPropagation();
		}
		this.setState({
			validated: true
		})
		if(form.checkValidity()){
			let { login } = this.props;
			debugger
		}
	};

	render() {
		console.log(">>>>>>>>>>>>>> ", this.props)
		return (
			<Container>
				<Row>
					<Col></Col>
					<Col xs={5}>
						<h3>
							Login View
					</h3>
						<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Username</Form.Label>
								<Form.Control required type="text" name="username" placeholder="Enter username"
									onChange={(e) => this.setState({[e.target.name]: e.target.value})}
								/>
								<Form.Text className="text-muted">
									We'll never share your username with anyone else.
						</Form.Text>
								<Form.Control.Feedback type="invalid">
									Please provide username.
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control required type="password"
									name="password"
									onChange={(e) => this.setState({[e.target.name]: e.target.value})}
									placeholder="Enter Password" 
								/>
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
}

const mapStateToProps = state => ({
	login: state.LoginReducer.login
})


export default connect(mapStateToProps, null)(LoginView);
