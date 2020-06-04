import React from "react";
import { Form, Button } from "react-bootstrap";
import * as firebase from "firebase";

class SignIn extends React.Component {
  state = {
    user: "",
    pass: "",
  };

  handleUser = (e) => {
    this.setState({ user: e.target.value });
  };

  handlePass = (e) => {
    this.setState({ pass: e.target.value });
  };

  postUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.user, this.state.pass)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  render() {
    return (
      <>
        <h1 style={{ marginLeft: 50, marginTop: 15 }}>
          Vamos a crear una cuenta nueva:
        </h1>
        <Form style={{ marginLeft: 50, marginRight: 500, paddingTop: 20 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduce tu correo"
              onChange={this.handleUser}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introduce tu contraseña"
              onChange={this.handlePass}
            />
          </Form.Group>
          <Button variant="success" onClick={this.postUser}>
            Registrarse
          </Button>
        </Form>
      </>
    );
  }
}

export default SignIn;
