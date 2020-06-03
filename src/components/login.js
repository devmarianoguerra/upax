import React from "react";
import { Form, Button } from "react-bootstrap";

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

  handleClick = () => {
    console.log("Se hizo click");
  };

  render() {
    return (
      <>
        <h1 style={{ marginLeft: 50, marginTop: 15 }}>Ingresa a tu portal</h1>
        <Form style={{ marginLeft: 50, marginRight: 500, paddingTop: 20 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="number"
              placeholder="Introduce tu número de usuario"
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
          <Button variant="primary" onClick={this.handleClick}>
            {/*type:submit*/}
            Entrar
          </Button>
        </Form>
      </>
    );
  }
}

export default LogIn;
