import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import * as firebase from "firebase";
import { AlertLink } from "react-bootstrap/Alert";

class LogIn extends React.Component {
  state = {
    user: "",
    pass: "",
    loggedIn: false,
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
    this.setState({ loggedIn: true });
    console.log("logged?: ", this.state.loggedIn);
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

  resetPass = () => {
    const auth = firebase.auth();
    const { user } = this.state;

    auth
      .sendPasswordResetEmail(user)
      .then(function () {
        return <h3>Correo enviado</h3>;
      })
      .catch(function (error) {
        return <h3>Ha ocurrido un error</h3>;
      });
  };

  render() {
    let { loggedIn } = this.state;

    return (
      <>
        <h1 style={{ marginLeft: 50, marginTop: 15 }}>Ingresa a tu portal</h1>
        <Form style={{ marginLeft: 50, marginRight: 500, paddingTop: 20 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario:</Form.Label>
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
            <Form.Label>Contraseña:</Form.Label>
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
        <div style={{ marginLeft: 50, marginTop: 15 }}>
          <Alert.Link onClick={this.resetPass}>
            ¿Olvidaste tu contraseña?
          </Alert.Link>
        </div>
        <div style={{ marginLeft: 50, marginTop: 15 }}>
          <span>{loggedIn ? "Ya" : "No"}</span> estás conectado.
          <h4 style={{ marginTop: 10 }}>
            {loggedIn ? "Que gusto tenerte de vuelta." : ""}
          </h4>
        </div>
      </>
    );
  }
}

export default LogIn;
