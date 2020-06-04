import React from "react";
import { Form, Button } from "react-bootstrap";
import * as firebase from "firebase";

class Delete extends React.Component {
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
    var user = firebase.auth().currentUser;
    user
      .delete()
      .then(function () {
        return <h1>El usuario ha sido borrado</h1>;
      })
      .catch(function (error) {
        return <h1>Ha ocurrido un error. Intenta de nuevo por favor</h1>;
      });
  };

  render() {
    return (
      <>
        <h1 style={{ marginLeft: 50, marginTop: 15 }}>
          ¿Deseas borrar tu cuenta?
        </h1>
        <Form style={{ marginLeft: 50, marginRight: 500, paddingTop: 20 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario:</Form.Label>
            <Form.Control
              type="number"
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
          <Button variant="danger" onClick={this.handleClick}>
            Eliminar
          </Button>

          <Form.Text className="text-danger">
            Una vez borrada tu cuenta no podrá recuperarse.
          </Form.Text>
        </Form>
      </>
    );
  }
}

export default Delete;
