import React from "react";
import { Form, Button } from "react-bootstrap";
import * as firebase from "firebase";

class LogIn extends React.Component {
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

  userAccess = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.user, this.state.pass)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  authState = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        console.log("No hay usuarios activos");
      }
    });
  };

  render() {
    return (
      <>
        <h1 style={{ marginLeft: 50, marginTop: 15 }}>Ingresa a tu portal</h1>
        <Form style={{ marginLeft: 50, marginRight: 500, paddingTop: 20 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduce tu correo"
              onChange={this.handleUser}
            />
            <Form.Text className="text-muted">
              Recuerda nunca compartir tu cuenta con alguien más.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introduce tu contraseña"
              onChange={this.handlePass}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.userAccess}>
            Entrar
          </Button>
        </Form>
        <div>{this.authState()}</div>
      </>
    );
  }
}

export default LogIn;
