import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Table, Container, Row, Col } from 'react-bootstrap';

class EmployeeList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        let { users } = this.props;
        return(
            <Container>
                <Row>
                <h3>User List :</h3>
					<Col></Col>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                            </tr>
                        })}
                    </tbody>
                    </Table>
                    <Col></Col>
                    <Link to="/" >
                        Log-out
                    </Link>
                </Row>
            </Container>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        users: state.DashboardReducer.users
    }
}

export default withRouter(connect(mapStatetoProps)(EmployeeList));
