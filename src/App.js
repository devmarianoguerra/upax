import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import LogIn from "./components/login";
import SignIn from "./components/signin";
import Delete from "./components/delete";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/delete" component={Delete} />
      </Router>
    </>
  );
}

export default App;
