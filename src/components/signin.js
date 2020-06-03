import React from "react";
import { Form, Button } from "react-bootstrap";

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

  handleClick = () => {
    console.log("Se hizo click");
  };

  render() {
    return (
      <>
        <h1 style={{ marginLeft: 50, marginTop: 15 }}>
          Vamos a crear una cuenta nueva:
        </h1>
        <Form style={{ marginLeft: 50, marginRight: 500, paddingTop: 20 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="number"
              placeholder="Introduce tu número de usuario"
              onChange={this.handleUser}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introduce tu contraseña"
              onChange={this.handlePass}
            />
          </Form.Group>
          <Button variant="success" onClick={this.handleClick}>
            Registrarse
          </Button>
        </Form>
      </>
    );
  }
}

export default SignIn;
